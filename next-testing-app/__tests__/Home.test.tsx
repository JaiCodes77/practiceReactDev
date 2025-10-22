import {render,screen} from '@testing-library/react'

import Home from '@/app/page'
import App from 'next/app'

it('should have Docs text', () => {
    render(<Home/>)
})