import React from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
	const navigate = useNavigate();
	const handleLogout = () => {
		localStorage.setItem('token', "")
		navigate("/")
	}
	return (
		<div data-cy="navbar">
			<div>
				{/* TODO: Use Link instead of anchor tag. */}
				<a data-cy="navbar-home-link" style={{ cursor: "pointer" }}>Home</a>
			</div>
			<div>
				<div data-cy="navbar-cart-items-count" style={{ cursor: "pointer" }}>Cart Items</div>
				<button data-cy="navbar-login-logout-button" onClick={handleLogout}>Logout</button>
			</div>
		</div>
	);
};

export default Navbar;
