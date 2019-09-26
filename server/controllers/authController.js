const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const {email, password, name} = req.body

        //Check to see if the user has already registered
        const user = await db.find_email([email])

        //If they have, stop the function
        if(user[0]) return res.status(200).send({message: 'Email already in use'})
        //If they haven't, register the new the user. Salt and hash the password
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        //Store new user in the database
        const userId = await db.add_user({name, email})
        await db.add_hash({user_id: userId, hash}).catch(err => {
            return res.sendStatus(503)
        })
        //Store new user in sessions
        req.session.user = {email, name, userId, isAdmin: false}
        //Send session.user object to the front end
        res.status(201).send({message: 'Logged in', user: req.session.user, loggedIn: true})


    },
    login: async (req, res) => {
        const db = req.app.get('db')

    }
}