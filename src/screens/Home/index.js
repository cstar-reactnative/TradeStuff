import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    StatusBar,
    Text
} from 'react-native';

import {TopBar,AppTheme,ScrollItem,ScrollArrow,AppContainer} from '@components';
import Styles from './styles';
import { Icon } from 'react-native-elements'
import {Images} from '@theme';
import GridList from 'react-native-grid-list';



export default class Home extends Component {

    constructor(props) {
        super(props);
        
        this.state = ({
            listItems: [
//                { thumbnail: { uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' } },
                { thumbnail: Images.img_1 },
                { thumbnail: Images.img_2 },
                { thumbnail: Images.img_3 },
                { thumbnail: Images.img_4 },
                { thumbnail: Images.img_5 },
                { thumbnail: Images.img_2 },
                { thumbnail: Images.img_1 },
                { thumbnail: Images.img_2 },
                { thumbnail: Images.img_3 },
                { thumbnail: Images.img_4 },
                { thumbnail: Images.img_5 },
                { thumbnail: Images.img_2 },
              ],
            listType:0, // 0:Available, 1:Traded
          images: [
            require('../../../assets/images/icons/left-arrow.png'),
            require('../../../assets/images/icons/right-arrow.png'),
          ]   
        });
        this.onPressAddStuff = this.onPressAddStuff.bind(this)
    }

    onPressScrollItem(index) {
        alert(index)
    }

    onPressScrollLeftArrow() {
        this.refs.categoryScroll.scrollTo({x:0,y:0, animated:true})
    }

    onPressScrollRightArrow() {
        this.refs.categoryScroll.scrollToEnd({animated:true})
    }

    onPressAddStuff() {

        this.props.navigation.navigate("AddStuff");
    }

    onPressPiece(index) {
        this.props.navigation.navigate("ViewPiece",{index:index});
    }

    renderItem = ({ item, index }) => (
        <TouchableOpacity onPress={() => this.onPressPiece(index)}>
            <View style={Styles.contentItemView} >
                <Image style={Styles.contentItemImage} source={item.thumbnail} />
            </View>
        </TouchableOpacity>
    );

    filterPressed() {
        
        this.props.navigation.navigate("Filter");
    }

    sharePressed() {
        
        this.props.navigation.navigate("Share");
    }

    render() {
        return (
            <AppContainer >

                <View style={Styles.container}>

                    <TopBar navigation = {this.props.navigation} onFilterPressed={this.filterPressed.bind(this)} onSharePressed={this.sharePressed.bind(this)}/>
                    
                    <View style={Styles.headerScroll}>
                        <View style={Styles.scrollArrowLeft}>
                            <ScrollArrow style={Styles.arrow} source={require('../../../assets/images/icons/left-arrow.png')} onTouch={this.onPressScrollLeftArrow.bind(this)}/>
                        </View>
                        <ScrollView ref="categoryScroll" style={Styles.headerScrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
                            <ScrollItem itemImage="computer" itemName="Tech" index="Tech" onTouch={this.onPressScrollItem}/>
                            <ScrollItem itemImage="image" itemName="Clothing" index="Clothing" onTouch={this.onPressScrollItem}/>
                            <ScrollItem itemImage="accessibility" itemName="Sports" index="Sports" onTouch={this.onPressScrollItem}/>
                            <ScrollItem itemImage="library-books" itemName="Books" index="Books" onTouch={this.onPressScrollItem}/>
                            <ScrollItem itemImage="music-video" itemName="Music" index="Music" onTouch={this.onPressScrollItem}/>
                        </ScrollView>
                        <View style={Styles.scrollArrowRight}>
                            <ScrollArrow style={Styles.arrow} source={require('../../../assets/images/icons/right-arrow.png')} onTouch={this.onPressScrollRightArrow.bind(this)}/>                        
                        </View>
                    </View>
                    
                    <View style={Styles.contentList}>
                        <GridList
                            showSeparator
                            animationInitialBackgroundColor="white"
                            data={this.state.listItems}
                            numColumns={3}
                            renderItem={this.renderItem}
                            />
                    </View>

                    <View style={Styles.bottomView}>
                        <View style={Styles.addStuffBtn}>
                            <TouchableOpacity style={Styles.radius10Btn} onPress={this.onPressAddStuff}>
                                <Icon                    
                                    type='feather'
                                    color='white'
                                    size={20}
                                    name='camera'
                                />
                                <Text style={{fontSize:16, color:'white', marginLeft:10}}>ADD STUFF</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </AppContainer>
        );
    }
};