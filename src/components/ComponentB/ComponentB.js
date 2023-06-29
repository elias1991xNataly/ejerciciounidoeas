import React from 'react';
import PropTypes from 'prop-types';
import styles from './ComponentB.scss';

const ComponentB = props => (
	<div>This is a component called ComponentB.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class ComponentB extends React.Component {
//   render() {
//     return <div>This is a component called ComponentB.</div>;
//   }
// }

const ComponentBPropTypes = {
	// always use prop types!
};

ComponentB.propTypes = ComponentBPropTypes;

export default ComponentB;
