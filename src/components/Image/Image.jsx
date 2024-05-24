export default function Image({lives}) {
    return(<img src={`${process.env.PUBLIC_URL}/images/${lives}.png`} alt='hangman'/>);
}