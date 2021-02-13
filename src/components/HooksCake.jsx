import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { buyCake } from '../redux'

const HooksCake = () => {
    const numOfCake =  useSelector(state => state.cake.numOfCake)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Cakes using Hooks- {numOfCake}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCake
