const mongoose = require('mongoose')
const RolSchema = require('./schema')

module.exports = mongoose.model('Rol', RolSchema)
