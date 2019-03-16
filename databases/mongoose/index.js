const mongoose = require('mongoose')
// const Rol = require('./models/rol')
const Usuario = require('./models/usuario')
mongoose.connect('mongodb://localhost:27017/academy', { useNewUrlParser: true })

const db = mongoose.connection

db.once('open', function () {
  /*
    const adminRol = new Rol({ name: 'admin' })
    adminRol.save()
      .then((rol) => {
        const joelUsuario = new Usuario({ name: 'Joel', rol: rol._id })
        return joelUsuario.save()
      })
  */
  Usuario.find()
    .populate('rol')
    .then(console.log)
    .catch(console.error)
    .then(() => db.close())
})
