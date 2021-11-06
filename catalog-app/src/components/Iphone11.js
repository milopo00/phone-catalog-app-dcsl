import React,{useState,useEffect} from 'react';
import { Paper } from "@material-ui/core";
import {Link } from "react-router-dom";
import getP from "../getData"
import * as ReactBootStrap from 'react-bootstrap';
 
   function Iphone11() {
    const [data,setData]=useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      },1000)
      getP().then((details) => setData(details));
    },[])
     
    
      return (
        <div className="Iphone11">{
            
            data && data.length>0 && data.slice(1,2).map((item,index)=>
            <ul>
                {loading ? (<ReactBootStrap.Spinner animation="border" />) : (
                <Paper
                    style={{
                    margin: "20px auto",
                    padding: "20px",
                    maxWidth: "350px",
                    position: "relative",
                    backgroundColor: "pink",
                }} >
                <p>Phone Details:</p>
                <img 
                    style={{
                        width: "150px",
                        margin: "10px 20px 0 0",
                      }}
                    src={item.imageFileName} 
                    alt={item.name} />
                <div>
                    <h2>{item.name}</h2>
                </div>
                <p style={{textDecorationLine: 'underline',fontWeight: 'bold'}}>Characteristics:</p>
                    <li>Manufacturer: {item.manufacturer}</li>
                    <li>Description: {item.description}</li>
                    <li>Color: {item.color}</li>
                    <li>Price: {item.price}€</li>
                    <li>Screen: {item.screen}</li>
                    <li>Processor: {item.processor}</li>
                    <li>Ram: {item.ram}GB</li>
                <Link to="/"><p></p><button>
                    Home
                </button>
                </Link>
                </Paper>
            )}    
            </ul>
            )}
        </div>
   );
   }
  export default Iphone11;