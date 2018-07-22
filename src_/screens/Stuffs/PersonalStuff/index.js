import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Alert,
    TouchableOpacity
} from 'react-native';

import {Images,CSS} from '@theme';
import {AppTheme,BackButton} from '@components';
import Styles from './styles';
import { Button ,Icon} from 'react-native-material-ui';
import GridList from 'react-native-grid-list';
import { copy } from '@utils';

export default class PersonalStuff extends Component {

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
            selectedIndex:this.props.navigation.getParam('index'),
            selectedListType:0,
            selectedList:[
                { thumbnail: Images.img_1 , name: "sample 1"},
                { thumbnail: Images.img_2 , name: "sample 2"},
            ]
        });
        
    }

    pressedAvailable() {
        var list = copy(this.state.availableItems);

        this.setState({
            selectedList: list,
            selectedListType: 0
        })
    }

    pressedTraded() {
        var list = copy(this.state.tradedItems);
        this.setState({
            selectedList: list,
            selectedListType: 1
        })
    }
    renderItem = ({ item, index }) => (
        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
            <View style={Styles.contentItemView} >
                <View style={Styles.contentItemImage}>
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
                    <View style={Styles.headerView} >
                        <BackButton text="Back" onPress = {()=> this.props.navigation.goBack()}>BACK</BackButton>
                    </View>
                    <View style={[Styles.titleView,CSS.alignCenter,CSS.backDarkGray]} >
                        <Text style={[CSS.font15,CSS.white]}>John Doe's Stuff</Text>
                    </View>
                    <View style={Styles.contentList}>
                        <GridList
                            showSeparator
                            animationInitialBackgroundColor="white"
                            data={this.state.selectedList}
                            numColumns={2}
                            renderItem={this.renderItem}
                            />
                    </View>

                     <View style={Styles.bottomView}>
                        <View style={Styles.bottomButton}>
                            <View style={Styles.button}>
                                <Button primary = {this.state.selectedListType == 0} raised  text="AVAILABLE" onPress={this.pressedAvailable.bind(this)} />
                            </View>
                            {/* <View style={Styles.button}>
                                <Button primary = {this.state.selectedListType != 0} raised  text="TRADED"  onPress={this.pressedTraded.bind(this)} />
                            </View> */}
                        </View>
                    </View>
                </View>
                
            </AppTheme>
        );
    }
};