import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/ui/Footer";
import ImageSlider from "./components/Slider/Slider";
import Navbar from "./components/ui/Navbar";
import Home from "./pages/Home";
import Compare from "./pages/Compare";

function App() {
	return (
		<Router>
			<Navbar />
			<ImageSlider />
			{/* <Home /> */}
			<Compare />
			<Footer />
		</Router>
	);
}

export default App;
