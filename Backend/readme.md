# Backend

## Overview

This is the backend for the Uber-app. It is built using Node.js, Express, and MongoDB.

## Setup

1. Clone the repository.
2. Navigate to the `Backend` folder.
3. Install the dependencies:

    ```sh
    npm install
    ```

4. Create a `.env` file in the [Backend](http://_vscodecontentref_/0) folder with the following content:

    ```env
    PORT=4000
    MONGODB_URI=mongodb://localhost:27017/uber
    JWT_SECRET=your_jwt_secret_key
    ```

5. Start the server:

    ```sh
    npx nodemon server.js
    ```

## Endpoints

### User

- `POST /user/register`: Register a new user.
  
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

- `POST /user/create`: Create a new user.
  
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

- `POST /user/login`: Log in an existing user.
  
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

Currently, there are no tests specified. To add tests, consider using frameworks like Jest or Mocha.

## Technologies Used

- **Node.js**: JavaScript runtime.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM for MongoDB.
- **bcrypt**: Password hashing.
- **jsonwebtoken**: JWT token generation and verification.
- **express-validator**: Request validation.

## Contributing

1. Fork the repository.
2. Create a new branch:

    ```sh
    git checkout -b feature/YourFeatureName
    ```

3. Commit your changes:

    ```sh
    git commit -m "Add some feature"
    ```

4. Push to the branch:

    ```sh
    git push origin feature/YourFeatureName
    ```

5. Open a pull request.

## License

This project is licensed under the ISC License.