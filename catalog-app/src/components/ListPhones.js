import { LinearProgress, Paper } from "@material-ui/core";
import React from "react";
import {Link } from "react-router-dom";

function ListPhones({ spinner, phone }) {
  console.log(phone);
  return (
    <Paper
      style={{
        margin: "20px auto",
        padding: "20px",
        maxWidth: "350px",
        position: "relative",
        backgroundColor: "pink",
      }}
    >
      {spinner ? (
        <LinearProgress />
      ) : (
        phone.data.map((item) => {
          return (
            <div style={{ display: "flex" }}>
              <img
                style={{ width: "125px" ,display: "flex", padding: "10px"}}
                src={item.imageFileName}
                alt={item.name}
              ></img>
              <div>
                <h4>
                  {item.name} 
                </h4>
                <p style={{ fontSize: "15px" }}>{item.price} €</p>
                <Link to={`/phone${item.id}`}><button >
                    More Info
                </button>
                </Link>
              </div>
            </div>
          );
        })
      )}
    </Paper>
  );
}

export default ListPhones;
