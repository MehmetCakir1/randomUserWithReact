import Card from './components/Card';
import React,{ useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const url="https://randomuser.me/api/";

const App = () => {

  const [people,setPeople]=useState([]);
  const [loading,setLoading]=useState(true)
 
const getInfo = async ()=>{
  try{
    const {data}=await axios.get(url);
    setPeople(data.results[0])
    setLoading(false)
    

  }catch(error){
    console.log(error);
  }
}

  useEffect(() => {
      getInfo()
  }, [])
  
  if(!loading){
    return (
    <main>
      <div className="card">
        <Card people={people}/>
      </div>
      <div className="btn">
        <button onClick={()=>getInfo()}>Random User</button>
      </div>
    </main>
  )
  }
  
  };
export default App