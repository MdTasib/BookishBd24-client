import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";

function App() {
	return (
		<Router>
			<Navbar />
			<Footer />
		</Router>
	);
}

export default App;
