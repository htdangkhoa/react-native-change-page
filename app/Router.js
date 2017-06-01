import React from 'react';
import {
    Dimensions
} from 'react-native';
import {
    StackNavigator,
    TabNavigator,
    DrawerNavigator
} from 'react-navigation';
import ViewMain from './views/ViewMain';
import ViewOne from './views/ViewOne';
import ViewTwo from './views/ViewTwo';
import ViewThree from './views/ViewThree';

import Home from './components/Tabs/Home';
import About from './components/Tabs/About';

import Menu from './components/Menu';

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
});

export const Tabs = TabNavigator({
    HomeTab: {
        screen: Router,
        navigationOptions: {
            tabBarLabel: 'Home'
        }
    },
    AboutTab: {
        screen: About,
        navigationOptions: {
            tabBarLabel: 'About'
        }
    }
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        
    },
    swipeEnabled: true
});

export const Drawer = DrawerNavigator({
    Tabs: {
        screen: Tabs
    }
}, {
    drawerWidth: (Dimensions.get('window').width - 80),
    drawerPosition: 'left',
    contentComponent: props => <Menu {...props} />
})