import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./component";
import Home from "./container/Home";

const App = () => {
	return (
		<Routes>
			<Route path="login" element={<Login />} />
			<Route path="/*" element={<Home />} />
		</Routes>
	);
};

export default App;
