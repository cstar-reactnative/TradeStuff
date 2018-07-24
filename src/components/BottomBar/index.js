import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    
} from 'react-native';

import { EventRegister } from 'react-native-event-listeners'

import {Colors} from '@theme';
import {AppTheme} from '@components';
import { COLOR,ThemeProvider, BottomNavigation,Toolbar ,Icon, Searchable} from 'react-native-material-ui';
import Constants from '../../constants';


export default class BottomBar extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            active: props.currentActive
        });
    }

    componentWillMount() {

        this.listener = EventRegister.addEventListener('moveTab', (data) => {

            if(data=="Home") {
                this.setState({
                    active:"HomeTab",
                })
            }
        })
    }

    componentWillUnmount() {
        EventRegister.removeEventListener(this.listener)
    }

    navigateFunc( tabKey){
        
        this.setState({active:tabKey})
        this.props.navigation.navigate(tabKey, {callback : (key)=>{
            this.setState({active:key});
            this.navigateFunc(key)
        }})
    }

    render() {
        return (
            <AppTheme >
                <BottomNavigation 
                    Cont
                    active={this.state.active}  style={{ container: { backgroundColor: '#d4d4d4' } }} hidden={false}>
                    <BottomNavigation.Action
                        key="HomeTab"
                        icon="home"
                        onPress={() => this.navigateFunc("HomeTab") }
                        style={{ container: { minWidth: null } }}
                       
                    />
                    <BottomNavigation.Action
                        key="SentOrdersTab"
                        icon="navigation"
                        onPress={() => this.navigateFunc("SentOrdersTab")}
                        containerStyle={{backgroundColor: 'red'}}
                        style={{ container: { minWidth: null } }}
                    />
                    <BottomNavigation.Action
                        key="IncomingOrdersTab"
                        icon="details"
                        onPress={() => this.navigateFunc("IncomingOrdersTab")}
                        style={{ container: { minWidth: null }, backgroundColor: 'red' }}
                    />
                    <BottomNavigation.Action
                        key="TradesTab"
                        icon="list"
                        onPress={() => this.navigateFunc("TradesTab")}
                        style={{ container: { minWidth: null } }}
                    />
                    <BottomNavigation.Action
                        key="AccountTab"
                        icon="account-box"
                        onPress={() => this.navigateFunc("AccountTab")}
                        style={{ container: { minWidth: null } }}
                    />
                </BottomNavigation>
            </AppTheme>
        )
    }
};