import React from 'react'
import Card from "../Card/Card";

function Home() {
  const data = [
    {title: "Kashmir" , imageURL : "photo.jfif" , body :"Nanga Parbat in Kashmir, the ninth-highest mountain on Earth, is the western anchor of the Himalayas" },
    {title: "Goa" , imageURL : "photo6.jpg" , body :"Goa is a state on the southwestern coast of India within the Konkan region, geographically separated from the Deccan highlands by the Western Ghats." },
    {title: "Mumbai" , imageURL : "photo5.jpg" , body :"Mumbai has the highest number of millionaires and billionaires among all cities in India." },
    {title: "Kanyakumari" , imageURL : "photo7.jpg" , body :"Kanyakumari is a coastal town in the state of Tamil Nadu on India's southern tip. Jutting into the Laccadive Sea, the town was known as Cape Comorin during British rule and is popular for watching sunrise and sunset over the ocean"}
  ];

  return (
   <div>  
      <div className='cards'> 
      <div className='d-flex flex-row flex-wrap'>

        {
          data.map((singleElement) => (
            <Card  {...singleElement} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home