# Smart Beehive Management Dashboard

> Web interface for monitoring beehive data collected by the Smart Beehive Monitoring System.

<p align="center">
  <img src="assets/dashboard-preview.png" alt="Dashboard Preview" width="800">
</p>

## Features

- Real-time beehive data visualization
- Historical data analysis
- Bee activity trends
- Weight monitoring charts
- Temperature and humidity tracking
- Predator alert notifications

## Technologies Used

- React
- Firebase Realtime Database
- Firebase Analytics
- Leaflet Maps
- React Gauge Charts

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn
- Firebase account

### Installation

## 1. Clone the repository

```
git clone https://github.com/deaneeth/Smart-Beehive-Monitor-System-Dashboard
cd Smart-Beehive-Monitor-System-Dashboard
```

## 2. IoT Hardware

This dashboard works with the [Smart Beehive Monitoring System](https://github.com/deaneeth/Smart-Beehive-Monitor-System) hardware.

## 3. Install dependencies

```
npm install
# or
yarn install
```

## 4. Set up environment variables

```
cp .env.example .env.local
```

## 5. Update 

```
.env.local
```
 with your Firebase configuration values

## 6. Run the development server

```
npm run dev
# or
yarn dev
```

## 7. Integration with IoT Hardware

- This dashboard is designed to work with the Smart Beehive Monitoring System hardware. More on here [DASHBOARD PREVIEW.md](DASHBOARD-PREVIEW.md)

- See INTEGRATION.md for details on how to connect the dashboard to your beehive monitoring hardware.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


> This approach will give you a clean, professional organization for both components of your project while making it clear they're part of the same overall system.
