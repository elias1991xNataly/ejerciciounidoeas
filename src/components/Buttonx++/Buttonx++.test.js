import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Buttonx++ from './Buttonx++';

describe('Buttonx++', () => {
  let props;
  let shallowButtonx++;
  let renderedButtonx++;
  let mountedButtonx++;

  const shallowTestComponent = () => {
    if (!shallowButtonx++) {
      shallowButtonx++ = shallow(<Buttonx++ {...props} />);
    }
    return shallowButtonx++;
  };

  const renderTestComponent = () => {
    if (!renderedButtonx++) {
      renderedButtonx++ = render(<Buttonx++ {...props} />);
    }
    return renderedButtonx++;
  };

  const mountTestComponent = () => {
    if (!mountedButtonx++) {
      mountedButtonx++ = mount(<Buttonx++ {...props} />);
    }
    return mountedButtonx++;
  };  

  beforeEach(() => {
    props = {};
    shallowButtonx++ = undefined;
    renderedButtonx++ = undefined;
    mountedButtonx++ = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
