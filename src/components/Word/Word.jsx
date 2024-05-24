//import data from '../../data/words.json';
import { useState } from 'react';
import { useEffect } from 'react';
import GameField from '../GameField/GameField';

import './Word.css';

const Word = ({word}) => {
    
    const [wordOutput, setWordOutput] = useState('');

    useEffect(() => {
        let str = '';
        for(let i = 0; i < word.length; i++){
            str += '_';
        }
        setWordOutput(str);
    }, [word]);
    

    return(
        <>
        <div className='Word'>
            <span className='word-output'>{wordOutput}</span>
            
            
        </div>
        <GameField answer={word.toUpperCase()} word={setWordOutput} wordOut={wordOutput} />
        </>
    );
}

export default Word;