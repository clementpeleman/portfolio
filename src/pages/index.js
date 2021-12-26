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
import { GraphQLClient } from 'graphql-request';

export default function IndexPage({projecten, updatedAt }) {
  const timeString = new Date(updatedAt).toLocaleTimeString();
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="H16 | Oosterzele" />
          <Banner />
          <p>{timeString}</p>
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
  const graphcms = new GraphQLClient(
    'https://api-eu-central-1.graphcms.com/v2/ckx0a5ow80od401xpen297noz/master'
  );
  
    const data = await graphcms.request(
      `
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
  )
  
  const {projecten} = data;
  return {
    props: {
      projecten,
      updatedAt: Date.now()
    },
    revalidate: 60
  }
}
