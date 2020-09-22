import React from 'react';
import logo from '../../Image/logo2.png';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Items } from '../styles/StyleNav';

const NavBar = () => {
	return (
		<Items className="container nav-box">
			<div className="row justify-content-between align-items-center">
				<div className="logo col-md-3">
					<Link to="/">
						<img src={logo} alt="logo" className="img-fluid logo" />
					</Link>
				</div>
				<div className="items col-md-5 ">
					<ul className="nav justify-content-end">
						<li>
							<Link to="/cart">
								<FaShoppingCart className="cart" />
							</Link>
						</li>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/signup">Sign Up</Link>
						</li>
					</ul>
				</div>
			</div>
		</Items>
	);
};

export default NavBar;
