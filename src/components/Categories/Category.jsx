import data from '../../data/words.json';
import './Category.css';

const Category = ({select}) => {

    //console.log(data);
    const selectCategory = (name) => {
        select(name);
    }
    return(
        <div className='Category'>
            <h3>Categories: </h3>
            <ul>
                {data.map((e, key) => <li key={key}><button onClick={() => selectCategory(e.category)} className='category-button'>{e.category}</button></li>)}
            </ul>
        </div>
    );
}

export default Category;