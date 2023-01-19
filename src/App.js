import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/css/styles.css";
import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardIntro from "./components/dashboard/DashboardIntro";
import AddSlider from "./components/dashboard/AddSlider";
import AddProduct from "./components/dashboard/AddProduct";
import AddQuestion from "./components/dashboard/AddQuestion";
import NotFound from "./pages/NotFound";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import Authors from "./pages/authors/Authors";
import Details from "./pages/detailsPage/Details";
import GeneralBook from "./pages/generalBook/GeneralBook";

import { Toaster } from "react-hot-toast";
import BookRoute from "./pages/bookRoute/BookRoute";
import ManageBook from "./components/dashboard/manageBook/ManageBook";
import OrderBook from "./components/dashboard/orderBook/OrderBook";

function App() {
	return (
		<Router>
			<Toaster />
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/authors' element={<Authors />} />
				<Route path='/details' element={<Details />} />
				<Route path='/bookroute' element={<BookRoute />} />
				<Route path='/generalbook' element={<GeneralBook />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/dashboard' element={<Dashboard />}>
					<Route index element={<DashboardIntro />} />
					<Route path='/dashboard/add-slider' element={<AddSlider />} />
					<Route path='/dashboard/add-question' element={<AddQuestion />} />
					<Route path='/dashboard/add-product' element={<AddProduct />} />
					<Route path='/dashboard/manage-book' element={<ManageBook />} />
					<Route path='/dashboard/order-book' element={<OrderBook />} />
					
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
