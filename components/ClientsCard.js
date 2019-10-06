import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { Icon } from "../components";

const ClientsCard = (props) => {
    const { horizontal, style,companyName, companyUrl } = props;
    const cardContainer = [styles.card, styles.shadow, style];
    

    return (
      <Block row={horizontal} card flex style={cardContainer}>
          <Block flex space="between" style={styles.cardDescription}>
            <Block row>
              <Icon
                name="md-checkmark-circle"
                family="Ionicon"
                size={20}
                color={"#52C7EB"}
                style={{ marginTop: 2, marginRight: 5 }}
              />
                <Text size={16} style={styles.cardTitle}>{companyName}</Text>
            </Block>
            <Text size={12}>{companyUrl}</Text>
          </Block>
      </Block>
    );
  }
 

ClientsCard.propTypes = {
  item: PropTypes.object,
  horizontal: PropTypes.bool,
  full: PropTypes.bool,
  ctaColor: PropTypes.string,
  imageStyle: PropTypes.any,
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    marginBottom: 16
  },
  cardTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6
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

export default ClientsCard;