import React from 'react';
import "../css/FooterPage.css"
import { Col, Container, Row } from "mdbreact";

function FooterPage() {
	return (
		<div className="footer text-white font-small pt-4">
		  <Container fluid className="text-center text-md-left">
		    <Row>
		      <Col md="6">
		      	<h5 className="title">Footer Content</h5>
		      	<p>
		        	Here you can use rows and columns here to organize your footer content.
		      	</p>
		      </Col>
		      
		      <Col md="3">
		      	<h5 className="title">Other Projects</h5>
		      	<ul className="pl-0">
		        	<li className="list-unstyled">
		          		<a href="http://www.krislentz.net">Home</a>
		        	</li>
		        	<li className="list-unstyled">
		          		<a href="#">React Contact List</a>
		        	</li>
		        	<li className="list-unstyled">
		          		<a href="#!">React Book Cataloger</a>
		        	</li>
		      	</ul>
		      </Col>
		      <Col md="3">
		      	<h5 className="title">Links</h5>
		      	<ul className="pl-0">
	            	<li className="list-unstyled">
	            		<a href="#">LinkedIn</a>
		        	</li>
		        	<li className="list-unstyled">
						<a href="#">Github Profile</a>	          		
		        	</li>
		      	</ul>
		      </Col>

		    </Row>
		  </Container>
		 
		  <div className="footer-copyright text-center py-4">
		    <Container fluid>
	
		    </Container>
		  </div>
		</div>
	)
}



export default FooterPage;