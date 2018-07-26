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
            listType:0 ,
            toggleBtn: true
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
        const params = this.props.navigation.state.params;
        const canEdit = (!params || params && !params.noEdit);

        return (
            <View style={styles.container}>
                <AppTheme >
                    <View style={styles.firstContainer}>
                        <View style={styles.imgView}>
                            
                            <Icon style={styles.userPic} name="user" color={Constants.Colors.LightGrey} size={75} />
                            {/* <Image source={Constants.Images.user.defaultUser} style={styles.userImg}/> */}
                        </View>
                        <View style={styles.trick} />
                        <View style={styles.textSubView}>
                            <View style={styles.secondSubView}>
                                <Text style={styles.nameText}>{"John  Doe   -"}</Text>
                                <Text style={styles.AddressText}>{"Los Angeles, CA"}</Text>
                            </View>
                            <Text style={{flex: 1,fontSize: 10}}>Wants</Text>
                            <View style={{width: '100%', flex: 3, position:'relative', zIndex:0 }}>
                                <View style={Styles.headerScroll}>
                                    <ScrollView ref="categoryScroll" style={Styles.headerScrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
                                        <ScrollSmallItem imageColor="#e2e2e2" itemImage="computer" itemName="Tech" index="Tech" onTouch={this.onPressScrollItem}/>
                                        <ScrollSmallItem itemImage="image" itemName="Clothing" index="Clothing" onTouch={this.onPressScrollItem}/>
                                        <ScrollSmallItem itemImage="accessibility" itemName="Sports" index="Sports" onTouch={this.onPressScrollItem}/>
                                        <ScrollSmallItem itemImage="library-books" itemName="Books" index="Books" onTouch={this.onPressScrollItem}/>
                                        <ScrollSmallItem itemImage="music-video" itemName="Music" index="Music" onTouch={this.onPressScrollItem}/>
                                    </ScrollView>
                                    <View style={Styles.scrollArrowLeft}>
                                        <ScrollSmallArrow style={Styles.arrow} source={require('../../../../assets/images/icons/sort-left.png')}  onTouch={this.onPressScrollLeftArrow.bind(this)}/>
                                    </View>
                                    <View style={Styles.scrollArrowRight}>
                                        <ScrollSmallArrow style={Styles.arrow} source={require('../../../../assets/images/icons/sort-right.png')}  onTouch={this.onPressScrollRightArrow.bind(this)}/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.imgsView}>
                         {this.state.toggleBtn===true?<Wants/>:<Likes/>}
                    </View>
                    {canEdit ? <TouchableOpacity style={styles.absoluteView} onPress={() => this.props.navigation.navigate('AccountDetails')}>
                        <Icon name="edit" color={Constants.Colors.Green} size={25} />
                    </TouchableOpacity> : null}
                    <View style={Styles.bottomView}>
                        <View style={Styles.bottomButton}>
                            <View style={Styles.button}>
                                    <Button color={Constants.Colors.Green} title="MY STUFF" onPress={() =>  this.setState({toggleBtn: true})} />
                            </View>
                            <View style={Styles.button}>
                                    <Button color={Constants.Colors.Orange} title="MY LIKE" onPress={() =>  this.setState({toggleBtn: false})} />
                            </View>
                        </View>
                    </View>
                </AppTheme>
            </View>
        );
    }
};