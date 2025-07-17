# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. 
Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Fake Backend with JSON Server

This project includes a fake backend using `json-server` with realistic venue data generated using Faker.js.

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

## 📡 API Endpoints

Once the server is running, you can access:

- **All venues**: `GET http://localhost:3999/venues`
- **Single venue**: `GET http://localhost:3999/venues/{id}`
- **All venue details**: `GET http://localhost:3999/venuesDetails`
- **Single venue detail**: `GET http://localhost:3999/venuesDetails/{id}`
- **Venue details by venue ID**: `GET http://localhost:3999/venuesDetails?venueId={venueId}`
