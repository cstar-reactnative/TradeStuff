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
import {AppTheme} from '@components';
import Styles from './styles';
import { Button ,Icon} from 'react-native-material-ui';
import GridList from 'react-native-grid-list';

import {getSentItems} from '../../data';


const dialogTitle = "Your offer has been withdrawn."
export default class Sent extends Component {

    constructor(props) {
        super(props);
        if(this.props.navigation.state.params && this.props.navigation.state.params){
            console.log('alert')
            Alert.alert(this.props.navigation.state.params.showAlertHeader, this.props.navigation.state.params.showAlertMsg);
        }
        this.state = ({
            activeTabBar: 'navigation',
            listItems: getSentItems(),
            showDialog:false
        });
    }

    pressedWithdraw(index){

        selectedItem = this.state.listItems[index];
        this.setState({showDialog: true});

        Alert.alert(
            'TradeStuff',
            'Are you sure you want to withdraw this offer?',
            [
              {text: 'Yes', onPress: () => this.pressedWithdrawYes(index)},
              {text: 'No',  onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            ],
            { cancelable: true }
          )
    }

    pressedWithdrawYes(index){
        this.setState({showDialog: false});        
        this.props.navigation.navigate("NotificationDialog",{title:dialogTitle});
    }

    renderItem = ({ item }) => (
        <View style={Styles.contentItemView} >
            <TouchableOpacity style={Styles.contentItemImage} onPress={()=>this.props.navigation.navigate('OfferDetails', {trade: item})}>
                <View style={Styles.contentItemImage}>
                    <View style={Styles.contenItemMainGreen}>
                        <Image style={Styles.imageStyle}  source={item[0].thumbnail} />
                    </View>
                </View>
            
                <View style={Styles.contentIcon}>
                <IconEntypo style={Styles.imageColor} name="arrow-bold-right" size={34} />
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