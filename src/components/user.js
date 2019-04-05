import React, { Component } from 'react';
import FormFields from '../Widgets/Forms/FormFields';

class User extends Component {

    state = {
        formData: {
            firstName: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'First Name',
                config: {
                    name: 'first_name_input',
                    type: 'text',
                    placeholder: 'Enter Your Name'
                }
            },
            lastName: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'Last Name',
                config: {
                    name: 'last_name_input',
                    type: 'text',
                    placeholder: 'Enter Your Last Name'
                }
            },
            password: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'Password',
                config: {
                    name: 'password_input',
                    type: 'text',
                    placeholder: 'Enter Your Password'
                }
            },

        }
    }

    updateForm = (newState) => {
        console.log(newState, 'hello from new state');

        this.setState({
            formData: newState
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        let dataToSubmit = {};

        for ( let key in this.state.formData ) {
            dataToSubmit[key] = this.state.formData[key].value;
        }

        console.log(dataToSubmit, 'from data to submit');
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={ this.handleFormSubmit }>
                    <FormFields 
                        formData={ this.state.formData }
                        change={ (newState) => this.updateForm(newState) }
                    />

                    <button type="submit">Submit Form</button>
                </form>
            </div>
        )
    }
}

export default User;