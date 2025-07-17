import { faker } from '@faker-js/faker';
import fs from 'fs';
import path from 'path';
import { generateVenue, generateVenueDetails } from './generators.js';

const VENUE_COUNT = 100;

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
