import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Exerc3 from './Exerc3';

describe('Exerc3', () => {
  let props;
  let shallowExerc3;
  let renderedExerc3;
  let mountedExerc3;

  const shallowTestComponent = () => {
    if (!shallowExerc3) {
      shallowExerc3 = shallow(<Exerc3 {...props} />);
    }
    return shallowExerc3;
  };

  const renderTestComponent = () => {
    if (!renderedExerc3) {
      renderedExerc3 = render(<Exerc3 {...props} />);
    }
    return renderedExerc3;
  };

  const mountTestComponent = () => {
    if (!mountedExerc3) {
      mountedExerc3 = mount(<Exerc3 {...props} />);
    }
    return mountedExerc3;
  };  

  beforeEach(() => {
    props = {};
    shallowExerc3 = undefined;
    renderedExerc3 = undefined;
    mountedExerc3 = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
