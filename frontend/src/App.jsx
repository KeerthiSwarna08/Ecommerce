// import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import Home from './pages/Home';
import { Toaster } from 'sonner';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import CollectionPage from './pages/CollectionPage';
import ProductDetails from './components/Products/ProductDetails';
import CheckOut from './components/Cart/CheckOut';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import OrderDetailsPage from './pages/OrderDetailsPage';
import MyOrdersPage from './pages/MyOrdersPage';
import AdminLayout from './components/Admin/AdminLayout';
import AdminHomePage from './pages/AdminHomePage';
import UserManagement from './components/Admin/UserManagement';
import ProductManageMent from './components/Admin/ProductManageMent';
import EditProductPage from './components/Admin/EditProductPage';
import OrderManagement from './components/Admin/OrderManagement';

import {Provider} from "react-redux";
import store from "./redux/store";
import ProtectedRoute from './components/Common/ProtectedRoute';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Toaster position="top-right"/>
    <Routes>
    <Route path='/' element={<UserLayout/>}>
    <Route index element={<Home/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="register" element={<Register/>}/>
    <Route path="profile" element={<Profile/>}/>
    <Route path="collections/:collection" element={<CollectionPage/>}/>
    <Route path="product/:id" element={<ProductDetails/>}/>
    <Route path="checkout" element={<CheckOut/>}/>
    <Route path="order-confirmation" element={<OrderConfirmationPage/>}></Route>
    <Route path="order/:id" element={<OrderDetailsPage/>}/>
    <Route path="/my-orders" element={<MyOrdersPage/>}/>
      {/* User layout  */}
      {/* Home */}
      {/* Products */}
      {/* carts */}
    </Route>
    <Route path="/admin" element={<ProtectedRoute role="admin"><AdminLayout/></ProtectedRoute>}> 
    <Route index element={<AdminHomePage/>}/>
    <Route path="users" element={<UserManagement/>}/>
    <Route path="products" element={<ProductManageMent/>}/>
    <Route path="products/:id/edit" element={<EditProductPage/>}/>
    <Route path="orders" element={<OrderManagement/>}/>
    </Route>
    
    </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App;
