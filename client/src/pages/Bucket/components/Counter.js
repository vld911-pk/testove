import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CounterWrapper = styled.div`
    display: flex;
    justify-content: space-evently;
    margin: auto 20px auto 20px;
   
`;

const ContentButton = styled.div`
    width: 60px;
    height: 60px;
    background-color: grey;
    text-align: center;
    vertical-align:middle;
    font-size: 40px;
    border-radius: 10px;
    border: 3px solid black;
`;

const Count = styled.div`
    width: 50px;
    text-align: center;
    margin: 15px 0px 0px 0px;
    & > span {
        font-size: 35px;
    }
`;

const Counter = ({ count, addFunc, deleteFunc, id, setShowItem, setTotal, price }) => {

    const [counterState, setCounterState] = useState(count);

    useEffect(() => {
        if (!counterState) setShowItem(false);
    }, [counterState]);

    // варіант відправляти запроси при натисненні кнопок - сам по собі не дуже, 
    // але 1) це зберігає актуальні дані якщо юзер випадково натисне на на перезагрузку сторінки
    // 2) так як нагруженність проекту - 0, то цим можна пожертвувати

    return (
        <CounterWrapper>
            <ContentButton onClick={() => {
                deleteFunc(id);
                setCounterState(prev => prev -= 1);
                setTotal(prev => prev -= price);
            }}>-</ContentButton>
            <Count>
                <span>{ counterState }</span>
            </Count>
            <ContentButton onClick={() => { 
                addFunc(id);
                setCounterState(prev => prev += 1);
                setTotal(prev => prev += price);
            }}>+</ContentButton>
        </CounterWrapper>
    );
}

export default Counter;