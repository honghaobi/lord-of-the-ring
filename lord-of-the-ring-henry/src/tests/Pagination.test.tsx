import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from '../components/Pagination';

describe('Pagination', () => {
    test('renders page numbers correctly', () => {
        const totalPages = 10;
        const currentPage = 4;
        const onPageChange = jest.fn();
        const maxButtons = 8;

        render(
            <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={onPageChange}/>
        );

        const expectedButtonCount = Math.min(totalPages, maxButtons) + 2 + 2;
        const buttonCounts = screen.getAllByRole('button');
        expect(buttonCounts.length).toBe(expectedButtonCount);

        const displayedPagesStart = Math.max(1, currentPage - Math.floor(maxButtons / 2));
        const displayedPagesEnd = Math.min(totalPages, displayedPagesStart + maxButtons - 1);
        for (let i = displayedPagesStart; i <= displayedPagesEnd; i++) {
            const button = screen.getByText(i.toString());
            expect(button).toHaveClass(`page-button${currentPage === i ? ' active' : ''}`);
        }
    });

    test('navigates to the previous page on Prev button click', () => {
        const totalPages = 10;
        const currentPage = 5;
        const onPageChange = jest.fn();

        render(
            <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={onPageChange}/>
        );

        const prevButton = screen.getByText('Prev');
        userEvent.click(prevButton);
        expect(onPageChange).toHaveBeenCalledWith(currentPage - 1);
    });

    test('navigates to the next page on Next button click', () => {
        const totalPages = 10;
        const currentPage = 5;
        const onPageChange = jest.fn();

        render(
            <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={onPageChange}/>
        );

        const nextButton = screen.getByText('Next');
        userEvent.click(nextButton);
        expect(onPageChange).toHaveBeenCalledWith(currentPage + 1);
    });

    test('disables Prev button on the first page', () => {
        const totalPages = 10;
        const currentPage = 1;
        const onPageChange = jest.fn();

        render(
            <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={onPageChange}/>
        );

        const prevButton = screen.getByText('Prev');
        expect(prevButton).toBeDisabled();
    });

    test('disables Next button on the last page', () => {
        const totalPages = 10;
        const currentPage = 10;
        const onPageChange = jest.fn();

        render(
            <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={onPageChange}/>
        );
        const nextButton = screen.getByText('Next');
        expect(nextButton).toBeDisabled();
    });
});