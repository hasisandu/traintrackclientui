
import React, {Component} from 'react';
import {AppRegistry,SectionList,StyleSheet} from 'react-native';
import {url} from "../component/host";

const spec=url+'/Passenger/getPassenger?email=';

async function getUser(email:String) {
    try {
        let response=await fetch(spec+""+email);
        let responseJson= await response.json();
        return responseJson;
    }catch (error) {
        console.log(error);
    }


}

export {getUser};