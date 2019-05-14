import React from 'react';
import {Image, ImageBackground, Platform, View, TextInput, Text, Button, TouchableHighlight} from 'react-native';
import LogoUrl from '../assets/logo.png';
import axios from 'axios';

import {getUser} from "../Services/getUser";

export default class LoginForm extends React.Component {


    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    submitData = () => {

        getUser(this.state.email).then((resp)=>{
            if (this.state.email===resp.email.toString() && this.state.password===resp.password.toString()){
                this.props.switchScreen("DashBoard")
            } else{
                alert("Try Again");
            }
        }).catch((error)=>{
            alert(error);
        })
    }

    updateValue(text, field) {

        if (field == 'email') {
            this.setState({
                email: text,
            })
        } else if (field == 'password') {
            this.setState({
                password: text
            })
        }
    }

    render() {

        return (

            <ImageBackground
                source={{uri: 'https://i.pinimg.com/originals/90/46/53/9046532812d9c7efa6f7a7beac4e20c7.jpg'}}
                style={{height: '100%', width: '100%', marginTop: Platform.OS == 'android' ? 24 : 0}}
            >

                <Image
                    source={LogoUrl}
                    style={{height: 100, width: 100, marginTop: 20, marginLeft: '35%',}}
                />

                <View
                    style={{width: '100%', height: 400, backgroundColor: 'black', marginTop: 20, opacity: 0.5}}
                >


                    <TextInput
                        style={{
                            backgroundColor: 'black',
                            width: '94%',
                            marginLeft: '3%',
                            height: 40,
                            color: 'white',
                            fontSize: 25,
                            borderColor: 'white',
                            borderWidth: 1,
                            marginBottom: 24,
                            paddingLeft: 10,
                            marginTop: 70
                        }}

                        placeholder="E-Mail"
                        onChangeText={(text) => this.updateValue(text, 'email')}
                    >

                    </TextInput>
                    <TextInput
                        style={{
                            backgroundColor: 'black',
                            width: '94%',
                            marginLeft: '3%',
                            height: 40,
                            color: 'white',
                            fontSize: 25,
                            borderColor: 'white',
                            borderWidth: 1,
                            paddingLeft: 10
                        }}

                        placeholder="Password"
                        onChangeText={(text) => this.updateValue(text, "password")}
                    >

                    </TextInput>

                    <TouchableHighlight
                        style={{
                            backgroundColor: '#20639B', height: 40, width: '94%',
                            marginLeft: '3%',
                            borderColor: 'white',
                            borderWidth: 1,
                            marginTop: 15,

                        }}
                        onPress={() => {
                           this.submitData()
                        }}
                    >
                        <Text style={{fontSize: 18, color: 'white', textAlign: 'center', marginTop: 10}}>Login</Text>
                    </TouchableHighlight>

                    <Text
                        style={{
                            color: 'white',
                            fontSize: 20,
                            marginLeft: 10,
                            marginTop: 10,
                            borderBottomColor: 'white',
                            width: '40%'
                        }}
                        onPress={() => {
                            this.props.switchScreen("SignUp")
                        }}
                    > New Account</Text>
                </View>

                <Text style={{color:'white'}} onPress={()=>{this.props.switchScreen("DashBoard")}}>Use</Text>
            </ImageBackground>
        )
    }
}