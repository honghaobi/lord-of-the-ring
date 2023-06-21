import {render, screen, act} from '@testing-library/react';
import FullCharacterCard from '../components/FullCharacterCard';
import {getQuote} from '../services/ringService';
import {raceImageDict} from "../utils/raceImgDict";

jest.mock('../services/ringService'); // Mock the ringService module

test('renders character card correctly and displays quote', async () => {
    const characterProps = {
        id: '1',
        name: 'Frodo',
        race: 'Hobbit',
        gender: 'Male',
        realm: 'The Shire',
    };

    const mockQuotesData = {
        docs: [{dialog: 'I wish the Ring had never come to me.'}]
    };

    (getQuote as jest.Mock).mockResolvedValue(mockQuotesData);
    await act(async () => {
        render(<FullCharacterCard {...characterProps} />);
    })

    expect(screen.getByText(characterProps.name)).toBeInTheDocument();
    expect(screen.getByText(characterProps.race, {exact: false})).toBeInTheDocument();
    expect(screen.getByText(characterProps.gender, {exact: false})).toBeInTheDocument();
    expect(screen.getByText(characterProps.realm, {exact: false})).toBeInTheDocument();
    expect(screen.getByText(mockQuotesData.docs[0].dialog, {exact: false})).toBeInTheDocument();

    const image: HTMLImageElement = screen.getByAltText(characterProps.race);
    expect(image.src).toContain(raceImageDict[characterProps.race]);
});