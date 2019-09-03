import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.scss';

function App() {
	return (
		<div className="App">
			<Container fluid={true}>
				<Row>
					<Col xs={12}>
						<div> Here's some text.</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
