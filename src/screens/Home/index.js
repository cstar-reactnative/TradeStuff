import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    StatusBar
} from 'react-native';

import {Colors,Images} from '@theme';
import {TopBar,AppTheme,ScrollItem,ScrollArrow,AppContainer} from '@components';
import Styles from './styles';
import { Icon, ListItem,Button} from 'react-native-material-ui';
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
                        <GridList
                            showSeparator
                            animationInitialBackgroundColor="white"
                            data={this.state.listItems}
                            numColumns={2}
                            renderItem={this.renderItem}
                            />
                    </View>

                    <View style={Styles.bottomView}>
                        <View style={Styles.addStuffBtn}>
                            <Button primary raised text="ADD STUFF" style={{'container':Styles.radius10Btn}} onPress={this.onPressAddStuff.bind(this)} />
                        </View>
                    </View>

                </View>
            </AppContainer>
        );
    }
};