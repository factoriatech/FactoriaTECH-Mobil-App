import React from 'react';
import { StyleSheet, View,Dimensions, ActivityIndicator,ScrollView, Text } from 'react-native';
import { Block, theme } from 'galio-framework';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import FCard from '../components/FCard';

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

const cont = "Mas abajo la app carga unas noticias. Ahora bien, esto la primera vez carga lento, y es aproposito, ya que el app hace un request vía GraphQL a un servidor hosteado en Heroku con Hasura. Además dicho servidor tiene remotamente conetado un blog hecho en wordpress, el cual es de donde estas noticas estan siendo conseguidas. Todo esto en producción se hace muy rapido, la razon por la que es lento es porque en Heroku esta instancia esta en un plan gratuito y es una arquitectura Serverless, la cual esta apagado mientras no se utilice.";


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
          <FCard 
          title="Bienvenido a nuestra App de Demo!" 
          content={cont}
          imagen="https://res.cloudinary.com/factoriatech/image/upload/v1570464189/Microsoft-bosque-programming-language.jpg" 
          />
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
