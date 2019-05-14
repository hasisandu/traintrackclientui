import React from 'react';
import {Akira,Kaede,Fumi} from 'react-native-textinput-effects';
import {View, TextInput, Text, TouchableWithoutFeedback, TouchableHighlight, StyleSheet} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {Button, Tooltip} from "react-native-elements";


export default class Stripe extends React.Component {


    render() {
        return (




            <View style={{marginTop: 25}}>

                <Text
                    style={{
                        color: 'red',
                        fontSize: 20,
                        marginLeft: 10,
                        marginTop: 10,
                        borderBottomColor: 'white',

                    }}
                    onPress={()=>{this.props.switchScreen("Booking")}}
                > Back</Text>


                <Text style={{textAlign:'center', fontWeight:'bold', color:'blue', fontSize:40}}>Stripe Payment</Text>
                <Fumi
                    label={'email'}
                    iconClass={FontAwesomeIcon}
                    iconName={'envelope-open'}
                    iconColor={'#f95a25'}
                    iconSize={20}
                    iconWidth={40}
                    inputPadding={16}
                />

                <Fumi
                    label={'Card Number'}
                    iconClass={FontAwesomeIcon}
                    iconName={'credit-card'}
                    iconColor={'#f95a25'}
                    iconSize={20}
                    iconWidth={40}
                    inputPadding={16}
                />

                <Fumi
                    label={'Expire Month'}
                    iconClass={FontAwesomeIcon}
                    iconName={'calendar'}
                    iconColor={'#f95a25'}
                    iconSize={20}
                    iconWidth={40}
                    inputPadding={16}
                />
                <Fumi
                    label={'Expire year'}
                    iconClass={FontAwesomeIcon}
                    iconName={"calendar"}
                    iconColor={'#f95a25'}
                    iconSize={20}
                    iconWidth={40}
                    inputPadding={16}
                />
                <Fumi
                    label={'CVC'}
                    iconClass={FontAwesomeIcon}
                    iconName={'lock'}
                    iconColor={'#f95a25'}
                    iconSize={20}
                    iconWidth={40}
                    inputPadding={16}
                />

                <Fumi
                    label={'Total'}
                    iconClass={FontAwesomeIcon}
                    iconName={'tags'}
                    iconColor={'#f95a25'}
                    iconSize={20}
                    iconWidth={40}
                    inputPadding={16}
                />

                <Button
                    raised
                    icon={{name: 'cc-stripe',type: 'font-awesome'}}
                    title='PAY WITH STRIPE'

                    style={{width:'80%', marginLeft:'10%'}}
                    onPress={() => {
                        this.props.switchScreen("DashBoard")
                    }}
                />
            </View>
        );

    }
}
