import { faker } from '@faker-js/faker';
import { polishLocations, venueTypes, features } from './constants.js';

export const generateVenue = (id) => {
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

export const generateVenueDetails = (venue, detailsId) => {
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
