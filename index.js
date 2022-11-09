const express = require('express')
const app = express()
var cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;

// MiddleWate 
app.use(cors());
app.use(express.json());


// Password : S6zUSsVfeRgJNPm8
// UserName: taxAdvisor

const uri = "mongodb+srv://taxAdvisor:S6zUSsVfeRgJNPm8@cluster0.qctdu57.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const serviceCollection = client.db('taxAdvisor').collection('services');

        app.get('/services', async (req, res) => {
            const query = {}
            const cursor = serviceCollection.find(query);
            const services = await cursor.toArray();
            res.send(services);
        });

        app.get('/services/:id', async (req, res) => {
            const id = req.params.id;
            // console.log(id);
            const query = { _id: ObjectId(id) };
            const services = await serviceCollection.find({}).toArray();
            const service = services.find(abc => abc._id === id);
            res.send(service);
        });

        app.post('/services', async (req, res) => {
            const service = req.body;
            // console.log(service);
            const result = await serviceCollection.insertOne(service);
            res.send(result);
        });
    }
    finally {

    }
}
run().catch(err => console.error(err));




app.get('/', (req, res) => {
    res.send('Welcome to Tax Advisor Server!')
})

app.listen(port, () => {
    console.log(`Tax Advisor Server app listening on port ${port}`)
})