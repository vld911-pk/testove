import React from 'react';
import { connect } from 'react-redux';
import ProductInformer from './ProductInformer';
import PropTypes from 'prop-types';

const ProductList = ({ products = [] }) => {

    return (
        <>
            {products.map((product) => (
                <ProductInformer key={product.prod_id} id={product.prod_id}/>
            ))}
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state?.productList?.products
    };
}

ProductList.propTypes = {
    products: PropTypes.arrayOf({}).isRequired,
}

export default connect(mapStateToProps)(ProductList);