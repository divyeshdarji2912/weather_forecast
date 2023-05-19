import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";


class Card extends Component {
  styles = {
    width: 170,
    backgroundColor: "#C0C0C0"
  };

  render() {

    const {
      date,
      month,
      time,
      temperatureHigh,
      temperatureLow,
      summary,
      icon,
      weekday
    } = this.props.card;
    // console.log(weekday);

    // let { nameofDay } = useParams();

    return (
      <div className="weather-card border card-container">
        <Link to={`/${weekday}`}>
        <div
          style={this.styles}
          className="border border-success"
          align="center"
        >
          <span>
            <h3 className="bg m-2 bg-dark rounded-pill">{date} {month}</h3>
          </span>
          <span className="bg m-2 bg-dark">{time}</span>
          <div className="category" align="center">
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={summary} title={summary} />
          </div>
          <div className="temperatures">
            <span className="badge minmax text-dark">Low: {temperatureLow}°C</span>
            <span className="badge minmax text-dark">High: {temperatureHigh}°C</span>
          </div>
        </div>
        
        <p className="m-2 ">
          <strong>{ summary}</strong>
        </p>
        </Link>
      </div>
    );
  }
}

export default Card;
