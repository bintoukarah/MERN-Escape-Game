import  express  from "express";
const router = express.Router();
import Room from "../models/booking.js" 


// **Create**/////////////////////////////////////////////////////
router.post("/", async (req, res) => {
try {
const newBooking= new Booking({
  type : req.body.type,
  required: req.body.required,
  maxLenght: req.body.maxLenght,
  minLenght: req.body.minLenght,
});

await newBooking.save();
res.json({ message: "Created" });
} catch (error) {
res.status(400).json({ error: error.message });
}
});

// **ReadAll**/////////////////////////////////////////////////////
router.get("/", async (req, res) => {
try {
const booking = await Booking.find();
res.json(booking);
} catch (error) {
res.status(400).json({ error: error.message });
}
});

// **ReadId**/////////////////////////////////////////////////////////
router.get("/:id", async (req, res) => {
try {
const booking = await Booking.findById(req.params.id);
res.json(booking);
} catch (error) {
res.status(400).json({ error: error.message });
}
});

//**Update**//////////////////////////////////////////////////////////
router.put('/:id', async (req, res) => {
let updates = req.body // nous definissons une variable égale à l'ensemble du req.body
try {
if(await Booking.findByIdAndUpdate({_id:req.params.id},updates,{new:true})){
  res.json({ message: "Updated" });
} else {
  res.status(400).json({ message: "Missing id" });
}
} catch (error) {
res.status(400).json({ error: error.message });
}
});

// **DeleteId**////////////////////////////////////////////////////////
router.delete('/:id', async (req, res) => {
const id = req.params.id;

try {
if(await Booking.findByIdAndDelete({_id:req.params.id})){
  res.json({ message: "Removed" });
} else {
  res.status(400).json({ message: "Missing id" });
}
} catch (error) {
res.status(400).json({ error: error.message });
}
});

// **DeleteAll**
router.delete('/', async (req, res) => {
try {
if(await Booking.deleteMany()){
  res.json({ message: "Deleted Collection " });
} else {
  res.status(400).json({ message: "Missing id" });
}
} catch (error) {
res.status(400).json({ error: error.message });
}
});

export default router



