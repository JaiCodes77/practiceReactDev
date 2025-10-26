import {render,screen} from '@testing-library/react';
import Header from './Header';

describe('header component',()=>{
    it('should render header component',()=>{
        render(<Header/>);
    }) 

    it('displays the app title', () => {
        render(<Header/>); 

        const title = screen.getByText('My Todo App');
        expect(title).toBeInTheDocument();
    }) 

    it('renders title as a heading for accessibility', () => {
        render(<Header/>); 

        const title = screen.getByRole('heading');
        expect(title).toBeInTheDocument();
    })
})