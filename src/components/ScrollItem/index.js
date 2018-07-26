import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';

import Styles from './styles';
import { Icon} from 'react-native-material-ui';

export class ScrollArrow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={Styles.headerScrollArrow} >
                <TouchableOpacity style={Styles.touchArea} onPress={()=>this.props.onTouch()}>
                    <View style={Styles.headerScrollArrowIcon}>
                        <Image style={{height: 25, width:25, padding: 5}}  source={this.props.source}/>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
};

export class ScrollItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={Styles.headerScrollItem} >
                <TouchableOpacity style={Styles.touchArea} onPress={()=>this.props.onTouch(this.props.index)}>
                    <View style={Styles.headerScrollItemIcon}>
                        <Icon style={ this.props.active ? Styles.imageColorActive : Styles.imageColor} name={this.props.itemImage} size={34} />
                    </View>
                    <View style={Styles.headerScrollItemLabel}>
                        <Text style={this.props.active ? Styles.labelColorActive: Styles.labelColor} >{this.props.itemName}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
};

export class ScrollSmallItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={Styles.headerScrollSmallItem} >
                <TouchableOpacity 
                    style={Styles.touchArea}
                    onPress={()=>this.props.onTouch(this.props.index)}>
                    <View style={Styles.headerScrollSmallItemIcon}>
                        <Icon style={Styles.imageColor} name={this.props.itemImage} size={25} />
                    </View>
                    <View style={Styles.headerScrollSmallItemLabel}>
                        <Text style={Styles.SmalllabelColor} >{this.props.itemName}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
};

export class ScrollSmallArrow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={Styles.headerScrollArrow} >
                <TouchableOpacity style={Styles.touchArea} onPress={()=>this.props.onTouch()}>
                    <View style={Styles.headerScrollArrowIcon}>
                    <Image style={{height: 15, width:15, padding: 5}}  source={this.props.source}/>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
};
