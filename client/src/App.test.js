import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer'
import Favourites from './components/Favourites'
import albums from './components/albums';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('favourite added', () => {
  const tree = renderer
    .create(<saveFavourite></saveFavourite>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('grab query', () => {
  const tree = renderer
    .create(<albums></albums>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});