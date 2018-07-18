import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import {Images} from '@theme';
import {AppTheme} from '@components';
import Styles from './styles';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Constants from '../../constants';
import { Button,Avatar } from 'react-native-material-ui';
import { EventRegister } from 'react-native-event-listeners'

export default class Account extends Component {

    constructor(props) {
        super(props);

        this.state = ({

            userInfo: {
                'avatar':Images.avatar,
                'username':"Alibaba",

            }
        });
    }
    componentWillMount() {

    }
    navigateHome(){
        
    }

    render() {
        return (
            <AppTheme >
                <Header
                    leftComponent={
                        <TouchableOpacity onPress = {()=> this.props.navigation.goBack()}>
                            <Icon name="chevron-left" color={Constants.Colors.DarkGrey} size={25} />
                        </TouchableOpacity>
                    }
                    centerComponent={{ text: 'EDIT PROFILE', style: { color: Constants.Colors.DarkGrey, fontSize:20 } }}
                    outerContainerStyles={{ backgroundColor: Constants.Colors.MediumGrey }}
                />
                <View style={Styles.container}>
                    <View style={Styles.accountView}>
                        <View style={Styles.menuView}> 
                            <View style={Styles.avatar} > 
                                <Image style={Styles.imageStyle} source={this.state.userInfo["avatar"]} />
                            </View>

                            <View style={Styles.menuButton}>
                                <Button raised text = "CHANGE" />
                            </View>

                            <View style={Styles.dividerLine}/>                                                        

                            <View style={Styles.menuButton}>
                                <Button raised text = "SET WANTS" onPress={()=>this.props.navigation.navigate("Wants")} />
                            </View>
                            <View style={Styles.menuButton}>
                                <Button raised text = "SAVE" 
                                // onPress={()=>this.props.navigation.navigate("Likes")}
                                onPress={()=>alert("Saved")}/>
                            </View>

                            <View style={Styles.dividerLine}/>                                                        

                            {/* <View style={Styles.menuButton}>
                                <Button raised text = "DEPOSIT" onPress={this.navigateHome.bind(this)}/>
                            </View>
                            <View style={Styles.menuButton}>
                                <Button raised primary text = "WITHDRAW" />
                            </View> */}

                            {/* <View style={Styles.menuLabel}>
                                <Text style={Styles.menuLabelText}>UNLOCKED STAKE</Text>
                            </View>
                            <View style={Styles.menuLabel}>
                                <Text style={Styles.menuLabelValue}>$25.00</Text>
                            </View>
                            <View style={Styles.menuLabel}>
                                <Text style={Styles.menuLabelText}>LOCKED STAKE</Text>
                            </View>
                            <View style={Styles.menuLabel}>
                                <Text style={Styles.menuLabelValue}>$999.00</Text>
                            </View> */}
                        </View>
                        
                        <View style={Styles.detailView}>
                            <ScrollView style={Styles.detailScroll}>
                                <View style={Styles.detailItem}>
                                    
                                    <Text style={Styles.detailItemlabel}>First Name</Text>                                   
                                    <View style={Styles.itemInput}>
                                        <TextInput ></TextInput>
                                    </View>

                                    <Text style={Styles.detailItemlabel}>Last Name</Text>                                   
                                    <View style={Styles.itemInput}>
                                        <TextInput ></TextInput>
                                    </View>

                                    <Text style={Styles.detailItemlabel}>Shipping Address</Text>                                   
                                    <View style={Styles.itemInput}>
                                        <TextInput ></TextInput>
                                    </View>

                                    <Text style={Styles.detailItemlabel}>City</Text>                                   
                                    <View style={Styles.itemInput}>
                                        <TextInput ></TextInput>
                                    </View>

                                    <Text style={Styles.detailItemlabel}>State</Text>                                   
                                    <View style={Styles.itemInput}>
                                        <TextInput ></TextInput>
                                    </View>

                                    <Text style={Styles.detailItemlabel}>Country</Text>                                   
                                    <View style={Styles.itemInput}>
                                        <TextInput ></TextInput>
                                    </View>

                                    <Text style={Styles.detailItemlabel}>Zipcode</Text>                                   
                                    <View style={Styles.itemInput}>
                                        <TextInput ></TextInput>
                                    </View>

                                    <Text style={Styles.detailItemlabel}>Phone</Text>                                   
                                    <View style={Styles.itemInput}>
                                        <TextInput ></TextInput>
                                    </View>

                                    <Text style={Styles.detailItemlabel}>Email</Text>                                   
                                    <View style={Styles.itemInput}>
                                        <TextInput ></TextInput>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </View>                    
                </View>
            </AppTheme>
        );
    }
};