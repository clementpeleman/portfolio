/** @jsxRuntime classic */
/** @jsx jsx */
import  Link  from 'next/link';
import { FaExpeditedssl } from 'react-icons/fa';
import { jsx, Image, Box, Heading, Text } from 'theme-ui';
import { useState, useEffect } from 'react'
import {FaMapMarkerAlt} from 'react-icons/fa'
import { Carousel } from 'react-responsive-carousel';

export default function FeatureCard({
  src,
  title,
  text,
  slug
  
}) {

  return (
    <Box sx={styles.card}>           
      <Box sx={styles.wrapper}>
        <Heading sx={styles.wrapper.title}>{title} </Heading>
          <Carousel
          showThumbs={false}
          emulateTouch={true}
          infiniteLoop={true}
          showIndicators={true}
          showStatus={false}
          dynamicHeight={true}>
          
          {src.map((img, i) =>    
            <Image sx={styles.img} src={img.url} key={i} />
          )}
          </Carousel>
          <Link href={`/projecten/${slug}`}>
        <Heading sx={styles.wrapper.subTitle}>{text}</Heading>
        </Link>
      </Box>
    </Box>
    
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    mb: 10,
    
  },

  icon: {
    position: 'relative',
    top: '3px',
    mr: '5px',
    
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
    mt: '150px',
    p: "20px",
    
    borderRadius: "5px",
    boxShadow: "rgba(149, 157, 165, 0.12) 0px 10px 24px",

    title: {
      fontSize: [3, 6],
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: ['20px', null, '25px'],
      // p: ['5px','10px'],
      color: 'black',
      borderRadius: '5px',
      width: 'fit-content'
    },

    subTitle: {
      fontSize: [1, 3],
      fontWeight: 400 ,
      lineHeight: '1.3',
      mt:['30', '30px'],
      p: ['5px','10px'],
      color: 'black',
      backgroundColor:'white',
      borderRadius: '0x',
      width: 'fit-content',
      cursor: 'pointer'
    },
  },
};
