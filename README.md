## ORINOCO

"SoPekocko" is the sixth project I'm working on as part of my training with OpenClassrooms.
In this scenario, I had to set up an API for a restaurant review site. I had to take care only of the backend of the site, the frontend being already provided by OC.

[API Documentation](https://documenter.getpostman.com/view/14831489/TzJu9xPT)

## Specifications

The API must comply with the RGPD and OWASP standards:

- [x] User passwords must be encrypted.
- [x] 2 types of administrator rights to the database must be defined: an access to delete or modify tables, and an access to edit the database content.
 - [x] The security of the MongoDB database (from a service such as MongoDB Atlas) must be done in such a way that the validator can launch the application from his machine.
 - [x] Authentication is enforced on the required routes.
 - [x] Passwords are stored securely.
 - [x] Database email addresses are unique and an appropriate Mongoose plugin is used to ensure their uniqueness and report errors.

## Installation

- [x] Clone the project
- [x] Rename the .sample-env file to .env and fill in the necessary connection and authentication information.
- [x] Open a terminal in the front folder
- [x] Run the "npm install" command
- [x] Run the "npm start" command
- [x] Open a terminal in the back folder
- [x] Run the "npm install" command
- [x] Run the "nodemon server" command
- [x] Open your web browser
- [x] Open the page "http://localhost:4200 :tada: 
