import "../styles/characterCard.css";

function CharacterCard(props: { name: string, race: string, selected: boolean }) {
    const {name, race, selected} = props
    return (
        <div data-testid="character-card"
             className={selected ? 'characterCard selected' : 'characterCard'}>
            <div className='name'>{name}</div>
            <div className='race'>{race}</div>
        </div>
    );
}

export default CharacterCard