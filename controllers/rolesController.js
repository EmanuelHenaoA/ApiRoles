const Rol = require ('../models/roles')

const getRol = async (req, res) => {
    const roles = await Rol.find()
    res.json(roles)
}

const putRol = async (req, res) => {
    const {_id, idRol, name} = req.body
    let msg = 'Rol Updated'
    id = req.params.id
    try{
        await Rol.findByIdAndUpdate(_id,{idRol: idRol, name: name})
    }catch(error){
        msg = error
    }
    res.json({msg:msg})
}

const postRol = async (req, res) => {
    let msg = 'Rol Inserted'
    const body = req.body
    try{
        const rol = new Rol(body)
        await rol.save()
    }catch(error){
        msg = error
    }
    res.json({msg:msg})
}

const deleteRol = async (req, res) => {
    let msg = 'Rol Deleted'
    id = req.params.id
    try{
        await Rol.findByIdAndDelete({_id: id})
    }catch(error){
        msg = error
    }
    res.json({msg:msg})
}

module.exports = {
    getRol,
    putRol,
    postRol,
    deleteRol
}