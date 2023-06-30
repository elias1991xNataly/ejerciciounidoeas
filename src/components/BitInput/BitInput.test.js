import React from 'react';
import { shallow, render, mount } from 'enzyme';
import BitInput from './BitInput';

describe('BitInput', () => {
  let props;
  let shallowBitInput;
  let renderedBitInput;
  let mountedBitInput;

  const shallowTestComponent = () => {
    if (!shallowBitInput) {
      shallowBitInput = shallow(<BitInput {...props} />);
    }
    return shallowBitInput;
  };

  const renderTestComponent = () => {
    if (!renderedBitInput) {
      renderedBitInput = render(<BitInput {...props} />);
    }
    return renderedBitInput;
  };

  const mountTestComponent = () => {
    if (!mountedBitInput) {
      mountedBitInput = mount(<BitInput {...props} />);
    }
    return mountedBitInput;
  };  

  beforeEach(() => {
    props = {};
    shallowBitInput = undefined;
    renderedBitInput = undefined;
    mountedBitInput = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
