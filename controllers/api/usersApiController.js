const db = require('../../database/models');
const sequelize = db.sequelize;

const usersApiController = {
    list:(req,res)=>{
        db.Users.findAll()
        .then(users=>{
            let respuesta = {
                meta: {
                    status: 200,
                    total: users.length,
                    url: "/api/users"
                },
                data: users
            }
                res.json(respuesta)
        })
    },

    detail:(req,res)=>{
        db.Users.findByPk(req.params.id)
        .then(user=>{
            let respuesta = {
                meta:{
                    status: 200,
                    total: user.id.length,
                    url: "/api/users/" + user.id
                },
                data: user
            }
            res.json(respuesta)
        })
    }

}

module.exports = usersApiController;