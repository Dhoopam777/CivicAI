import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const complaintSchema = new mongoose.Schema({

  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },

  city:{
    type:String,
    required:true
  },

  state:{
    type:String,
    required:true
  },

  address:{
    type:String,
    required:true
  },

  description:{
    type:String,
    required:true
  },

  category:{
    type:String,
    default:"General"
  },

  image: {
  type: String,
  },
  
  priority:{
    type:String,
    default:"Low"
  },

  location:{
    lat:Number,
    lng:Number
  },

  status:{
    type:String,
    default:"New"
  },

  upvotes: { type: Number, default: 0 },

  comments: [commentSchema]

},{timestamps:true})

const Complaint = mongoose.model("Complaint",complaintSchema)

export default Complaint