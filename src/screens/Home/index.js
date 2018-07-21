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

import Masonry from 'react-native-masonry';



export default class Home extends Component {

    constructor(props) {
        super(props);
        
        this.state = ({
            listItems: [
//                { thumbnail: { uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' } },
                { uri: require('../../../assets/images/temp/1.png') },
                { uri: require('../../../assets/images/temp/1.png')},
                { uri: require('../../../assets/images/temp/1.png')},
                { uri: require('../../../assets/images/temp/1.png')},
                { uri: require('../../../assets/images/temp/1.png') },
                { uri: require('../../../assets/images/temp/1.png') },
              ],
            listType:0 // 0:Available, 1:Traded

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
                        <ScrollView ref="categoryScroll" style={Styles.headerScrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
                            
                            <ScrollItem itemImage="computer" itemName="Tech" index="Tech" onTouch={this.onPressScrollItem}/>
                            <ScrollItem itemImage="image" itemName="Clothing" index="Clothing" onTouch={this.onPressScrollItem}/>
                            <ScrollItem itemImage="accessibility" itemName="Sports" index="Sports" onTouch={this.onPressScrollItem}/>
                            <ScrollItem itemImage="library-books" itemName="Books" index="Books" onTouch={this.onPressScrollItem}/>
                            <ScrollItem itemImage="music-video" itemName="Music" index="Music" onTouch={this.onPressScrollItem}/>
                            
                        </ScrollView>
                        <View style={Styles.scrollArrowLeft}>
                            <ScrollArrow itemImage="arrow-back" onTouch={this.onPressScrollLeftArrow.bind(this)}/>
                        </View>
                        <View style={Styles.scrollArrowRight}>
                            <ScrollArrow itemImage="arrow-forward" onTouch={this.onPressScrollRightArrow.bind(this)}/>
                        </View>
                    </View>
                    
                    <View style={Styles.contentList}>
                        <Masonry
                            sorted // optional - Default: false
                            columns={3} // optional - Default: 2
                            bricks={[
                                {
                                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQpD8mz-2Wwix8hHbGgR-mCFQVFTF7TF7hU05BxwLVO1PS5j-rZA',
                                  },
                                  {
                                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQpD8mz-2Wwix8hHbGgR-mCFQVFTF7TF7hU05BxwLVO1PS5j-rZA',
                                  },
                                  {
                                    uri: 'https://s-media-cache-ak0.pinimg.com/736x/5a/15/0c/5a150cf9d5a825c8b5871eefbeda8d14.jpg'
                                  },
                                  {
                                    uri: 'https://s-media-cache-ak0.pinimg.com/736x/04/63/3f/04633fcc08f9d405064391bd80cb0828.jpg'
                                  },
                                  {
                                    uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQRWkuUMpLyu3QnFu5Xsi_7SpbabzRtSis-_QhKas6Oyj3neJoeug'
                                  },
                                  {
                                    uri: 'https://s-media-cache-ak0.pinimg.com/736x/a5/c9/43/a5c943e02b1c43b5cf7d5a4b1efdcabb.jpg'
                                  },
                                  {
                                    uri: 'https://i0.wp.com/www.youbodyhealth.com/wp-content/uploads/2016/08/Delicious-Foods-can-Harm-Your-Brain.jpg?'
                                  },
                                  {
                                    uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-03/29/15/campaign_images/buzzfeed-prod-fastlane-03/26-delicious-korean-foods-you-need-in-your-life-2-30138-1490814365-13_dblbig.jpg',
                                  },
                                  {
                                    uri: 'https://pbs.twimg.com/media/B59AOmICQAAiGGj.png',
                                  },
                                  {
                                    uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2013-12/enhanced/webdr05/17/17/enhanced-buzz-orig-2548-1387320822-8.jpg'
                                  },
                                  {
                                    uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-03/17/15/enhanced/webdr13/enhanced-6527-1426620797-18.jpg'
                                  },
                                  {
                                    uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-12/1/15/enhanced/webdr02/enhanced-18393-1417466529-5.jpg'
                                  },
                                  {
                                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXTmdaGSOFK8iBeYqoA6_XiQGGWvu6KGnqAxXYyvJA-JKin8ImQ'
                                  },
                                
                                    {
                                        uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-12/28/12/asset/buzzfeed-prod-web-09/sub-buzz-24236-1482944714-1.jpg'
                                    },
                                    {
                                        uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-03/7/17/enhanced/webdr08/enhanced-buzz-8155-1457391039-5.jpg'
                                    },
                                    {
                                        uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-03/30/12/asset/buzzfeed-prod-fastlane-01/sub-buzz-24597-1490890739-1.jpg'
                                    },
                                    {
                                        uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-01/14/20/campaign_images/webdr15/which-delicious-mexican-food-item-are-you-based-o-2-20324-1452822970-1_dblbig.jpg'
                                    },
                                    {
                                        uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-11/30/10/enhanced/webdr15/enhanced-18265-1448896942-17.jpg'
                                    },
                                    {
                                        uri: 'https://i.pinimg.com/736x/48/ee/51/48ee519a1768245ce273363f5bf05f30--kaylaitsines-dipping-sauces.jpg'
                                    },
                                    {
                                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGYfU5N8lsJepQyoAigiijX8bcdpahei_XqRWBzZLbxcsuqtiH'
                                    },
                                    {
                                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPL2GTXDuOzwuX5X7Mgwc3Vc9ZIhiMmZUhp3s1wg0oHPzSP7qC'
                                    }
                                ]}
                            imageContainerStyle={Styles.imageContainer}
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
                                <Text style={{fontSize:20, color:'white', marginLeft:10}}>ADD STUFF</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </AppContainer>
        );
    }
};