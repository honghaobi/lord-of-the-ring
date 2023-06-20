import "../styles/fullCharacterCard.css";
import {raceImageDict} from "../utils/raceImgDict";

type Props = {
    id: string;
    name: string;
    race: string;
    gender?: string;
    realm?: string;
}
function FullCharacterCard(props: Props) {
    const {id, name, race, gender, realm} = props;
    return <div className='fullCharCardContainer'>
        <img className='charImg' src={raceImageDict[race]} alt={race}/>
        <h2>{name}</h2>
        <h3>🔮‍{race} · 🚻 {gender} {realm && <span> · 🌎 Realm: {realm}</span>}</h3>
    </div>;
}

export default FullCharacterCard