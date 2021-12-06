import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import BucketItem from "./BucketItem";

const BucketStyled = styled.div`
    width: 55%;
`;

const BucketComponent = ({ bucketItems = {} }) => {

    const [total, setTotal] = useState(false);

    useEffect(() => {
        setTotal(Object.values(bucketItems).reduce((acc, { price, count}) => acc + (price * count), 0));
    }, [bucketItems])

    return (
        <BucketStyled>
            {Object.keys(bucketItems).length ? (
                Object.values(bucketItems).map((item) => {
                    return <BucketItem item={item} setTotal={setTotal}/>
                })) : <b> OOOOps, you haven't added something </b>
            }
            { !total ? null : (
                <h2>total: { total }</h2>
            )
            }
        </BucketStyled>
    );
}

const mapStateToProps = (state) => ({
    bucketItems: state.bucket?.bucket,
});

export default connect(mapStateToProps)(BucketComponent);