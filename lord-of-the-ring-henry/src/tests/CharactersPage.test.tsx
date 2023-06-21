import React from 'react';
import {act, render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import CharactersPage from '../components/CharactersPage';
import {getCharacters, getQuote} from '../services/ringService';

jest.mock('../services/ringService', () => ({
    getCharacters: jest.fn(),
    getQuote: jest.fn(),
}));

describe('CharactersPage', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('fetches characters and displays them', async () => {
        const mockCharacters = [
            {_id: '1', name: 'Character 1', race: 'Race 1'},
            {_id: '2', name: 'Character 2', race: 'Race 2'},
        ];

        (getCharacters as jest.Mock).mockResolvedValue({docs: mockCharacters, total: 2});

        const mockQuotesData = {
            docs: [{dialog: 'I wish the Ring had never come to me.'}]
        };

        (getQuote as jest.Mock).mockResolvedValue(mockQuotesData);

        await act(async () => {
            render(
                <MemoryRouter>
                    <CharactersPage/>
                </MemoryRouter>
            )
        })

        expect(getCharacters).toHaveBeenCalledWith('character', 'limit=28&page=1&offset=0');

        const characterCards = await screen.findAllByTestId('character-card');
        expect(characterCards).toHaveLength(2);
        expect(characterCards[0]).toHaveTextContent('Character 1');
        expect(characterCards[1]).toHaveTextContent('Character 2');
    });

    test('selects a character on click', async () => {
        const mockCharacters = [
            {_id: '1', name: 'Character 1', race: 'Race 1'},
            {_id: '2', name: 'Character 2', race: 'Race 2'},
        ];
        (getCharacters as jest.Mock).mockResolvedValue({docs: mockCharacters, total: 2});
        const mockQuotesData = {
            docs: [{dialog: 'I wish the Ring had never come to me.'}]
        };

        (getQuote as jest.Mock).mockResolvedValue(mockQuotesData);

        await act(async () => {
            render(
                <MemoryRouter>
                    <CharactersPage/>
                </MemoryRouter>
            )
        })

        await screen.findAllByTestId('character-card');
        userEvent.click(screen.queryAllByText('Character 1')[0]);
        expect(screen.getByTestId('full-character-card')).toHaveTextContent('Character 1');
    });
});