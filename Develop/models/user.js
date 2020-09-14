// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines

// Creating our User model

// The email cannot be null, and must be a proper email before creation

// The password cannot be null

// Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database

// Hooks are automatic methods that run during various phases of the User Model lifecycle

// In this case, before a User is created, we will automatically hash their password
 