import Image from '../Image/Image';
import { useState, useEffect } from 'react';
import './GameField.css';

export default function GameField({ answer, word, wordOut }) {
    const [lives, setLives] = useState(7);
    const [disabledButtons, setDisabledButtons] = useState({});

    // Ensure all buttons are enabled when the component is first rendered
    useEffect(() => {
        setDisabledButtons({});
        setLives(7);
    }, [answer]);

    const checkLetter = (key, button) => {
        button.setAttribute('disabled', 'true');

        // Update the disabled buttons state
        setDisabledButtons(prev => ({ ...prev, [key]: true }));

        if (answer.includes(key)) {
            let arrId = [];
            answer.split('').forEach((char, index) => {
                if (char === key) arrId.push(index);
            });
            let newWordOut = wordOut.split('');
            arrId.forEach(index => {
                newWordOut[index] = key;
            });
            word(newWordOut.join(''));
        } else {
            /*setLives(lives - 1);
            if(lives === 1){
                
            }*/
            if(lives > 2){
                setLives(lives-1);
            }else{
                setLives(lives-1);
                alert("lose");
            }
        }
        
    };

    return (
        <div className='GameField'>
            <Image lives={lives} />
            
            <div className='group-buttons'>
                {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => (
                    <button
                        key={letter}
                        onClick={(e) => checkLetter(letter, e.target)}
                        disabled={disabledButtons[letter]}
                    >
                        {letter}
                    </button>
                ))}
            </div>
        </div>
    );
}
