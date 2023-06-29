import React from 'react';
import PropTypes from 'prop-types';
import styles from './ComponentC.scss';

const ComponentC = props => (
	<div>This is a component called ComponentC.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class ComponentC extends React.Component {
//   render() {
//     return <div>This is a component called ComponentC.</div>;
//   }
// }

const ComponentCPropTypes = {
	// always use prop types!
};

ComponentC.propTypes = ComponentCPropTypes;

export default ComponentC;
