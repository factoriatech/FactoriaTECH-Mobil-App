# FactoriaTECH Demo App

Esta es una aplicación desarrollada en React Native utilizando el template [Argon](https://www.creative-tim.com/product/argon-react-native#), [Galio.io](https://galio.io/?ref=creativetim), [React Native](https://facebook.github.io/react-native/?ref=creativetim) y [Expo](https://expo.io/?ref=creativetim). 

En esta aplicacion nosotros utilizamos el demo original de Argon como punto de partida, de donde hemos agregado una serie de funcionalidades adicionales, sobre todo a nivel de programación: Hemos instalado Apollo en la app y ademas en un blog de wordpress, http://factoriablog.factoria.tech/
de donde las noticias estan siendo conseguidas haciendo un request al blog. Ahora bien, no directamente, ya que tambien tenemos instalado Hasura en Heroku, y el Blog de wordpress esta conectado remotamente a Hasura, ya que en nuestra base de datos (Postgres) en Hasura tenemos tambien otras tablas e informaciones que son tambien siendo utilizadas por la app, tales como servicios, clientes y un formulario de contactos.



