import React, { Component } from 'react'
import './hero.css'
import axios from 'axios'
import swal from 'sweetalert2'
import {updateUser} from '../../ducks/reducer'
import {connect} from 'react-redux'

class Hero extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            name: '',
            password1: '',
            password2: ''
        }
    }

    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value
        })
    }

     register = async () => {
        const {email, name, password1, password2} = this.state
        if( password1 === password2){
           const res = await axios.post('/auth/register', {email, name, password: password2})
           this.props.updateUser(res.data.user)
           swal.fire({type: 'success', text: res.data.message})
        } else {
            swal.fire({type: 'error', text:'Your password dont match bee otch'})
        }
    }
    render() {
        return (
            <div className="hero">
                <div className="hero-img">
                    <div className="register-form">
                        <h2>Register Account</h2>
                        <input onChange={e => this.handleChange(e, 'email')}
                            value={this.state.email}
                            type="text"
                            placeholder="Email" />
                        <input onChange={e => this.handleChange(e, 'name')}
                            value={this.state.name}
                            type="text"
                            placeholder="Name" />
                        <input onChange={e => this.handleChange(e, 'password1')}
                            value={this.state.password1}
                            type="password"
                            placeholder="Password" />
                        <input onChange={e => this.handleChange(e, 'password2')}
                            value={this.state.password2}
                            type="password" placeholder="Repeat Password" />
                        <button
                        onClick={() => this.register()}
                        >Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {updateUser})(Hero)