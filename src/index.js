import ReactDOM from 'react-dom';
import React from 'react';

import ButtonComponent from './ButtonComponent/ButtonComponent.jsx';


ReactDOM.render(
  <ButtonComponent amount="100" currency="USD" apiKey="test" userid="rayed"/>,
  document.getElementById('app')
);
