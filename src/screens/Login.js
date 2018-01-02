import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { cssLogin } from '../styles/cssLogin';
import { imgHome } from '../resoures/img';

export class LoginScreen extends Component {
    render() {
        return (
            <View style={cssLogin.container}>
                <TextInput />
            </View>
        )
    }
}