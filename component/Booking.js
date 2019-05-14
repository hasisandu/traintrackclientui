import React from 'react';
import {Image, ImageBackground, Platform, View, TextInput, Text, TouchableHighlight,StyleSheet} from 'react-native';
import {url} from "./host";
import axios from "axios/index";


export default class DashBoard extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            tiketcount: 0,
            from: '',
            to: '',
            train: ''
        }
    }


    updateValue(text, field) {

        if (field == 'email') {
            this.setState({
                email: text,
            })
            console.log(this.state.email);
        } else if (field == 'from') {
            this.setState({
                from: text
            })
            console.log(this.state.from);
        } else if (field == 'tiketcount') {
            this.setState({
                tiketcount: text
            })
            console.log(this.state.tiketcount);
        }
        else if (field == 'to') {
            this.setState({
                to: text
            })

        }
        else if (field == 'train') {
            this.setState({
                train: text
            })

        }
    }



    requestPayment = (email,from,tiketcount,to,train) => {
        var passenger={email,from,tiketcount,to,train};

        axios.post(url + '/Booking/saveBooking', {
            email: email,
            fromStation: from,
            toStation: to,
            ticketcount: tiketcount,

        }).then((response) => {
            this.props.switchScreen("DashBoard");
        }).catch(function (error) {
            alert("password or username incorrect "+error);
        });
    };


    render() {



        return (
            <ImageBackground
                source={{uri:'http://www.hdiphonewallpapers.us/phone-wallpapers/1440x2560-1/1440x2560-samsung-htc-lg-mobile-hd-wallpapers-4574v4g9f.jpg'}}
                style={{width:'100%', height:'100%', marginTop:Platform.OS=='android'? 24: 0}}
            >

                <Text
                    style={{
                        color: 'white',
                        fontSize: 20,
                        marginLeft: 10,
                        marginTop: 10,
                        borderBottomColor: 'white',

                    }}
                    onPress={()=>{this.props.switchScreen("Specifc")}}
                > Back</Text>

                    <View
                        style={{width: '100%', height: 550, backgroundColor: 'black', marginTop: 20, opacity: 0.5}}
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
                                marginTop:10
                            }}

                            placeholder="E-Mail"
                            onChangeText={(text) => this.updateValue(text, "email")}

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
                                marginBottom: 24,
                                borderWidth: 1,
                                paddingLeft: 10
                            }}

                            placeholder="Ticket Count"
                            onChangeText={(text) => this.updateValue(text, "ticketcount")}
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
                                marginBottom: 24,
                                borderWidth: 1,
                                paddingLeft: 10
                            }}

                            placeholder="From"
                            onChangeText={(text) => this.updateValue(text, "from")}
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
                                marginBottom: 24,
                                borderWidth: 1,
                                paddingLeft: 10
                            }}

                            placeholder="To"
                            onChangeText={(text) => this.updateValue(text, "to")}
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
                                marginBottom: 24,
                                borderWidth: 1,
                                paddingLeft: 10
                            }}

                            placeholder="Train"
                            onChangeText={(text) => this.updateValue(text, "train")}
                        >

                        </TextInput>

                        <TouchableHighlight
                            style={{
                                backgroundColor: '#20639B', height: 40, width: '94%',
                                marginLeft: '3%',
                                borderColor: 'white',
                                borderWidth: 1,
                                marginTop: 15
                            }}
                            onPress={()=>{
                                //this.requestPayment(this.state.email,this.state.from,this.state.tiketcount,this.state.to,this.state.train);
                                this.props.switchScreen("stripe")
                            }}
                        >
                            <Text style={{fontSize: 18, color: 'white', textAlign: 'center', marginTop: 10}}>Stripe Pay</Text>
                        </TouchableHighlight>


                    </View>



            </ImageBackground>
        );
    }
}
