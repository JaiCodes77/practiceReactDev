import { render, screen } from '@testing-library/react';
import App from './App';
import { sum,big } from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('takes the initial value as a prop and passes it',()=>{
  render(<App initialCount={5}/>);
  const element = screen.getByTestId('count');
  expect(element).toBeInTheDocument();
  expect(element.textContent).toBe('5');
})

test('testing the sum function',()=>{
  render(<App/>);
  expect(sum(1,2)).toBe(3);
})

test('testing whether the object is working correctly or not',()=>{
  expect(big).toEqual({one:1,two:2});
}) 

