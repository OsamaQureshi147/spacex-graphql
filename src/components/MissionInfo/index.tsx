import {useLaunchMissionInfoQuery} from '../../generated/graphql'
import MissionInfo from './MissionInfo';

const MissionInfoContainer = () => {
    const { data, error, loading } = useLaunchMissionInfoQuery({
        variables: {
            id: '1'
        },
    });
    if (loading)
        return <h2>Loading...</h2>
    if (error || !data)
        return <h2>ERROR</h2>
    console.log(data)
    return (
        <MissionInfo data={data}  />
    )
}

export default MissionInfoContainer
