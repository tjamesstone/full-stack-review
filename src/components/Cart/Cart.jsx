import React, {Component} from 'react'
import Cartgames from './Cartgames'

export default class Cart extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div className="cart">
                Cart
                <Cartgames />
            </div>
        )
    }
}