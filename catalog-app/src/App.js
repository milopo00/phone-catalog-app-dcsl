import Footer from "./components/Footer";
import Header from "./components/Header";
import axios from "axios";
import ListPhones from "./components/ListPhones";
import React, { useEffect, useState } from "react";
 
function App() {
  const [phone, setPhone] = useState({ data: [] });
  const [spinner, setSpinner] = useState(false);
  useEffect(() => {
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false)
    },1000)
    axios
      .get('phones.json')
      .then(response => setPhone(response))
  }, []);
  return (
    <div>
      <Header />
      <ListPhones spinner={spinner} phone={phone} />
      <Footer />
    </div>
  );
}
 
export default App;