import React, { Component, useState } from 'react';
import { View, StyleSheet, Button,Text, Modal } from 'react-native';
import { Avatar, Card, Divider, Icon, Image, Input, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-virtualized-view'; 



class ModalContent extends Component {
  render() {
    return (
      <View style={{padding:15}} >
       <Image
          onPress={()=>{this.props.onPressClose()}}
          source={require('../assets/icons/close.png')}
          style={{ width: 20, height: 20 }}
              />


        <View style={{flexDirection:'column' , height:'96%', justifyContent:'space-between'}} >

          <View><View>
        <Image
          source={require('../assets/images/japanese-restaurant.jpg')}
          style={{ width: '100%', height: 250, borderRadius:20, marginTop:10 }}
        />
        </View>

        <View style={{flexDirection:'row', justifyContent:'space-around'}} >
          <View style={{width:150, height:50 ,borderRadius:15,alignItems:'center', marginTop:-25,borderColor:'gray',borderWidth:1,flexDirection:'row', justifyContent:'space-around' ,backgroundColor:'white'}} >
          <Image
          source={require('../assets/icons/btn_add.png')}
          style={{ width: 30, height: 30 }}
              />
          

          <Text>0</Text>
          <Image
          source={require('../assets/icons/btn_minus.png')}
          style={{ width: 30, height: 30 }}
              />
          </View>
        </View>

        <View>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:5}} >
            <Text style={{fontSize:20, fontWeight:'600'}} >Hủ tiếu</Text>
            <Text style={{fontSize:15}} >28.000đ</Text>
          </View>
         
          <View></View>
          <Text>vegan kuy teav soup</Text>
          <Input style={{fontSize:15, marginTop:20}}  placeholder='Lời nhắn cho cửu hàng' rightIcon={{ name: 'comment-o', type: 'font-awesome' }}
          />
        </View>
        

        <View  >

        </View></View>

        <View>
        <Button title='Thêm .168.999đ'  color='#7cc'  />
        </View>


        </View>

        
      </View>
    );
  }
}



const FoodDetailScreen = ({ route }) => {

  const [showModel, setShowModal] = useState(false);

  const list = [
    {
      id:1,
      name: 'Cơm gà kho gừng - canh',
      avatar_url: require('../assets/images/pizza-restaurant.jpg'),
      subtitle: '24.000đ',
      rating : 3,
      category:'',
      description : 'Cơm gà kho gừng, canh gà lá giang hoặc canh rong biển thịt băm'
    },
    {
      id:2,
      name: 'Dharmik Tank',
      avatar_url: require('../assets/images/tomato-pasta.jpg'),
      subtitle: 'Laravel Devloper',
      rating : 3,
      category:'',
      description : '3km'
    },{
      id:3,
      name: 'Dharmik Tank',
      avatar_url: require('../assets/images/hot-dog-restaurant.jpg'),
      subtitle: 'Laravel Devloper',
      rating : 3,
      category:'',
      description : '3km'
    }
    ,{
      id:3,
      name: 'Dharmik Tank',
      avatar_url: require('../assets/images/sushi.jpg'),
      subtitle: 'Laravel Devloper',
      rating : 3,
      category:'',
      description : '3km'
    }
  ]

  return (
    <ScrollView style={{backgroundColor:'white'}}  >
      <View>

        {/* Banner */}
        <Image
          source={require('../assets/images/burger-restaurant-2.jpg')}
          style={{ width: '100%', height: 250 }}
        />
      </View>

      {/* Store Description */}

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: -70 }}>
        <View style={{ width: '90%', backgroundColor: 'white', height: 150, borderWidth:1,borderColor:'#dcdcdc', borderRadius: 20, padding: 15, alignItems: 'center' }} >
          <View style={{ flexDirection: 'row', alignItems: 'center' }} >
            <Image
              source={require('../assets/icons/handshake.png')}
              style={{ width: 30, height: 30 }}
            />
            <Text style={{ fontWeight: '500', color: '#0000cd', fontSize: 18 }} > FoodApp's partner</Text>
          </View>
          <View style={{alignItems: 'center', flexDirection:'column'}}>
          <Text style={{fontSize:20,marginTop:10, fontWeight:'600'}} >Cơm trộn Hàn Quốc - 120 Bàu Cát</Text>
          <Text style={{fontSize:13,marginTop:10, fontWeight:'300'}} ><Text style={{fontWeight:'600'}} >0.6km </Text> 190 Bàu Cát, Phường 13, Quận Tân Bình</Text>

          </View>
          
        </View>
      </View>


      {/* Food list */}
      <View style={{padding:15}} >
       
        <View style={{flexDirection:'row'}} >
          <Text style={{fontWeight:'600', fontSize:18}} >Have to try  </Text>
          <Image
                source={require('../assets/icons/try.png')}
                style={{ width: 40, height: 40 }}
              />
        </View>
       
        <Divider style={{padding:5}} />
        <View >
        {
          list.map((l, i) => (
            <ListItem onPress={()=>{setShowModal(true)}} key={i} bottomDivider>
              
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                
                <ListItem.Subtitle>
                <Text style={{fontSize:14}} >{l.description}</Text>
                <View ></View>
                <Text   style={{fontSize:14, fontWeight:'600'}} >{l.subtitle}</Text>
                </ListItem.Subtitle>
              </ListItem.Content>
              <Avatar size={80}  avatarStyle={{borderRadius:7}}  source={l.avatar_url}/>
            </ListItem>
          ))
        }
      </View>

      </View>

      


      <Modal animationType={'slide'} visible={showModel}
          onRequestClose={()=>{setShowModal(false)}}>
          <ModalContent  
            onPressClose={()=>{setShowModal(false)}} />
      </Modal>

    </ScrollView>
  );
}

const styles = StyleSheet.create({})

export default FoodDetailScreen;
