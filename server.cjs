var express = require('express')
var cors = require('cors')
const fs = require('fs');
var app = express()

app.use(cors())
app.use(express.json())
console.log('Server working')

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})

app.post('/', (req, res) => {
    const playerData = req.body;
    console.log(req.body)
    //TODO: Pozycje najwiekszejliczby 
    //I roznice miedzy kolejnymi najwiekszymi liczbami
    const data = `game="CrossyRoads" difficulty="Normal" timestamp=${playerData.timestamp} player_position_x=${playerData.player_position_x}, player_position_z=${playerData.player_position_z}, player_place="${playerData.player_place}"\n`;
  
    fs.appendFile('log.txt' , data, (err) => {
      if (err) {
        return res.status(500).send('Error writing to file');
      }
  
      res.send('Data saved');
    });
  });