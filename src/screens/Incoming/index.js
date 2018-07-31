import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Alert,
    TouchableOpacity
} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {Images} from '@theme';
import {BottomBar,TopBar,AppTheme} from '@components';
import Styles from './styles';
import { Button ,Icon,Dialog,DialogDefaultActions} from 'react-native-material-ui';
import GridList from 'react-native-grid-list';

const strOfferAccepted = "Woohoo! This trade has just been finalized!\n\nWe're letting the other party know right now. In the meantime, let's get started completing this trade."
const strOfferDeclined = "Offer has been declined."
const strAcceptConfirm = "Are you sure you want to accept this offer?! \n It is binding as soon as you accept!"
const strDeclineConfirm = "Are you sure you want to decline this offer?"

import {getReciveItems} from '../../data';

export default class Incoming extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            listItems: getReciveItems(),
        });
    }

    pressedAccept(index){

        selectedItem = this.state.listItems[index];

        Alert.alert(
            'TradeStuff',
            strAcceptConfirm,
            [
              {text: 'Yes', onPress: () => this.pressedAcceptYes(index)},
              {text: 'No',  onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            ],
            { cancelable: true }
          )
    }

    pressedAcceptYes(index){
      
        this.props.navigation.navigate("NotificationDialog",{title:strOfferAccepted,next:"TradeDetail",comeFrom:"Incoming"});
    }

    pressedDecline(index){

        selectedItem = this.state.listItems[index];

        Alert.alert(
            'TradeStuff',
            strDeclineConfirm,
            [
              {text: 'Yes', onPress: () => this.pressedDeclineYes(index)},
              {text: 'No',  onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            ],
            { cancelable: true }
          )
    }

    pressedDeclineYes(index){
    
        this.props.navigation.navigate("NotificationDialog",{title:strOfferDeclined});
    }
    renderItem = ({ item  }) => (
        <View style={Styles.contentItemView} >

            <TouchableOpacity style={Styles.contentItemImage} onPress={()=>this.props.navigation.navigate('OfferDetailsIncoming', {trade: item})}>
                <View style={Styles.contentItemImage}>
                    <View style={Styles.contenItemMainGreen}>
                        <Image style={Styles.imageStyle}  source={item[0].thumbnail} />
                    </View>
                    
                </View>            

            <View style={Styles.contentIcon}>
            <IconEntypo style={Styles.imageColor} name="arrow-bold-left" size={34} />
            </View>

            
                <View style={Styles.contentItemImage}>
                    <View style={Styles.contenItemMainYellow}>
                        <Image style={Styles.imageStyle}  source={item[1].thumbnail} />
                    </View>
                </View>
            </TouchableOpacity>

        </View>
    );

    render() {
        return (
            <AppTheme >
                <View style={Styles.container}>
                    {/* <View style={Styles.headerView}>
                        <Button text="Back" primary raised 
                         onPress = {()=> this.props.navigation.navigate("HomeTab")}
                        />
                    </View> */}
                    <View style={Styles.contentList}>
                        <GridList
                            showSeparator
                            animationInitialBackgroundColor="white"
                            data={this.state.listItems}
                            numColumns={1}
                            renderItem={this.renderItem}
                            />
                    </View>
                </View>

               
                {/* { this.state.showDialog &&
                    <Dialog >
                            <Dialog.Title><Text>Hello world</Text></Dialog.Title>
                            <Dialog.Content>
                                <Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat.
                                </Text>
                            </Dialog.Content>
                            <Dialog.Actions>
                                <DialogDefaultActions
                                    actions={['NO', 'YES']}
                                    onActionPress={(key) => this.pressedWithdrawYes(key)}
                                />
                            </Dialog.Actions>
                        </Dialog>
                } */}
                
            </AppTheme>
        );
    }
};