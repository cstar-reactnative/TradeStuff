import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';

import {Colors,Images,CSS} from '@theme';
import Styles from './styles';
import {AppTheme,BackButton} from '@components';
import {Button, Icon} from 'react-native-material-ui';

export default class ViewPiece extends Component {

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
            selectedIndex: this.props.navigation.getParam('index'),
            detail: {
                title:"STUFF",
                minOffer: "Min Offer Value: $22",
                subTitle: "John Doe - CA, United States",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            }
        });

    }

    pressShare(index) {
        this.props.navigation.navigate("Share");
    }

    pressPrice(index){

    }

    pressFavorite(index){

    }

    pressSubTitle(index){

        this.props.navigation.navigate("PersonalStuff",{index:this.state.selectedIndex})
    }

    pressMakeOffer(){
        this.props.navigation.navigate("ItemsToOffer",{index:this.state.selectedIndex})
    }

    render() {
        return (
            <AppTheme >
                <View style={Styles.container}>
                    <View style={Styles.headerView} >
                        <BackButton text="Back" onPress = {()=> this.props.navigation.goBack()}>BACK</BackButton>
                    </View>
                    <ScrollView style={Styles.scrollView}>

                        <View style={Styles.carouselView}>
                            <Image style={Styles.imageStyle} source = {this.state.listItems[this.state.selectedIndex].thumbnail} />
                            <View style={Styles.carouselItem}>
                                <TouchableOpacity  onPress={this.pressShare.bind(this)}>
                                    <Icon style={Styles.shareBtn} name = "share" size={30}/>
                                </TouchableOpacity>

                                <View style={Styles.favoriteBtn}>
                                <TouchableOpacity  onPress={this.pressFavorite.bind(this)}>
                                    <Icon style={Styles.shareBtn} name = "favorite" size={30}/>
                                </TouchableOpacity>
                                </View>
                                
                                <Text style={Styles.carouselPrice}>$25</Text>
                            </View>
                        </View>


                        <View style={Styles.descriptionView}>
                            <View style={Styles.descTitle}>
                                <Text style={Styles.titleFont}>{this.state.detail.title}</Text>
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

                    <View style={Styles.makeofferView}>
                            <View style={Styles.descTitle}>
                                <Text style={[CSS.white,CSS.font20]}>{this.state.detail.subTitle}</Text>
                            </View>

                            <View style={Styles.descTitle}>
                                <Text style={[CSS.white,CSS.font15]}>Interests</Text>
                            </View>

                            <View style={[CSS.flexRow,CSS.justifyCenter]}>
                                <TouchableOpacity>
                                    <Icon style={CSS.white} name='language' size={35}/>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Icon style={CSS.white} name='launch' size={35}/>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Icon style={CSS.white} name='face' size={35}/>
                                </TouchableOpacity>
                            </View>

                            <View style={[Styles.offerBtn,CSS.justifyCenter]}>
                                <Button primary raised text="MAKE OFFER" onPress={this.pressMakeOffer.bind(this)} />
                            </View>
                        </View>
                </View>
            </AppTheme>
        )
    }
};
