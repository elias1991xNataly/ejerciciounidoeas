import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Enunciate3 from './Enunciate3';

describe('Enunciate3', () => {
  let props;
  let shallowEnunciate3;
  let renderedEnunciate3;
  let mountedEnunciate3;

  const shallowTestComponent = () => {
    if (!shallowEnunciate3) {
      shallowEnunciate3 = shallow(<Enunciate3 {...props} />);
    }
    return shallowEnunciate3;
  };

  const renderTestComponent = () => {
    if (!renderedEnunciate3) {
      renderedEnunciate3 = render(<Enunciate3 {...props} />);
    }
    return renderedEnunciate3;
  };

  const mountTestComponent = () => {
    if (!mountedEnunciate3) {
      mountedEnunciate3 = mount(<Enunciate3 {...props} />);
    }
    return mountedEnunciate3;
  };  

  beforeEach(() => {
    props = {};
    shallowEnunciate3 = undefined;
    renderedEnunciate3 = undefined;
    mountedEnunciate3 = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
