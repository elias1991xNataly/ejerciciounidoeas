import React from 'react';
import PropTypes from 'prop-types';
import styles from './ComponentA.scss';

const ComponentA = props => (
	<div>This is a component called ComponentA.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class ComponentA extends React.Component {
//   render() {
//     return <div>This is a component called ComponentA.</div>;
//   }
// }

const ComponentAPropTypes = {
	// always use prop types!
};

ComponentA.propTypes = ComponentAPropTypes;

export default ComponentA;
