const { Schema } = require('mongoose')
module.exports = {
  name: String,
  rol: {
    type: Schema.Types.ObjectId,
    ref: 'Rol'
  }
}
