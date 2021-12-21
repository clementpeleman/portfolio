import { gql } from '@apollo/client'
import {useRouter} from 'next/router'
import client from '../../../apolloClient'

export default function ProjectenPagina({project}) {
    return (
        <div>
            <h1>{project.titel}</h1>
        </div>
    )
}

export async function getStaticPaths() {
    const {data} = await client.query({
        query: gql`
        query{
          projecten {
            slug
          }
        }
      `
    })

    const {projecten} = data;
    const paths = projecten.map( project => ({
        params: {slug: [project.slug]}
    }))
    return {paths, fallback: 'blocking'};
}

export async function getStaticProps({params}) {
    const slug = params.slug[0];
    const {data} = await client.query({
      query: gql`
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
      `,
      variables: {slug}
    })
    
    const {projecten} = data;
    const project = projecten[0];
    return {
      props: {
        project
      },
      revalidate: 60
    }
  }