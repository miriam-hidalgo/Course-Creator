const db = require("../models/index");

module.exports = {
    new:function(data,response){
        db.attendance.create(data)
        .then(result=>{
            if(result.course){
                let course=result.course
                db.course.findByIdAndUpdate(course,{$addToSet:{"attendanceRecords":result._id}},{new:true})
                .then(result=>{
                    if(result.attendanceRecords){
                        response.send({success:result})
                    }else{
                        response.send({error:'Attendance could not be added to course records'})
                    }
                })
                .catch(error=>{
                    response.send({error:error})
                })
            }else{
                response.send({error:'attendance could not be added'})
            }
        })
        .catch(error=>{
            console.log(`you tried making an attendance object, but it's invalid: ${error}`)
        })
    },
    getAllFromCourse:function(req,res){
        // db.attendance.findById(req)
        // // .sort({ date: -1 })
        // .then(dbModel => res.json(dbModel))
        // .catch(err => res.status(422).json(err));
    },
    delete:function(idToDelete){
        // db.user.remove({_id:idToDelete})
        // .then(result=>{console.log("user deleted! "+result)})
    },
    update:function(filter,update,res){
        // console.log(filter,update)
        // db.user.findOneAndUpdate(filter,update)
        // .then(result=>console.log(result))
        // // .then(this.getAll(""))

    }
};
