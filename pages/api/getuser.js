 // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
 import User from "../../models/User.js"
 import connectDb from "./mongoose.js"
 import jsonwebtoken from "jsonwebtoken"
 
 const handler = async (req, res)=> {
     if(req.method == 'POST'){
         let token = req.body.token
         let user = jsonwebtoken.verify(token, process.env.JWT_SECRET )
         let dbuser = await User.findOne({email: user.email})
         console.log(dbuser)
         const{name, email } = dbuser
 
         res.status(200).json({name, email  })
     }
      else{
         
      }
     
     res.status(400).json({error: "error" })
   }
 
 export default connectDb(handler)
   