import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import Products from './components/Products/Products'
import RequiredAuth from "./hoc/RequiredAuth";

function App() {
	return <div className="App">
		{/* code here */}
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/login" element={<Login />} />
				<Route path="/products" element={
					<RequiredAuth>
						<Products />
					</RequiredAuth>} />
			</Routes>
		</Router>

	</div>;
}

export default App;
