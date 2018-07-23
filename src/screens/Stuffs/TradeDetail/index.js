import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Alert,
    TouchableOpacity,
} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { Header } from 'react-native-elements';
import Constants from '../../../constants';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

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
                <Header
                    leftComponent={
                        <TouchableOpacity onPress = {()=> this.props.navigation.goBack()}>
                            <IconFontAwesome name="chevron-left" color={Constants.Colors.DarkGrey} size={25} />
                        </TouchableOpacity>
                    }
                    centerComponent={{ text: 'TRADE DETAILS', style: { color: Constants.Colors.DarkGrey, fontSize:20 } }}
                    outerContainerStyles={{ backgroundColor: Constants.Colors.MediumGrey, elevation: 5 }}
                />
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
                            <IconEntypo style={Styles.imageColor2} name="arrow-bold-right" size={34} />
                            <IconEntypo style={Styles.imageColor1} name="arrow-bold-left" size={34} />
                            </View>
                            <View style={Styles.contentItemImage}>
                                <View style={{width:10,height:'100%'}} />
                                <View style={Styles.contenItemMainYellow}>
                                    <Image style={Styles.imageStyle}  source={Images.img_2} />
                                </View>
                            </View>                        
                        </View>

                        <View style={Styles.subTitleView}>
                            <Text style={[CSS.font16,CSS.darkGray]} >Please send your stuff to:</Text>
                        </View>

                        <View style={Styles.subTitleView}>
                        <Text style={[CSS.font16,CSS.darkGray]} >John Doe</Text>
                        <Text style={[CSS.font16,CSS.darkGray]} >1234 Main St.</Text>
                        <Text style={[CSS.font16,CSS.darkGray]} >City, CA 91713</Text>
                        </View>
                        
                        <View style = {Styles.detailView}>
                        <Text style={[CSS.font16,CSS.darkGray]} >Trade Details</Text>
                        <Text style={[CSS.font16,CSS.darkGray]} >Offer Sent: June 25, 2018 6:25PM</Text>
                        <Text style={[CSS.font16,CSS.darkGray]} >Offer Accepted: June 26, 2018 5:15PM</Text>
                        <View style={{flexDirection:'row', padding: 10}}>
                        <TouchableOpacity onPress={this.pressSent.bind(this)}>
                            <Text style={Styles.sentMark}>MARK "SENT" </Text>                            
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.pressReceived.bind(this)}>
                            <Text style = {Styles.receivedMark}>MARK "RECEIVED" </Text>                          
                        </TouchableOpacity>  
                        </View>
                        </View>

                    </View>
                </View>                
            </AppTheme>
        );
    }
};