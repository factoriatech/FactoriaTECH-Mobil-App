import React from 'react';
import { StyleSheet, View,Dimensions, ActivityIndicator,ScrollView, Text } from 'react-native';
import { Block, theme } from 'galio-framework';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';


const GET_NEWS = gql`
query{
  posts{
   nodes{
    postId
    title
    featuredImage {
      sourceUrl
    }
  }
  }
}`;

import { Card } from '../components';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');

const Home = () => {
  const { loading, error, data } = useQuery(GET_NEWS);
    return (
      <Block flex center style={styles.home}>
         <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
          <Block flex>
            {loading ? <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" /></View> : data.posts.nodes.map(p => {
              var art = {
                title: p.title,
                cta: 'Ver Más',
                postId: p.postId
              };

              if(p.featuredImage){
                art.image = p.featuredImage.sourceUrl;
              }
              

              return <Card item={art} horizontal key={p.postId}/>
            })}
          </Block>
        </ScrollView>
      </Block>
    );
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});

export default Home;
