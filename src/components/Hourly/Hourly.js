import React from 'react'
// import { BrowserRouter as Router, useParams } from "react-router-dom";
import HourCard from './HourCard';
import { useLocation } from "react-router-dom";

function Hourly(props){
    // let { nameofDay } = useParams();
    const { forecast } = props;
    console.log(forecast);
    const location = useLocation();
    var day = (location.pathname).substr(1);
    console.log(day);
  
      return (
        <>
          {forecast && (
            <div>
              <div className="cards">
                {forecast.filter(forecast => forecast.weekday == day).map((card) => (
                  <HourCard card={card} />
                ))}
              </div>
            </div>
          )}
        </>
      );
    
}
  
export default Hourly