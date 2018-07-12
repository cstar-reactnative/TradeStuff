import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    Switch
} from 'react-native';

//import {Colors} from '@theme';
import {AppTheme,Utils,BackButton} from '@components';
import Styles from './styles';
import { Button } from 'react-native-material-ui';
import { copy } from '@utils';

export default class Wants extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            wants : [
                {name:"Tech", status:true},
                {name:"Housing", status:true},
                {name:"Sports", status:false},
                {name:"Books", status:false},
                {name:"Toys", status:true},
                {name:"Board Games", status:true},
                {name:"Cars", status:true},
                {name:"Clothing", status:false},
                {name:"Makeup", status:true},
                {name:"Outdoors", status:true},
                {name:"Decorations", status:false}                
            ]
        });
    }

    onPressSwitch(index,value) {

        var mWants = copy(this.state.wants);
        // alert(index), alert(value)
        mWants[index].status = value;
        this.setState({
            wants:mWants
        })
        // alert(this.state.wants[index].status)
    }

    renderItems({item, index}){
        const {navigate} = this.props.navigation
        return (
            <View style={Styles.item}>
                <View style={Styles.titleLabel}>
                    <Text medium >{item.name}</Text>
                </View>
                <View style={Styles.switchItem}>
                    <Switch value={item.status} onValueChange={(value)=>{this.onPressSwitch(index,value)}} />
                </View>
            </View>
        )
    }

    render() {
        return (
            <AppTheme >
                <View style={Styles.container}>
                    <View style={Styles.headerView} >
                        <BackButton text="Back" onPress = {()=> this.props.navigation.goBack()}>BACK</BackButton>
                    </View>

                    <View style={Styles.contentView} >
                        <FlatList
                            style={Styles.scrollView} 
                            numColumns = {1}
                            data = {this.state.wants}
                            renderItem = {this.renderItems.bind(this)}
                            keyExtractor = {(item, index) => index.toString()}
                            />
                    </View>
                </View>
            </AppTheme>
        )
    }
}