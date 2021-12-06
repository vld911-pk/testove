import React, { useState } from 'react';
import styled from 'styled-components';
import Counter from './components/Counter';
import { addItemToBucket, deleteItemFromBucket } from './bucketFetcher';

const StyledBucketItem = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    height: 150px;
    border: 1px solid grey;
    border-radius: 10px;
    margin: 30px;
    box-shadow: 3px 3px;
`;

const Img = styled.div`
    width: 150px;
    heigth: 150px;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('http://localhost:3001/${props => props.photo}');
    border-radius: 10px;
`

const Informer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
        & > p {
            font-weight: bold;
            font-size: 23px;        
        }
`;

const BucketItem = ({ item, setTotal }) => {
    
    const [showItem, setShowItem] = useState(true);

    return (
        <>
            { !showItem ? null : (
                <StyledBucketItem>
                    <Img photo={item.photo} />
                    <Informer>
                        <p>Name: { item.name } </p>
                        <p>Price: { item.price }</p>
                    </Informer>
                    <Counter 
                        count={item.count}
                        id={item.id} 
                        price={item.price}
                        addFunc={addItemToBucket} 
                        deleteFunc={deleteItemFromBucket}
                        setShowItem={setShowItem}
                        setTotal={setTotal}
                    />
                </StyledBucketItem>)
            }
        </>
    );
}

export default BucketItem;