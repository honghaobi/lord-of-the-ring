import "../styles/characterCard.css";

function CharacterCard(props: { name: string, race: string, selected: boolean }) {
    return (
        <div data-testid="character-card"
             className={props.selected ? 'characterCard selected' : 'characterCard'}>
            <div className='name'>{props.name}</div>
            <div className='race'>{props.race}</div>
        </div>
    );
}

export default CharacterCard