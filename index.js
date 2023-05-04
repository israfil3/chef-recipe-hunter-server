const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000


app.use(cors())
const allData = require('./data.json')

app.get('/data',(req,res)=>{
  res.send(allData)
})
app.get('/', (req, res) => {
  res.send('Dragon is running')
});
app.get('/data/:id', (req, res) => {
  const id = req.params.id;
    const selectedData = allData.find(n => n.id == id);
    res.send({selectedData})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})