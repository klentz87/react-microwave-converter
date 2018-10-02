import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'; 
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
		return(
			<div>
				<Navbar light expand="md">
					<NavbarBrand className="brand" style={{cursor:"default"}}>React Microwave Project</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="http://www.krislentz.net">Portfolio Page</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="https://github.com/klentz87">Github Profile</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		)
	}

};

export default NavigationBar;