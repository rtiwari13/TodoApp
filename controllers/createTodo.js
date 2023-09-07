const Todo = require("../models/Todo");

//route handler
exports.createTodo = async(req,res) =>{
    try{

        //extracting title and description from request body
        const{title,description} = req.body;

        //Create a new Todo object and insert in DB
        const response = await Todo.create({title,description});

        //json response with success status 
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry  in todo app is successfull'
            }
        );

    }

    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}