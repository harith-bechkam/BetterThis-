import React from "react";
import { BsCalendarEvent } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import "./SeminarCard.css";
const Cards = () => {
  const data = [
    {
      title: "Seminar",
      color: "#ffe4b3",
      items: [
        { text: "Lorem ipsum dolor sit amet, consectetur adipiscing", date: "03-08-2025" },
        { text: "Pellentesque ornare urna diam", date: "03-08-2025" },
        { text: "Nulla maximus quam id leo", date: "03-08-2025" }
      ]
    },
    {
      title: "Projects",
      color: "#b3f1f0",
      items: [
        { text: "Mauris at ultrices odio. Duis eget lorem" },
        { text: "Phasellus a molestie ipsum, eget rutrum" },
        { text: "Donec viverra nibh vitae odio varius" },
        { text: "Morbi pretium bibendum massa in aliquam" }
      ]
    },
    {
      title: "Course",
      color: "#eecaf8",
      items: [
        { text: "Donec viverra nibh vitae odio varius" },
        { text: "Mauris at ultrices odio. Duis eget lorem" },
        { text: "Morbi pretium bibendum massa in aliquam" },
        { text: "Phasellus a molestie ipsum, eget rutrum" }
      ]
    }
  ];

  return (
    <div className="cards-container1">
      {data.map((card, idx) => (
        <div className="card1" style={{ backgroundColor: card.color }} key={idx}>
          <h3>{card.title}</h3>
          {card.items.map((item, i) => (
            <div className="card-item1" key={i}>
              {item.date && <BsCalendarEvent className="icon" />}
              <span>{item.text}</span>
              {item.date && <p className="date">{item.date}</p>}
            </div>
          ))}
          <div className="explore">
            Explore more <FiExternalLink />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
