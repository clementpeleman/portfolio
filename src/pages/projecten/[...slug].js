import {useRouter} from 'next/router'
import { GraphQLClient, gql } from 'graphql-request';

export default function ProjectenPagina({project}) {
    return (
        <div>
            <h1>{project.titel}</h1>
        </div>
    )
}

export async function getStaticPaths() {
  const graphcms = new GraphQLClient(
    'https://api-eu-central-1.graphcms.com/v2/cl3lxtp3y1g6g01xi5s1ef7ty/master'
  );
    const data = await graphcms.request(
        `
        query{
          projecten {
            slug
          }
        }
      `
    )

    const {projecten} = data;
    const paths = projecten.map( project => ({
        params: {slug: [project.slug]}
    }))
    return {paths, fallback: 'blocking'};
}

export async function getStaticProps({params}) {
  const graphcms = new GraphQLClient(
    'https://api-eu-central-1.graphcms.com/v2/cl3lxtp3y1g6g01xi5s1ef7ty/master'
  );
    const slug = params.slug[0];
    const content =  
      gql`
        query ProjectBySlug($slug: String!){
          projecten (where: {slug : $slug}){
            titel
            slug
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
      

    const variables = {
      slug: slug
    }

    const data = await graphcms.request(content, variables)
    
    const {projecten} = data;
    const project = projecten[0];
    return {
      props: {
        project
      },
      revalidate: 60,
    }
  }