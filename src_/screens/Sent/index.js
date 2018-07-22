import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Alert,
    TouchableOpacity
} from 'react-native';

import {Images} from '@theme';
import {AppTheme} from '@components';
import Styles from './styles';
import { Button ,Icon} from 'react-native-material-ui';
import GridList from 'react-native-grid-list';

const dialogTitle = "Your offer has been withdrawn."
export default class Sent extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            activeTabBar: 'navigation',
            listItems: [
//                { thumbnail: { uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' } },
                { thumbnail: Images.img_1 , name: "sample 1"},
                { thumbnail: Images.img_2 , name: "sample 2"},
                { thumbnail: Images.img_3 , name: "sample 3"},
                { thumbnail: Images.img_4 , name: "sample 4"},
                { thumbnail: Images.img_5 , name: "sample 5"},
            ],
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

    renderItem = ({ item, index }) => (
        <View style={Styles.contentItemView} >

            <TouchableOpacity style={Styles.contentItemImage}>
                <View style={Styles.contentItemImage}>
                    <View style={Styles.contenItemMainGreen}>
                        <Image style={Styles.imageStyle}  source={item.thumbnail} />
                    </View>
                    <View style={{width:10,height:'100%'}} />
                </View>
            </TouchableOpacity> 
                <View>
                <Icon style={Styles.imageColor} name="arrow-forward" size={34} />
                </View>
            

            <TouchableOpacity style={Styles.contentItemImage}>
                <View style={Styles.contentItemImage}>
                    <View style={{width:10,height:'100%'}} />
                    <View style={Styles.contenItemMainYellow}>
                        <Image style={Styles.imageStyle}  source={item.thumbnail} />
                    </View>
                </View>
            </TouchableOpacity>

            <View style={Styles.withdrawStyle}>
                <Button accent raised style={Styles.withdrawButton} text="CANCEL" onPress={()=>this.pressedWithdraw(index)} />
            </View>
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