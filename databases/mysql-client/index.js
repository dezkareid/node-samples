var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'academy'
})

connection.connect()

connection.query('SELECT * from rol', function (error, results, fields) {
  if (error) throw error
  console.log('Results: ', results, 'fields: ', fields)
})

connection.end()
