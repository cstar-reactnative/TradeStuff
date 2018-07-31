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
import {getMyItems, getUserItems, currentUser} from '../../../data';

export default class Likes extends Component {

    constructor(props) {
        super(props);

        const {userId} = props;
        const items = userId ? getUserItems(userId) : getMyItems();

        this.state = ({
            likesItems: items
        });
    }

    

    pressItem(index){
        this.props.navigation.navigate("ViewPiece",{index:index});
    }
    
    renderItem = ({ item }) => {
        const {userId} = this.props; 
        return (
        <TouchableOpacity onPress={() => this.pressItem(item.id) }>
        <View style={Styles.contentItemView} >
            <View style={Styles.contentItemImage}>
                <View style={[Styles.contenItemMainYellow, userId ? Styles.orangeBorder: {}]}>
                     <Image style={Styles.imageStyle}  source={item.thumbnail} />
                </View>
                <View style={[Styles.priceIcon, userId ? Styles.orangeBg: {}]}>
                    <Text style={Styles.priceText}>$25</Text>
                </View>
            </View>
            
        </View>
        </TouchableOpacity>
    )};

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