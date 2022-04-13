import express,{Request, Response} from "express";
const router = express.Router();


import  Item  from "../../models/Item";

router.get("/",(req:Request,res:Response)=>{
    Item.find()
    .sort({date: -1})
    .then(items=>res.json(items))
})

router.post('/',(req:Request,res:Response)=>{
    const newItem = new Item({
        name: req.body.name
    })

    newItem.save()
    .then((item: any)=>res.json(item))
})


router.delete('/:id', (req:Request,res:Response)=>{
    Item.findById(req.params.id)
    .then(item=>item.remove().then(()=>res.json({success:true})))
    .catch(err=>res.status(404).json({success:false}))
})

export default router