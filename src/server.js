const express = require('express');
const dbConnection = require('./config/db');
const categoryRouter = require('./routes/categoryRoute');
const subCatRouter = require('./routes/subCategoryRoute');
const productRouter = require('./routes/productRoute');
const managerRouter = require('./routes/managerRoute');
const userRouter = require('./routes/userRoute');
const cookieParser = require('cookie-parser');
const authenticate = require('./middleware/authenticate');
const setUserData = require('./middleware/setUserData');
const app = express()

// port
const PORT = 8000;

// Connect to the database
dbConnection()

// Set up view engine and views directory
app.set('view engine', 'ejs')
app.set('views', 'src/views')

// Set up the public folder to serve static files
app.use(express.static('public'));
app.use(express.static('upload'));
app.use(cookieParser());

// Middleware
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/category', categoryRouter)
app.use('/subcategory', subCatRouter)
app.use('/product', productRouter)
app.use('/manager', managerRouter)
app.use('/user', userRouter)

app.get('/', authenticate, setUserData, async (req, res) => {
    res.render('Pages/index')
})

// Start the server
app.listen(PORT, (err) => {
    if (err) {
        console.log('server Not Start')
    }
    console.log(`listing on port http://localhost:${PORT}`)
})