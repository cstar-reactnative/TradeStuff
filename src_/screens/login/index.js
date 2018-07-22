import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

//import {Colors} from '@theme';
import Styles from './styles';
import {TopBar,AppTheme,ScrollItem,ScrollArrow} from '@components';
import { Button} from 'react-native-material-ui';

export default class Login extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        const {navigate} = this.props.navigation
        return (
            <View style={Styles.container}>
                <View style={Styles.itemRow}>
                    <View style={Styles.itemLabel}>
                        <Text >Username :</Text>
                    </View>
                    <View style={Styles.itemInput}>
                        <TextInput ></TextInput>
                    </View>
                    
                </View>
                <View style={Styles.itemRow}>
                    <View style={Styles.itemLabel}>
                        <Text >Password :</Text>
                    </View>
                    <View style={Styles.itemInput}>
                        <TextInput ></TextInput>
                    </View>
                </View>
                <View style={Styles.loginRow}>

                        <AppTheme style={Styles.container}>
                            <Button primary raised text="Login" style={Styles.btn} onPress={()=>{
                            navigate({routeName:'TabNav',key:"TabNav"})}}/>
                        </AppTheme>

                </View>
            </View>
        );
    }
    
};