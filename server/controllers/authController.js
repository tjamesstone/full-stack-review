const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const {email, password, name} = req.body
        //Check to see if the user has already registered
        
        //If they have, stop the function
        //If they haven't, register the new the user. Salt and hash the password
        //Store new user in the database
        //Store new user in sessions
        //Send session.user object to the front end


    },
    login: async (req, res) => {
        const db = req.app.get('db')

    }
}