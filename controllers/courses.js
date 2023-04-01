const Course = require("../model/coures")

exports.getcourse = async (req,res) => {
    try {
const courses = await Course.find({});
res.status(200).json({
    success: true,
    courses: courses
})
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
          });
    }
}