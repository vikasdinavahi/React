import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        //Best pratice way
        //import concept to update state using the function form, you will have gureent by react, 
        // that you will always have the latest updated value
        setIsEditing(editing => !editing);
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
        // setIsEditing(!isEditing ); // => schedules a state update to true
        // setIsEditing(!isEditing ); // we expect false but react schedules a state update to still true
    };

    function handleChange(event) {
        setPlayerName(event.target.value);
    }


    let editablePlayerName = <span className="player-name">{playerName}</span>
    //let btnCaption = 'Edit';
    if (isEditing) {
        editablePlayerName = <input type='text' required Value={playerName} onChange={handleChange} />
        //btnCaption = 'Save'
    }
    return (

        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
                <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
            </span>

        </li>

    );
}