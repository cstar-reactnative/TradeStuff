import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import Styles from './styles';
import { Button} from 'react-native-material-ui';
import { AppTheme,BackButton } from '@components';
import ListPopover from 'react-native-list-popover';
import {Colors,CSS} from '@theme';
import { Header } from 'react-native-elements';
import Constants from '../../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Filter extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            isCategoryVisible:false,
            isCountryVisible:false,
            isSortingvisible:false,
            countries: ["Mexico","Brazil","Spain","Italy"],
            categories: ["Tech","Music","Sports","Social"],
            sorting:["Ascending","Descending","Default"],
            selected_country:null,
            selected_category:null,
            selected_sorting:null
        });
    }

    getSelectedCountry(){
        if (this.state.selected_country) {
            return this.state.selected_country;
        } else {
            return "Please select Country";
        }
    }

    getSelectedCategory(){
        if (this.state.selected_category) {
            return this.state.selected_category;
        } else {
            return "Please select category";
        }
    }

    getSelectedSorting(){
        if (this.state.selected_sorting) {
            return this.state.selected_sorting;
        } else {
            return "Please select soring direction";
        }
    }

    getSelectedCondition(){
        if (this.state.selected_condition) {
            return this.state.selected_condition["name"];
        } else {
            return "Please select condition";
        }
    }

    setClear(){
        this.setState({
            selected_country:null,
            selected_category:null,
            selected_sorting:null
        });
    }

    setApplay(){
        this.props.navigation.goBack()
    }

    render() {
        return (
            <AppTheme >
                <Header
                    leftComponent={
                        <TouchableOpacity onPress = {()=> this.props.navigation.goBack()}>
                            <Icon name="chevron-left" color={Constants.Colors.DarkGrey} size={25} />
                        </TouchableOpacity>
                    }
                    centerComponent={{ text: 'SET FILTERS', style: { color: Constants.Colors.DarkGrey, fontSize:20 } }}
                    outerContainerStyles={{ backgroundColor: Constants.Colors.MediumGrey }}
                />
                <View style = {Styles.container} >
                    <View style={Styles.container}>                
                        <View style={Styles.priceView}>
                            <Text style={Styles.bigLabel}>Price</Text>
                            <View style={Styles.itemView}>
                                <View style={Styles.pricelabels}>
                                    <Text style={Styles.left}>min</Text>
                                    <Text style={Styles.right}>max</Text>
                                </View>
                                <View style={Styles.itemContent}>
                                    <TextInput style={Styles.priceInputLeft}/>
                                    <TextInput style={Styles.priceInputRight}/>
                                </View>
                            </View>
                        </View>

                        <View style={Styles.priceView}>
                            <Text style={Styles.bigLabel}>Country</Text>
                            <View style={Styles.itemView}>
                                <View style={Styles.btnCountry} >
                                    <Button accent raised text = {this.getSelectedCountry()} onPress={() => this.setState({isCountryVisible: true,isCategoryVisible:false,isSortingvisible:false})} style={{"container":{'backgroundColor':Constants.Colors.White},"text":{'color':Constants.Colors.DarkGrey}}}/>
                                </View>
                            </View>
                        </View>
                        <View style={Styles.priceView}>
                            <Text style={Styles.bigLabel}>Category</Text>
                            <View style={Styles.itemView}>
                                <View style={Styles.btnCountry} >
                                    <Button accent raised text = {this.getSelectedCategory()} onPress={() => this.setState({isCountryVisible: false,isCategoryVisible:true,isSortingvisible:false})} style={{"container":{'backgroundColor':Constants.Colors.White},"text":{'color':Constants.Colors.DarkGrey}}}/>
                                </View>
                            </View>
                        </View>
                        <View style={Styles.priceView}>
                            <Text style={Styles.bigLabel}>Sorting Direction</Text>
                            <View style={Styles.itemView}>
                                <View style={Styles.btnCountry} >
                                    <Button accent raised text = {this.getSelectedSorting()} onPress={() => this.setState({isCountryVisible: false,isCategoryVisible:false,isSortingvisible:true})} style={{"container":{'backgroundColor':Constants.Colors.White},"text":{'color':Constants.Colors.DarkGrey}}}/>
                                </View>
                            </View>
                        </View>
                        <View style={Styles.container}>
                            <View style={Styles.bottomView}>
                                <View style={Styles.bottomButton}>
                                    <Button default raised text="CLEAR" onPress={this.setClear.bind(this)} />
                                </View>
                                <View style={Styles.bottomButton}>
                                    <Button default raised text="APPLY" onPress={this.setApplay.bind(this)} />
                                </View>
                            </View>
                        </View>
                        <View>
                            
                        </View>
                    </View>

                    <ListPopover
                            containerStyle={CSS.popUpContainer}
                            popoverStyle={CSS.popUpPopover}
                            list={this.state.countries}
                            isVisible={this.state.isCountryVisible}
                            onClick={(item) => this.setState({selected_country: item})}
                            onClose={() => this.setState({isCountryVisible: false})}/>

                    <ListPopover
                            containerStyle={CSS.popUpContainer}
                            popoverStyle={CSS.popUpPopover}
                            list={this.state.categories}
                            isVisible={this.state.isCategoryVisible}
                            onClick={(item) => this.setState({selected_category: item})}
                            onClose={() => this.setState({isCategoryVisible: false})}/>

                    <ListPopover
                            containerStyle={CSS.popUpContainer}
                            popoverStyle={CSS.popUpPopover}
                            list={this.state.sorting}
                            isVisible={this.state.isSortingvisible}
                            onClick={(item) => this.setState({selected_sorting: item})}
                            onClose={() => this.setState({isSortingvisible: false})}/>
                </View>
            </AppTheme>
        )
    };
};