import {useEffect, useState} from "react";
import {raceImageDict} from "../utils/raceImgDict";
import "../styles/fullCharacterCard.css";
import {getQuote} from "../services/ringService";

type Props = {
    id: string;
    name: string;
    race: string;
    gender?: string;
    realm?: string;
}

function FullCharacterCard(props: Props) {
    const {id, name, race, gender, realm} = props;
    const [quote, setQuote] = useState<string>('')

    const fetchQuotes = async () => {
        const quotesData = await getQuote(`character/${id}/quote`);
        const quotes = quotesData.docs;
        if (quotes.length > 0) {
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)].dialog;
            setQuote(randomQuote);
        }
    }

    useEffect(() => {
        fetchQuotes()
    }, [id])

    return (
        <div className="fullCharCardContainer">
            <img className="charImg" src={raceImageDict[race]} alt={race}/>
            <h2>{name}</h2>
            <h3>
                🔮‍{race} · 🚻 {gender}
                {realm && <span> · 🌎 Realm: {realm}</span>}
            </h3>
            {quote && <h3>"{quote}"</h3>}
        </div>
    );
}

export default FullCharacterCard