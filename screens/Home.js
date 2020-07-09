import React, { Component } from 'react';

import { Platform, Alert,Button,LayoutAnimation, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity } from 'react-native';
import NavigationContainer from '../navigation/tabsNavigation';

class Accordion_Panel extends Component {

  constructor() {

    super();
    
    this.state = {

      updated_Height: 0


    }
  }

  componentWillReceiveProps(update_Props) {
    if (update_Props.item.expanded) {
      this.setState(() => {
        return {
          updated_Height: null
        }
      });
    }
    else {
      this.setState(() => {
        return {
          updated_Height: 0
        }
      });
    }
  }

  shouldComponentUpdate(update_Props, nextState) {

    if (update_Props.item.expanded !== this.props.item.expanded) {

      return true;

    }

    return false;

  }

  render() {

    return (
     
     
      <View style={styles.Panel_Holder}>
      
        <TouchableOpacity activeOpacity={0.7} onPress={this.props.onClickFunction} style={styles.Btn}>

          <Text style={styles.Panel_Button_Text}>{this.props.item.title} </Text>

        </TouchableOpacity>

        <View style={{ height: this.state.updated_Height, overflow: 'hidden' }}>

          <Text style={styles.Panel_text}>

            {this.props.item.body}

          </Text>

        </View>

      </View>
    
    );
  }
}

export default class App extends Component {

  constructor() {
    super();

    if (Platform.OS === 'android') {

      UIManager.setLayoutAnimationEnabledExperimental(true)

    }

    const array = [

      { expanded: false, title: "Fire", body: "Fire is the rapid oxidation of a material in the exothermic chemical process of combustion, releasing heat, light, and various reaction products." },
      { expanded: false, title: "Earthquake", body: "Earthquake, any sudden shaking of the ground caused by the passage of seismic waves through Earth's rocks." },
      { expanded: false, title: "Toxic Leakage", body: "Toxic wastes often contain carcinogens, and exposure to these by some route, such as leakage or evaporation from the storage" },
      { expanded: false, title: "Bush Fire", body: "A wildfire, wildland fire or rural fire is an uncontrolled fire in an area of combustible vegetation occurring in rural areas" },
      { expanded: false, title: "Flood", body: "A flood is an overflow of water that submerges land that is usually dry. In the sense of flowing water, the word may also be applied to the inflow of the tide" },
      { expanded: false, title: "Tsunami", body: "A tsunami is a series of waves in a water body caused by the displacement of a large volume of water, generally in an ocean or a large lake." },
      { expanded: false, title: "Water Leakage", body: "Leaks from pipes, plumbing fixtures and fittings are a significant source of water waste for many households." },

    ];

    this.state = { AccordionData: [...array] }
  }

  update_Layout = (index) => {

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    const array = this.state.AccordionData.map((item) => {

      const newItem = Object.assign({}, item);

      newItem.expanded = false;

      return newItem;
    });

    array[index].expanded = true;

    this.setState(() => {
      return {
        AccordionData: array
      }
    });
  }

  render() {
    return (
      <View style={styles.MainContainer}>
          <View > 
            <Text style={styles.Home_text}>Home</Text>    
          </View> 
          
      
        <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 5 }}>
          {
            this.state.AccordionData.map((item, key) =>
              (
                <Accordion_Panel key={key} onClickFunction={this.update_Layout.bind(this, key)} item={item} />
              ))
          }
          
        </ScrollView>
        
        <View style={styles.btn1}>
          <Button  title="Report"/>
          </View>

          

      </View>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'android') ? 100 : 0
  },
  Home_text:{
    fontSize:30,
    color:'#000',
    paddingLeft:15,
    paddingBottom:5,
    textAlign:'left'

  },
  btn1:{
  
    width: 100,
    height: 100,
    marginLeft:130,
    marginBottom:80
  
  },
  Panel_text: {
    fontSize: 15,
   
    color: '#000',
    paddingLeft:15,
    //padding: 15
  },

  Panel_Button_Text: {
    textAlign: 'left',
    color: '#000' ,
    fontSize: 15
  },

  Panel_Holder: {
    //borderWidth: 1,
    backgroundColor:'#ff9999',
    borderBottomWidth:1,
    //borderColor: '#FF6F00',
    marginVertical: 1
  },

  Btn: {
    padding: 5,
    backgroundColor: '#fff'
  }

});