import React from 'react';
import Products from '../components/Products';
import { useEffect } from 'react';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';


function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const {loading, error, products} = productList;
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
    return (
        <div>
            { loading ? <LoadingBox></LoadingBox>:
            error? <MessageBox variant='danger'>{error}</MessageBox>:
            (   <div className='row center'>
                {products.map(product => (
                    <Products key={product._id} product={product} />
                ))}
              </div>
            )}
          </div>
    )
}

export default HomeScreen
