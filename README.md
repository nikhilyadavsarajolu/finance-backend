# Finance Data Processing Backend

## Overview

This project is a backend system built for managing financial records with role-based access control. It allows different users to interact with data based on their roles and provides basic dashboard insights like total income, expenses, and net balance.

## Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication

## Features

### User & Role Management

* Users can register and login
* Roles supported: Admin, Analyst, Viewer
* Access to APIs is controlled based on roles

### Financial Records

* Create, update, delete, and view records
* Each record includes amount, type (income/expense), category, date, and description

### Filtering & Pagination

* Filter records by type, category, and date range
* Pagination added to handle larger datasets efficiently

### Dashboard APIs

* Total income
* Total expenses
* Net balance calculation

### Security & Validation

* JWT-based authentication
* Role-based access using middleware
* Basic validation and error handling implemented

## API Endpoints

### Auth

* POST /api/auth/register
* POST /api/auth/login

### Records

* POST /api/records (Admin only)
* GET /api/records
* PUT /api/records/:id (Admin only)
* DELETE /api/records/:id (Admin only)

### Dashboard

* GET /api/dashboard/income
* GET /api/dashboard/expense
* GET /api/dashboard/net

## How to Run

1. Clone the repository
2. Install dependencies:
   npm install
3. Create a `.env` file and add:
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_secret
4. Start the server:
   nodemon server.js

## Notes

* APIs were tested using Postman
* Only admins are allowed to modify records
* Project is kept simple and focused on core backend functionality

## Future Improvements

* Add Swagger API documentation
* Add unit testing
* Deploy to cloud (Render / AWS)
* Improve validation and error handling

## Author

Nikhil Yadav
