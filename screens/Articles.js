import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import FCard from '../components/FCard';

import {
  ScrollView,
  StyleSheet,
  Dimensions,
  Text
} from "react-native";

import { Block, theme } from "galio-framework";
import { argonTheme } from "../constants/";
const { width } = Dimensions.get("screen");
const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;

const GET_SERVICES = gql`
  {
  servicios{
    id
    title
    content,
    img
  }
}
`;

const Articles = () => {
  const { loading, error, data } = useQuery(GET_SERVICES);

    return (
      <Block flex center>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
        { loading ? <Text>Cargando...</Text> : data.servicios.map(s => {
          return <FCard title={s.title} content={s.content} key={s.id} imagen={s.img}/>
        })}
        </ScrollView>
        
      </Block>
    );
  }

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
  }
});

export default Articles;
