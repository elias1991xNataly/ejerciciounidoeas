import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Title3 from './Title3';

describe('Title3', () => {
  let props;
  let shallowTitle3;
  let renderedTitle3;
  let mountedTitle3;

  const shallowTestComponent = () => {
    if (!shallowTitle3) {
      shallowTitle3 = shallow(<Title3 {...props} />);
    }
    return shallowTitle3;
  };

  const renderTestComponent = () => {
    if (!renderedTitle3) {
      renderedTitle3 = render(<Title3 {...props} />);
    }
    return renderedTitle3;
  };

  const mountTestComponent = () => {
    if (!mountedTitle3) {
      mountedTitle3 = mount(<Title3 {...props} />);
    }
    return mountedTitle3;
  };  

  beforeEach(() => {
    props = {};
    shallowTitle3 = undefined;
    renderedTitle3 = undefined;
    mountedTitle3 = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
