//restaurant Owner middleware
require('dotenv').config();
async function restaurantOwnerMiddleware(req,res,next) {
    try {
        const token=req.headers['token'];
        if(token){
            const response=jwt.verify(token, process.env.JWT_SECRET_RESTAURANTOWNER);
            req.ownerId=response.id;
            next();
        }
    } catch (error) {
        res.status(401).json({
            message:"Unauthorized!",
            error:error
        })
    }
    
}

module.exports = restaurantOwnerMiddleware;