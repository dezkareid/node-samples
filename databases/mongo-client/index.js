const { MongoClient } = require('mongodb')

const url = 'mongodb://localhost:27017/academy'
const options = { useNewUrlParser: true }

MongoClient.connect(url, options, function (err, client) {
  if (err) {
    console.error(err)
    return
  }

  const db = client.db()
  const collection = db.collection('rol')
  collection.find().toArray(function (err, docs) {
    if (err) {
      console.error(err)
      return
    }
    console.log(docs)
    client.close()
  })
})
