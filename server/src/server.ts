import { routes } from './routes';
import express from 'express'
import cors from 'cors'
import { appendFile } from 'fs';


const app = express()

app.use(express.json());

app.use(cors())

app.use(routes)

app.listen (3333,() => {

console.log("HTTP server running!!")

});
