import React from "react";
import Cookies from "js-cookie";

export default function rules(props) {
  if (!Cookies.get("username")) {
    props.history.push("/");
  }
  return (
    <div className="">
      <h3>Rules of the Game</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam quam
        aspernatur impedit amet quia incidunt blanditiis fugit commodi nisi
        praesentium voluptatem consequuntur cumque molestiae velit, quos,
        officiis odit! Nesciunt, labore.
      </p>
      <div className="buttons-wrapper">
        <button onClick={() => props.history.push("/game")}>
          {props.user.existing_game ? "Continue Game" : "Play!"}
        </button>
        {props.user.existing_game ? <button>New Game</button> : null}
      </div>
    </div>
  );
}
