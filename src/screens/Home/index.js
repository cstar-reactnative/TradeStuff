import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
// import FastImage from 'react-native-fast-image';
import ScalableImage from 'react-native-scalable-image';
import { Icon } from 'react-native-elements'
import Masonry from 'react-native-masonry-layout';
// import GridList from 'react-native-grid-list';


import {categories, getItems} from '../../data';
import {TopBar,AppTheme,ScrollItem,ScrollArrow,AppContainer} from '@components';

import Styles from './styles';

const screenWidth = Dimensions.get('window').width;

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            listItems: getItems(),
            scrollItems: categories,
            activeScroll: null,

          images: [
            require('../../../assets/images/icons/left-arrow.png'),
            require('../../../assets/images/icons/right-arrow.png'),
          ]
        });
        this.onPressAddStuff = this.onPressAddStuff.bind(this)
    }

    componentDidMount() {
        this.masonry.addItems(this.state.listItems)
    }

    onPressScrollItem(index) {
        if (this.state.activeScroll !== index) {
            this.setState({activeScroll: index}, () => {
                this.masonry.clear();
                const fil = this.state.listItems.filter(v => v.cat === index);
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.masonry.addItems(fil);
                }, 200);

            });
        } else {
            this.setState({activeScroll: null}, () => {
                this.masonry.clear();
                this.timeout = setTimeout(() => {
                    this.masonry.addItems(this.state.listItems);
                }, 200);
            });
        }
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

    renderItem = (item) => (
        <TouchableOpacity onPress={() => this.onPressPiece(item.id)}>
            <View style={Styles.contentItemView}>
                {/* <Image style={Styles.contentItemImage} source={item.thumbnail} /> */}
                <ScalableImage
                source={item.thumbnail}
                width={(screenWidth/3) -16}
                style={[Styles.contentItemImage, item.myItem ? Styles.myContentItemImage: {}]} />
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
                            {this.state.scrollItems.map(v => (
                               <ScrollItem key={v.index} {...v} onTouch={() => this.onPressScrollItem(v.index)} active={this.state.activeScroll === v.index}/>
                            ))}
                        </ScrollView>
                        <View style={Styles.scrollArrowRight}>
                            <ScrollArrow style={Styles.arrow} source={require('../../../assets/images/icons/right-arrow.png')} onTouch={this.onPressScrollRightArrow.bind(this)}/>                        
                        </View>
                    </View>
                    
                        <Masonry
                            ref={node => {
                                if (node) {
                                    this.masonry = node;
                                }
                            }}
                            keyExtractor={(i) => i.id.toString()}
                            columns={3}
                            data={this.state.listItems}
                                //<FastImage  source={item.image} />
                            containerStyle={Styles.contentList}
                            renderItem={this.renderItem}
                            />

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