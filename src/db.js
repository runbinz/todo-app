// logic for database (sqlite)
import { DatabaseSync } from 'node:sqlite' //DatabseSync is used to work with Sqlite databases
const db = new DatabaseSync(':memory:') //Tells Sqlite to create database in memory

// Execute SQL statements from strings
db.exec(`
    CREATE TABLE user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT
    )
    `) 

db.exec(`
    CREATE TABLE todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        task TEXT,
        status BOOLEAN DEFAULT 0,
        FOREIGN KEY(user_id) REFERENCES users(id)
    )
    `)

export default db // allows other files to use this file