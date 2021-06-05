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
                data: users.map(user => {
                    return{
                        id: user.id,
                        fullName: user.fullName,
                        email: user.email,
                        image: "/img/usersImg/" + user.image,
                        detail: "/api/users/" + user.id
                    }
                })
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
                data: {
                        id: user.id,
                        fullName: user.fullName,
                        email: user.email,
                        image: "/img/usersImg/" + user.image,
                    }
            }
            res.json(respuesta)
        })
    }

}

module.exports = usersApiController;