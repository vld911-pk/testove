import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { productToBucketAction } from '../../actions/productAction';

const StyledProductInformer = styled.div`
    width: 50%;
    height: 350px;
    border: 3px solid grey;
    border-radius: 10px;
    box-shadow: 3px 3px;
    margin: 10px auto 10px auto;
`;

const InformerImg = styled.div`
    width: 100%;
    height: 70%;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('http://localhost:3001/${[props => props.photo]}');
`;

const InformerInfo = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    & > div > p {
        font-weight: bold;
        font-size: 15px;
    } 
`;

const AddToBucketBtn = styled.button`
    width: 40%;
    color: black;
    font-size: 30px;
    margin: 10px auto 10px auto;
    border-radius: 10px;
    &:hover {
        color: white;
        background-color: black;
    }
`;

const ProductInformer = ({ product, dispatch }) => {

    const addToBucket = async ({ prod_id }) => {
        dispatch(productToBucketAction(prod_id));
        await fetch('http://localhost:3001/add-to-bucket', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ prod_id }),
        })
    }

    return (
        <StyledProductInformer>
            <InformerImg photo={product.photo} />
            <InformerInfo>
                <div>
                    <p>Name: { product.product_name }</p>
                    <p>Price: { product.price || 'procuct without price'}</p>
                </div>
                <AddToBucketBtn onClick={() => addToBucket({ prod_id: product.prod_id})}> ADD </AddToBucketBtn>
            </InformerInfo>
        </StyledProductInformer>
    );
}

ProductInformer.propTypes = {
    data: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (state, { id }) => ({
    product: state.productList.products.find(({ prod_id }) => prod_id === id),
});

const mapDispatchToProps = (dispatch) => {
    return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductInformer);