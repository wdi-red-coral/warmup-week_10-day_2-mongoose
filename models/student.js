'use strict'

//- import the 'mongoose' 
const mongoose = require ('mongoose')
// The new schema, here
    //- Create new Schema called 'studentSchema'
    const studentSchema = new mongoose.Schema({
        
            firstName:{
                type: String,
                required: true,
            },

            lastName:{
                type: String,
                required: true,
            
        },

        grade:{
            type: Number,
            required: true
        },

        age:{
            type: Number,
            min:18
        },
        
        city:{
            type: String
        }
    },{
        timestamps:true
    
  })

  const Student = mongoose.model("Student", studentSchema)
  module.exports = Student
    // * firstName - (String, required)
    // * lastName - (String, required)
    // * grade - (Number, required)
    // * age - (Number, Greater than or equal 18)
    // * city - (String)










    


// The model of the schema 




// Export the model 


