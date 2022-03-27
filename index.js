const dbConnect = require('./mongodb')
//read data
dbConnect().then((resp)=>{
  resp.find({completed:'true'}).toArray().then((data)=>{
  console.warn(data)
  })
})
