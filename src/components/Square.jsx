// import { useState } from 'react';
function Square({ num, handleOnClick }) {

    // Lifting the state up

    // const [ value, setValue ] = useState('');
    // const handleOnClick = () => {
    //     // 'X' or 'O'
    //     // 'X' first
    //     // setValue('X');
    // }
    return (
        <button 
            onClick={handleOnClick}
            className="square"
        >
            {num}
        </button>
    )
}

export default Square;

// Component => button 
// Props => from App pass to Square