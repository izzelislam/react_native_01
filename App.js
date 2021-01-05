import React from 'react'
import {View, Text, StatusBar, Image, TouchableOpacity, ScrollView} from 'react-native'

const PlanningItem= (props) => (
  <View style= {styles.planningItem}>
    <View style= {styles.circle}></View>
    <Text style= {styles.planningAmount}>{props.amount}</Text>
    <Text style= {styles.planningDate}>In a {props.date} day</Text>
  </View>
)


const App = () => {
  return(
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView style= {styles.container}>
         <View style={styles.header}>
          <View style={ styles.headerTopSection }>
            <Image 
                source={{ uri: 'https://www.intheblack.com/-/media/intheblack/allimages/magazine-2020/06-june/farmer-standing-in-field.jpg?rev=a3738b7326974d349044fc34db4db590'}} 
                style={styles.userImage}
            />
            <TouchableOpacity>
              <View style={styles.headerButtonInner}>
                <Text style={styles.headerButtonText}>Pay day in a week</Text>
              </View>
            </TouchableOpacity>
          </View>
            <Text style={ styles.balanceCaption } >Total balance to spend</Text>
            <Text style={ styles.balanceAmount } >$5637.18</Text>
         </View>

         <View style= {styles.planningWrapper}>
            <View style= {styles.planningHeader} >
              <Text style= {styles.planningTitle}>Planing Ahead</Text>
              <Text>-$5,633.93 </Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <PlanningItem amount="123.12" date="2" />
              <PlanningItem/>
              <PlanningItem/>
              <PlanningItem/>
              <View style={{ width:20 }}></View>
            </ScrollView>
         </View>

      </ScrollView>
    </>
  )
}

export default App
const styles={
  header: {
    backgroundColor: '#36D0b1',
    paddingHorizontal: 20,
    paddingTop:60,
    paddingBottom:20
  },
  userImage: {
    width:50,
    height:50,
    borderRadius:50
  },
  headerButtonInner: {
    backgroundColor: '#fff',
    padding:10,
    borderRadius: 5
  },
  headerButtonText: {
    color: '#36D0b1',
  },
  headerTopSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  balanceCaption: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#fff'
  },
  balanceAmount: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#fff'
  },
  container: { backgroundColor: '#F2F1F7' },
  planningWrapper: { paddingVertical: 30,  borderBottomWidth: 1, borderColor: '#aaa'  },
  planningHeader: { flexDirection: 'row', paddingHorizontal: 20, justifyContent: 'space-between', alignItems: 'center' },
  planningTitle: { fontSize: 17 },
  planningItem: { width: 110, padding: 20, backgroundColor: '#fff', elevation:2, marginLeft: 20, marginVertical: 20, borderRadius: 15 },
  circle: { marginBottom: 10, width: 25, height: 25, borderRadius: 25/2, backgroundColor: '#00f' },
  planningAmount: { marginBottom: 2, color: 'teal',  },
  planningDate: { color: 'silver', fontSize: 12 },

}