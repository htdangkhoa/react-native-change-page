import React from 'react';
import {
    StackNavigator
} from 'react-navigation';
import ViewMain from './views/ViewMain';
import ViewOne from './views/ViewOne';
import ViewTwo from './views/ViewTwo';
import ViewThree from './views/ViewThree';

export const Router = StackNavigator({
    main: {
        screen: ViewMain,
        navigationOptions: {
            title: 'Main'
        }
    },
    one: {
        screen: ViewOne,
        navigationOptions: {
            title: 'View One'
        }
    },
    two: {
        screen: ViewTwo,
        navigationOptions: {
            title: 'View Two'
        }
    },
    three: {
        screen: ViewThree,
        navigationOptions: {
            title: 'View Three'
        }
    }
})