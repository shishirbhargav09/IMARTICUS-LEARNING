const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
  course_name: String,
  course_img: String,
  chapters: [{
     chapter_name: String,
     lectures : [
        {
            lecture_name : String
        }
     ]
    
    }],
});
module.exports = mongoose.model("course", courseSchema);