import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {useNavigate, NavigateFunction} from 'react-router-dom';
import Arrow from '../components/Arrow';
import leftArrow from '../images/arrowL.png';
import rightArrow from '../images/arrowR.png';

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));

describe('Arrow', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders left arrow image', () => {
        const pathUrl = '/previous-page';
        render(<Arrow pathUrl={pathUrl}/>);
        const arrowImage: HTMLImageElement = screen.getByAltText('leftArrow');

        expect(arrowImage).toBeInTheDocument();
        expect(arrowImage.src).toContain(leftArrow);
    });

    test('renders right arrow image', () => {
        const pathUrl = '/next-page';
        render(<Arrow pathUrl={pathUrl} isRight/>);
        const arrowImage: HTMLImageElement = screen.getByAltText('rightArrow');

        expect(arrowImage).toBeInTheDocument();
        expect(arrowImage.src).toContain(rightArrow);
    });

    test('navigates to the specified path on click', () => {
        const pathUrl = '/next-page';
        const navigateMock: jest.Mock<NavigateFunction> = jest.fn();
        (useNavigate as jest.Mock).mockReturnValue(navigateMock);
        render(<Arrow pathUrl={pathUrl}/>);
        const arrowImage: HTMLImageElement = screen.getByAltText('leftArrow');

        userEvent.click(arrowImage);

        expect(navigateMock).toHaveBeenCalledWith(pathUrl);
    });
});