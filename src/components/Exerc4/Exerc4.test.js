import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Exerc4 from './Exerc4';

describe('Exerc4', () => {
  let props;
  let shallowExerc4;
  let renderedExerc4;
  let mountedExerc4;

  const shallowTestComponent = () => {
    if (!shallowExerc4) {
      shallowExerc4 = shallow(<Exerc4 {...props} />);
    }
    return shallowExerc4;
  };

  const renderTestComponent = () => {
    if (!renderedExerc4) {
      renderedExerc4 = render(<Exerc4 {...props} />);
    }
    return renderedExerc4;
  };

  const mountTestComponent = () => {
    if (!mountedExerc4) {
      mountedExerc4 = mount(<Exerc4 {...props} />);
    }
    return mountedExerc4;
  };  

  beforeEach(() => {
    props = {};
    shallowExerc4 = undefined;
    renderedExerc4 = undefined;
    mountedExerc4 = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
