import React, { Component } from 'react'
import axios from 'axios';


export default class CreateExercise extends Component {
    constructor(props){
        super(props);
        // making sure the this keyword is used correctly, by binding it to our values
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // the initial or default states
        this.state = {
            username: '',
            
        }
    }

    // then we set the states
    onChangeUsername(e){
        this.setState({
            username: e.target.value
        })
    }

    // taking in the set/updated states
    onSubmit(e){
        e.preventDefault();

        const user = {
            username: this.state.username, 

        }
        console.log(user);
        axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data))
        // after submitting we set the state back to initial empty value
        this.setState({
            username: ''
        })


        
    }
    render() {
        return (
            <div>
                <h2>New user</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Username: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
