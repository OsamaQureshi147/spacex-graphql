import React from 'react';
import {useMissionsInfoQuery} from '../../generated/graphql'
import MissionList from './MissionList';

const MissionContainer = () => {

    const { data, error, loading } = useMissionsInfoQuery();
    if (loading) 
        return <h1>Loading...</h1>
    if (error || !data)
        return <h1>ERROR Occured</h1>
    console.log(data);
    return(
        <div>
            <h3>Missions List</h3>
            <MissionList data= {data} />
        </div>
        

    );
}


export default MissionContainer