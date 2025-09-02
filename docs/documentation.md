# FastAPI Documentation

## General Description

This project represents an express application which fetches data from a Siebel API and saves it into a DynamoDB table. It uses JWT for authentication.

## Files Description

1. **src/controllers/apiController.js:** This file is responsible for routing and handling the GET request to fetch and save data. It uses the services from authService, siebelService and dynamoService.

2. **src/services/authService.js:** This file provides a function to verify the JWT token in the request headers.

3. **src/services/siebelService.js:** This file provides a function to fetch data from the Siebel API.

4. **src/services/dynamoService.js:** This file provides a function to save data into a DynamoDB table.

5. **src/config/config.js:** This file sets up the configuration for the app by loading environment variables.

6. **src/utils/errorHandler.js:** This file exports a function for error handling.

7. **src/index.js:** This is the main entry point for the application.

## API Endpoints

### GET /api/data

Fetches data from the Siebel API and saves it into a DynamoDB table. 

#### Parameters

No parameters are needed for this endpoint.

#### Responses

- `200 OK`: Successfully fetched and saved data.
- `500 Internal Server Error`: An error occurred while fetching or saving data.

## Notes

- Environment variables need to be set for the JWT secret, Siebel API URL, DynamoDB table name, and the server port.
- All requests to the API should include a JWT token in the header under 'x-access-token'.
- The application runs on port 3000 by default, this can be changed by setting the `PORT` environment variable.

## Dependencies

Requires the following npm packages:

- `express`
- `cors`
- `jsonwebtoken`
- `axios`
- `aws-sdk`
- `dotenv`

## Example

To run the application, use the following command:

```bash
node src/index.js
```

To call the GET /api/data endpoint, use the following curl command:

```bash
curl -H "x-access-token: YOUR_JWT_TOKEN" http://localhost:3000/api/data
```

Replace "YOUR_JWT_TOKEN" with your actual JWT token.