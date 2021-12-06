import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledFrom = styled.form`
    width: 30%;
    display: flex;
    flex-direction: column;
    border: 3px solid grey;
    border-radius: 10px;
    margin: 20px;
    padding: 20px;
`;

const Input = styled.input`
    width: 95%;
    height: 50px;
    border: 3px solid grey;
    border-radius: 10px;
    margin: 10px auto 10px auto;
`;

const OrderBtn = styled.button`
    width: 95%;
    height: 75px;
    background-color: grey;
    color: black;
    font-size: 30px;
    margin: 20px auto 10px auto;
    border-radius: 10px;
    &:hover {
        color: white;
        background-color: black;
    }
`;

const OrderForm = ({ bucketItems }) => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const handleName = (e) => setName(e.target.value);
    const handleLastName = (e) => setLastName(e.target.value);
    const handleSetAddress = (e) => setAddress(e.target.value);
    const handleSetPhone = (e) => setPhone(e.target.value);
    
    const submitOrder = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/save-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ 
                name,
                lastName,
                address,
                phone,
                bucketItems,
                totalPrice: Object.values(bucketItems).reduce((acc, { price, count}) => acc + (price * count), 0)
             }),
        }).catch((err) => console.log(err));
    }

    return (
        <StyledFrom  onSubmit={(e) => submitOrder(e)}>
            <Input placeholder="Name: " onChange={(e) => handleName(e)} value={ name }/>
            <Input placeholder="Lastname: " onChange={(e) => handleLastName(e)} value={ lastName } />
            <Input placeholder="Address: " onChange={(e) => handleSetAddress(e)} value={ address } />
            <Input placeholder="Phone: " onChange={(e) => handleSetPhone(e)} value={ phone} />
            <OrderBtn type="submit"><b>ORDER</b></OrderBtn>
        </StyledFrom>
    );
}

const mapStateToProps = (state) => ({
    bucketItems: state.bucket?.bucket, 
})

export default connect(mapStateToProps)(OrderForm);
