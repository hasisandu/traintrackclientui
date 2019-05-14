import React from 'react';
import {Image, ImageBackground, Platform, View, TextInput, Text, TouchableHighlight, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import {url} from "./host";
import axios from "axios/index";

export default class DashBoard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            longitude: null,
            error: null,
            time: false,
            classtype: '3RD Class',
            seats: 500,
            trackid: 11,
            trainname: 'Ruhunu Kumari',
            timeto: '12:20'
        };
    }

    componentDidMount() {

        axios.get('http://192.168.8.102:8080/Train/getAllTrains').then(resp => {
            console.log(resp.data[0]['lat']);
            this.setState({
                latitude: resp.data[0]['lat'],
                longitude: resp.data[0]['lon'],
                error: null,
                time: true
            });
        });


        // navigator.geolocation.getCurrentPosition(
        //     (position) => {
        //         this.setState({
        //             latitude: position.coords.latitude,
        //             longitude: position.coords.longitude,
        //             error: null,
        //             time: true
        //         });
        //     },
        //     (error) => this.setState({error: error.message}),
        //     {enableHighAccuracy: true, timeout: 2000, maximumAge: 1000},
        // );


        axios.get(url + '/Train/getAllTrains').then((response) => {

            let x = response.toString();

            // console.log(x);
            // this.state.classtype = response.classtype;
            // this.state.seats = response.seats;
            // this.state.trackid = response.trackid;
            // this.state.trainname = response.trainname;

        }).catch(function (error) {
            alert("password or username incorrect " + error);
        });


    }

    render() {
        if (this.state.time == true) {
            return (
                <ImageBackground
                    source={{uri: 'http://www.hdiphonewallpapers.us/phone-wallpapers/1440x2560-1/1440x2560-samsung-htc-lg-mobile-hd-wallpapers-4574v4g9f.jpg'}}
                    style={{width: '100%', height: '100%', marginTop: Platform.OS == 'android' ? 24 : 0}}
                >

                    <Text
                        style={{
                            color: 'white',
                            fontSize: 20,
                            marginLeft: 10,
                            marginTop: 10,
                            borderBottomColor: 'white',

                        }}
                        onPress={() => {
                            this.props.switchScreen("DashBoard")
                        }}
                    > Back</Text>

                    <View style={{
                        height: 200,
                        width: '90%',
                        marginLeft: '5%',
                        marginTop: 10,
                        borderWidth: 1,
                        borderColor: 'blue',
                        borderBottomWidth: 0
                    }}>
                        <Text style={{marginTop: 10, color: 'blue', fontWeight: 'bold'}}>Train Name
                            : {this.state.trainname}</Text>
                        <Text style={{marginTop: 10, color: 'blue', fontWeight: 'bold'}}>Seats Count
                            : {this.state.seats}</Text>
                        <Text style={{marginTop: 10, color: 'blue', fontWeight: 'bold'}}>Class Type
                            : {this.state.classtype}</Text>
                        <Text style={{marginTop: 10, color: 'blue', fontWeight: 'bold'}}>Train Id
                            : {this.state.trackid}</Text>
                        <Text style={{marginTop: 10, color: 'blue', fontWeight: 'bold'}}>Time
                            : {this.state.timeto}</Text>

                    </View>

                    <TouchableHighlight
                        style={{
                            backgroundColor: '#20639B', height: 40, width: '90%',
                            marginLeft: '5%',
                            borderColor: 'white',
                            borderWidth: 1,
                            borderRightWidth: 1,
                            borderLeftWidth: 1,
                            borderRightColor: 'blue',
                            borderLeftColor: 'blue'
                        }}
                        onPress={() => {
                            this.props.switchScreen("Booking")
                        }}
                    >
                        <Text style={{fontSize: 18, color: 'white', textAlign: 'center', marginTop: 10}}>Booking</Text>
                    </TouchableHighlight>

                    <View style={{
                        height: 300,
                        width: '90%',
                        marginLeft: '5%',
                        marginTop: 20,
                        borderWidth: 1,
                        borderColor: 'blue',
                        backgroundColor: 'white'
                    }}>
                        <View style={{flexGrow: 1, alignItems: 'center', justifyContent: 'center'}}>
                            {/*<Text>Latitude: {this.state.latitude}</Text>*/}
                            {/*<Text>Longitude: {this.state.longitude}</Text>*/}
                            {/*{this.state.error ? <Text>Error: {this.state.error}</Text> : null}*/}

                            <MapView style={styles.map}
                                     region={{
                                         latitude: this.state.latitude,
                                         longitude: this.state.longitude,
                                         latitudeDelta: 0.1,
                                         longitudeDelta: 0.1,
                                     }}
                            >
                                <MapView.Marker
                                    coordinate={{
                                        latitude: this.state.latitude,
                                        longitude: this.state.longitude
                                    }}
                                    title={'Panadura'}
                                />

                            </MapView>
                        </View>

                    </View>


                </ImageBackground>
            );
        } else {
            return (
                <View style={{width: '100%', height: '100%', backgroundColor: 'black'}}>

                    <Text
                        style={{
                            color: 'white',
                            fontSize: 20,
                            marginLeft: 10,
                            marginTop: 10,
                            borderBottomColor: 'white',

                        }}
                        onPress={() => {
                            this.props.switchScreen("DashBoard")
                        }}
                    > Back</Text>

                    <Image
                        style={{width: '80%', height: 600, marginTop: 20, marginLeft: '10%'}}
                        source={{uri: 'https://cdn.dribbble.com/users/121337/screenshots/1024835/loading2.gif'}}
                    />
                </View>
            );
        }
    }


}
const styles = StyleSheet.create({
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
});
