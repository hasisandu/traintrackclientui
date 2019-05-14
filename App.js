import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LoginPage from './component/LoginForm';
import SignUp from './component/signUp';
import DashBoard from './component/DashBoard';
import Result from './component/Result';
import Booking from './component/Booking';
import Specifc from './component/Specific';
import Stripe from './component/Stripe';
import Map from './component/map';

export default class App extends React.Component {

    state = {
        currentScreen: "LoginPage"
    }

    switchScreen = (currentScreen) => {
        this.setState({currentScreen})
    }

    renderScreen() {
        if (this.state.currentScreen == "LoginPage") {
            return (
                <LoginPage switchScreen={this.switchScreen}/>
            )
        } else if (this.state.currentScreen == "SignUp") {
            return (
                <SignUp switchScreen={this.switchScreen}/>
            )
        } else if (this.state.currentScreen == "DashBoard") {
            return (
                <DashBoard switchScreen={this.switchScreen}/>
            )
        } else if (this.state.currentScreen == "Result") {
            return (
                <Result/>
            )
        } else if (this.state.currentScreen == "Booking") {
            return (
                <Booking switchScreen={this.switchScreen}/>
            )
        } else if (this.state.currentScreen == "Specifc") {
            return (
                <Specifc switchScreen={this.switchScreen}/>
            )


        } else if (this.state.currentScreen == "stripe") {
            return (
                <Stripe switchScreen={this.switchScreen}/>
            )


        } else if (this.state.currentScreen == "map") {
            return (
                <Map switchScreen={this.switchScreen}/>
            )





        }
    }

    render() {
        return (
            <View>
                {this.renderScreen()}
            </View>
        );
    }


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
