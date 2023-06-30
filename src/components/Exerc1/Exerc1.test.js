import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Exerc1 from './Exerc1';

describe('Exerc1', () => {
  let props;
  let shallowExerc1;
  let renderedExerc1;
  let mountedExerc1;

  const shallowTestComponent = () => {
    if (!shallowExerc1) {
      shallowExerc1 = shallow(<Exerc1 {...props} />);
    }
    return shallowExerc1;
  };

  const renderTestComponent = () => {
    if (!renderedExerc1) {
      renderedExerc1 = render(<Exerc1 {...props} />);
    }
    return renderedExerc1;
  };

  const mountTestComponent = () => {
    if (!mountedExerc1) {
      mountedExerc1 = mount(<Exerc1 {...props} />);
    }
    return mountedExerc1;
  };  

  beforeEach(() => {
    props = {};
    shallowExerc1 = undefined;
    renderedExerc1 = undefined;
    mountedExerc1 = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
