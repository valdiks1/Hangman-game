import { useState } from "react";
import Category from '../../components/Categories/Category';
import Word from '../../components/Word/Word';
//import GameField from "../../components/GameField/GameField";
import data from '../../data/words.json';

const Game = () => {

    const [category, setCategory] = useState('');
    let word;

    if(category !== ''){
        const words = data.filter((e) => e.category === category)[0].array;
        const randomNum = Math.floor(Math.random() * words.length);
        word = words[randomNum];
    }

    return(
        <div className="container">
            <Category select={setCategory}/>
            {(category !== '') && <Word word={word} />}
            
            
            
        </div>
    );
}

export default Game;