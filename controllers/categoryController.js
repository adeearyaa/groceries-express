const Category = require("..models/categories")
const asyncHandler = require("express-async-handler")

// going to make a list of function that the api endpoint will be calling


// home page wht the user sees when they first enter 
exports.index = asyncHandler(async(req,res,next)=> {

});

exports.categoryList = asyncHandler(async(req,res,next)=> {

});

// displays the info about each particular category
exports.categoryDetail = asyncHandler(async(req,res,next)=> {

});

// displays the form that will allow a new category to be added
exports.categoryCreateGet = asyncHandler(async(req,res,next)=> {

});

// handles the form submission and updated the database
exports.categoryCreatePost = asyncHandler(async(req,res,next)=> {

});

// displays the category delete form on get
exports.categoryDeleteGet = asyncHandler(async(req,res,next)=> {

});

// handles form submission of deleting a category
exports.categoryDeletePost = asyncHandler(async(req,res,next)=> {

});

// displays the form for updating a category
exports.categoryUpdateGet = asyncHandler(async(req,res,next)=> {

});

//handles the form submission for updating a category
exports.categoryUpdatePost = asyncHandler(async(req,res,next)=> {

});

