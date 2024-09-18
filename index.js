const express = require('express')
const app = express();
const axios = require('axios');

const myFunction = async (req, res) => {
    try {
        const options = {
            headers: {
                'Accept': 'application/json',
            },
            url: 'https://icanhazdadjoke.com/'
        }
        const api_call = await axios(options);
        const joke = api_call?.data?.joke
        const status = api_call?.status
        if (joke) {
            res.status(status).json({ joke })
        } else {
            res.status(status).json({ message: 'No joke found' })
        }
    } catch (error) {
        res.status(500).json('An error occured', error)
    }

}


app.get('/', myFunction)


app.listen(3000, () => {
    console.log('server started');

})