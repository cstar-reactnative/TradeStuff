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
import {AppTheme, ScrollItem} from '@components';
import Styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Constants from '../../../constants';
import styles from './styles';
import GridList from 'react-native-grid-list';

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
                            <Text>{"Wants"}</Text>
                            {/* <View>
                                <ScrollView ref="categoryScroll" style={Styles.headerScrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
                                
                                <ScrollItem itemImage="computer" itemName="Tech" index="Tech" onTouch={this.onPressScrollItem}/>
                                <ScrollItem itemImage="image" itemName="Clothing" index="Clothing" onTouch={this.onPressScrollItem}/>
                                <ScrollItem itemImage="accessibility" itemName="Sports" index="Sports" onTouch={this.onPressScrollItem}/>
                                
                                </ScrollView>
                            </View> */}
                        </View>
                    </View>
                    <View style={styles.imgsView}>
                    <GridList
                            showSeparator
                            animationInitialBackgroundColor="white"
                            data={this.state.listItems}
                            numColumns={2}
                            renderItem={this.renderItem}
                            />
                    </View>
                    <TouchableOpacity style={styles.absoluteView} onPress={() => this.props.navigation.navigate('Account')}>
                        <Icon name="edit" color={Constants.Colors.Green} size={45} />
                    </TouchableOpacity>
                    {/* <View style={styles.absoluteButtons}>
                        <Button primary raised text="MY STUFF" style={{'container':Styles.radius10Btn}} onPress={() => alert("pressed")} />
                        <Button primary raised text="MY LIKES" style={{'container':Styles.radius10Btn}} onPress={() => alert("pressed")} />
                    </View> */}
                </AppTheme>
            </View>
        );
    }
};