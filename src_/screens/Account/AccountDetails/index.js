import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    Button
} from 'react-native';

import {Images} from '@theme';
import {AppTheme, ScrollSmallItem, ScrollArrow, ScrollSmallArrow} from '@components';
import Styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Constants from '../../../constants';
import styles from './styles';
import GridList from 'react-native-grid-list';
import Likes from '../Likes'
import Wants from '../Wants'
export default class AccountDetails extends Component {

    constructor(props) {
        super(props);

        this.state = ({

            userInfo: {
                'avatar':Images.avatar,
                'username':"Alibaba",

            },
            listItems: [
                    // { thumbnail: { uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' } },
                    { thumbnail: Images.img_1 },
                    { thumbnail: Images.img_2 },
                    { thumbnail: Images.img_3 },
                    { thumbnail: Images.img_4 },
                    { thumbnail: Images.img_5 },
                    { thumbnail: Images.img_2 },
                    ],
            listType:0 // 0:Available, 1:Traded
        });
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

    componentWillMount() {

    }
    navigateHome(){
        
    }

    renderItem = ({ item, index }) => (
        <View>
            <View style={Styles.contentItemView} >
                <Image style={Styles.contentItemImage} source={item.thumbnail} />
            </View>
        </View>
    );

    render() {
        return (
            <View style={styles.container}>
                <AppTheme >
                    <View style={styles.firstContainer}>
                        <View style={styles.imgView}>
                            <Icon name="user" color={Constants.Colors.LightGrey} size={65} />
                            {/* <Image source={Constants.Images.user.defaultUser} style={styles.userImg}/> */}
                        </View>
                        <View style={styles.textSubView}>
                            <View style={styles.secondSubView}>
                                <Text style={styles.nameText}>{"John  Doe   -"}</Text>
                                <Text style={styles.AddressText}>{"    address LA"}</Text>
                            </View>
                            <Text style={{flex: 1,fontSize: 10}}>Wants</Text>
                            <View style={{width: '100%', flex: 3, paddingLeft : 10, paddingRight: 10}}>
                                <View style={Styles.headerScroll}>
                                    <ScrollView ref="categoryScroll" style={Styles.headerScrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
                                        
                                        <ScrollSmallItem itemImage="computer" itemName="Tech" index="Tech" onTouch={this.onPressScrollItem}/>
                                        <ScrollSmallItem itemImage="image" itemName="Clothing" index="Clothing" onTouch={this.onPressScrollItem}/>
                                        <ScrollSmallItem itemImage="accessibility" itemName="Sports" index="Sports" onTouch={this.onPressScrollItem}/>
                                        <ScrollSmallItem itemImage="library-books" itemName="Books" index="Books" onTouch={this.onPressScrollItem}/>
                                        <ScrollSmallItem itemImage="music-video" itemName="Music" index="Music" onTouch={this.onPressScrollItem}/>
                                        
                                    </ScrollView>
                                    <View style={Styles.scrollArrowLeft}>
                                        <ScrollSmallArrow itemImage="arrow-back" onTouch={this.onPressScrollLeftArrow.bind(this)}/>
                                    </View>
                                    <View style={Styles.scrollArrowRight}>
                                        <ScrollSmallArrow itemImage="arrow-forward" onTouch={this.onPressScrollRightArrow.bind(this)}/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.imgsView}>
                        <Wants/>
                    </View>
                    <TouchableOpacity style={styles.absoluteView} onPress={() => this.props.navigation.navigate('Account')}>
                        <Icon name="edit" color={Constants.Colors.Green} size={25} />
                    </TouchableOpacity>
                    <View style={styles.absoluteButtons}>
                        <Button title='MY STUFF' style={Styles.radius10Btn} color='white' onPress={() => alert("pressed")} />
                        <Button title='MY LIKES' style={Styles.radius10Btn} color='white' onPress={() => alert("pressed")} />
                    </View>
                </AppTheme>
            </View>
        );
    }
};