const {model, Schema} = require ('mongoose')

const rolesSchema = new Schema ({
    idRol: {
        type: Number,
        unique: true,
        required: [true, 'The ID Rol is obligatory']
    },
    name: {
        type: String,
        unique: true,
        required: [true, 'The name Rol is obligatory']
    }
}, {versionKey:0}
)

module.exports = model('Roles', rolesSchema, 'Roles')