import gql from 'graphql-tag';



export const MissionsInfo = gql`
query MissionsInfo {
    launches {
      launch_success
      launch_year
      mission_name
      mission_id
    }
  }
`