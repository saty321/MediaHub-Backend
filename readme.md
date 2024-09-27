# MediaHub-Backend

**MediaHub-Backend** is a robust backend API designed to handle user interaction and content management for a media streaming platform. This project covers core features such as user management, video uploads, likes, comments, subscriptions, playlists, and tweets.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)

## Features

- **User Management:** Register, login, and manage user profiles.
- **Video Management:** Upload, view, and manage video content.
- **Likes & Comments:** Like videos and add comments to foster user engagement.
- **Subscription System:** Subscribe to users' channels for updates on new content.
- **Playlists:** Create, update, and manage personalized playlists.
- **Tweet Integration:** Tweet about videos directly from the platform.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for building the API.
- **MongoDB**: NoSQL database for storing all data.
- **Mongoose**: MongoDB object modeling for Node.js.
- **JWT (JSON Web Token)**: For authentication and authorization.
- **bcrypt.js**: For password hashing and security.

## Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v14 or higher)
- **MongoDB** (v4.4 or higher)
- **npm** (Node package manager)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/saty321/MediaHub-Backend.git
    ```

2. Navigate into the project directory:

    ```bash
    cd MediaHub-Backend
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

## Environment Variables

Set up your environment variables by creating a `.env` file in the root directory and adding the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
