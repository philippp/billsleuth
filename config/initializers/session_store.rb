# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_billsleuth_session',
  :secret      => 'e48fb66923a427f131064b514f8d87ab7b5a5bf22563ff6ab0d769d40a5bfdd4502dca27bab2cf9e126245034ea5b41ea13da96347f017f35dd9a52895f1023a'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
