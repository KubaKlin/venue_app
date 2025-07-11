# Fake Backend with JSON Server

This project includes a fake backend using `json-server` with realistic venue data generated using Faker.js.

## 📊 Data Structure

### Venues Endpoint: `/venues`

Basic venue information with the following structure:

```json
{
  "id": 1,
  "location": {
    "postalCode": "81-001",
    "name": "sopot"
  },
  "pricePerNightInEUR": 27.85,
  "rating": 3.9,
  "capacity": 5,
  "name": "rustic barn",
  "albumId": 96
}
```

### Venue Details Endpoint: `/venuesDetails`

Detailed venue information linked to venues via `venueId`:

```json
{
  "id": 53452,
  "venueId": 1,
  "location": {
    "postalCode": "81-001",
    "name": "sopot"
  },
  "pricePerNightInEUR": 27.85,
  "rating": 3.9,
  "numberOfReviews": 278,
  "capacity": 5,
  "name": "rustic barn",
  "albumId": 96,
  "description": "rustic barn is a perfect getaway located in sopot...",
  "features": ["TV", "game room", "library", "WiFi"],
  "sleapingDetails": {
    "maxCapacity": 5,
    "amoutOfBeds": 3
  },
  "checkInHour": "10am",
  "checkOutHour": "12pm",
  "distanceFromCityCenterInKM": 1,
  "contactDetails": {
    "phone": "(416) 214-1706",
    "email": "rustic_barn@substantial-sonar.net"
  }
}
```

## 🚀 Getting Started

### 1. Generate New Data (Optional)

To generate fresh fake data:

```bash
npm run generate-data
```

### 2. Start the Backend Server

```bash
npm run server
```

The server will start on `http://localhost:3999`

### 3. Start Frontend + Backend Together

```bash
npm run dev
```

This runs both the json-server backend and the Vite frontend development server concurrently.

## 📡 API Endpoints

Once the server is running, you can access:

- **All venues**: `GET http://localhost:3999/venues`
- **Single venue**: `GET http://localhost:3999/venues/{id}`
- **All venue details**: `GET http://localhost:3999/venuesDetails`
- **Single venue detail**: `GET http://localhost:3999/venuesDetails/{id}`
- **Venue details by venue ID**: `GET http://localhost:3999/venuesDetails?venueId={venueId}`

### Example Queries

```bash
# Get all venues
curl http://localhost:3999/venues

# Get venue with ID 1
curl http://localhost:3999/venues/1

# Get details for venue with ID 1
curl http://localhost:3999/venuesDetails?venueId=1

# Get venues with specific location
curl http://localhost:3999/venues?location.name=kraków

# Get venues with rating above 4.5
curl http://localhost:3999/venues?rating_gte=4.5

# Get venues with price below 50 EUR
curl http://localhost:3999/venues?pricePerNightInEUR_lte=50
```

## 🏗️ Data Relationship

- Each `venue` has a unique `id` (1-100)
- Each `venueDetail` has a unique `id` (random 5-digit number)
- The relationship is: `venuesDetails.venueId = venues.id`
- To get details for a specific venue, query: `/venuesDetails?venueId={venue.id}`

## 🔧 JSON Server Features

JSON Server provides additional functionality:

- **Filtering**: `?field=value`
- **Sorting**: `?_sort=field&_order=asc/desc`
- **Pagination**: `?_page=1&_limit=10`
- **Full-text search**: `?q=searchterm`
- **Relationships**: Automatically handles nested queries

For more advanced usage, see the [JSON Server documentation](https://github.com/typicode/json-server).
