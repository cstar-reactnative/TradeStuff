/**
 * @providesModule @backbutton
 */

import PropTypes from "prop-types";
import React, {Component} from 'react';
import { TouchableHighlight, StyleSheet } from "react-native";
import {Colors, FontSizes} from '@theme'
import Text from '@text'

export default (props) => {
    const {buttonStyles, children, onPress} = props;

    const colors = {
        light: Colors.darkGrayColor,
        dark: Colors.greenColor,
    }

    var textProps = {
        
    }
    var textStyles ={
        color: Colors.whiteColor
    }
    var buttonStyle = {
        height:'100%',
        width:'100%',
        backgroundColor: colors.light,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0.1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
    }

    return(
        <TouchableHighlight style={[buttonStyle, buttonStyles]} onPress={onPress} underlayColor = {Colors.greenColor}>
            <Text {...textProps} style={textStyles}>{children}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({

});
