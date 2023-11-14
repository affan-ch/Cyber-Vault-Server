# Cyber Vault Server 

## Introduction

Welcome to the Cyber Vault Server, a robust solution for securely managing Login Accounts, Credit Card details, Personal Information, Secure Notes and Documents. This server is built using Node.js and MySQL, providing a reliable backend for the [Cyber Vault](https://github.com/affan-ch/Cyber-Vault) Flutter application.

## Features

- **User Authentication**: Secure user registration and login with password hashing.
- **Data Storage**: Safely store passwords, credit card information, and personal details.
- **Document and Notes Storage**: Store important documents and secure notes.
- **Data Encryption**: Keep sensitive information encrypted to enhance security.
- **RESTful API**: Provides a well-structured RESTful API for easy integration with client applications.

## Installation

1. Clone this repository: `git clone https://github.com/affan-ch/cyber-vault-server.git`
2. Install Node.js and npm if not already installed.
3. Install project dependencies: `npm install`
4. Configure the MySQL database connection and other settings in `.env` file.

  <details align="center">
   <summary>Click to expand</summary>
   <dl align="left"><dd><dl><dd><dl><dd><dl><dd>

   ```env
   # JWT Secret Key for Token Signing
   JWT_SECRET=""

   # Database Configuration
   DB_HOST="localhost"
   DB_DIALECT="mysql"
   DB_PORT=3306
   DB_NAME="cyber_vault"
   DB_USERNAME="root"
   DB_PASSWORD=""
   ```

   ### Variable Descriptions

   - **JWT_SECRET:** This is the secret key used for signing JWT tokens.

   - **DB_HOST:** The host address where your MySQL database is running. Change it if your database is hosted elsewhere.

   - **DB_DIALECT:** The database dialect. In this case, it's set to "mysql."

   - **DB_PORT:** The port on which your MySQL database is running. Change it if your database uses a different port.

   - **DB_NAME:** The name of your MySQL database.

   - **DB_USERNAME:** The username used to connect to the MySQL database. Change it if you have a different username.

   - **DB_PASSWORD:** The password used to connect to the MySQL database. Replace it with your actual database password.

   <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Warning.png" alt="Warning" width="25" height="25" /> Make sure not to share or expose your `.env` file, especially sensitive information like secret keys and passwords. Consider adding it to your `.gitignore` file to prevent accidental commits.

   </dd></dl></dd></dl></dd></dl></dd></dl>
   </details>

   
5. Run the server: `npm start`

## Usage

- Access the API endpoints by sending HTTP requests to `http://localhost:3000` or your server's address.

### API Endpoints

- **POST /addAccount**: Add a new account to the password manager.
- **POST /getAccounts**: Retrieve a list of accounts associated with the user.
- **POST /updateAccount**: Update an existing account's information.
- **POST /deleteAccount**: Delete an account from the password manager.

<!-- Empty line -->

- **POST /addCreditCard**: Add a new credit card to the password manager.
- **POST /getCreditCards**: Retrieve a list of credit cards associated with the user.
- **POST /updateCreditCard**: Update an existing credit card's information.
- **POST /deleteCreditCard**: Delete a credit card from the password manager.

<!-- Empty line -->

- **POST /addSecureNote**: Add a new secure note to the password manager.
- **POST /getSecureNotes**: Retrieve a list of secure notes associated with the user.
- **POST /updateSecureNote**: Update an existing secure note's information.
- **POST /deleteSecureNote**: Delete a secure note from the password manager.

<!-- Empty line -->

- **POST /signup**: Create a new user account.
- **POST /getSaltByEmail**: Retrieve the salt associated with a user's email.
- **POST /login**: Authenticate a user and generate a token.
- **POST /validateToken**: Validate the authenticity of a user token.

  
## Database Schema

The database schema is defined in the `models` folder, within the files `Account.js`, `SecureNote.js`, `CreditCard.js`, and `User.js`. Each file contains the entity schema for its respective entity. The schema is managed using the Sequelize package with the MySQL dialect.


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

