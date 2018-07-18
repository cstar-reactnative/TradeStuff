import React, { Component } from 'react';
import {  Text, Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator , createStackNavigator} from 'react-navigation';

//import {Colors} from '@theme';

import BottomBar from './components/BottomBar'

import Login from './screens/login'

import Home from './screens/Home'
import Filter from './screens/Home/Filter'
import AddStuff from './screens/Home/AddStuff'
import Share from './screens/Home/Share'

import Sent from './screens/Sent'

import Incoming from './screens/Incoming'

import Trades from './screens/Trades'

import Account from './screens/Account'
import AccountDetails from './screens/Account/AccountDetails'
import Wants from './screens/Account/Wants'
import Likes from './screens/Account/Likes'

import NotificationDialog from './screens/NotificationDialog'
import ViewPiece from './screens/Stuffs/ViewPiece'
import PersonalStuff from './screens/Stuffs/PersonalStuff'
import ItemsToOffer from './screens/Stuffs/ItemsToOffer'
import MakeOffer from './screens/Stuffs/MakeOffer'
import TradeDetail from './screens/Stuffs/TradeDetail'
import TradeComplete from './screens/Stuffs/TradeComplete'
import EditStuff from './screens/Stuffs/EditStuff'

export const HomeStack = createStackNavigator({
    HomeStarter: {screen:Home},
    Filter :{screen:Filter},
    AddStuff : {screen:AddStuff},
    Account : { screen:Account},
    AccountDetails : { screen:AccountDetails},
    NotificationDialog: {screen:NotificationDialog},
    ViewPiece: {screen:ViewPiece},
    Share: {screen:Share},
    PersonalStuff: {screen:PersonalStuff},
    ItemsToOffer: {screen:ItemsToOffer},
    MakeOffer: {screen:MakeOffer},
    EditStuff: {screen:EditStuff},
},{
    headerMode:'none'
});

export const SentOffersStack = createStackNavigator({
    SentOffersStarter: {screen:Sent},
    NotificationDialog: {screen:NotificationDialog}
},{
    headerMode:'none'
});

export const IncomingOffersStack = createStackNavigator({
    IncomingOffersStarter: {screen:Incoming},
    TradeDetail:{screen:TradeDetail},
    TradeComplete:{screen:TradeComplete},
    NotificationDialog: {screen:NotificationDialog},
},{
    headerMode:'none'
});

export const TradesStack = createStackNavigator({
    TradesStarter: {screen:Trades},
    TradeDetail:{screen:TradeDetail},
    TradeComplete:{screen:TradeComplete},
    NotificationDialog: {screen:NotificationDialog}
},{
    headerMode:'none'
});

export const AccountStack = createStackNavigator({
    AccountStarter: {screen:AccountDetails},
    AccountDetails: {screen:Account},
    Wants : {screen:Wants},
    Likes : {screen:Likes},
    NotificationDialog: {screen:NotificationDialog},
    ViewPiece: {screen:ViewPiece},
    Share: {screen:Share},
    PersonalStuff: {screen:PersonalStuff},
    ItemsToOffer: {screen:ItemsToOffer},
    MakeOffer: {screen:MakeOffer}
},{
    headerMode:'none'
});

export const TabNav = createBottomTabNavigator({
    
    HomeTab : {screen: HomeStack},
    SentOrdersTab : {screen: SentOffersStack},
    IncomingOrdersTab : {screen: IncomingOffersStack},
    TradesTab : {screen: TradesStack},
    AccountTab : {screen: AccountStack},
}, {
    tabBarOptions:{
        activeTintColor: '#ffff00',
        inactiveTintColor:'#ff0000'
    },
    tabBarComponent:  props => <BottomBar navigation = {props.navigation} currentActive = "HomeTab"/>
});

export const LoginNav = createStackNavigator({
    Login : {screen : Login},
    TabNav: {screen: TabNav}
},{
    headerMode:'none'
})