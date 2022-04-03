import "./App.css";
import * as React from "react";
import { CssBaseline, Container, Grid } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

function App() {
  const [user, setUser] = useState([
    {
      gender: "",
      picture: "",
      name: "",
      email: "",
      phone: "",
      location: "",
      registered: "",
    },
  ]);
  const [show, setShow] = useState(false);
  const baseUrl = "https://randomuser.me/api/";

  const getUser = async () => {
    axios(baseUrl).then(({ data }) => {
      setUser(data.results);
      setShow(true);
    });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="cardContainer">
        <div className="card">

      {show ?  <>
          <div className="card-data">
            <Grid container spacing={1}>
              <Grid item xs={5}>
                <img src={user[0].picture.large} className="image" alt="" />
              </Grid>
              <Grid item xs={7}>
                <p>
                  {user[0].name.title} {user[0].name.first} {user[0].name.last}{" "}
                </p>
              </Grid>
            </Grid>
          </div>
          <div className="card-data">
            <Grid container spacing={1}>
              <Grid item xs={5}>
                <ContactMailOutlinedIcon
                  sx={{ fontSize: 40, color: "secondary", ml: 6 }}
                />
              </Grid>
              <Grid item xs={7}>
                <p>{user[0].email}</p>
              </Grid>
            </Grid>
          </div>
          <div className="card-data">
            <Grid container spacing={1}>
              <Grid item xs={5}>
                <LocalPhoneOutlinedIcon
                  sx={{ fontSize: 40, color: "secondary", ml: 6 }}
                />
              </Grid>
              <Grid item xs={7}>
                <p>{user[0].phone}</p>
              </Grid>
            </Grid>
          </div>
          <div className="card-data">
            <Grid container spacing={1}>
              <Grid item xs={5}>
                <LocationOnOutlinedIcon sx={{ fontSize: 40, ml: 6 }} />
              </Grid>
              <Grid item xs={7}>
                <p>
                  {user[0].location.city}/ {user[0].location.country}
                </p>
              </Grid>
            </Grid>
          </div>
          <div className="lasts-card">
            <p>Age: {user[0].registered.age}</p>
            <p>Register Date: {user[0].registered.age}</p>
          </div>
          </> : 
         <h3 style={{textAlign: "center"}}>
           Click the button to read any user information
         </h3> 
      }
        </div>
        <div className="buttonContainer">
          <button className="button" onClick={getUser}>
            Random User
          </button>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;
