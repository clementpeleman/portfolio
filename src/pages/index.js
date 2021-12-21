import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';
import CoreFeature from '../sections/core-feature';
import WorkFlow from '../sections/workflow';
import Package from '../sections/package';
import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';
import client from '../../apolloClient';
import { gql } from '@apollo/client';

export default function IndexPage({projecten}) {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="H16 | Oosterzele" />
          <Banner />
          <KeyFeature  Projecten={projecten}/>
          <div>{projecten.map((project, i) => (<div key={i}>{project.titel}</div>))}</div>
          {/* <ServiceSection />
          <CoreFeature />
          <WorkFlow />
          <Package /> */}
          <TeamSection />
          {/* <TestimonialCard /> */}
        </Layout>
    </ThemeProvider>
  );
}

export async function getStaticProps() {
  const {data} = await client.query({
    query: gql`
      query{
        projecten {
          slug
          titel
          afbeelding {
            url
          }
          beschrijving
          datum
          map {
            latitude
            longitude
          }
        }
      }
    `
  })
  
  const {projecten} = data;
  return {
    props: {
      projecten
    },
    revalidate: 60
  }
}
