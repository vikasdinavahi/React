export default function Log({ turns }) {
    debugger
    return <ol id='log'>
        {turns.map((turn) =>(
            <li key={`${turn.square.row}${turn.square.col}`}>
                <h3> {turn.player} selected {turn.square.row}, {turn.square.col} </h3>
           
                <hr/> 
            </li>
              
        ))}

    </ol>
}