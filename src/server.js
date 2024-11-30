import express from 'express' // esm syntax
import path, { dirname } from 'path' // enable js server.js to look look & send html files
import { fileURLToPath } from 'url'
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js' // import name doesn't have to match export name todoRoutes != router

const app = express()
const PORT =  process.env.PORT || 5003 // check if PORT env variable or default to 5003

// Get the file path from the URL of the current module
const __filename = fileURLToPath(import.meta.url)
// Get the directory name from the file path
const __dirname = dirname(__filename)

// Middleware
app.use(express.json())
// Serves the html file from the /public directory
// Tells express to serve all files from the public folder as static assets / files. Request for CSS files will be resolved to public directory
app.use(express.static(path.join(__dirname, '../public'))) // find public in the upper level, tell code where to find public directory

// define endpoint - serving up html file from /public directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// Routes
app.use('/auth', authRoutes) // tell app to use authRoutes when we hit endpoints that contain /auth
app.use('/todos', todoRoutes)

app.listen(PORT, () => {
    console.log(`Server has started on port: ${PORT}`)
})
