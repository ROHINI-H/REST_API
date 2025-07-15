import express from "express";

const app = express();

// start the server
app.listen(2912, () => {
    console.log("Server is running on port 2912");
});

// User Object
const users = [
    {
        id: "1",
        name: "Rohini",
        age: 25,
        hobby: "Reading",
    },
    {
        id: "2",
        name: "Gurupriya",
        age: 21,
        hobby: "Scrolling",
    },
    {
        id: "3",
        name: "Shamya",
        age: 17,
        hobby: "Playing",
    },
];

// Middleware to parse JSON
app.use(express.json());

// Middleware to log the details of each request
app.use((req, res, next) => {
    res.on('finish', () => {
        console.log(`${new Date()} ${req.method} Method URL - "${req.originalUrl}" returns ${res.statusCode} status`);
    });
    next();
});

// Validation middleware
function validation(req, res, next) {
    const { name, age, hobby } = req.body;
    if (!name) return res.status(400).json({ message: "Missing name field: Please enter your name" });
    if (!age) return res.status(400).json({ message: "Missing age field: Please enter your age" });
    if (!hobby) return res.status(400).json({ message: "Missing hobby field: Please enter your hobby" });
    next();
}

// Fetch the list of all users
app.get("/users", (req, res) => {
    res.status(200).json(users);
});

// Fetch details of a specific user by ID
app.get("/users/:id", (req, res) => {
    // get the user id
    const userId = req.params.id;

    // find the user in the users object
    const user = users.find(user => user.id == userId);

    // if user not present
    if (!user) {
        return res.status(404).json({ message: "User does not exist" });
    }

    res.status(200).json(user);
});

// Add a new user
app.post("/user", validation, (req, res) => {
    const { name, age, hobby } = req.body;

    // create a new user record
    const newUser = {
        id: (users.length + 1).toString(),
        name: name,
        age: age,
        hobby: hobby,
    };

    // push the new user to users list
    users.push(newUser);
    res.status(201).json(newUser);
});

// Update details of an existing user
app.put("/user/:id", validation, (req, res) => {
    // get the user id
    const userId = req.params.id;

    // find the user in the users object
    const user = users.find(user => user.id == userId);

    // if user not present
    if (!user) {
        return res.status(404).json({ message: "User does not exist" });
    }

    // Search & update all the keys
    const keys = Object.keys(req.body);
    keys.forEach(key => {
        user[key] = req.body[key];
    });

    res.status(200).json(user);
});

// Delete a user by ID
app.delete("/user/:id", (req, res) => {
    // get the user id
    const userId = req.params.id;

    // find the user in the users object
    const user = users.find(user => user.id == userId);

    // if user not present
    if (!user) {
        return res.status(404).json({ message: "User does not exist" });
    }

    // filtering the users array without the deleted user
    const filteredUser = users.filter(user => user.id != userId);
    res.status(200).json(filteredUser);
});
