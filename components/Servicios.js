import React from "react";
import { Block, Text, theme } from "galio-framework";
import {
  StyleSheet,
  Dimensions
} from "react-native";
import { articles, Images, argonTheme } from "../constants/";
const thumbMeasure = (width - 48 - 32) / 3;
const { width } = Dimensions.get("screen");
const cardWidth = width - theme.SIZES.BASE * 2;

const Servicios = (props) => {
    return (
        <Block center style={styles.tarjetas}>
        <Text center size={34}>
          {props.title}
        </Text>
        <Text
          center
          size={16}
          color={theme.COLORS.MUTED}
          style={styles.productDescription}
        >
          {props.content}
        </Text>
      </Block>
    );
};


const styles = StyleSheet.create({
    title: {
      paddingBottom: theme.SIZES.BASE,
      paddingHorizontal: theme.SIZES.BASE * 2,
      marginTop: 22,
      color: argonTheme.COLORS.HEADER
    },
    tarjetas:{
      padding: 10,
      elevation: 5,
      borderRadius:10,
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
    }
  });


export default Servicios;