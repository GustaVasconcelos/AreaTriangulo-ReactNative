import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Pressable,Image } from 'react-native';

import triangulo from './Assets/triangulo.png'

export default function App() {

    const [base,setBase] = useState('')
    const [altura,setAltura] = useState('')
    const [area, setArea] = useState('')
    const [message, setMessage] = useState('Sem valores!!')

    const CalcularArea = () =>{

        if(!base || !altura){
            setMessage("Há campos vázios!")
            setArea('')
        }else{
            if(base > 0 && altura > 0){
                setArea(((parseFloat(base) * parseFloat(altura)))/2)
            }else{
                setMessage('Numeros menor que 0!')
            }
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Image style={styles.navbarImg} source={triangulo}/>
            </View>
            <View style={styles.body}>
                <View style={styles.bodyInputs}>
                    <TextInput  onChangeText={base => setBase(parseFloat(base))} style={styles.inputs} placeholder='Digite a base(CM)' placeholderTextColor="#00FA9A"/>
                    <TextInput  onChangeText={altura => setAltura(parseFloat(altura))} style={styles.inputs} placeholder='Digite a altura(CM)' placeholderTextColor="#00FA9A"/>
                    <Pressable style={styles.button} onPress={CalcularArea}>
                        <Text style={styles.btn}>Calcular</Text>
                    </Pressable>
                </View>
                <View style={styles.bodyMessage}>
                    <Text style={styles.TextArea}>{area ?`Resultado: ${area} CM`:message}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efefef',
        alignItems: 'center',
    },
    navbar:{
        width:'100%',
        height:'15%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff',
    },
    navbarImg:{
        width:'25%',
        height:'80%'
    },
    body:{
        width:'100%',
        height:'85%',
        display:'flex',
        alignItems:'center',
        flexDirection:'column'
    },
    bodyInputs:{
        width:'100%',
        height:'60%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column'

    },
    inputs:{
        width:'70%',
        height:'15%',
        backgroundColor:'#fff',
        borderRadius:'10px',
        textAlign:'center',
        fontWeight:'bold',
        marginTop:10,
        fontFamily:'Verdana',
        marginBottom:10,
        color:'#1E90FF',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        fontFamily:'Verdana',
        color:'#00FA9A',
    },
    button:{
        width:'70%',
        height:'15%',
        backgroundColor:'#00FA9A',
        borderRadius:'10px',
        textAlign:'center',
        fontWeight:'bold',
        marginTop:10,
        fontFamily:'Verdana',
        marginBottom:10,
        color:'#1E90FF',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    btn:{
        fontWeight:'bold',
        color:'#fff',
        fontFamily:'Verdana'
    },
    bodyMessage:{
        width:'80%',
        height:'20%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        backgroundColor:'#00FA9A',
        borderRadius:'10px'
    },
    TextArea:{
        fontWeight:'bold',
        color:'#fff',
        fontFamily:'Verdana'
    }


    // containerCalc:{
    //     width:'80%',
    //     height:'80%',
    //     backgroundColor:'#1E90FF',
    //     display:'flex',
    //     alignItems:'center',
    //     flexDirection:'column',
    //     borderRadius:'10px'
    // },
    // containerTitulo:{
    //     width:'70%',
    //     height:'30%',
    //     display:'flex',
    //     alignItems:'center',
    //     justifyContent:'center'
    // },
    // text:{
    //     color:'#fff',
    //     fontWeight:'bold',
    //     fontFamily:'Verdana'
    // },
    // containerInputs:{
    //     width:'100%',
    //     height:'40%',
    //     display:'flex',
    //     justifyContent:'center',
    //     alignItems:'center',
    //     flexDirection:'column'

    // },
    // inputs:{
    //     width:'70%',
    //     height:'15%',
    //     backgroundColor:'#fff',
    //     borderRadius:'10px',
    //     textAlign:'center',
    //     fontWeight:'bold',
    //     marginTop:10,
    //     fontFamily:'Verdana',
    //     marginBottom:10,
    //     color:'#1E90FF'
    // },
    // button:{
    //     width:'70%',
    //     height:'15%',
    //     display:'flex',
    //     alignItems:'center',
    //     justifyContent:'center',
    //     backgroundColor:'#fff',
    //     borderRadius:'10px',
    //     marginTop:10,
    //     marginBottom:10,
    // },
    // btn:{
    //     fontFamily:'Verdana',
    //     color:'#1E90FF',
    //     fontWeight:'bold'
    // },
    // containerArea:{
    //     width:'70%',
    //     height:'20%',
    //     display:'flex',
    //     alignItems:'center',
    //     justifyContent:'center',
    //     backgroundColor:"#fff",
    //     borderRadius:"10px"
    // },
    // TextArea:{
    //     fontFamily:'Verdana',
    //     color:'#1E90FF',
    //     fontWeight:'bold'
    // }


});
