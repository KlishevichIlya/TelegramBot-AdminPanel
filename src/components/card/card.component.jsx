import React from "react";
import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
      <img alt="Avatar" src={`https://avatars.dicebear.com/api/micah/${props.user.userId}.svg`}/>
      <h2>{props.user.userName}</h2>
      <p>{props.user.dateOfStartSubscription.split("T")[0]}</p>
      {props.user.isUnsubscribe
          ? <b>Subscriber</b>
          : <b>Not a subscriber</b>
      }





  </div>
);