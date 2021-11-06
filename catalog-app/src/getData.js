
const getData=()=>{
  return(
  fetch('phones.json'
  ,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  }
  ).then((response) => response.json())
  )}
export default getData;