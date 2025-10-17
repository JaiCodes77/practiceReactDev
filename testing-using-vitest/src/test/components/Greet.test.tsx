import React from 'react';

import { it, expect, describe } from 'vitest'
import {render,screen} from '@testing-library/react'
import Greet from '../../components/Greet' 
import '@testing-library/jest-dom/vitest'

describe('group', () => {
    it('should render hello with the name jai', () => {
        render(<Greet name="jai"/>);

        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
    })
}) 