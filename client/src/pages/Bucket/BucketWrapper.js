import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bucketAction } from "../../actions/productAction";
import BucketComponent from "./BucketComponent";
import OrderForm from "./OrderForm";
import styled from "styled-components";

const StyledBucketWrapper = styled.div`
    display: flex;
`;

const BucketWrapper = ({ dispatch }) => {

    useEffect(() => {
        fetch('http://localhost:3001/get-bucket-items', { method: 'GET' })
        .then(data => data.json())
        .then(result => {
            dispatch(bucketAction(result))
        })
        .catch((err) => console.error(err));
    }, []);

    return (
        <StyledBucketWrapper>
            <BucketComponent />
            <OrderForm />
        </StyledBucketWrapper>
    );
}

const mapDispatchToProps = (dispatch) => {
    return { dispatch };
}

export default connect(null, mapDispatchToProps)(BucketWrapper);