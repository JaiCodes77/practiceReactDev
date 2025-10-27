import {render,screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddTodo from './AddTodo'

describe('AddTodo Component',()=>{

    it('should render the addTodo button', () => {
        const mockOnAdd = jest.fn();
        render(<AddTodo todo='add todo' onAdd={mockOnAdd}/>)
    })
})