import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequiredAuth = ({ children }) => {
	const { data } = useSelector((store) => { return { data: store.auth.data.isAuthenticated } }, shallowEqual)


	const { pathname } = useLocation();

	if (data) {
		return children;
	} else {
		return (
			// Redirecting to Login page
			<Navigate
				to="/login"
				state={{ from: pathname }}
				replace
				spacer
			/>
		);
	}
};

export default RequiredAuth;
