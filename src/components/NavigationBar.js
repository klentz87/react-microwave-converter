import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'mdbreact'; 
 import "../css/NavigationBar.css";

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
			<div className="navigation-bar">
				<Navbar light expand="md">
					<NavbarBrand className="brand" style={{cursor:"default"}}>Microwave Converter</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink to="http://www.krislentz.net">Portfolio Page</NavLink>
							</NavItem>
							<NavItem>
								<NavLink to="https://github.com/klentz87">Github Profile</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		)
	}

};

export default NavigationBar;