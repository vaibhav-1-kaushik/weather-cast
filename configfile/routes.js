const Express = require("express");
const Axios = require("axios");
const path = require("path");
const body_parser =require("body-parser")

const app = Express();


app.set("view engine", "ejs");
app.set("views", "../views")

app.use(body_parser.urlencoded({extended:true}))
app.use(Express.json())
app.use(body_parser.json());
app.use("/static", Express.static(path.join(__dirname, "../interface")));




// const filepath = path.join(__dirname, "../views", 'index.ejs')
 
app.get("/", (req, res,next) => {
    res.render("index", { weather: null, error: null })
    next()

})
const env = "8e579fbb6d0dc23f7aee1fe6fb51d5a3";

app.get("/weather", async (req, res) => {
    const location =  req.query.location;
    console.log(location)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${env}`
    
    console.log(url)
    let error, weather
    // const weatherdata = async()=>{ let v = await Axios.get(url)
    //     return  await v
    // }
    // console.log(weatherdata());
    try {
       const weatherdata = await Axios.get(url)
        weather = weatherdata.data;
        console.log(weather)
    } catch (error) {
        weather = null;
        console.log(weather)
        error = "try sometime later, server is taking time /or check youur internet connection"
    }
    res.render("index", { weather, error })
})


app.listen(5000)

// let Data={location:"vaibhav"}
// body=JSON.stringify(Data)
// console.log(
//     Data.location

// );
// console.log(JSON.stringify(Data));