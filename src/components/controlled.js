import React, { Component } from 'react';

class Controlled extends Component {

    state = {
        firstName: '',
        lastName: '',
        formItem: {}
    }

    handleFirstNameChange = (e) => {
        console.log(e.target.value);

        this.setState({
            firstName: e.target.value
        });
    }

    handleLastNameChange = (e) => {
        console.log(e.target.value);

        this.setState({
            lastName: e.target.value
        });
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted');

        this.setState({
            firstName: '',
            lastName: '',
            formItem: {
                firstName: this.state.firstName,
                lastName: this.state.lastName
            }
        })
    }

    render(){
        return(
            <div onSubmit={this.handleFormSubmit} className="container">
                Controlled
                <form>
                    <div className="form_element">
                        <label>Enter Name:</label>
                        <input onChange={this.handleFirstNameChange} type="text" value={this.state.firstName}
                        />
                    </div>

                    <div className="form_element">
                        <label>Last Name:</label>
                        <input onChange={this.handleLastNameChange} type="text" value={this.state.lastName}/>
                    </div>

                    <div>
                        <button type="submit">Submit</button>
                    </div>

                    {console.log(this.state.formItem)}
                </form>
            </div>
        )
    }
}

export default Controlled;