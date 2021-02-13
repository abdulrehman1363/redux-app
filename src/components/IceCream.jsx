import React from 'react'
import {buyIceCream} from '../redux'
import {connect} from 'react-redux'

const IceCream = (props) => {
    return (
        <div>
            <h2>Number of Ice Creams - {props.numOfIceCream}</h2>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    )
}


const mapStateToProps = state => {
    return{
        numOfIceCream : state.iceCream.numOfIceCream
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyIceCream : () => dispatch(buyIceCream())
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(IceCream)
