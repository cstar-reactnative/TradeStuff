import React, { Component } from 'react';
import {
    TouchableOpacity,
    Dimensions,
} from 'react-native';

import { Header,SearchBar } from 'react-native-elements';
import Constants from '../../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../../screens/Account/AccountDetails/styles';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
    
export default class TopBar extends Component {

    constructor(props) {

        super(props);
    }

    render() {
        return (          
            <Header
                leftComponent={
                    <TouchableOpacity 
                        style={{marginRight: 20}}
                        onPress={()=>this.props.onSharePressed()}>
                        <Icon name="share" color={Constants.Colors.DarkGrey} size={20} />
                    </TouchableOpacity>
                }
                centerComponent={
                    <SearchBar
                        round
                        onChangeText={(value)=>this.setState({ searchText: value })}
                        onClearText={()=>this.setState({ searchText: '' })}
                        placeholder='TradeStuff'
                        width = {width/1.5}
                        placeholderTextColor={Constants.Colors.Orange}
                        icon={{ type: 'material', color: Constants.Colors.Orange, name: 'search', style:{top: 8} }}
                        inputStyle={{ backgroundColor:Constants.Colors.White, color: Constants.Colors.Orange}}
                        containerStyle={{ backgroundColor:'transparent',borderBottomWidth:0, borderTopWidth:0,top:Constants.BaseStyle.DEVICE_HEIGHT/100*1.1, justifyContent: 'center', alignItems: 'center' }}
                        underlineColorAndroid='transparent' 
                    />
                }
                rightComponent={
                    <TouchableOpacity onPress={()=>this.props.onFilterPressed()}>
                        <Icon name="tune" color={Constants.Colors.DarkGrey} size={20} />
                    </TouchableOpacity>
                }
                outerContainerStyles={{ backgroundColor: Constants.Colors.MediumGrey, height: 50, alignItems: 'center' }}
            />
        )
    }
};