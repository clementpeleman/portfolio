/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Button } from 'theme-ui';
import {Image} from "theme-ui"

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Wij geven een nieuwe invulling aan huizen en gronden
          </Heading>
          <Text as='p' variant='heroSecondary'>
            Wij geven een nieuwe invulling aan huizen en gronden
          </Text>
          
        </Box>
        <Box sx={styles.banner.imageBox}>
          <Image src="/banner-thumb.png" alt='banner'/>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
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
      opacity: '30%'
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
      opacity: '30%'
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '75%'],
      mx: '0',
      textAlign: '',
      mb: ['40px', null, null, null, null, 10],
      mt: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      width:'75%',
      alignSelf: 'center',
      display: 'inline-flex',
      mb: [5, null, null, null, null, null, null, 5],
      img: {
        position: 'relative',
        height: ['auto', 'auto'],
        width:'100%',
        borderRadius: '5px',
      },
    },
  },
};
