import React, {Component} from 'react'
import Addform from './Addform'
import List from './List'

export default class Admin extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div className="admin">
                Admin
                <Addform />
                <List />
            </div>
        )
    }
}