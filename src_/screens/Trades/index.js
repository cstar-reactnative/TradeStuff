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
import { copy } from '@utils';

export default class Trades extends Component {

    constructor(props) {
        super(props);

        this.state = ({

            availableItems: [
                { thumbnail: Images.img_1 , name: "sample 1"},
                { thumbnail: Images.img_2 , name: "sample 2"},

            ],
            tradedItems: [
                { thumbnail: Images.img_3 , name: "sample 3"},
                { thumbnail: Images.img_2 , name: "sample 2"},
                { thumbnail: Images.img_1 , name: "sample 1"},
                { thumbnail: Images.img_4 , name: "sample 4"},
            ],

            selectedListType:0,
            selectedList:[
                { thumbnail: Images.img_1 , name: "sample 1"},
                { thumbnail: Images.img_2 , name: "sample 2"},
            ]
        });
    }

    pressedPending() {
        var list = copy(this.state.availableItems);

        this.setState({
            selectedList: list,
            selectedListType: 0
        })
    }

    pressedCompleted() {
        var list = copy(this.state.tradedItems);
        this.setState({
            selectedList: list,
            selectedListType: 1
        })
    }

    pressItem(index){
        if (this.state.selectedListType == 0) {
            this.props.navigation.navigate("TradeDetail");
        } else{
            this.props.navigation.navigate("TradeComplete");
        }
    }
    
    renderItem = ({ item, index }) => (
        <TouchableOpacity onPress={() => this.pressItem(index) }>
        <View style={Styles.contentItemView} >
            <View style={Styles.contentItemImage}>
                <View style={Styles.contenItemMainGreen}>
                    <Image style={Styles.imageStyle}  source={item.thumbnail} />
                </View>
                <View style={{width:10,height:'100%'}} />
            </View>
            <View>
            <Icon style={Styles.imageColor} name="import-export" size={34} />
            </View>
            <View style={Styles.contentItemImage}>
                <View style={{width:10,height:'100%'}} />
                <View style={Styles.contenItemMainYellow}>
                     <Image style={Styles.imageStyle}  source={item.thumbnail} />
                </View>
            </View>
            
        </View>
        </TouchableOpacity>
    );

    render() {
        return (
            <AppTheme >
                <View style={Styles.container}>

                    <View style={Styles.contentList}>
                        <GridList
                            showSeparator
                            animationInitialBackgroundColor="white"
                            data={this.state.selectedList}
                            numColumns={1}
                            renderItem={this.renderItem}
                            />
                    </View>

                     <View style={Styles.bottomView}>
                        <View style={Styles.bottomButton}>
                            <View style={Styles.button}>
                                <Button primary = {this.state.selectedListType == 0} raised  text="PENDING" onPress={this.pressedPending.bind(this)} />
                            </View>
                            <View style={Styles.button}>
                                <Button primary = {this.state.selectedListType != 0} raised  text="COMPLETED"  onPress={this.pressedCompleted.bind(this)} />
                            </View>
                        </View>
                    </View>
                </View>
                
            </AppTheme>
        );
    }
};