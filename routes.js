var express = require("express");

var router = express.Router();


router.get("/", function(req,res){
    //console.log("Hello im on the start page");
    res.render("index", {title: "Homepage", styleFile: "index.css", mainFile: "main.css"});
});


router.get("/AS/", function(req,res){
    //console.log("Hello im on the AS page");
    res.render("as", {title: "AS | Techbulle", styleFile: "index.css", mainFile: "main.css"});
});

router.get("/ALevel/", function(req,res){
    //console.log("Hello im on the A Level page");
    res.render("alevel", {title: "A Level | Techbulle", styleFile: "index.css", mainFile: "main.css"});
});


// AS
router.get("/AS/asMaths", function(req,res){
    //console.log("Hello im on the AS Maths page");
    res.render("AS/asMaths", {title: "AS Maths | Techbulle", styleFile: "/index.css", mainFile: "/main.css"});
});

router.get("/AS/asPhysics", function(req,res){
    //console.log("Hello im on the AS Physics page");
    res.render("AS/asPhysics", {title: "AS Physics | Techbulle", styleFile: "/index.css", mainFile: "/main.css"});
});

router.get("/AS/asEcon", function(req,res){
    //console.log("Hello im on the AS Econ page");
    res.render("AS/asEcon", {title: "AS Economics | Techbulle", styleFile: "/index.css", mainFile: "/main.css"});
});

// A Level
router.get("/ALevel/Maths", function(req,res){
    //console.log("Hello im on the AS Maths page");
    res.render("ALevel/Maths", {title: "AS Maths | Techbulle", styleFile: "/index.css", mainFile: "/main.css"});
});

router.get("/ALevel/Physics", function(req,res){
    //console.log("Hello im on the AS Physics page");
    res.render("ALevel/Physics", {title: "AS Physics | Techbulle", styleFile: "/index.css", mainFile: "/main.css"});
});

router.get("/ALevel/Econ", function(req,res){
    //console.log("Hello im on the AS Econ page");
    res.render("ALevel/Econ", {title: "AS Economics | Techbulle", styleFile: "/index.css", mainFile: "/main.css"});
});

module.exports = router;
