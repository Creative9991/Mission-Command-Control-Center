const express = require('express');
const { getCharacters, getCharactersById, addOrUpdateCharacter, deleteCharacters } = require('./dynamodb');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

const port = process.env.PORT || 3100;

app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
// app.get('/characters', async (req, res) => {
//     try {
//         const characters = await getCharacters();
//         res.json(characters);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ err: 'soenthing went wrong' })
//     }
// })


// app.get('/characters/:id', async (req, res) => {
//     const id = req.params.id;
//     try {
//         const characters = await getCharactersById(id);
//         res.json(characters);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ err: 'soenthing went wrong' })
//     }
// })

app.post('/characters/', async (req, res) => {
    const characters = req.body;
    try {
        const newCharacters = await addOrUpdateCharacter(characters);
        res.json(newCharacters);
    } catch (error) {
        console.error(error);
        res.status(500).json({ err: 'soenthing went wrong' })
    }
})

app.put('/characters/:id', async (req, res) => {
    const characters = req.body;
    const {id} = req.params;
    characters.id = id;
    try {
        const updateCharacters = await updateCharacters(characters);
        res.json(updateCharacters);
    } catch (error) {
        console.error(error);
        res.status(500).json({ err: 'soenthing went wrong' })
    }
})

app.delete('/characters/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const deleteMyCharacters = await deleteCharacters(id);
        res.json(deleteMyCharacters);
    } catch (error) {
        console.error(error);
        res.status(500).json({ err: 'soenthing went wrong' })
    }
})


app.get('/spacecrafts', async (req, res) => {
    try {
        const characters = await getCharacters();
        res.json(characters);
    } catch (error) {
        console.error(error);
        res.status(500).json({ err: 'soenthing went wrong' })
    }
})


app.get('/spacecrafts/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const characters = await getCharactersById(id);
        res.json(characters);
    } catch (error) {
        console.error(error);
        res.status(500).json({ err: 'soenthing went wrong' })
    }
})



app.listen(port, () => {
    console.log(`listing on the port port`)
})