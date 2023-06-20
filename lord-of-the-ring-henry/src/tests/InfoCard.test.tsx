import {render, screen} from '@testing-library/react';
import InfoCard from '../components/InfoCard';

describe('InfoCard', () => {
    test('renders movie information correctly', () => {
        const movie = {
            name: 'The Lord of the Rings: The Fellowship of the Ring',
            budgetInMillions: 93,
            boxOfficeRevenueInMillions: 888,
            academyAwardWins: 4,
            academyAwardNominations: 13,
            rottenTomatoesScore: 91,
            overview: 'An epic adventure of good versus evil.',
        };

        render(<InfoCard {...movie} />);

        const nameElement = screen.getByText(movie.name);
        const budgetElement = screen.getByText((content, element) => {
            const budgetRegex = /Budget:\s*\$\d+\s*Mil/;
            return budgetRegex.test(content);
        });
        const revenueElement = screen.getByText((content, element) => {
            const revenueRegex = /Revenue:\s*\$\d+\s*Mil/;
            return revenueRegex.test(content);
        });
        const awardElement = screen.getByText(/Award:\s*\d+/);
        const nominationElement = screen.getByText(/Nomination:\s*\d+/);
        const scoreElement = screen.getByText(/Score:\s*\d+\/100/);
        const overviewElement = screen.getByText(movie.overview);

        expect(nameElement).toBeInTheDocument();
        expect(budgetElement).toBeInTheDocument();
        expect(revenueElement).toBeInTheDocument();
        expect(awardElement).toBeInTheDocument();
        expect(nominationElement).toBeInTheDocument();
        expect(scoreElement).toBeInTheDocument();
        expect(overviewElement).toBeInTheDocument();
    });

    test('renders default values when props are not provided', () => {
        render(<InfoCard/>);

        const nameElement = screen.queryByText('undefined');
        const budgetElement = screen.queryByText('Budget: $undefined Mil');
        const revenueElement = screen.queryByText('Revenue: $undefined Mil');
        const awardElement = screen.queryByText('Award: undefined');
        const nominationElement = screen.queryByText('Nomination: undefined');
        const scoreElement = screen.queryByText('Score: undefined/100');
        const overviewElement = screen.queryByText('undefined');

        expect(nameElement).not.toBeInTheDocument();
        expect(budgetElement).not.toBeInTheDocument();
        expect(revenueElement).not.toBeInTheDocument();
        expect(awardElement).not.toBeInTheDocument();
        expect(nominationElement).not.toBeInTheDocument();
        expect(scoreElement).not.toBeInTheDocument();
        expect(overviewElement).not.toBeInTheDocument();
    });
});