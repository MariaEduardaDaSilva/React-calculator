import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './Calculator';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Calculator', () => {
  
  it('must render the component without any erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Calculator />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('must clean the number field', () => {
    const {getByTestId, getByText} = render(<Calculator />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('C'));
    expect(getByTestId('txtNumber')).toHaveValue('0');
  });

  it('must sum 2 + 3 and get 5', () => {
    const {getByTestId, getByText} = render(<Calculator />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumber')).toHaveValue('5');
  });

  it('must subtraction 5 - 3 and get 2', () => {
    const {getByTestId, getByText} = render(<Calculator />);
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumber')).toHaveValue('2');
  });

  it('must division 6 / 2 and get 3', () => {
    const {getByTestId, getByText} = render(<Calculator />);
    fireEvent.click(getByText('6'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumber')).toHaveValue('3');
  });

  it('must multiplication 2 * 12 and get 24', () => {
    const {getByTestId, getByText} = render(<Calculator />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('*'));
    fireEvent.click(getByText('9'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumber')).toHaveValue('18');
  });

  it('must multiplication 2.5 + 2.5 and get 5', () => {
    const {getByTestId, getByText} = render(<Calculator />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumber')).toHaveValue('5');
  }); 
  
});