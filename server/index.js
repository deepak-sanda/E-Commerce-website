const express = require('express');
const cors = require("cors")
const mongoose = require("mongoose");
const { UserModel } = require('./models/amazon-users');
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const CartModal = require('./models/cartModal');
const { HeightsItSolutionsUserModel } = require('./models/heightsitsols_user');


const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/Amazon_users")
    .then(() => {
        console.log("connected to mongodb")
    })
    .catch((err) => {
        console.log(err, "failed to connect")
    })

const JWT_SECRET = "deepakjvjvkmjvjvjyfhyfyu"

app.post("/signup", async (req, res) => {

    const { name, email, password } = req.body
    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" })
    }
    try {
        const existingUser = await UserModel.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: "email already exist" })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const saveUser = new UserModel({ name, email, password: hashedPassword })
        await saveUser.save()
        res.status(201).json({ message: "user created successfully", user: saveUser })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal error' })
    }

})

app.post("/login", async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" })
    }
    try {
        const user = await UserModel.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "user not found" })

        }
        const validPassword = await bcrypt.compare(password, user.password)
        if (!validPassword) {
            return res.status(400).json({ message: "Incorrect Password" })

        }

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
            expiresIn: "1h",
        });
        res.status(201).json({ message: "logged in successfully", token })

 
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal error' })
    }
})


// token authentication...
const verifyToken = async (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
        return res
            .status(401)
            .json({ message: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (ex) {
        console.error("Invalid token:", ex.message);
        return res
            .status(401)
            .json({ message: "Invalid token. Please log in again." });
    }
};

app.get("/home", verifyToken, async (req, res) => {
    try {
        const user = await UserModel.findById(req.user.userId).select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
})

app.post("/cart", async (req, res) => {
    const { detailUrl, title, cost, userId } = req.body
    try {
        const existingItem = await CartModal.findOne({ userId, detailUrl, title, cost });
        if (existingItem) {
            return res.status(409).json({ message: "Item already exists in the cart" });
        }
        const saveCartItem = new CartModal({ userId, cost, title, detailUrl })
        await saveCartItem.save()
        res.status(201).json({ message: " Item added to cart successfully" })
    } catch (error) {
        console.log(error)
    }
})


app.get("/cartitem/:id", async (req, res) => {
    const id = req.params.id
    try {
        const cartItems = await CartModal.find({ userId: id })

        res.status(201).json(cartItems)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal error' })
    }
})

app.delete("/removeitem/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const removeItem = await CartModal.findByIdAndDelete(id)
        res.status(201).json({ message: 'removed the item', removeItem })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal error' })
    }
})


app.post("/heightsItSolutions/registration", async (req, res) => {
    const { name, email, password } = req.body
    const heightsitsolutionsUser = new HeightsItSolutionsUserModel({ name, email, password })
    await heightsitsolutionsUser.save()
    res.status(200).json({ message: "user created" })
})

app.post("/heightsItSolutions", async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body)
        const user = await HeightsItSolutionsUserModel.findOne({ email });
        console.log(user)
        if (!user) {
            return res.status(400).json({ message: "No user found" });
        }

        if (user.password !== password) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        return res.status(200).json({ message: 'Logged in successfully', user });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
});



app.listen(5000, () => {
    console.log("server is up at 5000")
})