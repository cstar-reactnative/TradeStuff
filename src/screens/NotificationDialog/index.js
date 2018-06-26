import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

import {Colors,Images} from '@theme';
import {BottomBar,TopBar,AppTheme} from '@components';
import Styles from './styles';
import { Button } from 'react-native-material-ui';
import { EventRegister } from 'react-native-event-listeners'

export default class NotificationDialog extends Component {

    constructor(props) {
        super(props);

        console.log(props.navigation);
    }

    pressedContinue() {

        nextView = this.props.navigation.getParam('next')
        come = this.props.navigation.getParam('comeFrom')

        if (nextView && nextView != ""){

            if (nextView == "HomeStarter"){
                this.props.navigation.navigate("AccountStarter");

                this.props.navigation.navigate("HomeStarter");
                EventRegister.emit('moveTab', 'Home')

            } else if (nextView == "TradesStarter"){
                this.props.navigation.navigate("TradesStarter");

            } else if (nextView == "TradeDetail"){
                this.props.navigation.navigate("TradeDetail",{comeFrom:come});

            } else if (nextView == "Incoming"){
                this.props.navigation.navigate("IncomingOffersStarter");

            } else {
                this.props.navigation.goBack()
            }
        } else {
            this.props.navigation.goBack()
        }

        
    }
    render() {
        return (
            <AppTheme >
                <View style={Styles.container}>
                    <View style={Styles.titleView}>
                        <Text style={Styles.textStyle}>{this.props.navigation.getParam('title')}</Text>
                    </View>
                    <View style={Styles.bottomView}>
                        <View style={Styles.bottomButton}>
                            <Button primary raised text="CONTINUE" style={{"container":{'backgroundColor':Colors.greenColor}}} onPress={this.pressedContinue.bind(this)} />
                        </View>
                    </View>
                </View>
            </AppTheme>
        );
    }
};