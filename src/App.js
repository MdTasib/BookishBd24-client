import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";
import Home from "./pages/Home";
import Compare from "./pages/Compare";
import Dashboard from "./pages/Dashboard";
import DashboardIntro from "./components/dashboard/DashboardIntro";
import AddSlider from "./components/dashboard/AddSlider";
import AddProduct from "./components/dashboard/AddProduct";
import AddQuestion from "./components/dashboard/AddQuestion";
import { fetchSlider } from "./features/slider/sliderSlice";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchSlider());
	}, [dispatch]);

	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/compare' element={<Compare />} />
				<Route path='/dashboard' element={<Dashboard />}>
					<Route index element={<DashboardIntro />} />
					<Route path='/dashboard/add-slider' element={<AddSlider />} />
					<Route path='/dashboard/add-question' element={<AddQuestion />} />
					<Route path='/dashboard/add-product' element={<AddProduct />} />
				</Route>
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
