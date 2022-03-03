import React from 'react'
import {
    Switch,
    Route,
		BrowserRouter
} from "react-router-dom";
import { Home } from './components/home';

export const Router = () => <BrowserRouter>
	<Switch>
		<Route exact path="/">
			<Home />
		</Route>
	</Switch>
</BrowserRouter>
