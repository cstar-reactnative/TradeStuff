import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';

import { EventRegister } from 'react-native-event-listeners'

//import {Colors} from '@theme';
import {AppTheme} from '@components';
import { COLOR,ThemeProvider, BottomNavigation,Toolbar ,Icon, Searchable} from 'react-native-material-ui';


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
                <BottomNavigation active={this.state.active} hidden={false}>
                    <BottomNavigation.Action
                        key="HomeTab"
                        icon="home"
                        onPress={() => this.navigateFunc("HomeTab") }
                    />
                    <BottomNavigation.Action
                        key="SentOrdersTab"
                        icon={<View > 
                            <Image source={this.state.active==='SentOrdersTab'?require('./sent-offers.png'):require('./sent-offers-grey.png')} style={{width: 35, height: 35}} />
                            </View>} 
                        onPress={() => this.navigateFunc("SentOrdersTab")}
                    
                    />
                    <BottomNavigation.Action
                        key="IncomingOrdersTab"
                        icon={<View > 
                        <Image source={this.state.active==='IncomingOrdersTab'?require('./received-offers.png'):require('./received-offers-grey.png')} style={{width: 35, height: 35}} />
                        </View>}
                        onPress={() => this.navigateFunc("IncomingOrdersTab")}
                    />
                    <BottomNavigation.Action
                        key="TradesTab"
                        icon={<View > 
                            <Image source={this.state.active==='TradesTab'?require('./traded-stuff.png'):require('./traded-stuff-grey.png')} style={{width: 35, height: 35}} />
                            </View>}
                        onPress={() => this.navigateFunc("TradesTab")}
                    />
                    <BottomNavigation.Action
                        key="AccountTab"
                        icon={<View > 
                            <Image source={this.state.active==='AccountTab'?require('./user.png'):require('./user-grey.png')} style={{width: 35, height: 35}} />
                            </View>}
                        onPress={() => this.navigateFunc("AccountTab")}
                    />
                </BottomNavigation>
            </AppTheme>
        )
    }
};