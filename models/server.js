const express = require ('express')
const dbConnect = require ('../database/config')
require('../database/config')
const{getRol, putRol, postRol, deleteRol } = require('../controllers/rolesController')

class Server {
    constructor(){
        this.app = express()
        this.listen()
        this.dbConnection()
        this.pathRol = '/api/roles'
        this.route()
    }
    async dbConnection(){
        await dbConnect()
    }
    route(){
        this.app.use(express.json())
        this.app.get(this.pathRol, getRol)
        this.app.put(this.pathRol, putRol)
        this.app.post(this.pathRol, postRol)
        this.app.delete(this.pathRol+'/:id', deleteRol)
    }
    listen(){
        this.app.listen(process.env.PORT, () => {
            console.log('Server running successful')
        })
    }
}

module.exports = Server