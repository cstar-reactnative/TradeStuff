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
import {getLikedByMe} from '../../../data';


export default class Likes extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            likesItems: getLikedByMe()
        });
    }

    

    pressItem(index){

        // this.props.navigation.navigate("ViewPiece",{index:index});
    }
    
    renderItem = ({ item, index }) => (
        <TouchableOpacity onPress={() => this.pressItem(index) }>
        <View style={Styles.contentItemView} >
            <View style={Styles.contentItemImage}>
                <View style={Styles.contenItemMainYellow}>
                     <Image style={Styles.imageStyle}  source={item.thumbnail} />
                </View>
                <View style={Styles.favoriteIcon}>
                    <Icon style={Styles.darkGray} name = "favorite" size={30}/>
                </View>
                <View style={Styles.priceIcon}>
                    <Text style={Styles.priceText}>$25</Text>
                </View>
            </View>
            
        </View>
        </TouchableOpacity>
    );

    render() {
        return (
            <AppTheme >
                <View style={Styles.container}>
                    {/* <View style={Styles.headerView} >
                        <BackButton text="Back" onPress = {()=> this.props.navigation.goBack()}>BACK</BackButton>
                    </View> */}

                    <View style={Styles.contentList}>
                        <GridList
                            showSeparator
                            animationInitialBackgroundColor="white"
                            data={this.state.likesItems}
                            numColumns={2}
                            renderItem={this.renderItem}
                            />
                    </View>

                </View>
                
            </AppTheme>
        );
    }
};