const router = require("express").Router();
const instructor = require("../../controllers/instructorController");

//matches with "/api/instructors" 
router.route("/")
    .get(instructor.getAll)
    .post((data)=>instructor.add(data));

router.route('/new-add/:courseId')
  .post((req,res)=>{
      let course =req.params.courseId;
      let newInst = req.body

      instructor.makeAndAdd(newInst,course,res)

  })

router.route("/:id")
    .get((req,res)=>{
        console.log('instructor to get is '+req.params.id)
        instructor.getOne(req.params.id,res)
    })
    .delete((req,res)=>{
        instructor.delete({"_id":req.params.id})
    })
    .put((req,res)=>{
        let {newValue,whatToChange} = req.body[0]
    
        let filter={_id:req.params.id}
        let update={[whatToChange]:newValue}
        
        instructor.update(filter,update);
      })



module.exports=router;