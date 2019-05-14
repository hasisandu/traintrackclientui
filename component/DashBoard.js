import React from 'react';
import {Image, ImageBackground, Platform, View, TextInput, Text, TouchableHighlight, StyleSheet} from 'react-native';


export default class DashBoard extends React.Component {

    constructor() {
        super();
        this.state = {
            from: '',
            to: '',
            type:false,
            code:''
        }
    }

    updateValue(text, field) {

        if (field == 'from') {
            this.setState({
                from: text,
            })
        } else if (field == 'to') {
            this.setState({
                to: text
            })
        }else if (field == 'code') {
            this.setState({
                code: text
            })
        }
    }


    render() {
return(
    <ImageBackground
        source={{uri: 'http://www.sompaisoscatalans.cat/simage/177/1772534/train-wallpaper-for-mobile.jpg'}}
        style={{width: '100%', height: '100%', marginTop: Platform.OS == 'android' ? 24 : 0}}
    >

        <View
            style={{backgroundColor: 'black', opacity: 0.5, width: '100%', height: '100%'}}
        >


            <View
                style={{
                    backgroundColor: 'transparent',
                    borderWidth: 1,
                    borderColor: 'white',
                    marginTop: 50,
                    width: '80%',
                    height: 100,
                    marginLeft: '10%'
                }}
            >

                <TextInput
                    placeholder="From Station"
                    onChangeText={(text) => this.updateValue(text, "from")}
                    style={{

                        paddingLeft: 10,
                        fontWeight: 'bold',
                        color: 'blue',
                        width: '96%',
                        height: 50,
                        marginLeft: '2%',
                        fontSize: 20,
                        borderBottomWidth: 1,
                        borderBottomColor: 'white'
                    }}
                />
                <TextInput
                    placeholder="To Station"
                    onChangeText={(text) => this.updateValue(text, "to")}
                    style={{

                        paddingLeft: 10,
                        fontWeight: 'bold',
                        color: 'blue',
                        width: '96%',
                        height: 50,
                        marginLeft: '2%',
                        fontSize: 20
                    }}
                />


            </View>
            <TouchableHighlight style={{
                backgroundColor: '#00CCFF',
                height: 40,
                borderWidth: 1,
                borderColor: 'white',
                marginTop: 10,
                marginLeft: '10%',
                width: '80%'
            }}
                                onPress={() => {
                                    if(this.state.from==="colombo" || this.state.to==="panadura"){
                                        this.props.switchScreen("Specifc");
                                    }else{
                                        alert("Please Enter Your Destiny");



                                    }
                                }}
            >
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 25,
                        color: 'white',
                        marginTop: 3,

                    }}
                >
                    Find Trains
                </Text>
            </TouchableHighlight>

            <View
                style={{
                    backgroundColor: 'transparent',
                    borderWidth: 1,
                    borderColor: 'white',
                    marginTop: 50,
                    width: '80%',
                    height: 70,
                    marginLeft: '10%'
                }}
            >

                <TextInput
                    placeholder="Train Name / Train Code"
                    onChangeText={(text) => this.updateValue(text, "code")}
                    style={{

                        paddingLeft: 10,
                        fontWeight: 'bold',
                        color: 'white',
                        width: '96%',
                        height: 50,
                        marginLeft: '2%',
                        fontSize: 20,
                        marginTop: 10
                    }}
                />

            </View>

            <TouchableHighlight style={{
                backgroundColor: '#00CCFF',
                height: 40,
                borderWidth: 1,
                borderColor: 'white',
                marginTop: 10,
                marginLeft: '10%',
                width: '80%'
            }}
                                onPress={() => {
                                   if(this.state.code!=null){
                                       this.props.switchScreen("Specifc");

                                   }else{


                                   }
                                }}
            >
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 25,
                        color: 'white',
                        marginTop: 3,

                    }}
                >
                    Show Train
                </Text>
            </TouchableHighlight>


            <View style={{
                height: 200,
                width: '80%',
                marginLeft: '10%',
                borderWidth: 1,
                borderColor: 'white',
                marginTop: 5
            }}>
                <Image
                    source={{uri: 'https://cdn140.picsart.com/285287132000201.gif?c256x256'}}
                    style={{width: '100%', height: '100%'}}
                />

            </View>



        </View>

    </ImageBackground>
)
    }
}
