import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
      <View style={styles.majorContainer} >
        <View style={styles.component1}>
            <View style={styles.comp1box1}></View>
            <View style={styles.comp1box2}></View>
            <View style={styles.comp1box3}></View>
        </View>

        <View style={styles.component2}>
            <View style={styles.comp2box1}></View>
            <View style={styles.comp2box2}></View>
        </View>
      
      </View>
      <View style={styles.component3}>
           
        
           </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },
  majorContainer: {
    flex: 0.5,
    flexDirection: "row",
 
  },
  component1: {
    flex: 0.5,
   
    
 
  },
  comp1box1: {
    flex: 1,
    backgroundColor : "purple"
    
    
 
  },
  comp1box2: {
    flex: 0.5,
    backgroundColor : "yellow"
    
 
  },
  comp1box3: {
    flex: 0.5,
    backgroundColor : "pink"
    
 
  },
  component2: {
    flex: 0.5,
    flexDirection: "row",
 
  },
  comp2box1: {
  flex : 2,
  backgroundColor : "red"
 
  },
  comp2box2: {
    flex: 1,
    backgroundColor : "blue"
 
  },
  comp2box2: {
    flex: 1,
    backgroundColor : "blue"
 
  },
  component3: {
    flex: 0.5,
    backgroundColor : "lightgrey"
 
  },
});
