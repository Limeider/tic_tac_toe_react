import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onNameChange,
}) {
  const [isEditing, setIsEditing] = useState(false); // initial value is false as we want to display span when button is not clicked
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onNameChange(symbol, playerName);
    }
  }

  function handleChangeEvent(e) {
    setPlayerName(e.target.value);
  }

  let editablePlayerName;
  let btnContent;

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        placeholder={playerName}
        onChange={handleChangeEvent}
        value={playerName}
        required
      />
    );
    btnContent = "Save";
  } else {
    editablePlayerName = <span className="player-name">{playerName}</span>;
    btnContent = "Edit";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnContent}</button>
    </li>
  );
}
