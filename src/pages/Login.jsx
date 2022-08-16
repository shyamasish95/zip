import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect, useDispatch, useSelector } from 'react-redux';

import { handleLogin } from '../store/auth/auth.actions'
const Login = ({ loggenIn }) => {
	const navigate = useNavigate()
	const data = useSelector(state => state.auth);
	const dispatch = useDispatch();
	const [email, setUserId] = useState("")
	const [password, setPassword] = useState("");
	useEffect(() => {
		if (loggenIn) {
			console.log("logged in")
		}
	}, [data])
	const login = (e) => {
		e.preventDefault();
		if (email !== "" && password !== "") {
			dispatch(handleLogin({ email, password }))
			navigate("/products");
		}
	}
	return (
		<div>
			<form>
				<span>User ID</span>
				<input data-cy="login-email" onChange={(e) => setUserId(e.target.value)} />
				<span>Password</span>
				<input data-cy="login-password" onChange={(e) => setPassword(e.target.value)} type="password" />
				<button data-cy="login-submit" type="submit" onClick={login} style={{ width: "30px" }}>Submit</button>
			</form>
		</div>
	);
};
const mapStateToProps = (state) => ({
	loggenIn: state.auth?.data?.isAuthenticated || false,
});

export default connect(mapStateToProps)(Login);
