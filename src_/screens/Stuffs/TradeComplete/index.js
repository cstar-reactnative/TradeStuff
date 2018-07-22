import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Alert,
    TextInput,
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback
} from 'react-native';

import {Images,CSS} from '@theme';
import {AppTheme, BackButton} from '@components';
import Styles from './styles';
import { Button ,Icon} from 'react-native-material-ui';

const strFeedback = "Thanks for your feedback!\n\nThis will added to the recipient's profile to help others get to know them."

export default class TradeComplete extends Component {

    constructor(props) {
        super(props);

        this.state = ({

        });
    }

    pressFeedback(){
        this.props.navigation.navigate("NotificationDialog",{title:strFeedback,next:"TradesStarter"});
    }

    render() {
        return (
            <AppTheme >
                <KeyboardAvoidingView style={Styles.container} behavior="position">
                    
                    <View style={Styles.headerView}>
                        <BackButton text="Back" onPress = {()=> this.props.navigation.goBack()}>BACK</BackButton>
                    </View>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={Styles.container}>
                        <View style={Styles.titleView}>
                            <Text style={[CSS.font20,CSS.darkGray]} >Completed Trade!</Text>
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

                        <View style={Styles.detailView}>
                            <Text style={[CSS.font20,CSS.white,CSS.textCenter]} >Completed on:</Text>
                            <Text style={[CSS.font20,CSS.white,CSS.textCenter]} >5-17-2018</Text>
                        </View>

                        <View style={Styles.buttons}>
                            <Text style={[CSS.font15,CSS.darkGray]} >How was your experience?</Text>
                            <TextInput style={Styles.commentArea} multiline />
                        </View>


                        <View style={Styles.bottomView}>
                            <View style={Styles.feedbackBtn}>
                                <Button primary raised text="Add Feedback" style={{'container':Styles.radius10Btn}} onPress={this.pressFeedback.bind(this)} />
                            </View>
                        </View>
                                            
                        {/* <View style={Styles.bottomView}>
                            <View style={Styles.bottomButton}>
                                <View style={Styles.feedbackButton}>
                                    <Button primary raised  text="Add Feedback" onPress={this.pressFeedback.bind(this)} />
                                </View>

                            </View>
                        </View> */}
                    </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>                
            </AppTheme>
        );
    }
};