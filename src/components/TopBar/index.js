import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { COLOR, BottomNavigation,Toolbar ,Icon, Searchable} from 'react-native-material-ui';


export default class TopBar extends Component {

    constructor(props) {

        super(props);
    }

    render() {
        return (            
            <Toolbar
                leftElement="tune"
                onLeftElementPress={() => this.props.onFilterPressed()}
                rightElement="share"
                onRightElementPress={() => this.props.onSharePressed()}
                searchable={{
                    autoFocus: true,
                    placeholder: 'Stuff',
                    onChangeText: value => this.setState({ searchText: value }),
                    onSearchClosed: () => this.setState({ searchText: '' }),
            }}
            />
        )
    }
};