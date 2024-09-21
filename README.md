# User Management Backend

## 🌟 Overview

This backend server for the User Management Web Application is built using Node.js, Express.js, and MongoDB. It includes user management features such as registration, login, password reset, and verification. It uses Nodemailer for sending email notifications and handling password reset links.

## 🛠 Technologies Used

- **Node.js**: JavaScript runtime for building the server-side logic.
- **Express.js**: Web application framework for Node.js to handle HTTP requests and routing.
- **MongoDB**: NoSQL database for storing user data and managing authentication.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js to simplify database interactions.
- **dotenv**: Module to load environment variables from a `.env` file.
- **CORS**: Middleware to enable cross-origin requests.
- **Nodemailer**: Module for sending emails (e.g., verification and password reset emails).

## 🚀 Features

- **User Registration**: 
  - Allows new users to register by providing their email and password.
  - Checks if the user is already registered and provides appropriate feedback.

- **User Login**:
  - Authenticates users with their email and password.
  - Provides feedback for login success or failure.

- **Password Reset**:
  - Enables users to request a password reset by entering their registered email.
  - Sends a secure password reset link via email using Nodemailer.
  - The reset link is valid for 10 minutes to ensure security.

- **Verification Handling**:
  - Manages and verifies the reset link to ensure it is valid and has not expired.
  - Handles cases where the link is expired or invalid.

- **Password Change**:
  - Allows users to change their password using the secure link provided.
  - Updates the user's password in the database and clears the reset token.

- **Email Notifications**:
  - **Nodemailer Integration**:
    - Sends password reset links via email.
    - Configurable email sender and SMTP settings in the `.env` file.

- **Error Handling**:
  - Provides notifications and feedback for various user actions, including registration, login errors, and issues with the password reset process.