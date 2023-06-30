import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Exerc2 from './Exerc2';

describe('Exerc2', () => {
  let props;
  let shallowExerc2;
  let renderedExerc2;
  let mountedExerc2;

  const shallowTestComponent = () => {
    if (!shallowExerc2) {
      shallowExerc2 = shallow(<Exerc2 {...props} />);
    }
    return shallowExerc2;
  };

  const renderTestComponent = () => {
    if (!renderedExerc2) {
      renderedExerc2 = render(<Exerc2 {...props} />);
    }
    return renderedExerc2;
  };

  const mountTestComponent = () => {
    if (!mountedExerc2) {
      mountedExerc2 = mount(<Exerc2 {...props} />);
    }
    return mountedExerc2;
  };  

  beforeEach(() => {
    props = {};
    shallowExerc2 = undefined;
    renderedExerc2 = undefined;
    mountedExerc2 = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
