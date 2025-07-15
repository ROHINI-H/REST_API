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


// Fetch the list of all users
app.get("/users", (req, res) => {
    res.send(users);
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

    res.send(user);
});

// Add a new user
app.post("/user", (req, res) => {
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
    res.send(users);
});

// Update details of an existing user
app.put("/user/:id", (req, res) => {
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

    res.send(users);
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
    res.send(filteredUser);
});
