import React, { Component } from "react";
import Card from "./Card";
// import weatherData from "../../weather.json";
class Cards extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { cards } = this.props;

    return (
      <>
        {cards && (
          <div>
            <div className="cards">
              {cards.map((card) => (
                <Card card={card} />
              ))}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Cards;
