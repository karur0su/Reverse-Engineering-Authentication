
// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password

// Our user will sign in using an email, rather than a "username"

// When a user tries to sign in this code runs

// If there's no user with the given email
  
// If there is a user with the given email, but the password the user gives us is incorrect
   
// If none of the above, return the user

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work

// Exporting our configured passport
