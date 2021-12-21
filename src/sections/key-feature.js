/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';
import FeatureCard from 'components/feature-card';

import { IoMdHeartEmpty } from 'react-icons/io';


export default function KeyFeature({Projecten}) {
  // const [feeds, setFeedsData] = useState([])
  // //use useRef to store the latest value of the prop without firing the effect

  // useEffect(() => {
  //     // this is to avoid memory leaks
  //     const abortController = new AbortController();

  //     async function fetchInstagramPost () {
  //       try{
  //         axios
  //             .get(`https://graph.instagram.com/me/media?fields=id,permalink,media_type,media_url,children{media_url},caption&limit=4&access_token=${process.env.NEXT_PUBLIC_REACT_APP_INS_TOKEN}`)
  //             .then((resp) => {
  //                 setFeedsData(resp.data.data)
  //             })
  //       } catch (err) {
  //           console.log('error', err)
  //       }
  //     }
      
  //     // manually call the fecth function 
  //     fetchInstagramPost();

  //     return () => {
  //         // cancel pending fetch request on component unmount
  //         abortController.abort(); 
  //     };
  // }, [12])

  return (
   <section sx={{variant: 'section.keyFeature'}} id="projecten">
    <Container>
      <SectionHeader
      slogan="Onze projecten"
      title="Bekijk onze projecten hieronder" />

      <Grid sx={styles.grid}>
          {Projecten.map(project => <FeatureCard 
          key={project.titel} 
          title={project.titel} 
          src={project.afbeelding}
          text={project.beschrijving}
          slug={project.slug} /> )}
      </Grid>
    </Container>
   </section>
  );
}



const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
      gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 40px',
      '30px',
      '50px 40px',
      '55px 40px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,0.5fr)',
      null,
    ],
  },
};


