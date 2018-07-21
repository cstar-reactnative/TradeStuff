import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
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
                        <Icon style={Styles.imageColor} name={this.props.itemImage} size={25} />
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
                        <Icon style={Styles.imageColor} name={this.props.itemImage} size={34} />
                    </View>
                    <View style={Styles.headerScrollItemLabel}>
                        <Text style={Styles.labelColor} >{this.props.itemName}</Text>
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
            <View style={Styles.headerScrollItem} >
                <TouchableOpacity style={Styles.touchArea} onPress={()=>this.props.onTouch(this.props.index)}>
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
                        <Icon style={Styles.imageColor} name={this.props.itemImage} size={15} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
};
