import gql from 'graphql-tag';



export const MissionsInfo = gql`
query MissionsInfo {
  launches {
    flight_number
    launch_year
    mission_name
  }
}
`
