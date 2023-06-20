import {Movie} from "../types/type";

function InfoCard(props: Partial<Movie>) {
    const {
        name,
        budgetInMillions,
        boxOfficeRevenueInMillions,
        academyAwardWins,
        academyAwardNominations,
        rottenTomatoesScore,
        overview,
    } = props;

    return (
        <div className="infoContainer">
            <h1>{name}</h1>
            <h3>
                💸 Budget: ${budgetInMillions} Mil · 💰 Revenue: ${boxOfficeRevenueInMillions} Mil
            </h3>
            <h3>
                🏆 Award: {academyAwardWins} · 📝 Nomination: {academyAwardNominations}
            </h3>
            <h3>🍅 Score: {rottenTomatoesScore}/100</h3>
            <section className="overview">{overview}</section>
        </div>
    );
}

export default InfoCard