// import React from 'react';
// import {View, ListView, StyleSheet, Text, ScrollView, Image} from 'react-native';
// import {ListItem} from 'react-native-elements';
//
// export default class List extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             dataSource: null,
//             isLoading: false
//         }
//     }
//
//
//     componentDidMount() {
//         return fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
//             .then((response) => {
//                 this.setState = {
//                     dataSource: response,
//                     isLoading: true
//                 }
//             })
//
//     }
//
//     render() {
//
//         if (this.state.isLoading) {
//             <View><Text>List No</Text></View>
//         } else {
//             return (
//                 <View><Text>List Loaded</Text></View>
//             );
//         }
//
//
//     }
// }