import { sql } from "@vercel/postgres"

export default async function handler(req, res){

    if (req.method == "POST"){
        const {name, species, age} = req.body

        await sql `INSERT INTO pets (
            name, species, age
        ) VALUES (
            ${name}, ${species}, ${age}
        )`
    }

    const {rows} = await sql `SELECT * FROM pets`

    res.status(200).json({
        method: req.method,
        hello: "World", 
        env: process.env.JWT_SECRET
    })
}