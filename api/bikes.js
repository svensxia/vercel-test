

export default async function handler(req, res){
    //OBS ta bort 1==2 för att de ska funka sen
    if (req.method == "POST"){
        res.status(200).json({status: "created new bike"})
    }
    try {
        if(req.method == "GET"){
            res.status(200).json({
                brand: "Crecent", price: 200,
                brand: "Toshiba", price: 450
            })
    } 
    
    } catch (error) {
        res.json({error: error})
    }

    const {rows} = await sql `SELECT * FROM pets`

    res.status(200).json({
        method: req.method,
        hello: "World", 
        env: process.env.JWT_SECRET,
        pets: rows
    })
}