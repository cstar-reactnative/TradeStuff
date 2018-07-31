import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';

import {Images,CSS} from '@theme';
import Styles from './styles';
import {AppTheme,BackButton} from '@components';
import {Button, Icon} from 'react-native-material-ui';
import { Header } from 'react-native-elements';
import Constants from '../../../constants';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {getUser, items, currentUser, getItem} from '../../../data';

export default class ViewPiece extends Component {

    constructor(props) {
        super(props);
        this.state = this.getInitState(props);
    }

    getInitState = (props) => {
        const selectedIndex = props.navigation.getParam('index');
        // console.log(selectedIndex)
        const item = getItem(selectedIndex);
        // console.log(item)
        const user = getUser(item.userId);
        return ({
            selectedIndex,
            item,
            user,
            detail: {
                title:"STUFF",
                minOffer: "Min Offer Value: $22",
                subTitle: user.name,
                subTitle2: user.city,
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            }
        });
    }

    componentDidUpdate() {
        const selectedIndex = this.props.navigation.getParam('index');
        if (this.state.selectedIndex !== selectedIndex) {
            this.setState(this.getInitState(this.props));
        }
    }

    pressShare(index) {
        this.props.navigation.navigate("Share");
    }

    pressPrice(index){

    }

    pressFavorite(index){

    }

    pressUsername(){
        this.props.navigation.navigate("AccountDetails",{index:this.state.selectedIndex, noEdit: true, user: this.state.user})
    }

    pressSubTitle(index){

        this.props.navigation.navigate("PersonalStuff",{index:this.state.selectedIndex})
    }

    pressMakeOffer(){
        this.props.navigation.navigate("ItemsToOffer",{index:this.state.selectedIndex})
    }

    render() {
        const isMyItem = this.state.item.userId === currentUser;
        return (
            <AppTheme >
                <Header
                    leftComponent={
                        <TouchableOpacity onPress = {()=> this.props.navigation.goBack()}>
                            <IconFontAwesome name="chevron-left" color={Constants.Colors.DarkGrey} size={25} />
                        </TouchableOpacity>
                    }
                    centerComponent={{ text: 'STUFF DETAILS', style: { color: Constants.Colors.DarkGrey, fontSize:20 } }}
                    outerContainerStyles={{ backgroundColor: Constants.Colors.MediumGrey, elevation: 5 }}
                />
                <View style={Styles.container}>
                    <ScrollView style={Styles.scrollView}>

                        <View style={[Styles.carouselView, isMyItem ? Styles.greenBoder:{}]}>
                            <Image style={Styles.imageStyle} source = {this.state.item.thumbnail} />
                            <View style={Styles.carouselItem}>
                                <TouchableOpacity>
                                    <Icon style={[Styles.shareBtn, isMyItem ? Styles.greenBg:{}]} name = "share" size={30}/>
                                </TouchableOpacity>
                                <View style={Styles.favoriteBtn}>
                                    <TouchableOpacity onPress={this.pressShare.bind(this)}>
                                        <Icon style={[Styles.shareBtn, isMyItem ? Styles.greenBg:{}]} name = "favorite" size={30}/>
                                    </TouchableOpacity>
                                </View>                                
                                <View style={Styles.favoriteBtn}>
                                    <Text style={[Styles.carouselPrice, isMyItem ? Styles.greenBg:{}]}>$25</Text>
                                </View>
                            </View>
                        </View>


                        <View style={Styles.descriptionView}>
                            <View style={Styles.descTitle}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={Styles.titleFont}>{this.state.detail.title}</Text>
                                    {isMyItem ? <TouchableOpacity onPress={()=>this.props.navigation.navigate('EditStuff')} style={{flex:1,alignItems:'flex-end'}}>
                                        <IconFontAwesome name='edit' color={Constants.Colors.Green} size={32} />
                                    </TouchableOpacity>: null}
                                </View>
                            </View>
                            <View  style={Styles.carouselTitleView}>
                                    <Text style={Styles.carouselTitle}>( Used )</Text>
                            </View>
                            <View style={Styles.descTitle}>
                                <TouchableOpacity onPress={this.pressSubTitle.bind(this)}>
                                    <Text style={Styles.subtitleFont}>{this.state.detail.minOffer}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={Styles.descDesc}>
                                <Text style={Styles.detailFont}>{this.state.detail.desc}</Text>
                            </View>
                        </View>

                    </ScrollView>

                    <View style={(this.props.navigation.state!==undefined&&this.props.navigation.state.params.makeOffer==='no')?Styles.makeofferViewSmall:Styles.makeofferView}>
                            <View style={Styles.descTitle}>
                                <Text style={{color:Constants.Colors.Orange}} onPress={this.pressUsername.bind(this)}>{this.state.detail.subTitle} 
                                <Text style={{color:Constants.Colors.DarkGrey}}>  - {this.state.detail.subTitle2} </Text>
                                </Text>
                            </View>

                            <View style={Styles.descTitle}>
                                <Text style={{color:Constants.Colors.DarkGrey}}>Interests</Text>
                            </View>

                            <View style={[CSS.flexRow,CSS.justifyCenter]}>
                                <TouchableOpacity>
                                    <Icon color={Constants.Colors.DarkGrey} name='language' size={35}/>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Icon color={Constants.Colors.DarkGrey} name='launch' size={35}/>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Icon color={Constants.Colors.DarkGrey} name='face' size={35}/>
                                </TouchableOpacity>
                            </View>

                            
                                {(this.props.navigation.state!==undefined&&this.props.navigation.state.params.makeOffer==='no')?null:
                                    <React.Fragment>
                                        {!isMyItem ?
                                            <View style={[Styles.offerBtn,CSS.justifyCenter]}>
                                                <Button primary raised text="MAKE OFFER" onPress={this.pressMakeOffer.bind(this)} />
                                            </View>
                                        : null}
                                    </React.Fragment>
                                }
                            
                        </View>
                </View>
            </AppTheme>
        )
    }
};
