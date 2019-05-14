import React from 'react';
import {Image, ImageBackground, Platform, View, TextInput, Text, TouchableHighlight,StyleSheet} from 'react-native';


export default class DashBoard extends React.Component {


    render() {
        return (
            <ImageBackground
                source={{uri:'https://www.desktop-background.com/download/360x640/2013/02/08/527271_free-desktop-wallpaper-old-train_1024x768_h.jpg'}}
                style={{width:'100%', height:'100%', marginTop:Platform.OS=='android'? 24: 0}}
            >

                <View
                    style={{backgroundColor:'black', opacity:0.2, width:'100%', height:'100%'}}
                >



                </View>

            </ImageBackground>
        );
    }
}
