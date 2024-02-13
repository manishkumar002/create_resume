
const express=require("express");
const port=process.env.PORT || 8000;
const con=require('./config')
const app=express()
const cors = require("cors");
app.use(express.json())
app.use(cors());

const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;

const clientid = "1030941327532-mottsr2tfn4th7tk29unbt9sbcsflb0p.apps.googleusercontent.com"
const clientsecret = "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"




app.get("/template",(req,resp)=>{
    const id = req.query.key;
    const email = req.query.email;
    console.log(email)
    if(id){
    con.query(`SELECT * FROM template WHERE template.id = ${id};`,(err,result)=>{
      if (err) throw err;
      resp.send(result);
        
      }) 
    }else{
      con.query(`SELECT * FROM basicinfo WHERE basic_email= ${email};`,(err,result)=>{
        if (err) throw err;
        resp.send(result);
    })
  }
})





// app.get("/template",(req,resp)=>{
//   const id = req.query.key;
//   const email = req.query.email;
//   console.log(email)
//   if(id){
//   con.query(`SELECT * FROM template WHERE template.id = ${id};`,(err,result)=>{
//     if (err) throw err;
//     resp.send(result);
      
//     }) 
//   }else{
//     con.query(`SELECT *
//     FROM basicinfo
//     LEFT JOIN Experiences ON basicinfo.basicinfo_id = Experiences.id
  
//     WHERE basicinfo.basic_email = '${email}';
//     `,(err,result)=>{
//       if (err) throw err;
//       resp.send(result);
//   })
// }
// })

// LEFT JOIN Education ON basicinfo.basicinfo_id = Education.education_id
// LEFT JOIN Refrences ON basicinfo.basicinfo_id = Refrences.refrences_id
// LEFT JOIN Expertise ON basicinfo.basicinfo_id = Expertise.expertise_id
// LEFT JOIN Achievements ON basicinfo.basicinfo_id = Achievements.achievements_id
// LEFT JOIN Languages ON basicinfo.basicinfo_id = Languages.languages_id 
// LEFT JOIN Certification ON basicinfo.basicinfo_id = Certification.certification_id
// LEFT JOIN Interests ON basicinfo.basicinfo_id = Interests.interest_id 


app.post("/register", (req, resp) => {
    const data = req.body;
    con.query("INSERT INTO userregister SET ?", data, (err, result, fields) => {
        if (err) throw err;
        resp.send(result);
    });
});




app.post('/login', (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    con.query("SELECT * FROM userregister WHERE email = ? AND password = ?", [email, password], function (error, result, fields) {
      if (error) {
        console.error(error);
        return res.status(500).json({
          success: false,
          message: "An error occurred during login.",
          error: error.message,
        });
      }

      if (result.length > 0) {
        const user = result[0]; 
        return res.status(200).json({
          code: 200,
          message: "User login successful",
          data: {
            _id: user.id,
            email: user.email,
          },
          error: false,
          status: true,
        });
      } else {
        return res.status(404).json({
          code: 404,
          message: "Invalid user details, try again.",
          data: [],
          error: false,
          status: false,
        });
      }
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "An error occurred during login.",
      error: err.message,
    });
  }
});






app.post("/basicinfo", (req, resp) => {
  const data = req.body;
  con.query("INSERT INTO basicinfo SET ?", data, (err, result, fields) => {
      if (err) throw err;
      resp.send(result);
      console.log(result)
  });
});


app.post("/experience", (req, resp) => {
  const data = req.body;
  con.query("INSERT INTO Experiences SET ?", data, (err, result, fields) => {
      if (err) throw err;
      resp.send(result);
      console.log(result)
  });
});


app.post("/education", (req, resp) => {
  const data = req.body;
  con.query("INSERT INTO Education SET ?", data, (err, result, fields) => {
      if (err) throw err;
      resp.send(result);
      console.log(result)
  });
});


app.post("/refrence", (req, resp) => {
  const data = req.body;
  con.query("INSERT INTO Refrences SET ?", data, (err, result, fields) => {
      if (err) throw err;
      resp.send(result);
      console.log(result)
  });
});

