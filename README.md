# Cyber Vault Server 

## Introduction

Welcome to the Cyber Vault Server, a robust solution for securely managing passwords, credit card details, personal information, Secure Notes and Documents. This server is built using Node.js and MySQL, providing a reliable backend for the Cyber Vault Flutter application.

## Features

- **User Authentication**: Secure user registration and login with password hashing.
- **Data Storage**: Safely store passwords, credit card information, and personal details.
- **Document and Notes Storage**: Store important documents and secure notes.
- **Data Encryption**: Keep sensitive information encrypted to enhance security.
- **RESTful API**: Provides a well-structured RESTful API for easy integration with client applications.

## Installation

1. Clone this repository: `git clone https://github.com/your-repo/cyber-vault-server.git`
2. Install Node.js and npm if not already installed.
3. Install project dependencies: `npm install`
4. Configure the MySQL database connection in `config.js`.
5. Run the server: `npm start`

## Usage

- Access the API endpoints by sending HTTP requests to `http://localhost:3000` or your server's address.

### API Endpoints

- **POST /register**: Register a new user with a username and password.
- **POST /login**: Log in with a registered user account.
- **GET /passwords**: Retrieve stored passwords for the authenticated user.
- **POST /passwords**: Create a new password entry.
- **GET /creditcards**: Retrieve stored credit card details.
- **POST /creditcards**: Create a new credit card entry.
- **GET /personalinfo**: Retrieve stored personal information.
- **POST /personalinfo**: Create a new personal information entry.
- **GET /documents**: Retrieve stored documents.
- **POST /documents**: Upload a new document.
- **GET /notes**: Retrieve stored secure notes.
- **POST /notes**: Create a new secure note.
- **PUT /update-password**: Update a user's password.

## Database Schema

The database schema is defined in the `schema.sql` file. You can import it into your MySQL database to create the necessary tables.

## Security

- Ensure that your server is configured securely, with proper access controls.
- Use HTTPS for production deployments to encrypt data in transit.
- Implement user authorization and authentication to protect user data.

## Code of Conduct

We are committed to fostering an inclusive and welcoming community. Please take a moment to review our [Code of Conduct](CODE_OF_CONDUCT.md) to understand our expectations for behavior within this project.
   
## Contributing

We welcome contributions! Please read our [Contribution Guidelines](CONTRIBUTING.md) for details on how to get started.

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

