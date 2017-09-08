import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-react-native-one-time-pa-1a410.cloudfunctions.net';

class SignUpForm extends Component {

    state = { phone: '' };

    handleSubmit = async () => {
        try {
            let response = await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone });
            console.log(response);
            response = await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone });
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <View>
                <View style={{ marginBottom: 10 }} >
                    <FormLabel>Enter Phone Number</FormLabel>
                    <FormInput 
                        value={this.state.phone}
                        onChangeText={phone => this.setState({ phone })}
                    />
                </View>
                <Button 
                    title="Submit" 
                    onPress={this.handleSubmit}
                />
            </View>
        );
    }
}

export default SignUpForm;
