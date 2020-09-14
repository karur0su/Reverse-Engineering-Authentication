// Requiring our models and passport as we've configured it

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  

  // Route for logging user out
 
  // Route for getting some data about our user to be used client side

      // The user is not logged in, send back an empty object
    
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
    