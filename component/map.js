import React, { Component } from 'react'
import GeolocationExample from './geo'
export default class HomeContainer extends Component {
    constructor() {
        super();
        this.state = {
            initialPosition: 'unknown',
            lastPosition: 'unknown'
        }
    }
    watchID = (null: ?number);
    componentDidMount = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                var initialPosition = JSON.stringify(position);
                this.setState({initialPosition});
            },
            (error) => alert(error.message),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
        this.watchID = navigator.geolocation.watchPosition((position) => {
            var lastPosition = JSON.stringify(position);
            this.setState({lastPosition});
        });
    }
    componentWillUnmount = () => {
        navigator.geolocation.clearWatch(this.watchID);
    }
    render() {
        return (
            <GeolocationExample
                initialPosition = {this.state.initialPosition}
                lastPosition = {this.state.lastPosition}
            />
        );
    }
}