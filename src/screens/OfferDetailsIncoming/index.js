import React, { Component } from 'react';
import { View, Text, Alert, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import Constants from '../../constants';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
import Styles from './styles';
import { Button, Icon} from 'react-native-material-ui';
import { AppTheme ,BackButton} from '@components';
import { EventRegister } from 'react-native-event-listeners'
import {Images,CSS} from '@theme';

const strOfferSent = "Your offer has been sent! \n\nThe recipient will be notified and if they accept your offer, we will let you know!"
export default class OfferDetailsIncoming extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            itemOne: {
                image:Images.img_1,
                name : 'Stuff 1'
            },
            itemTwo: {
                image:Images.img_1,
                name : 'Stuff 2'
            },
        });
    }
    
    navigateDialog(){
        this.props.navigation.navigate("Sent", {showAlertMsg: "Offer Sent! Recipient must accept within 48 hours for binding trade agreement. Offers accepted after 48 hours require renewed acceptance from sender.", showAlertHeader: "Sent Offer!"});
        EventRegister.emit('moveTab', 'Sent');
    }

    cancelOffer() {
        
        Alert.alert(
            'TradeStuff',
            'Are you sure you want to decline this offer?',
            [
              {text: 'Yes', onPress: () => {
                  this.props.navigation.navigate('IncomingOffersStarter');
                }
            },
              {text: 'No',  onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            ],
            { cancelable: true }
          )

    }

    renewOffer(){
        Alert.alert(
            'TradeStuff',
            'Are you sure you want to accept this offer? Trade agreements are binding.',
            [
              {text: 'Yes', onPress: () => {
                this.props.navigation.navigate("AcceptedTrade");
                EventRegister.emit('moveTab', 'Accept');
                }
            },
              {text: 'No',  onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            ],
            { cancelable: true }
          )
    }

    render() {
        return (
            <AppTheme >
                <View style = {Styles.container} >
                <Header
                    leftComponent={
                        <TouchableOpacity onPress = {()=> this.props.navigation.goBack()}>
                            <IconFontAwesome name="chevron-left" color={Constants.Colors.DarkGrey} size={25} />
                        </TouchableOpacity>
                    }
                    centerComponent={{ text: 'RECEIVED OFFER', style: { color: Constants.Colors.DarkGrey, fontSize:20 } }}
                    outerContainerStyles={{ backgroundColor: Constants.Colors.MediumGrey, elevation: 5 }}
                />
                    <ScrollView style={Styles.detailScroll}>
                    <View style = {Styles.diffBg}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("ViewPiece", {index: 0, makeOffer: 'no'})}>
                        <View style={Styles.oneItem}>
                            <Image style={Styles.itemImage} source = {this.state.itemOne.image} />
                            <View style={Styles.itemTitle}>
                                <Text style={[CSS.font20,CSS.white]}>{this.state.itemOne.name}</Text>
                                <View style={Styles.priceLabel}>
                                    <Text style={[CSS.font20,CSS.backOrange,CSS.white,{padding:10}]}>$25</Text>
                                </View>
                            </View>
                        </View>
                        </TouchableOpacity>
                        <View style={Styles.iconView}>
                            <IconEntypo style={Styles.shareBtn} name = "arrow-bold-down" size={30}/>
                        </View>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("ViewPiece", {index: 0, makeOffer: 'no'})}>
                        <View style={Styles.twoItem}>
                            <View style={Styles.itemsView}>
                            <View style={Styles.mainItem}>
                                <Image style={CSS.fullContent} source={this.state.itemTwo.image}/>
                            </View>
                            <View style={Styles.titleView}>
                                <Text style={[CSS.darkGray,CSS.font15]}>Item Title</Text>
                                <Text style={[CSS.darkGray,CSS.font15]}>(used)</Text>
                                <Text style={[CSS.green,CSS.font15]}>Minimum offer value          $25</Text>
                            </View>
                            </View>
                            <View style={Styles.itemTitle}>                             
                                <View style={Styles.priceLabel}>
                                    <Text style={[CSS.font20,CSS.backGreen,CSS.white,{padding:10}]}>$37</Text>
                                </View>
                            </View>
                            </View>
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.detailsText}>
                        <Text style={[CSS.font16,CSS.darkGray]} >Offer Received: June 25, 2018 6:25PM</Text>
                        <Text style={[CSS.font16,CSS.darkGray]} >12 hours until expiration</Text>
                        </View>
                    </ScrollView>
                        
                    <View style={Styles.bottomView}>
                        <View style={Styles.addStuffBtn}>
                            <Button accent raised text="DECLINE" style={{'container':Styles.radius10Btn}} onPress={this.cancelOffer.bind(this)} />
                        </View>
                        <View style={Styles.addStuffBtn}>
                        <Button primary raised text="ACCEPT" style={{'container':Styles.radius10Btn}} onPress={this.renewOffer.bind(this)} />
                        </View>
                    </View>
                </View>
            </AppTheme>
        )
    };
};