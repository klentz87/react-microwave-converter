import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'mdbreact'; 
import "../css/NavigationBar.css";
import{ BrowserRouter } from "react-router-dom"

class NavigationBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false
		};
		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	render() {
		return (
				<div className="navigation-bar overlay">
					<Navbar dark expand="md">
						<NavbarBrand className="brand" style={{cursor:"default"}}>Microwave Converter</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem className="ml-5">
									<a href="http://www.krislentz.net">Portfolio Page</a>
								</NavItem>
								<NavItem className="ml-5">
									<a href="https://github.com/klentz87">Github Profile</a>
								</NavItem>
							</Nav>
						</Collapse>
					</Navbar>
				</div>
		)
	}

};

export default NavigationBar;