import React from 'react';
import {
    Image,
    ImageBackground,
    Platform,
    View,
    TextInput,
    Text,
    Button,
    TouchableHighlight,
    ScrollView,
    Dimensions
} from 'react-native';
import axios from "axios";
import {url} from "./host";


export default class signUp extends React.Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            contact: '',
            city: '',
            signedIn: false,
            name: "",
            photoUrl: ""
        }
    }

    updateValue(text, field) {

        if (field == 'email') {
            this.setState({
                email: text,
            })
            console.log(this.state.email);
        } else if (field == 'password') {
            this.setState({
                password: text
            })
            console.log(this.state.password);
        } else if (field == 'firstname') {
            this.setState({
                firstname: text
            })
            console.log(this.state.firstname);
        }
        else if (field == 'lastname') {
            this.setState({
                lastname: text
            })

        }
        else if (field == 'contact') {
            this.setState({
                contact: text
            })

        } else if (field == 'city') {
            this.setState({
                city: text
            })

        }
    }

    savepassenger = () => {
        //
        // Passneger = {
        //     email: this.state.email,
        //     firstname: this.state.firstname,
        //     lastname: this.state.lastname,
        //     city: this.state.city,
        //     password: this.state.password,
        //     contact: this.state.contact
        // }
        // SaveUser(Passneger).then((resp)=>{
        //console.log(resp);

        this.saveBolog(this.state.firstname, this.state.lastname, this.state.contact, this.state.city, this.state.email, this.state.password)
    }

    saveBolog = (firstname, lastname, contact, city, email, password) => {


        var passenger={firstname,lastname,contact,city,email,password};

        axios.post(url + '/Passenger/savePasenger', {
            firstname: firstname,
            lastname: lastname,
            contact: contact,
            city: city,
            email: email,
            password: password


        }).then((response) => {
                this.props.switchScreen("DashBoard");
        }).catch(function (error) {
            alert("password or username incorrect "+error);
        });
    }


    googleLogin = async () => {
        // try {
        //     const result = await Expo.Google.logInAsync({
        //         androidClientId: "571504924601-aqs6lv8arbg8u15vsu2sfek21so1c9jn.apps.googleusercontent.com",
        //         //iosClientId: YOUR_CLIENT_ID_HERE,  <-- if you use iOS
        //         scopes: ["profile", "email"]
        //
        //     })
        //     if (result.type === "success") {
        //         const credential = firebase.auth.GoogleAuthProvider.credential(result.idToken, result.accessToken);
        //         firebase.auth().signInAndRetrieveDataWithCredential(credential).then(function (result) {
        //             console.log(result);
        //         });
        //         this.props.navigation.navigate('Where you want to go');
        //     } else {
        //         console.log("cancelled")
        //     }
        // } catch (e) {
        //     console.log("error", e)
        // }

        try {
            const result = await Expo.Google.logInAsync({
                androidClientId: "571504924601-aqs6lv8arbg8u15vsu2sfek21so1c9jn.apps.googleusercontent.com",
                //iosClientId: YOUR_CLIENT_ID_HERE,  <-- if you use iOS
                scopes: ["profile", "email"]
            })

            if (result.type === "success") {
                this.setState({
                    signedIn: true,
                    firstname: result.user.givenName,
                    lastname: result.user.familyName,
                    email: result.user.email
                })
                alert('Thank You');
                this.savepassenger();
                this.props.switchScreen("DashBoard")
                console.log(result);
            } else {
                console.log("cancelled")
            }

        } catch (e) {
            console.log("error", e)
        }
    }


    render() {


        return (


            <ImageBackground
                source={{uri: 'https://i.pinimg.com/originals/90/46/53/9046532812d9c7efa6f7a7beac4e20c7.jpg'}}
                style={{height: '100%', width: '100%', marginTop: Platform.OS == 'android' ? 24 : 0}}
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
                        this.props.switchScreen("LoginPage")
                    }}
                > Back</Text>


                <Text
                    style={{
                        fontSize: 40,
                        color: 'white',
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}
                >Sign Up</Text>

                <View
                    style={{width: '100%', height: 550, backgroundColor: 'black', marginTop: 5, opacity: 0.5}}
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
                            marginBottom: 15,
                            paddingLeft: 10,
                            marginTop: 10
                        }}

                        placeholder="First Name"
                        onChangeText={(text) => this.updateValue(text, "firstname")}

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
                            marginBottom: 15,
                            borderWidth: 1,
                            paddingLeft: 10
                        }}

                        placeholder="Last Name"
                        onChangeText={(text) => this.updateValue(text, "lastname")}

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
                            marginBottom: 15,
                            borderWidth: 1,
                            paddingLeft: 10
                        }}

                        placeholder="Contact"
                        onChangeText={(text) => this.updateValue(text, "contact")}

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
                            marginBottom: 15,
                            borderWidth: 1,
                            paddingLeft: 10
                        }}

                        placeholder="City"
                        onChangeText={(text) => this.updateValue(text, "city")}

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
                            marginBottom: 15,
                            borderWidth: 1,
                            paddingLeft: 10
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
                            marginTop: 15
                        }}
                        onPress={this.savepassenger}
                    >
                        <Text
                            style={{fontSize: 18, color: 'white', textAlign: 'center', marginTop: 10}}>Login</Text>
                    </TouchableHighlight>

                    <Text
                        style={{
                            color: 'white',
                            fontSize: 20,
                            marginLeft: 10,
                            marginTop: 10,
                            textAlign: 'center'
                        }}
                    > Or</Text>
                    <TouchableHighlight
                        style={{
                            backgroundColor: '#CC3333', height: 40, width: '94%',
                            marginLeft: '3%',
                            borderColor: 'white',
                            borderWidth: 1,
                            marginTop: 10
                        }}
                        onPress={() => {
                            this.googleLogin()
                        }}
                        // this.props.switchScreen("facebook")
                    >
                        <Text style={{fontSize: 18, color: 'white', textAlign: 'center', marginTop: 10}}>Login With
                            Google</Text>
                    </TouchableHighlight>
                </View>

            </ImageBackground>

        )
    }


}