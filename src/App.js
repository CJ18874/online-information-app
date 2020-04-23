import React from "react";
import { Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Calendar from "./components/hebcal/Calendar";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
	return (
		<div>
			<CssBaseline />
			<Layout>
				<Route exact path='/' component={Home} />
				<Route path='/calendar' component={Calendar} />
			</Layout>
		</div>
	);
}

export default App;
