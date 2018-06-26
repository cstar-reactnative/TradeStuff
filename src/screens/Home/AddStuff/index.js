import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    ScrollView
} from 'react-native';

import Styles from './styles';
import { Button} from 'react-native-material-ui';
import { AppTheme, BackButton } from '@components';
import ListPopover from 'react-native-list-popover';
import {Colors,Images,CSS} from '@theme';

const strStuffAdded = "Your stuff has been added!\n\n Now you can begin using this bit of stuff to make offers.\n\nIf anyone else likes your stuff, they'll send you some offers too!"
export default class AddStuff extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            isConditionVisible:false,
            isCategoryVisible:false,
            newStuff: {
                'avatar':Images.img_5,
                
            },
            conditions: 
                ["condition 1",
                "condition 2",
                "condition 3",
                "condition 4",
                "condition 5",
            ],
            categories: ["Tech","Music","Sports","Social"],
            selected_category:"Tech",
            selected_condition:"condition 1"
        });
    }
   
    getSelectedCondition(){
        if (this.state.selected_condition) {
            return this.state.selected_condition;
        } else {
            return "Please select condition";
        }
    }

    getSelectedCategory(){
        if (this.state.selected_category) {
            return this.state.selected_category;
        } else {
            return "Please select category";
        }
    }
    
    setClear(){
        this.setState({
            selected_condition:null,
            selected_category:null,
        });
    }

    setApplay(){
        this.props.navigation.goBack()
    }

    onPressAddStuff() {
        
        this.props.navigation.navigate("NotificationDialog",{title:strStuffAdded,next:"HomeStarter"});
    }

    render() {
        return (
            <AppTheme >
                <View style = {Styles.container} >
                    <View style={Styles.headerView}>
                        <BackButton text="Back" onPress = {()=> this.props.navigation.goBack()}>BACK</BackButton>
                    </View>
                    <ScrollView style={Styles.scrollContainer}>
                        
                        <View style={Styles.contents}>                
                            <View style={Styles.selectStuffView}>
                                <View style={Styles.stuffImage}>
                                    <Image style={Styles.imageStyle} source={this.state.newStuff["avatar"]} />
                                </View>
                            </View>
                            
                            <Text style={Styles.detailItemlabel}>Title</Text>                                   
                            <View style={Styles.itemInput}>
                                <TextInput ></TextInput>
                            </View>

                            <Text style={Styles.detailItemlabel}>Description</Text>                                   
                            <View style={Styles.itemInputArea}>
                                <TextInput multiline={true} ></TextInput>
                            </View>

                            <View style={Styles.contain2Item}>
                                <View style={Styles.view50Left}>
                                    <Text style={Styles.detailItemlabel}>Value</Text>                                   
                                    <View style={Styles.itemInput}>
                                        <TextInput></TextInput>
                                    </View>
                                </View>
                                <View style={Styles.view50Right}>
                                    <Text style={Styles.detailItemlabel}>Min Value Desired</Text>                                   
                                    <View style={Styles.itemInput}>
                                        <TextInput  ></TextInput>
                                    </View>
                                </View>
                            </View>

                            <Text style={Styles.detailItemlabel}>Condition</Text>                                   
                            <View style={Styles.itemButton}>
                                <Button primary raised text = {this.getSelectedCondition()} onPress={() => this.setState({isConditionVisible: true,isCategoryVisible:false})} style={{"container":{'backgroundColor':Colors.darkGrayColor}}}/>
                               
                            </View>

                            <Text style={Styles.detailItemlabel}>Category</Text>                                   
                            <View style={Styles.itemButton}>
                                <Button primary raised text = {this.getSelectedCategory()} onPress={() => this.setState({isCategoryVisible: true,isConditionVisible:false})} style={{"container":{'backgroundColor':Colors.darkGrayColor}}}/>
                            </View>

                        </View>
                    </ScrollView>
                    <View style={Styles.bottomView}>
                        <View style={Styles.addStuffBtn}>
                            <Button primary raised text="ADD STUFF" style={{'container':Styles.radius10Btn}} onPress={this.onPressAddStuff.bind(this)} />
                        </View>
                        
                    </View>
                    
                    <ListPopover
                            containerStyle={CSS.popUpContainer}
                            popoverStyle={CSS.popUpPopover}
                            list={this.state.conditions}
                            isVisible={this.state.isConditionVisible}
                            onClick={(item) => this.setState({selected_condition: item})}
                            onClose={() => this.setState({isConditionVisible: false})}/>

                        <ListPopover
                            containerStyle={CSS.popUpContainer}
                            popoverStyle={CSS.popUpPopover}
                            list={this.state.categories}
                            isVisible={this.state.isCategoryVisible}
                            onClick={(item) => this.setState({selected_category: item})}
                            onClose={() => this.setState({isCategoryVisible: false})}/>
                    
                </View>
            </AppTheme>
        )
    };
};