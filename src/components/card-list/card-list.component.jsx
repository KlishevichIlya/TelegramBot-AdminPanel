import React from "react";
import "./card-list.styles.css";
import {Card} from "../card/card.component";

export const CardList = props => (
  <div className="card-list">
    {
      props.users.map(user => (
          <Card key={user.userId} user={user} />
    ))}
  </div>
);