app.post("/expertis", (req, resp) => {
  const data = req.body;
  con.query("INSERT INTO Expertise SET ?", data, (err, result, fields) => {
      if (err) throw err;
      resp.send(result);
      console.log(result)
  });
});

app.post("/achievements", (req, resp) => {
  const data = req.body;
  con.query("INSERT INTO Achievements SET ?", data, (err, result, fields) => {
      if (err) throw err;
      resp.send(result);
      console.log(result)
  });
});



app.post("/language", (req, resp) => {
  const data = req.body;
  con.query("INSERT INTO Languages SET ?", data, (err, result, fields) => {
      if (err) throw err;
      resp.send(result);
      console.log(result)
  });
});




app.post("/certification", (req, resp) => {
  const data = req.body;
  con.query("INSERT INTO Certification SET ?", data, (err, result, fields) => {
      if (err) throw err;
      resp.send(result);
      console.log(result)
  });
});



app.post("/interest", (req, resp) => {
  const data = req.body;
  con.query("INSERT INTO  Interests SET ?", data, (err, result, fields) => {
      if (err) throw err;
      resp.send(result);
      console.log(result)
  });
});


// app.get("/basicinfos",(req,resp)=>{
  // con.query(`SELECT * FROM basicinfo`,(err,result)=>{
  //   if (err) throw err;
  //   resp.send(result);
      
//     }) 
// })



// <-------------------------------------------------------------start Google Login------------------------------------------------------------->
app.use(cors({
  origin:"http://localhost:3000",
  methods:"GET,POST,PUT,DELETE",
  credentials:true
}));
app.use(express.json());

// setup session
app.use(session({
  secret:"YOUR SECRET KEY",
  resave:false,
  saveUninitialized:true
}))

// setuppassport
app.use(passport.initialize());
app.use(passport.session());

// passport.use(
//   new OAuth2Strategy({
//       clientID:clientid,
//       clientSecret:clientsecret,
//       callbackURL:"/auth/google/callback",
//       scope:["profile","email"]
//   },
//   async(accessToken,refreshToken,profile,done)=>{
//       try {
//           let user = await userregister.findOne({googleId:profile.id})

//           if(!user){
//             user = new userregister({
//               Id:profile.id,
//               name:profile.displayName,
//               email:profile.emails[0].value,
//           });

//               await user.save();
//           }

//           return done(null,user)
//       } catch (error) {
//           return done(error,null)
//       }
//   }
//   )
// )



passport.use(
  new OAuth2Strategy(
    {
      clientID: 'your_client_id',
      clientSecret: 'your_client_secret',
      callbackURL: '/auth/google/callback',
      scope: ['profile', 'email'],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const query = 'SELECT * FROM userregister WHERE googleId = ?';
        const [rows] = await con.query(query, [profile.id]);

        let user = rows[0];

        if (!user) {
          const insertQuery =
            'INSERT INTO userregister (Id, name, email) VALUES (?, ?, ?)';
          const [result] = await con.query(insertQuery, [
            profile.id,
            profile.displayName,
            profile.emails[0].value,
          ]);

          user = {
            Id: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
          };
        }

        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user,done)=>{
  done(null,user);
})

passport.deserializeUser((user,done)=>{
  done(null,user);
});

// initial google ouath login
app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}));

app.get("/auth/google/callback",passport.authenticate("google",{
  successRedirect:"http://localhost:3000/",
  failureRedirect:"http://localhost:3000/Singnup"
}))

app.get("/login/sucess",async(req,res)=>{

  if(req.user){
      res.status(200).json({message:"user Login",user:req.user})
  }else{
      res.status(400).json({message:"Not Authorized"})
  }
})


// <-------------------------------------------------------------end Google Login------------------------------------------------------------->






app.listen(port,()=>{
    console.log("sever is runing "+port)
})


//SELECT `t`.`id`, `t`.`html`,`u`.`name`, `u`.`email`, `u`.`number`, `u`.`jobpostion` FROM `template` `t` JOIN `user` `u` WHERE `t`.`id` = 2 AND `u`.`id` = 2;

