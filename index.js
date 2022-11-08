const express = require('express')
const app = express()
var cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

// MiddleWate 
app.use(express())
app.use(cors())


// Password : S6zUSsVfeRgJNPm8
// UserName: taxAdvisor

const uri = "mongodb+srv://taxAdvisor:S6zUSsVfeRgJNPm8@cluster0.qctdu57.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const serviceCollection = client.db('taxAdvisor').collection('services');

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