import React, { Component } from 'react';
import {
    View,
    Text,
    Alert,
    Image,
    ScrollView,

} from 'react-native';

import Styles from './styles';
import { Button} from 'react-native-material-ui';
import { AppTheme ,BackButton} from '@components';

import {Images,CSS} from '@theme';

const strOfferSent = "Your offer has been sent! \n\nThe recipient will be notified and if they accept your offer, we will let you know!"
export default class MakeOffer extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            itemOne: {
                image:Images.img_1,
                name : 'Stuff 1'
            },
            itemTwo: {
                image:Images.img_3,
                name : 'Stuff 3'
            },
        });
    }
    
    navigateDialog(){
        this.props.navigation.navigate("NotificationDialog",{title:strOfferSent,next:"HomeStarter"});
    }

    makeOffer() {
        
        Alert.alert(
            'TradeStuff',
            'Are you sure you want to make this offer?!\nIt is binding as soon as the recipient accepts!',
            [
              {text: 'Yes', onPress: () => this.navigateDialog()},
              {text: 'No',  onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            ],
            { cancelable: true }
          )

    }

    render() {
        return (
            <AppTheme >
                <View style = {Styles.container} >
                    <View style={Styles.headerView}>
                        <BackButton text="Back" onPress = {()=> this.props.navigation.goBack()}>BACK</BackButton>
                    </View>
                    <ScrollView style={Styles.detailScroll}>
                        <View style={Styles.oneItem}>
                            <Image style={Styles.itemImage} source = {this.state.itemOne.image} />
                            <View style={Styles.itemTitle}>
                                <Text style={[CSS.font20,CSS.white]}>{this.state.itemOne.name}</Text>
                                <View style={Styles.priceLabel}>
                                    <Text style={[CSS.font20,CSS.backDarkGray,CSS.white,{padding:10}]}>$25</Text>
                                </View>
                            </View>
                        </View>
                        <View style={Styles.oneItem}>
                            <Image style={Styles.itemImage} source = {this.state.itemTwo.image} />
                            <View style={Styles.itemTitle}>
                                <Text style={[CSS.font20,CSS.white]}>{this.state.itemTwo.name}</Text>
                                <View style={Styles.priceLabel}>
                                    <Text style={[CSS.font20,CSS.backDarkGray,CSS.white,{padding:10}]}>$37</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={Styles.bottomView}>
                        <View style={Styles.addStuffBtn}>
                            <Button primary raised text="MAKE OFFER" style={{'container':Styles.radius10Btn}} onPress={this.makeOffer.bind(this)} />
                        </View>
                    </View>
                </View>
            </AppTheme>
        )
    };
};