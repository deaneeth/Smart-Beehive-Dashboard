# Honey Management Website

A web-based dashboard for monitoring and managing beehive data, including:
- Bee activity tracking
- Honey production monitoring
- Environmental conditions (temperature, humidity, pressure)
- System status monitoring
- Real-time location tracking

## Features
- Real-time data monitoring
- Interactive dashboard
- System status notifications
- Environmental monitoring
- GPS location tracking
- Battery and power management

## Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file with your Firebase configuration:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_DATABASE_URL=your_database_url
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Technologies Used
- Next.js
- React
- Firebase Realtime Database
- Firebase Analytics
- Leaflet Maps
- React Gauge Charts

## IoT Hardware

This dashboard works with the [Smart Beehive Monitoring System](https://github.com/deaneeth/Smart-Beehive-Monitor-System) hardware.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
