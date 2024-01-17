// Filename is endpoint url name
export default function handler(req, res){
    req.status(200).json({
        method: req.method,
        hello: "World"
    })
}