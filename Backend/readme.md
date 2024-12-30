# Backend

# Backend

## Overview

This is the backend for the Uber-app. It is built using **Node.js**, **Express**, and **MongoDB**.

## Setup

1. **Clone the repository.**
2. **Navigate to the `Backend` folder.**
3. **Install the dependencies:**

  ```sh
  npm install
  ```

4. **Create a `.env` file** in the [Backend](http://_vscodecontentref_/0) folder with the following content:

  ```env
  PORT=4000
  MONGODB_URI=mongodb://localhost:27017/uber
  JWT_SECRET=your_jwt_secret_key
  ```

5. **Start the server:**

  ```sh
  npx nodemon server.js
  ```

## Endpoints

### User

#### `POST /user/register`

**Description:** Registers a new user with the provided details.

**Request Body:**
```json
{
  "fullname": {
  "firstname": "John",
  "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Status Codes:**
- **201**: Created
- **400**: Validation error

**Example Response:**
```json
{
  "user": {
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "_id": "60f7c2a5b4d3c72f88e4d1a2",
  "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
}
```

#### `POST /user/create`

**Description:** Creates a new user with the provided details.

**Request Body:**
```json
{
  "fullname": {
  "firstname": "Jane",
  "lastname": "Smith"
  },
  "email": "jane.smith@example.com",
  "password": "password456"
}
```

**Status Codes:**
- **201**: Created
- **400**: Validation error

**Example Response:**
```json
{
  "user": {
  "fullname": {
    "firstname": "Jane",
    "lastname": "Smith"
  },
  "email": "jane.smith@example.com",
  "_id": "60f7c2a5b4d3c72f88e4d1a3",
  "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
}
```

#### `POST /user/login`

**Description:** Authenticates a user using their email and password, returning a JWT token upon successful authentication.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Status Codes:**
- **200**: OK - Successfully authenticated.
- **400**: Bad Request - Validation errors.
- **401**: Unauthorized - Invalid email or password.

**Example Response:**
```json
{
  "user": {
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "_id": "60f7c2a5b4d3c72f88e4d1a2",
  "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
}
```

## Testing

Currently, there are no tests specified. To add tests, consider using frameworks like **Jest** or **Mocha**.

## Technologies Used

- **Node.js**: JavaScript runtime.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM for MongoDB.
- **bcrypt**: Password hashing.
- **jsonwebtoken**: JWT token generation and verification.
- **express-validator**: Request validation.

## Contributing

1. **Fork the repository.**
2. **Create a new branch:**


<!-- API Documentation -->

### Get User Profile

**Endpoint:** `GET /user/profile`

**Description:** Retrieve the profile information of the currently authenticated user.

**Headers:**
- `Authorization`: Bearer token for authentication.

**Success Response:**
- **Status:** 200 OK
- **Body:**
  ```json
  {
    "id": "12345",
    "username": "johndoe",
    "email": "johndoe@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z"
  }
  ```

**Error Response:**
- **Status:** 401 Unauthorized
- **Body:**
  ```json
  {
    "message": "Authentication failed"
  }
  ```

### User Logout

**Endpoint:** `POST /user/logout`

**Description:** Log out the currently authenticated user.

**Headers:**
- `Authorization`: Bearer token for authentication.

**Success Response:**
- **Status:** 200 OK
- **Body:**
  ```json
  {
    "message": "Successfully logged out"
  }
  ```

**Error Response:**
- **Status:** 401 Unauthorized
- **Body:**
  ```json
  {
    "message": "Authentication failed"
  }
  ```