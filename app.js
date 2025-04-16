require("dotenv").config();
const axios = require("axios");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const cors = require("cors");

const JWT_SECRET = "your_secret_key";

const user = {
  id: 1,
  username: "testuser",
  password: bcrypt.hashSync("test1234", 8), // hashed password
};

// Allow CORS for your frontend (localhost:3000)
const corsOptions = {
  origin: "http://localhost:3000", // Adjust this to your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"], // Add headers you need
};

const express = require("express");
const {
  getSpaceAgenciesData,
  getSpaceAgenciesDataById,
  getPostById,
  getAllPosts,
  addOrUpdateAgencies,
  deleteAgencies,
  createPost,
} = require("./dynamodb");
const app = express();
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Yes Server is running at 3100");
});

const port = process.env.PORT || 3100;

app.use(express.json());
app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const listOfUsernames = [
  {
    username: "Mukesh",
    title: "Post 1",
  },
  {
    username: "Katipally",
    title: "Post 2",
  },
];

app.get("/usernames", authenticateToken, (req, res) => {
  res.json(listOfUsernames.filter((e) => e.username === req.user.name));
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username !== user.username) {
    return res.status(401).json({ message: "Invalid username" });
  }

  const passwordIsValid = bcrypt.compareSync(password, user.password);
  if (!passwordIsValid) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });

  res.json({ auth: true, token });
});

app.get("/protected", (req, res) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) return res.status(403).json({ message: "No token provided" });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err)
      return res.status(500).json({ message: "Failed to authenticate token" });

    res.json({ message: "Protected data", userId: decoded.id });
  });
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { name: username };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: accessToken });
});

function authenticateToken(req, res, next) {
  const authHeader = req.header["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.post("/agencies/:id", async (req, res) => {
  const agencies = req.body;
  try {
    const newAgencies = await addOrUpdateAgencies(agencies);
    res.json(newAgencies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "something went wrong" });
  }
});

app.put("/agencies/:id", async (req, res) => {
  const agencies = req.body;
  const { id } = req.params;
  agencies.id = id;
  try {
    const updateAgencies = await updateAgencies(agencies);
    res.json(updateAgencies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "something went wrong" });
  }
});

app.delete("/agencies/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteMyAgencies = await deleteAgencies(id);
    res.json(deleteMyAgencies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "something went wrong" });
  }
});

app.get("/spacecrafts", async (req, res) => {
  try {
    const agencies = await getSpaceAgenciesData();

    res.json(agencies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "something went wrong" });
  }
});

app.get("/chineseTiangong", async (req, res) => {
  try {
    // Call the external API using axios
    const response = await axios.get(process.env.CHINESETIANGONG); // External API endpoint
    res.json(response.data); // Send the data received from the external API as the response
  } catch (error) {
    // Handle any errors that occur during the request
    console.error("Error fetching data from external API:", error);
    res.status(500).send("Error fetching data");
  }
});

// app.get("/centers", async (req, res) => {
//   try {
//     const centers = await getSpaceAgenciesData();
//     console.log(centers);

//     centers.Items.map((center) => {
//       res.json(center);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

app.post("/posts", async (req, res) => {
  const create = req.body;
  console.log(create);
  try {
    const newPost = await createPost(create);
    const pushPosts = newPost.Items[0].posts;
    res.json(pushPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "something went wrong" });
  }
});

app.get("/posts", async (req, res) => {
  try {
    const allPosts = await getAllPosts();
    const specificPosts = allPosts.Items[0].posts;
    res.json(specificPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "something went wrong" });
  }
});

app.get("/posts/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const postById = await getPostById(id);
    res.json(postById);
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "something went wrong" });
  }
});

app.get("/spacecrafts/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const agencies = await getSpaceAgenciesDataById(id);
    res.json(agencies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "something went wrong" });
  }
});

app.listen(port, () => {
  console.log(`listing on the 3100 port`);
});
