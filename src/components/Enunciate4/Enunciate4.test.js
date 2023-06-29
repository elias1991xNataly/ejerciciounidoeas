import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Enunciate4 from './Enunciate4';

describe('Enunciate4', () => {
  let props;
  let shallowEnunciate4;
  let renderedEnunciate4;
  let mountedEnunciate4;

  const shallowTestComponent = () => {
    if (!shallowEnunciate4) {
      shallowEnunciate4 = shallow(<Enunciate4 {...props} />);
    }
    return shallowEnunciate4;
  };

  const renderTestComponent = () => {
    if (!renderedEnunciate4) {
      renderedEnunciate4 = render(<Enunciate4 {...props} />);
    }
    return renderedEnunciate4;
  };

  const mountTestComponent = () => {
    if (!mountedEnunciate4) {
      mountedEnunciate4 = mount(<Enunciate4 {...props} />);
    }
    return mountedEnunciate4;
  };  

  beforeEach(() => {
    props = {};
    shallowEnunciate4 = undefined;
    renderedEnunciate4 = undefined;
    mountedEnunciate4 = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
