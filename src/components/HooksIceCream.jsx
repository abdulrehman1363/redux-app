import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {buyIceCream} from '../redux'


const HooksIceCream = () => {

    const numOfCake  = useSelector(state => state.iceCream.numOfIceCream)
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of Ice Creams using Hooks - {numOfCake}</h2>
            <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream </button>
        </div>
    )
}

export default HooksIceCream
