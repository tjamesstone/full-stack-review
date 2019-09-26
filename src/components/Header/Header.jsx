import React, {Component} from 'react'
import logo from '../../assets/john_sombrero.png'
import './header.css'
export default class Header extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="johnbrero logo"/>
                    <h1>Comprajuegos</h1>
                </div>
                <div className="login-form">
                    <input type="text" placeholder='Email'/>
                    <input type="password" placeholder='Password'/>
                    <button>Login:</button>
                </div>
                
            </div>
        )
    }
}
