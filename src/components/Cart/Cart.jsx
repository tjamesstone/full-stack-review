import React, {Component} from 'react'
import Cartgame from './Cartgame'

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
                <Cartgame />
            </div>
        )
    }
}