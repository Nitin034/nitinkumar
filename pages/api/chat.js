import Chat from "../../models/Chat.js"
import connectDb from "../../middleware/mongoose.js"

const handler = async (req, res)=> {
    if(req.method == 'POST'){
        // console.log(req.body)
    for (let i=0; i<req.body.length; i++){ 
        let p = new Chat({
            img: req.body[i].img,
            name: req.body[i].name,
            msg:  req.body[i].msg, 
            time: req.body[i].time,
            unread: req.body[i].unread,
            pinned: req.body[i].pinned, 
            online: req.body[i].online,
    
        })
         await p.save()
          
    }
    res.status(200).json({ success: "success"})
    }
    else{
        res.status(400).json({ error: "This method is not allowed"})
    }
   
  }

export default connectDb(handler)