//define endpoints for authentication
import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import db from '../db.js'

const router = express.Router()

router.post('/register', (req, res) => { // defines route for handling user registration

})

router.post('/login', (req, res) => { // defines route for handling user login

})

export default router