import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

class ViewOne extends Component {
    goBack() {
        this.props.navigation.goBack();
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>This is page 1.</Text>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={this.goBack.bind(this)}
                >
                    <Text style={styles.title}>Go back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee'
    },
    button: {
        backgroundColor: 'green',
        height: 35,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#fff'
    }
})

export default ViewOne;