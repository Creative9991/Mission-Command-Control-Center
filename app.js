const express = require('express');
const { getSpaceAgenciesData, getSpaceAgenciesDataById, getAllPosts, addOrUpdateAgencies, deleteAgencies } = require('./dynamodb');
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
// app.get('/agencies', async (req, res) => {
//     try {
//         const agencies = await getSpaceAgenciesData();
//         res.json(agencies);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ err: 'soenthing went wrong' })
//     }
// })


// app.get('/agencies/:id', async (req, res) => {
//     const id = req.params.id;
//     try {
//         const agencies = await getSpaceAgenciesDataById(id);
//         res.json(agencies);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ err: 'soenthing went wrong' })
//     }
// })

app.post('/agencies/', async (req, res) => {
    const agencies = req.body;
    try {
        const newAgencies = await addOrUpdateAgencies(agencies);
        res.json(newAgencies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ err: 'soenthing went wrong' })
    }
})


app.post('/posts/', async (req, res) => {
    const create = req.body;
    try {
        const newPost = await createPost(create);
        res.json(newPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ err: 'soenthing went wrong' })
    }
})

app.put('/agencies/:id', async (req, res) => {
    const agencies = req.body;
    const {id} = req.params;
    agencies.id = id;
    try {
        const updateAgencies = await updateAgencies(agencies);
        res.json(updateAgencies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ err: 'soenthing went wrong' })
    }
})

app.delete('/agencies/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const deleteMyAgencies = await deleteAgencies(id);
        res.json(deleteMyAgencies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ err: 'soenthing went wrong' })
    }
})


app.get('/spacecrafts', async (req, res) => {
    try {
        const agencies = await getSpaceAgenciesData();
        res.json(agencies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ err: 'soenthing went wrong' })
    }
})


app.get('/posts', async (req, res) => {
    try {
        const allPosts = await getAllPosts();
        res.json(allPosts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ err: 'something went wrong' })
    }
})


app.get('/spacecrafts/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const agencies = await getSpaceAgenciesDataById(id);
        res.json(agencies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ err: 'soenthing went wrong' })
    }
})



app.listen(port, () => {
    console.log(`listing on the 3100 port`)
})