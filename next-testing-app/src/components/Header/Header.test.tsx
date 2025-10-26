import {render,screen} from '@testing-library/react';
import Header from './Header';

describe('header component',()=>{
    it('should render header component',()=>{
        render(<Header/>);
    }) //checks whether the component is rendering or not(passed)

    it('displays the app title', () => {
        render(<Header/>); 

        const title = screen.getByText('My Todo App');
        expect(title).toBeInTheDocument();
    }) // checks whether the title is in the page or not(passed) 

    it('renders title as a heading for accessibility', () => {
        render(<Header/>); 

        const title = screen.getByRole('heading');
        expect(title).toBeInTheDocument();
    }) //checks whether the heading tag is being used in the component or not(passed)
})