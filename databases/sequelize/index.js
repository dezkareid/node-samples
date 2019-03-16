const Sequelize = require('sequelize')
const sequelize = new Sequelize('academy', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

const Rol = sequelize.define('rol', {
  nombre: Sequelize.STRING
}, { freezeTableName: true })

sequelize.sync()
  .then(() => Rol.findAll())
  .then(console.log)
  .catch(console.error)
  .then(() => sequelize.close())
