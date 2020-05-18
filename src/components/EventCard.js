import React from "react";
import { Link } from "react-router-dom";
import "../styles/event-card.css";

const EventCard = ({ currentEvent, inFavorites, toggleFavorites }) => {
  return (
    <div className="shadow card-wrapper">
      <div className="card-content">
        <img
          src={currentEvent.image || `https://picsum.photos/600?random&t=${Date.now()}`}
          alt="image not found"
          className="card-image"
        />
        <div className={"column"}>
          <h2>
            <Link to={`/events/${currentEvent.slug}`}>
              {currentEvent.title}
            </Link>
          </h2>
          <div className="small-view-price">
            Цена:
            {currentEvent.is_free ? (
              <div className="free"> Бесплатно</div>
            ) : (
              <div className="cost"> {currentEvent.price} ₽</div>
            )}
          </div>
          <div>{currentEvent.description}</div>
          <div className="row badges">
            {currentEvent.categories.map((category) => (
              <div className="badge" key={category}>
                {category}
              </div>
            ))}
            <div
              className={`star ${inFavorites ? "in_favorites" : ""}`}
              onClick={() => toggleFavorites(currentEvent.id)}
            >
              &#10029; {inFavorites ? "В избранном" : "В избранное"}
            </div>
          </div>
        </div>
        <div className="price">
          {currentEvent.is_free ? (
            <div className="free">FREE</div>
          ) : (
            <div className="cost">{currentEvent.price} ₽</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
