import React, { useState } from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { Block, Checkbox, Text, theme,Toast } from "galio-framework";
import t from 'tcomb-form-native';
const { height, width } = Dimensions.get('screen');
import { Images, argonTheme } from '../constants/';
import { Button, Icon, Input } from "../components";
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';


const SAVE_CONTACT_ENTRY = gql`
  mutation insert_entry($objects: [contact_insert_input!]!) {
        insert_contact(objects: $objects) {
        returning {
        id
        }
    }
  }
`;

const contenido = 'Realizamos tu aplicación y utilizamos las mejores tecnologías. Publicalas en el Appstore y Google Play Store Hoy.';

var options = {
  fields: {
    name: {
      label: 'Nombre',
      error: 'Diganos su Nombre'
    },
    subject: {
      label: 'Asunto',
        error: 'Escriba al asunto'
    },
    email: {
      label: 'Email',
        error: 'Inserte un email valido'
    },
    message: {
      label: 'Celular',
        error: 'Debe proporcionar un mensaje'
    }
  }
};

const Form = t.form.Form;


const contactInfo = t.struct({
  name: t.String,
  subject: t.String,
  email: t.String,
  message: t.String,
});


const Pro = (props) => {
    const [isShow, setShow] = useState(false);
    const [insert_contact, { data }] = useMutation(SAVE_CONTACT_ENTRY);
    const handleSubmit = () => {
      const value = _form.getValue();
      if(value){
          insert_contact({variables: {objects : value}}).then(x => {
            if(x){
              setShow(true);
              setTimeout(() => {
                setShow(false);
              },2000);
            }
          })
      }
  }


    return (
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block flex middle>
            <Block style={styles.registerContainer}>
              <Block flex={0.25} middle style={styles.socialConnect}>
                <Text color="#8898AA" size={30}>
                  Contactanos
                </Text>
                <Block row style={{ marginTop: theme.SIZES.BASE }}>
                  <Text>Inicia a trabajar con nosotros</Text>
                </Block>
              </Block>
              <Block flex>
                <Block flex={0.17} middle>
                  <Text color="#8898AA" size={12} style={{padding:20}}>
                    {contenido}
                  </Text>
                </Block>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                    <Form ref={c => _form = c}
                      type={contactInfo} options={options}
                      /> 
                      <Button color="primary" onPress={handleSubmit} style={styles.createButton}>
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          CREAR CUENTA
                        </Text>
                      </Button>
                    </Block>
                    {isShow && <Text style={{color:'red'}}>Mensaje Enviado!</Text>}
                    <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                     <Text size={18}>Volver</Text>
                  </TouchableOpacity>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>      
    );
  }

  export default Pro;

  const styles = StyleSheet.create({
    registerContainer: {
      width: width * 0.9,
      height: height * 0.85,
      backgroundColor: "#F4F5F7",
      borderRadius: 4,
      shadowColor: argonTheme.COLORS.BLACK,
      shadowOffset: {
        width: 0,
        height: 4
      },
      shadowRadius: 8,
      shadowOpacity: 0.1,
      elevation: 1,
      overflow: "hidden"
    },
    socialConnect: {
      backgroundColor: argonTheme.COLORS.WHITE,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: "#8898AA"
    },
    socialButtons: {
      width: 120,
      height: 40,
      backgroundColor: "#fff",
      shadowColor: argonTheme.COLORS.BLACK,
      shadowOffset: {
        width: 0,
        height: 4
      },
      shadowRadius: 8,
      shadowOpacity: 0.1,
      elevation: 1
    },
    socialTextButtons: {
      color: argonTheme.COLORS.PRIMARY,
      fontWeight: "800",
      fontSize: 14
    },
    inputIcons: {
      marginRight: 12
    },
    passwordCheck: {
      paddingLeft: 15,
      paddingTop: 13,
      paddingBottom: 30
    },
    createButton: {
      width: width * 0.5,
      marginTop: 25
    }
  });