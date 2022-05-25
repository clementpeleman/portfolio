/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Button } from 'theme-ui';
import Image from "next/image"
import bannerimg from '../../public/kolibri.png'

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            student industrieel ontwerp @
          </Heading>
          <Text as='p' variant='heroSecondary'>
             UGent campus Kortrijk
          </Text>
        </Box>
        <Box sx={styles.banner.imageBox}>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: [null],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(/shape-left.png)`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '30%',
      opacity: '0%'
    },  
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(/shape-right.png)`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '30%',
      opacity: '0%',
    },
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: ['column', 'column', 'column', 'row', 'row', 'row', 'row', 'row'],
      justifyContent: 'center',
      maxWidth: [
        '100%',
        '100vw',
        '100vw',
        '100vw',
        '100vw',
        '100vw',
        '100vw',
        '100%',
      ],
      pl: [
        4,
        4,
        4,
        'calc((100vw - 780px)/2 + 21.5px) !important',
        'calc((100vw - 1020px)/2 + 21.5px) !important',
        'calc((100vw - 1200px)/2 + 21.5px) !important',
        null,
        'calc((100vw - 1310px)/2 + 21.5px) !important',
      ],
      pr: [
        0,
        0,
        0,
        '0px !important',
        '0px !important',
        '0px !important',
        null,
        '0px !important',
      ],
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '75%'],
      mx: '0',
      textAlign: '',
      mb: ['40px', null, null, null, null, 10],
      mt: ['30vh'],
      whiteSpace: 'normal',
      overflow: 'visible',
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      width:'70%',
      alignSelf: 'flex-end',
      display: 'inline-flex',
      mb: [7, null, null, null, null, null, null, 5],
      mt: [
       "100px"
      ],
      maxWidth: [
        '100%',
        '100%',
        '100%',
        '100%',
        '100%',
        '100%',
        '100%',
        '100%',
      ],
      img: {
        position: 'relative',
        height: ['auto', 'auto'],
        width:'100%',
        borderRadius: '5px',
        transform: 'scaleX(-1)'
      },
    },
  },
};
