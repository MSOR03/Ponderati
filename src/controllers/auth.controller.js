


//What does it?-> Asnwer to request 
import Reviews from '../models/user.model.js'

//Fuction create
export const create = async (req, res) => {
    const { identifier, review } = req.body
//Exception for connection to DB
    try {
        //Object
        const newReview = new Reviews({
                identifier,
                review
            });
        //Save object in dataBase
        await newReview.save();
        res.send("Created")
    } catch (error) {
        console.log(error)
    }
    
}
export const drop = (req, res) => res.send("Drop");