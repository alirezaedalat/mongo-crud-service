# MongoDB CRUD Service with Localhost and Docker Support

This project demonstrates a MongoDB CRUD service using **Node.js**, capable of running with both a local MongoDB instance and a Docker-based MongoDB setup.

---

## Features

- **Flexible Environment**: Switch between local MongoDB and Docker seamlessly using environment variables.
- **Docker Support**: Includes a `Dockerfile` and `docker-compose.yml` for containerized deployment.
- **Validation**: Ensures data integrity using `Joi`.
- **Logging**: Tracks application actions and errors using `winston`.
- **Unit Testing**: Comprehensive testing with `Jest`.
- **Modular Design**: Implements the Repository and Service patterns for clean separation of concerns.

---

## Project Structure

```
mongo-crud-service/
├── src/
│   ├── config/
│   │   └── db.js            # MongoDB connection
│   ├── models/
│   ├── repositories/
│   │   └── userRepo.js      # Database operations
│   ├── services/
│   │   └── userService.js   # Business logic
│   ├── controllers/
│   │   └── userController.js # Handles API requests
│   ├── routes/
│   │   └── userRoutes.js    # API routes
│   ├── logger.js            # Logging setup
│   └── index.js             # Entry point
├── tests/
│   └── userService.test.js  # Unit tests
├── Dockerfile               # Docker configuration for the app
├── docker-compose.yml       # Docker Compose configuration
├── .env                     # Environment variables
├── package.json             # Node.js project dependencies
└── README.md                # Project documentation
```

---

## Prerequisites

1. **Node.js** (v16 or higher): [Install Node.js](https://nodejs.org/).
2. **MongoDB**:
   - For localhost: Install MongoDB on your machine ([Download MongoDB](https://www.mongodb.com/try/download/community)).
   - For Docker: Ensure Docker and Docker Compose are installed ([Install Docker](https://docs.docker.com/get-docker/)).
3. **Git**: Required to clone the repository ([Install Git](https://git-scm.com/)).

---

## Usage

### Running with Local MongoDB

1. **Ensure MongoDB is running locally**:
   - Default URI: `mongodb://localhost:27017`.

2. **Set Environment Variables**:
   - Open `.env` and set:
     ```plaintext
     USE_DOCKER=false
     MONGO_URI=mongodb://localhost:27017/testdb
     ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Start the Application**:
   ```bash
   npm start
   ```

5. **Access the Application**:
   - API Endpoint: `http://localhost:3000/api`.

---

### Running with Docker

1. **Start the Containers**:
   ```bash
   docker-compose up --build
   ```

2. **Access the Application**:
   - API Endpoint: `http://localhost:3000/api`.

---

## Endpoints

| Method | Endpoint       | Description                  | Example Request Body        |
|--------|----------------|------------------------------|-----------------------------|
| `POST` | `/api/users`   | Create a new user            | `{ "name": "John", "email": "john@example.com", "age": 25 }` |
| `GET`  | `/api/users`   | Retrieve all users           | N/A                         |
| `PUT`  | `/api/users`   | Update user details          | `{ "filter": { "name": "John" }, "update": { "age": 30 } }` |
| `DELETE` | `/api/users` | Delete a user by filter      | `{ "name": "John" }`        |

---

## Environment Variables

- `USE_DOCKER`: Determines whether the app uses Docker (`true`) or Localhost (`false`).
- `MONGO_URI`: Connection URI for MongoDB.

---

## Contribution

We welcome contributions to improve this project! To contribute:

1. **Fork the Repository**:
   - Go to the [GitHub repository](https://github.com/alirezaedalat/mongo-crud-service).
   - Click **Fork**.

2. **Clone Your Fork**:
   ```bash
   git clone https://github.com/your-username/mongo-crud-service.git
   ```

3. **Create a Branch**:
   ```bash
   git checkout -b feature-branch
   ```

4. **Make Your Changes**.

5. **Commit and Push Your Changes**:
   ```bash
   git commit -m "Description of changes"
   git push origin feature-branch
   ```

6. **Submit a Pull Request**:
   - Open a pull request on the original repository.

---

## Testing

Run unit tests using Jest:

1. **Install Jest**:
   ```bash
   npm install --save-dev jest
   ```

2. **Run Tests**:
   ```bash
   npm test
   ```

---

## Contact

- **Author**: Alireza Edalat
- **GitHub**: [alirezaedalat](https://github.com/alirezaedalat)
- **Email**: alirezaaedalat@gmail.com
