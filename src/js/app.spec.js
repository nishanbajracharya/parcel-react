import React from 'react';
import renderer from 'react-test-renderer';

import { App } from './app';

test('App should render a h1 tag', () => {
  const component = renderer.create(<App />).toJSON();

  expect(component).toMatchSnapshot();
});
