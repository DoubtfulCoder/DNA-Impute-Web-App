import Nav from 'react-bootstrap/Nav';

import './App.css';

function App() {
	return (
		<Nav
			activeKey="/home"
			onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
		>
			<Nav.Item>
				<Nav.Link href="/home">Home</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="/simulations">Simulations</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="/algorithm">Algorithm</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="/test">Test</Nav.Link>
			</Nav.Item>
		</Nav>
	);
}

export default App;
