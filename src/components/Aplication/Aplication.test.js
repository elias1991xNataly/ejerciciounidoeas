import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Aplication from './Aplication';

describe('Aplication', () => {
  let props;
  let shallowAplication;
  let renderedAplication;
  let mountedAplication;

  const shallowTestComponent = () => {
    if (!shallowAplication) {
      shallowAplication = shallow(<Aplication {...props} />);
    }
    return shallowAplication;
  };

  const renderTestComponent = () => {
    if (!renderedAplication) {
      renderedAplication = render(<Aplication {...props} />);
    }
    return renderedAplication;
  };

  const mountTestComponent = () => {
    if (!mountedAplication) {
      mountedAplication = mount(<Aplication {...props} />);
    }
    return mountedAplication;
  };  

  beforeEach(() => {
    props = {};
    shallowAplication = undefined;
    renderedAplication = undefined;
    mountedAplication = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
