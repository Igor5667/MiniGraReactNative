import {View, Text, Pressable, StyleSheet} from 'react-native';

const PrimaryButton = (props) => {

    // const pressHandler = () =>{
    //     console.log("juz");
    // }

    return(
        <View  style={styles.brnContainer} android_ripple={{color: "dark"}}>
            <Pressable onPress={props.onxx}>
            
                <Text >{props.children}</Text>
            
            </Pressable>
        </View>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    brnContainer:{
      backgroundColor: '#9da0d0',
      borderRadius: 28,
    }
  })