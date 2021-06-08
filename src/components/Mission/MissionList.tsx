import React from 'react'
import {MissionsInfoQuery} from '../../generated/graphql'


interface Props {
    data: MissionsInfoQuery
}

const MissionList: React.FC<Props> = ({data}) => {
    return (
        <div>
            <ul>
            {data.launches?.map((launchObj, index) => (
                <li 
                    key = {index}
                > 
                    {launchObj?.mission_name}

                </li>
     ) )}
            </ul>
        </div>
    )
}

export default MissionList
