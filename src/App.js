import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/css/styles.css";
import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardIntro from "./components/dashboard/DashboardIntro";
import AddSlider from "./components/dashboard/AddSlider";
import AddProduct from "./components/dashboard/AddProduct";
import NotFound from "./pages/NotFound";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import Authors from "./pages/authors/Authors";

import PriOrder from "./pages/priOrder/PriOrder";

import Details from "./pages/detailsPage/Details";
import GeneralBook from "./pages/generalBook/GeneralBook";

import { Toaster } from "react-hot-toast";
import BookRoute from "./pages/bookRoute/BookRoute";

import Subject from "./pages/subject/Subject";
import Publisher from "./pages/publisher/Publisher";

import ManageBook from "./components/dashboard/manageBook/ManageBook";
import OrderBook from "./components/dashboard/orderBook/OrderBook";
import MyProfile from "./components/dashboard/profile/MyProfile";
import UpdateProfile from "./components/dashboard/profile/UpdateProfile";
import Cart from "./pages/cart/Cart";
import AuthorDetails from "./pages/authors/AuthorDetails";
import UserReview from "./pages/userReview/UserReview";
import AddAuthor from "./components/dashboard/AddAuthor";
import AddReview from "./components/dashboard/addReview/AddReview";
import EditBook from "./components/dashboard/manageBook/EditBook";
import Offer from "./pages/offer/Offer";

function App() {
	return (
		<Router>
			<Toaster />
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/authors' element={<Authors />} />

				<Route path='/pri-order' element={<PriOrder />} />
				<Route path='/subject' element={<Subject />} />
				<Route path='/prokasok' element={<Publisher />} />
				<Route path='/details' element={<Details />} />
				<Route path='/authordetails' element={<AuthorDetails />} />
				<Route path='/user-review' element={<UserReview />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/bookroute' element={<BookRoute />} />
				<Route path='/generalbook' element={<GeneralBook />} />
				<Route path='/offer' element={<Offer />} />

				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/dashboard' element={<Dashboard />}>
					<Route index element={<DashboardIntro />} />
					<Route path='/dashboard/add-slider' element={<AddSlider />} />
					<Route path='/dashboard/add-author' element={<AddAuthor />} />
					<Route path='/dashboard/add-product' element={<AddProduct />} />
					<Route path='/dashboard/manage-book' element={<ManageBook />} />
					<Route path='/dashboard/edit-book' element={<EditBook />} />
					<Route path='/dashboard/order-book' element={<OrderBook />} />
					<Route path='/dashboard/my-profile' element={<MyProfile />} />
					<Route path='/dashboard/add-review' element={<AddReview />} />
					<Route path='/dashboard/updateprofile' element={<UpdateProfile />} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
