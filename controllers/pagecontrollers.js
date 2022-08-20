const path = require('path');
// Home Page Controller
const homepageControllers =(req, res)=>{
    res.sendFile(path.join(__dirname, '../public/index.html'));
}

// Blog Page Controller
const blogpageControllers =(req, res)=>{
    res.sendFile(path.join(__dirname, '../public/blog.html'))
}

// Shop Page Controller
const shoppageControllers =(req, res)=>{
    res.sendFile(path.join(__dirname, '../public/shop.html'))
}


// Single Page Controller
const singleblogpageControllers =(req, res)=>{
    res.sendFile(path.join(__dirname, '../public/singleblog.html'))
}

module.exports = {
    homepageControllers,
    blogpageControllers,
    shoppageControllers,
    singleblogpageControllers
}

