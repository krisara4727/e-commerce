import './App.css';
import {Link, Switch, Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import { useSelector, useDispatch } from 'react-redux';
import SigninScreen from './screens/SigninScreen';
import { signout } from './actions/userActions';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';

function App() {
  const cart  = useSelector(state => state.cart);
  const {cartItems} = cart;
  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;
  const dispatch = useDispatch();
  const signoutHandler =( ) => {
    dispatch(signout());
  }
  return (
    <BrowserRouter>
      <div className='grid_container'>
      <header className='row'>
        <div>
          <Link to='/' className='brand'>E-Commerce</Link>
        </div>
        <div>
          <Link to='/cart'>Cart
          {
            cartItems.length > 0 && (
              <span className='badge'>{cartItems.length}</span>
            )
          }         </Link>
          {
           userInfo ? (
           <div className='dropdown'>
              <Link to='#'>
                {userInfo.name} <i className='fa fa-caret-down'></i>{" "}
              </Link>
              <ul className="dropdown-content">
              <li>
                    <Link to="/profile">User Profile</Link>
              </li>
                <li>
                    <Link to='/orderhistory'>Order History</Link>
                </li>
                <li><Link to='#signout' onClick={signoutHandler}>Sign Out</Link></li>  
                </ul>
           </div>
          ) : (
          <Link to='/signin'>Sign In</Link>
          )}
          {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}
        </div>
      </header>
      <main>
        <Switch>
        <PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute>
        <AdminRoute
            path="/productlist"
            component={ProductListScreen}
          ></AdminRoute>
          <Route
            path="/product/:id/edit"
            component={ProductEditScreen}
            exact
          ></Route>
           <AdminRoute
            path="/orderlist"
            component={OrderListScreen}
          ></AdminRoute>
          <Route path='/orderhistory' component={OrderHistoryScreen}></Route>
          <Route path='/order/:id' component={OrderScreen}></Route>
          <Route path='/placeorder' component={PlaceOrderScreen}></Route>
          <Route path='/payment' component={PaymentMethodScreen}></Route>
          <Route path='/register' component={RegisterScreen}></Route>
          <Route path='/shipping' component={ShippingScreen}></Route>
          <Route path='/signin' component={SigninScreen}></Route>
          <Route path='/cart/:id?' component={CartScreen}></Route>
          <Route path='/product/:id' component={ProductScreen} exact></Route>
          <Route path='/' component={HomeScreen} exact></Route>
        </Switch>
      </main>
      <footer className='row center'>
        All rights reserved.
      </footer>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
