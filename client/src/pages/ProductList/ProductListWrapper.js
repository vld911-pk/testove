import { useEffect } from 'react';
import { connect } from 'react-redux';
import ProductList from "./ProductList";
import { productsAction, bucketAction } from '../../actions/productAction';
import styled from 'styled-components';

const ListWrapper = styled.div`
    width: 80%;
    heigth: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 20px;
    margin: 0px auto 0px auto;
`;

const ProductListWrapper = ({ dispatch }) => {

   useEffect(() => {
     fetch('http://localhost:3001/products', { method: 'GET' })
     .then((res) => {
        return res.json();
     }).then((data) => {
        return Promise.all(
            [dispatch(productsAction(data.products)), dispatch(bucketAction(data.productsInBucket))]
        );
     }).catch((err) => console.log(err)); 
   }, []);

    return (
        <ListWrapper>
            <ProductList />
        </ListWrapper>
    );
}

const mapDispatchToProps = (dispatch) => {
    return { dispatch };
}

export default connect(null, mapDispatchToProps)(ProductListWrapper);