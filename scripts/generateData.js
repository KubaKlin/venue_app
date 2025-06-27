import { faker } from '@faker-js/faker';
import fs from 'fs';
import path from 'path';

const VENUE_COUNT = 100;

const polishLocations = [
  { name: 'warszawa', postalCode: '00-001' },
  { name: 'kraków', postalCode: '30-001' },
  { name: 'gdańsk', postalCode: '80-001' },
  { name: 'wrocław', postalCode: '50-001' },
  { name: 'poznań', postalCode: '60-001' },
  { name: 'łódź', postalCode: '90-001' },
  { name: 'katowice', postalCode: '40-001' },
  { name: 'szczecin', postalCode: '70-001' },
  { name: 'bydgoszcz', postalCode: '85-001' },
  { name: 'lublin', postalCode: '20-001' },
  { name: 'białystok', postalCode: '15-001' },
  { name: 'ustrzyki dolne', postalCode: '38-700' },
  { name: 'zakopane', postalCode: '34-500' },
  { name: 'sopot', postalCode: '81-001' },
  { name: 'kielce', postalCode: '25-001' },
  { name: 'toruń', postalCode: '87-100' },
  { name: 'radom', postalCode: '26-600' },
  { name: 'rzeszów', postalCode: '35-001' },
  { name: 'płock', postalCode: '09-400' },
  { name: 'ełk', postalCode: '19-300' },
];

const venueTypes = [
  'cozy cabin',
  'mountain lodge',
  'lakeside cottage',
  'forest retreat',
  'countryside villa',
  'enchanted hut',
  'rustic barn',
  'treehouse',
  'glamping tent',
  'tiny house',
  'stone cottage',
  'wooden chalet',
  'eco lodge',
  'boutique hideaway',
  'vintage cabin',
  'modern retreat',
  'traditional manor',
  'minimalist lodge',
  'artistic studio',
  'wellness center',
];

const features = [
  'kitchen facilities',
  'bathroom facilities',
  'fireplace',
  'hypoallergic bedding',
  'speakers',
  'TV',
  'WiFi',
  'pet friendly',
  'parking',
  'lake and mountains nearby',
  'air conditioning',
  'heating',
  'washing machine',
  'dishwasher',
  'microwave',
  'coffee machine',
  'balcony',
  'terrace',
  'garden',
  'barbecue',
  'hot tub',
  'sauna',
  'gym',
  'pool',
  'bike rental',
  'kayak rental',
  'hiking trails',
  'ski storage',
  'game room',
  'library',
  'workspace',
  'printer',
  'safe',
];

const generateVenue = (id) => {
  const location = faker.helpers.arrayElement(polishLocations);
  const venueType = faker.helpers.arrayElement(venueTypes);
  const price = faker.number.float({ min: 15, max: 150, fractionDigits: 2 });
  const rating = faker.number.float({ min: 3.5, max: 5.0, fractionDigits: 1 });
  const capacity = faker.number.int({ min: 2, max: 12 });

  return {
    id,
    location: {
      postalCode: location.postalCode,
      name: location.name,
    },
    pricePerNightInEUR: price,
    rating,
    capacity,
    name: venueType,
    albumId: faker.number.int({ min: 1, max: 100 }),
  };
};

const generateVenueDetails = (venue, detailsId) => {
  const selectedFeatures = faker.helpers.arrayElements(features, {
    min: 5,
    max: 15,
  });
  const maxCapacity = venue.capacity + faker.number.int({ min: 0, max: 4 });
  const amountOfBeds = Math.ceil(maxCapacity / 2);

  const checkInHours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm'];
  const checkOutHours = ['9am', '10am', '11am', '12pm'];

  const descriptions = [
    `${venue.name} is a perfect getaway located in ${venue.location.name}. This charming accommodation offers a peaceful retreat surrounded by natural beauty. Whether you're looking for adventure or relaxation, this venue provides the ideal base for your stay.`,
    `Discover the magic of ${venue.name} nestled in the heart of ${venue.location.name}. This beautifully appointed property combines comfort with authentic local character, making it perfect for those seeking a unique and memorable experience.`,
    `Experience tranquility at ${venue.name}, thoughtfully designed to provide guests with exceptional comfort in ${venue.location.name}. The property features modern amenities while maintaining its distinctive charm and connection to the local environment.`,
    `${venue.name} offers an unforgettable stay in the picturesque setting of ${venue.location.name}. This carefully curated space provides all the comforts you need while allowing you to immerse yourself in the natural beauty of the surrounding area.`,
    `Welcome to ${venue.name}, a hidden gem in ${venue.location.name} that perfectly balances rustic charm with modern convenience. This property is ideal for travelers who appreciate attention to detail and authentic experiences.`,
  ];

  return {
    id: detailsId,
    venueId: venue.id,
    location: venue.location,
    pricePerNightInEUR: venue.pricePerNightInEUR,
    rating: venue.rating,
    numberOfReviews: faker.number.int({ min: 10, max: 500 }),
    capacity: venue.capacity,
    name: venue.name,
    albumId: venue.albumId,
    description: faker.helpers.arrayElement(descriptions),
    features: selectedFeatures,
    sleapingDetails: {
      maxCapacity,
      amoutOfBeds: amountOfBeds,
    },
    checkInHour: faker.helpers.arrayElement(checkInHours),
    checkOutHour: faker.helpers.arrayElement(checkOutHours),
    distanceFromCityCenterInKM: faker.number.int({ min: 1, max: 50 }),
    contactDetails: {
      phone: faker.phone.number('### ### ###'),
      email: `${venue.name.replace(/\s+/g, '_').toLowerCase()}@${faker.internet.domainName()}`,
    },
  };
};

const generateData = () => {
  console.log('🏠 Generating venue data...');

  const venues = [];
  const venuesDetails = [];

  for (let i = 1; i <= VENUE_COUNT; i++) {
    const venue = generateVenue(i);
    venues.push(venue);

    // Generate a unique ID for venue details (different from venue ID)
    const detailsId = faker.number.int({ min: 10000, max: 99999 });
    const venueDetail = generateVenueDetails(venue, detailsId);
    venuesDetails.push(venueDetail);

    if (i % 10 === 0) {
      console.log(`✅ Generated ${i}/${VENUE_COUNT} venues`);
    }
  }

  const data = {
    venues,
    venuesDetails,
  };

  // scripts directory
  const scriptsDir = path.dirname(new URL(import.meta.url).pathname);
  const projectRoot = path.resolve(scriptsDir, '..');
  const dbPath = path.join(projectRoot, 'db.json');

  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

  console.log(
    `Successfully generated ${VENUE_COUNT} venues and ${VENUE_COUNT} venue details!`,
  );
};

// Run the data generation
generateData();
