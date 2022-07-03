import React from "react";
import "./card.css";
import Email from "../assets/email.svg";
import Loc from "../assets/location.svg";
import Phone from "../assets/phone.svg";


const Card = ({people}) => {
    const{
        picture:{medium},
        name:{title,first,last},
        email,
        phone,
        location:{country,city},
        dob:{age},
        registered:{date},
    }=people;
  return (
    <div >
        <div className="picture" >
            <div>
                <img src={medium} alt={first} />
            </div>
            <div>
                <h3>{title} {first} {last}</h3>
            </div>
        </div>
        <div className="email">
            <div>
                <img src={Email} alt="email" /> 
            </div>
            <p>{email}</p>
        </div>
        <div className="phone">
            <div>
                <img src={Phone} alt="phone" /> 
            </div>
            <p>{phone}</p>
        </div>
        <div className="location">
            <div>
                <img src={Loc} alt="location" /> 
            </div>
            <p>{city} / {country}</p>
        </div>
        <div className="age">
            <p>Age: {age}</p>
        </div>
        <div className="date">
            <p>Register Date: {date.slice(0,10)}</p>
        </div>
    </div>
  )
}


export default Card