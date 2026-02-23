# QR Code Generator

## Description
A simple Node.js backend service that generates QR codes from text input. The service accepts text via a POST request and returns a QR code image in SVG format.

## Features
- Generate QR codes from text input
- High error correction level for better QR code quality
- Returns QR code as a data URL (SVG format)
- Simple REST API with CORS enabled

## Tech Stack
- **Backend:** Node.js, Express.js
- **QR Code Generation:** qrcode npm package
- **Middleware:** CORS

## How to Use
1. Install dependencies:
   ```
   npm install
   ```
2. Start the server:
   ```
   node index.js
   ```
3. Send a POST request to `http://localhost:3500/generate` with JSON body:
   ```json
   {
     "text": "Your text here"
   }
   ```
4. The response will be a data URL containing the QR code image.

## Installation
- Requires Node.js and npm installed.
- Run `npm install` to install dependencies.

## Notes
- The server listens on port 3500.
- Ensure CORS is enabled for cross-origin requests.
