
import express from "express";
import  bodyParser from "body-parser";
// import dotenv from "dotenv";


const app = express();
// dotenv.config();
app.use(express.json());


const courses = [
    
        {id:1, name: "course1"},
        {id:2, name: "course2"},
        {id:3, name: "course3"},   
]



app.get("/", (req, res)=>{
    res.send("Hello, my geee!");
});

app.get("/api/courses", (req, res)=>{
    res.send(courses);
});

app.get("/api/courses/:id", (req, res)=>{
    const course = courses.find(c=>c.id === parseInt(req.params.id));
    if(!course){
        res.send("course doesnt exist")
    }else{
        res.send(course);
    }
})


const port = process.env.PORT || 5000 ;
app.listen(port, ()=>{
    console.log(`Server started on port ${port} BOSS`);
});
