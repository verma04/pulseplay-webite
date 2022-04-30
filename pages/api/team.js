let MongoClient = require('mongodb').MongoClient;
export default async (req, res) => {

  const uri = "mongodb+srv://pulse123:pulse123@cluster0.rm7pn.mongodb.net";
  const databaseName = "pulseplay-webiste";



MongoClient.connect('mongodb+srv://pulse123:pulse123@cluster0.rm7pn.mongodb.net', function(err, client){
  if(err) throw err;
  let db = client.db('pulseplay-webiste');
  db.collection('blogs').find().toArray(function(err, result){
    if(err) throw err;
     res.json(result)
    });
 });
  
};
