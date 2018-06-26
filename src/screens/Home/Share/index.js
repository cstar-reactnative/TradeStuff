import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import Styles from './styles';
import { Button ,Icon} from 'react-native-material-ui';
import { AppTheme,BackButton } from '@components';
import {Colors,Images} from '@theme';

const strShareTradestuff= "SHARE TRADESTUFF WITH YOUR FRIENDS!"
export default class Share extends Component {

    constructor(props) {
        super(props);
    }

    pressedFacebook(){

    }
    pressedTwitter(){

    }
    pressedPinterest(){

    }
    pressedAlarm(){

    }
    pressedReddit(){

    }
    pressedSlack(){

    }
    pressedCopyLink(){

    }

    render() {
        return (
            <AppTheme >
                <View style = {Styles.container} >
                    <View style={Styles.headerView}>
                        <BackButton text="Back" onPress = {()=> this.props.navigation.goBack()}>BACK</BackButton>
                    </View>
                    <View style={Styles.container}>  
                        <View style={Styles.headerTitle} >
                            <Text style={Styles.headerText}>{strShareTradestuff}</Text>
                        </View>
                        
                        <View style={Styles.oneRow}>
                            <TouchableOpacity style={Styles.oneItem} onPress={this.pressedFacebook}>
                                <Image style={Styles.imageStyle} source = {Images.ic_facebook} />
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.oneItem} onPress={this.pressedTwitter}>
                                <Image style={Styles.imageStyle} source = {Images.ic_twitter} />
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.oneItem} onPress={this.pressedPinterest}>
                                <Image style={Styles.imageStyle} source = {Images.ic_pinterest} />
                            </TouchableOpacity>

                        </View>

                        <View style={Styles.oneRow}>
                            <TouchableOpacity style={Styles.oneItem} onPress={this.pressedAlarm}>
                                <Image style={Styles.imageStyle} source = {Images.ic_alarm} />
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.oneItem} onPress={this.pressedReddit}>
                                <Image style={Styles.imageStyle} source = {Images.ic_reddit} />
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.oneItem} onPress={this.pressedSlack}>
                                <Image style={Styles.imageStyle} source = {Images.ic_slack} />
                            </TouchableOpacity>

                        </View>
                        <View style={Styles.oneRow}>
                            <TouchableOpacity style={Styles.lastOneItem} onPress={this.pressedCopyLink}>
                                <View style={Styles.lastOneItemImage}>
                                    <Image style={Styles.imageStyle} source = {Images.ic_interface} />
                                </View>
                                <View style={Styles.lastoneItemText}>
                                    <Text style={Styles.copyLinkTextStyle}>Copy Link</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </AppTheme>
        )
    }
};