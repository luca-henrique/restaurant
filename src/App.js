import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Cart from './pages/cart/Cart';
import SignUp from './pages/SignUp';
import FoodItem from './pages/FoodItem';
import NavBar from './components/Nav/NavBar';
import OrderComplete from './pages/order-complete/OrderComplete';
import PrivateRoute from './components/private-route/PrivateRoute';
import User from './pages/User';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<NavBar />
					<Home />
				</Route>
				<Route path="/:id/:slug">
					<NavBar />
					<FoodItem />
				</Route>
				<Route path="/login">
					<LogIn />
				</Route>
				<Route path="/signup">
					<SignUp />
				</Route>
				<PrivateRoute path="/cart">
					<NavBar />
					<Cart />
				</PrivateRoute>
				<Route path="/user-info">
					<NavBar />
					<User />
				</Route>
				<Route path="/complete-order">
					<NavBar />
					<OrderComplete />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
