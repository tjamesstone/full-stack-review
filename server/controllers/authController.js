const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const {email, password, name} = req.body

        //Check to see if the user has already registered
        const user = await db.find_email([email])

        //If they have, stop the function
        if(user[0]) return res.status(200).send({message: 'Email already in use mo-fo'})
        //If they haven't, register the new the user. Salt and hash the password
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        //Store new user in the database
        const userId = await db.add_user({name, email})
         db.add_hash({user_id: userId[0].user_id, hash}).catch(err => {
            return res.sendStatus(503)
        })
        //Store new user in sessions
        req.session.user = {email, name, userId: userId[0].user_id, isAdmin: false}
        //Send session.user object to the front end
        res.status(201).send({message: 'Logged in', user: req.session.user, loggedIn: true})


    },
    login: async (req, res) => {
        const db = req.app.get('db')
        const {email, password} = req.body

        //Check if the user exists, If the user exists, find the hash
        const user = await db.find_user(email)


            //if user doesn't exist send appropro response
        if(!user[0]) return res.status(200).send({message: 'Email not found beeotch '})


        //hash password and compare
        const result = bcrypt.compareSync(password, user[0].hash)

        
        
        //if hashes don't match, send appropro response
        if (!result) return res.status(200).send({message: 'Incorrect password bee otch'})

        //If they do match, send user to sessions
        const {name, is_admin:isAdmin, user_id:userId} = user[0]
        req.session.user = {email, name, userId, isAdmin}

        //send session.user back to front end
        res.status(200).send({message: 'Logged In', user: req.session.user, loggedIn: true})

    }
}