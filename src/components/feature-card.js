/** @jsx jsx */
import { Link } from '@theme-ui/components';
import { FaExpeditedssl } from 'react-icons/fa';
import { jsx, Image, Box, Heading, Text } from 'theme-ui';
import { useState, useEffect } from 'react'

import { Carousel } from 'react-responsive-carousel';

export default function FeatureCard({
  src,
  title,
  text,
  
}) {

  return (
    <Box sx={styles.card}>           
      <Box sx={styles.wrapper}>
        <Heading sx={styles.wrapper.title}>{title}</Heading>
          <Carousel
          showThumbs={false}
          emulateTouch={true}
          infiniteLoop={true}
          showIndicators={true}
          showStatus={false}>
          
          {src.map(img => 
            <Image sx={styles.img} src={img.url} key={img.title} />
          )}
          </Carousel>
        <Heading sx={styles.wrapper.subTitle}>{text}</Heading>
      </Box>
    </Box>
    
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    mb: -1,
  },

  img: {
    width: ['100%', null, null, '100%', '100%', '100%'],
    height: 'auto',
    flexShrink: 0,
    mr: 0,
    ml: 0,
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, 5],
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: ['10px', null, '15px'],
    },

    subTitle: {
      fontSize: [1, 3],
      fontWeight: 400,
      lineHeight: '1.9',
      mt:['5px', '10px'],
    },
  },
};
