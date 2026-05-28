# Scalable Blog App

Express + MongoDB backend for creating, reading, updating, and deleting blog posts.

## Requirements

- Node.js 18+
- MongoDB Atlas or another MongoDB connection string

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in this folder using `.env.example` as the template.

3. Start the app:

   ```bash
   npm start
   ```

   For development:

   ```bash
   npm run dev
   ```

## Environment Variables

- `PORT` - server port, defaults to `5000`
- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET` - secret used to sign auth tokens

## API Routes

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/blogs`
- `GET /api/blogs/:id`
- `POST /api/blogs`
- `PUT /api/blogs/:id`
- `DELETE /api/blogs/:id`

## Deployment Notes

- Make sure `MONGO_URI` and `JWT_SECRET` are set in the deployment environment.
- The app loads `.env` from the app directory, so local runs and hosted runs use the same server entrypoint.