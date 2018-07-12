import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Alert
} from 'react-native';

import {Images,CSS} from '@theme';
import {AppTheme,BackButton} from '@components';
import Styles from './styles';
import { Button ,Icon} from 'react-native-material-ui';


const strSent = "Thanks for you sending your stuff! \n\n Once both you and your trading partner receive each other's stuff, this trade will be complete!"
const strReceive = "Excellent! We're glad you received your stuff!\n\nOnce your trading partner receives your stuff, this trade will be complete!"
export default class TradeDetail extends Component {

    constructor(props) {
        super(props);

        this.state = ({

        });
    }

    pressSent(){
        come = this.props.navigation.getParam('comeFrom');
        if (come == "Incoming"){
            this.props.navigation.navigate("NotificationDialog",{title:strSent,next:"Incoming",comeFrom:come});
        }else {
            this.props.navigation.navigate("NotificationDialog",{title:strSent,next:"TradesStarter",comeFrom:come});
        }        
    }

    pressReceived(){
        come = this.props.navigation.getParam('comeFrom');
        if (come == "Incoming"){
            this.props.navigation.navigate("NotificationDialog",{title:strReceive,next:"Incoming",comeFrom:come});
        }else {
            this.props.navigation.navigate("NotificationDialog",{title:strReceive,next:"TradesStarter",comeFrom:come});
        }  
    }

    render() {
        return (
            <AppTheme >
                <View style={Styles.container}>
                    <View style={Styles.headerView}>
                        <BackButton text="Back" onPress = {()=> this.props.navigation.goBack()}>BACK</BackButton>
                    </View>

                    <View style={Styles.container}>
                        <View style={Styles.titleView}>
                            <Text style={[CSS.font20,CSS.darkGray]} >Finalized Trade</Text>
                        </View>
                    
                        <View style={Styles.contentItemView} >
                            <View style={Styles.contentItemImage}>
                                <View style={Styles.contenItemMainGreen}>
                                    <Image style={Styles.imageStyle}  source={Images.img_1} />
                                </View>
                                <View style={{width:10,height:'100%'}} />
                            </View>
                            <View>
                            <Icon style={Styles.imageColor} name="import-export" size={34} />
                            </View>
                            <View style={Styles.contentItemImage}>
                                <View style={{width:10,height:'100%'}} />
                                <View style={Styles.contenItemMainYellow}>
                                    <Image style={Styles.imageStyle}  source={Images.img_2} />
                                </View>
                            </View>                        
                        </View>

                        <View style={Styles.subTitleView}>
                            <Text style={[CSS.font18,CSS.darkGray]} >Please send your stuff to:</Text>
                        </View>

                        <View style={Styles.detailView}>
                            <Text style={[CSS.font25,CSS.white,CSS.textCenter]} >1234 Example Ln., Rancho Cucamonga, CA, 91737</Text>
                        </View>

                        <View style={Styles.buttons}>
                            <View style={Styles.oneRow}>
                                <Button style={Styles.button} primary raised text="Chat"/>                            
                            </View>
                            <View style={Styles.oneRow}>
                                <Button style={Styles.button} primary raised text="MARK SENT" onPress={this.pressSent.bind(this)}/>                            
                            </View>
                            <View style={Styles.oneRow}>
                                <Button style={Styles.button} primary raised text="MARK RECEIVED" onPress={this.pressReceived.bind(this)}/>                            
                            </View>
                        </View>

                    </View>
                </View>                
            </AppTheme>
        );
    }
};