import { NavLink } from "react-router-dom";




function Navbar() {
	return (
		<nav className="Navbar">
			<p> React Exercises</p>
			<ul className="numbers">
				<NavLink to="/1" className={({ isActive }) => isActive ? "selected" : "nonselected"} >#1</NavLink>
				<NavLink to="/2" className={({ isActive }) => isActive ? "selected" : "nonselected"}>#2</NavLink>
				<NavLink to="/3" className={({ isActive }) => isActive ? "selected" : "nonselected"}>#3</NavLink>
				<NavLink to="/4" className={({ isActive }) => isActive ? "selected" : "nonselected"}>#4</NavLink>
			</ul>
		</nav>

	)
}
export default Navbar;
