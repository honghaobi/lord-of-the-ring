import {render, screen} from '@testing-library/react';
import CharacterCard from '../components/CharacterCard';

describe('CharacterCard', () => {
    test('renders character name and race', () => {
        const name = 'Frodo Baggins';
        const race = 'Hobbit';
        const selected = false;
        render(<CharacterCard name={name} race={race} selected={selected}/>);

        const nameElement = screen.getByText(name);
        const raceElement = screen.getByText(race);

        expect(nameElement).toBeInTheDocument();
        expect(raceElement).toBeInTheDocument();
    });

    test('renders character card as selected when selected prop is true', () => {
        const name = 'Frodo Baggins';
        const race = 'Hobbit';
        const selected = true;
        render(<CharacterCard name={name} race={race} selected={selected}/>);

        const characterCard = screen.getByTestId('character-card');
        expect(characterCard).toHaveClass('selected');
    });

    test('renders character card as not selected when selected prop is false', () => {
        const name = 'Frodo Baggins';
        const race = 'Hobbit';
        const selected = false;
        render(<CharacterCard name={name} race={race} selected={selected}/>);

        const characterCard = screen.getByTestId('character-card');
        expect(characterCard).not.toHaveClass('selected');
    });
});