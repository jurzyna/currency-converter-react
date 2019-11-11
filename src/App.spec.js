import App from './App';

test('App renders correctly', () => {
  const { getByTestId } = render(<App />);

  expect(getByTestId('test')).toHaveTextContent('Home');
});
