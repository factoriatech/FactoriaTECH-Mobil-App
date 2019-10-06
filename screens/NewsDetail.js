import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import {
    ScrollView,
    StyleSheet,
    Dimensions,
    Image,
    Text
  } from "react-native";
import HTML from 'react-native-render-html';


import { Block, theme, Button } from "galio-framework";
import { argonTheme } from "../constants/";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width } = Dimensions.get("screen");
const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;


const GET_POST = gql`
query GET_POST($postId: Int) {
  postBy(postId: $postId) {
    id
    postId
    title
    content
    featuredImage{
      sourceUrl
    }
  }
}`;

const NewsDetail = ({navigation}) => {
   const postId = navigation.getParam('postId');
   const { loading, error, data } = useQuery(GET_POST, {variables: { postId }} );
   if(loading){ return <Text>Cargando...</Text>}
    return (
        <Block flex center>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
        <Block flex>
          <Image source={{uri: data.postBy.featuredImage.sourceUrl}} style={ {height: 215}} />
        </Block>
        <Block style= {{paddingHorizontal: 10}}>
          <Text style={styles.cardTitle}>{data.postBy.title}</Text>
        </Block>
        <Block style= {{paddingHorizontal: 10}}>
        <HTML html={data.postBy.content} imagesMaxWidth={Dimensions.get('window').width} />
        </Block>
        </ScrollView>
        </Block>
    );
};

export default NewsDetail;


const styles = StyleSheet.create({
    title: {
      paddingBottom: theme.SIZES.BASE,
      paddingHorizontal: theme.SIZES.BASE * 2,
      marginTop: 22,
      color: argonTheme.COLORS.HEADER
    },
    group: {
      paddingTop: theme.SIZES.BASE
    },
    albumThumb: {
      borderRadius: 4,
      marginVertical: 4,
      alignSelf: "center",
      width: thumbMeasure,
      height: thumbMeasure
    },
    category: {
      backgroundColor: theme.COLORS.WHITE,
      marginVertical: theme.SIZES.BASE / 2,
      borderWidth: 0
    },
    categoryTitle: {
      height: "100%",
      paddingHorizontal: theme.SIZES.BASE,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      justifyContent: "center",
      alignItems: "center"
    },
    imageBlock: {
      overflow: "hidden",
      borderRadius: 4
    },
    productItem: {
      width: cardWidth - theme.SIZES.BASE * 2,
      marginHorizontal: theme.SIZES.BASE,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 7 },
      shadowRadius: 10,
      shadowOpacity: 0.2
    },
    productImage: {
      width: cardWidth - theme.SIZES.BASE,
      height: cardWidth - theme.SIZES.BASE,
      borderRadius: 3
    },
    productPrice: {
      paddingTop: theme.SIZES.BASE,
      paddingBottom: theme.SIZES.BASE / 2
    },
    productDescription: {
      paddingTop: theme.SIZES.BASE
      // paddingBottom: theme.SIZES.BASE * 2,
    },
    card: {
      backgroundColor: theme.COLORS.WHITE,
      marginVertical: theme.SIZES.BASE,
      borderWidth: 0,
      minHeight: 114,
      marginBottom: 16
    },
    cardTitle: {
      flex: 1,
      flexWrap: 'wrap',
      paddingBottom: 20,
      paddingTop: 10,
      fontWeight: 'bold',
      fontSize: 20
    },
    cardDescription: {
      padding: theme.SIZES.BASE / 2
    },
    imageContainer: {
      borderRadius: 3,
      elevation: 1,
      overflow: 'hidden',
    },
    image: {
      // borderRadius: 3,
    },
    horizontalImage: {
      height: 122,
      width: 'auto',
    },
    horizontalStyles: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    verticalStyles: {
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0
    },
    fullImage: {
      height: 215
    },
    shadow: {
      shadowColor: theme.COLORS.BLACK,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      shadowOpacity: 0.1,
      elevation: 2,
    },
  });