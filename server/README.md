# Portfolio Backend API

This is the backend API for the portfolio contact form, built with Node.js, Express, and MongoDB.

## Features

- ✅ Contact form submission with MongoDB storage
- ✅ Input validation and sanitization
- ✅ Rate limiting (5 requests per 15 minutes per IP)
- ✅ CORS configuration for frontend integration
- ✅ Security headers with Helmet
- ✅ Error handling and logging
- ✅ Health check endpoint

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Environment Configuration

Create a `.env` file in the server directory:

```bash
cp env.example .env
```

Edit the `.env` file with your MongoDB connection string:

```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
NODE_ENV=development
```

### 3. MongoDB Setup

#### Option A: MongoDB Atlas (Recommended for Production)

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free cluster
3. Get your connection string
4. Replace the MONGODB_URI in your .env file

#### Option B: Local MongoDB

1. Install MongoDB locally
2. Use: `MONGODB_URI=mongodb://localhost:27017/portfolio`

### 4. Run the Server

#### Development

```bash
npm run dev
```

#### Production

```bash
npm start
```

## API Endpoints

### POST /api/contact

Submit a contact form message

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to discuss a project."
}
```

**Response:**

```json
{
  "success": true,
  "message": "Message sent successfully! I'll get back to you soon.",
  "data": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### GET /api/contact

Get all contact submissions (for admin purposes)

### GET /api/health

Health check endpoint

## Frontend Integration

Update your frontend Contact component to use the API:

```typescript
const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://your-backend-url.vercel.app/api/contact"
    : "http://localhost:5000/api/contact";
```

## Deployment

### Vercel Deployment

1. Create a new Vercel project
2. Set environment variables in Vercel dashboard
3. Deploy the server directory

### Environment Variables for Production

- `MONGODB_URI`: Your MongoDB connection string
- `NODE_ENV`: Set to "production"
- `PORT`: Vercel will set this automatically

## Security Features

- Rate limiting to prevent spam
- Input validation and sanitization
- CORS protection
- Security headers with Helmet
- IP address logging for abuse prevention

## Database Schema

The Contact model includes:

- name (required, max 100 chars)
- email (required, validated format)
- message (required, max 1000 chars)
- createdAt (auto-generated timestamp)
- ipAddress (for rate limiting)
- userAgent (browser info)
