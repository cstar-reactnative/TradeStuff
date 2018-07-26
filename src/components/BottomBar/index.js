import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';

import { StackActions, NavigationActions } from 'react-navigation';
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
            if(data=="Sent") {
                this.setState({
                    active:"SentOrdersTab",
                })
            }
            if(data=="Accept") {
                this.setState({
                    active:"TradesTab",
                })
            }
        })
    }

    componentWillUnmount() {
        EventRegister.removeEventListener(this.listener)
    }

    navigateFunc(tabKey, index) {
        this.setState({active:tabKey})

        const routes = this.props.navigation.state.routes[index].routes;
        if (routes.length > 1) {
            this.props.navigation.dispatch(NavigationActions.navigate({
                routeName: tabKey,
            }));

            this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: routes[0].routeName }) // go to first screen of the StackNavigator
                ]
              }));
        }else {
            this.props.navigation.navigate(tabKey)
        }
    }

    render() {
        return (
            <AppTheme >
                <BottomNavigation 
                    Cont
                    /*active={this.state.active}*/  style={{ container: { backgroundColor: '#d4d4d4' } }} hidden={false}>
                    <BottomNavigation.Action
                        key="HomeTab"
                        icon={<View> 
                            <Icon name='home' color={this.state.active==="HomeTab"?'#f79a0e':'grey'} size={35}/> 
                            </View>}
                        onPress={() => this.navigateFunc("HomeTab", 0) }
                        style={{ container: { minWidth: null } }}
                       
                    />
                    <BottomNavigation.Action
                        key="SentOrdersTab"
                        icon={<View > 
                            <Image source={this.state.active==='SentOrdersTab'?require('./sent-offers.png'):require('./sent-offers-grey.png')} style={{width: 35, height: 35}} />
                            </View>} 
                        onPress={() => this.navigateFunc("SentOrdersTab", 1)}
                        containerStyle={{backgroundColor: 'red'}}
                        style={{ container: { minWidth: null } }}
                    />
                    <BottomNavigation.Action
                        key="IncomingOrdersTab"
                        icon={<View > 
                        <Image source={this.state.active==='IncomingOrdersTab'?require('./received-offers.png'):require('./received-offers-grey.png')} style={{width: 35, height: 35}} />
                        </View>}
                        onPress={() => this.navigateFunc("IncomingOrdersTab", 2)}
                        style={{ container: { minWidth: null }, backgroundColor: 'red' }}
                    />
                    <BottomNavigation.Action
                        key="TradesTab"
                        icon={<View > 
                            <Image source={this.state.active==='TradesTab'?require('./traded-stuff.png'):require('./traded-stuff-grey.png')} style={{width: 35, height: 35}} />
                            </View>}
                        onPress={() => this.navigateFunc("TradesTab", 3)}
                        style={{ container: { minWidth: null } }}
                    />
                    <BottomNavigation.Action
                        key="AccountTab"
                        icon={<View > 
                            <Image source={this.state.active==='AccountTab'?require('./user.png'):require('./user-grey.png')} style={{width: 35, height: 35}} />
                            </View>}
                        onPress={() => this.navigateFunc("AccountTab", 4)}
                        style={{ container: { minWidth: null } }}
                    />
                </BottomNavigation>
            </AppTheme>
        )
    }
};