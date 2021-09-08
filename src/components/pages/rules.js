import React from "react";
import Cookies from "js-cookie";

import resetGame from "../../scripts/resetGame";

export default function rules(props) {
  if (!Cookies.get("username")) {
    props.history.push("/");
  }

  const handleNewGame = () => {
    const resetData = resetGame(props.user.id);

    if (resetData.error) {
      props.handleSetError(resetData.error);
    } else {
      props.handleSetUser(resetData);
      props.history.push("/game");
    }
  };

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
        {props.user.existing_game ? (
          <button onClick={handleNewGame()}>New Game</button>
        ) : null}
      </div>
    </div>
  );
}
