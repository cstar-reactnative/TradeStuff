import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Alert,
    TouchableOpacity
} from 'react-native';
import Constants from '../../../constants';
import {Images,CSS} from '@theme';
import {AppTheme} from '@components';
import Styles from './styles';
import { Button ,Icon} from 'react-native-material-ui';
import GridList from 'react-native-grid-list';


export default class ItemsToOffer extends Component {

    constructor(props) {
        super(props);

        this.state = ({

            listItems: [
                { thumbnail: Images.img_3 , name: "sample 3"},
                { thumbnail: Images.img_2 , name: "sample 2"},
                { thumbnail: Images.img_1 , name: "sample 1"},
                { thumbnail: Images.img_1 , name: "sample 1"},
            ],
            mainItem: {
                thumbnail: Images.img_1 ,
                name:"Lorem ipsum",
                interest:"Interests"
            },
            selectedItemIndex:null
        });
    }

    pressCancel() {
        if ( this.state.selectedItemIndex ){
            
        }else {
            this.props.navigation.goBack();
        }
    }

    pressItem(index){
        this.props.navigation.navigate("MakeOffer");
    }

    renderItem = ({ item, index }) => (
        <TouchableOpacity onPress = {()=>this.pressItem(index)}>
            <View style={Styles.contentItemView} >        
                <View style={Styles.contentItemImage}>
                    <View style={Styles.contenItemMainGreen}>
                        <Image style={Styles.imageStyle}  source={item.thumbnail} />
                        <Text style={Styles.carouselPriceGreen}>$25</Text>
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
                    <View style={Styles.itemsView}>
                        <View style={Styles.mainItem}>
                            <Image style={CSS.fullContent} source={this.state.mainItem.thumbnail}/>
                        </View>
                        <View style={Styles.titleView}>
                            <Text style={[CSS.darkGray,CSS.font15]}>Item Title</Text>
                            <Text style={[CSS.darkGray,CSS.font15]}>(used)</Text>
                            <Text style={[CSS.orange,CSS.font15]}>Minimum offer value        $25</Text>
                        </View>
                    </View>
                    <View style={Styles.favoriteBtn}>
                        <Text style={Styles.carouselPrice}>$25</Text>
                    </View>
                    </View>
                    <View style={{alignItems: 'center', padding: 10}}>
                        <Text style={Styles.sectionTitle}>Select Stuff to Offer</Text>
                    </View>
                    <View style={Styles.contentList}>
                        <GridList
                            showSeparator
                            animationInitialBackgroundColor="white"
                            data={this.state.listItems}
                            numColumns={2}
                            renderItem={this.renderItem}
                            />
                    </View>

                     <View style={Styles.bottomView}>
                        <View style={Styles.bottomButton}>
                            <View style={Styles.button}>
                                <Button accent raised text="CANCEL" onPress={this.pressCancel.bind(this)} />
                            </View>
                           
                        </View>
                    </View>
                </View>
                
            </AppTheme>
        );
    }
};