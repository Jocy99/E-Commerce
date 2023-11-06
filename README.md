# Express.js API with Sequelize and MySQL

Welcome to the Express.js API with Sequelize and MySQL application. This application provides a functional API for managing categories, products, and tags. Below, you'll find information on how to set up and run this application.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [API Routes](#api-routes)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started, clone this repository to your local machine using the following command:

```bash
git clone https://github.com/Jocy99/E-Commerce.git
```

Then, navigate to the project directory.


Next, install the project dependencies:

```bash
npm install
```

## Configuration

1. Create an environment variable file (e.g., `.env`) in the project root directory and add the following variables with your database configuration:

   ```
   DB_NAME=your_database_name
   DB_USER=your_mysql_username
   DB_PASSWORD=your_mysql_password
   ```

   Replace `your_database_name`, `your_mysql_username`, and `your_mysql_password` with your MySQL database name, username, and password.

## Database Setup

1. Ensure that your MySQL server is running.

2. In the project directory, execute the following commands to set up the database schema and seed initial data:

   ```bash
   npm run schema
   npm run seed
   ```

   This will create a development database and populate it with test data.

## Running the Application

To start the application, run the following command:

```bash
npm start
```

This will start the server, and Sequelize models will be synced to the MySQL database.

## API Routes

You can use tools like Insomnia to test the API routes. The application provides the following routes:

- GET `/api/categories`: Get a list of all categories.
- GET `/api/products`: Get a list of all products.
- GET `/api/tags`: Get a list of all tags.
- POST `/api/categories`: Create a new category.
- POST `/api/products`: Create a new product.
- POST `/api/tags`: Create a new tag.
- PUT `/api/categories/:id`: Update a category by ID.
- PUT `/api/products/:id`: Update a product by ID.
- PUT `/api/tags/:id`: Update a tag by ID.
- DELETE `/api/categories/:id`: Delete a category by ID.
- DELETE `/api/products/:id`: Delete a product by ID.
- DELETE `/api/tags/:id`: Delete a tag by ID.

## Testing

The application has been designed to meet the provided acceptance criteria. You can use Insomnia or Postman to test the API routes, including GET, POST, PUT, and DELETE operations, to verify its functionality.

## Contributing

Contributions to this project are welcome. Please feel free to open issues or pull requests to suggest improvements or report bugs.

## License

This project is licensed under the [MIT License](LICENSE).
