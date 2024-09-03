const mongoose = require('mongoose');
 

const ChatSchema = new mongoose.Schema({
 
    img:  {type: String, required: true},
    name: {type: String, required: true},
    msg:  {type: String, required: true},
    time:  {type: Number},
    unread: {type: Number},
    pinned:  {type: String},
    online:  {type: String},

   

}, {timestamps: true});

// mongoose.models = {}
export default mongoose.models.Chat || mongoose.model('Chat' , ChatSchema);
 