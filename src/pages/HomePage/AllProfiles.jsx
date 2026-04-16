



import React, { useEffect } from 'react';
import ProfileCard from '../../Components/ProfileCard';

const AllProfiles = () => {
    const[profiles, setProfiles] = React.useState([]);
    useEffect(()=>{
        fetch('friends.json')
            .then(response => response.json())
            .then(data => setProfiles(data));
    },[])
    return (
        <div className='bg-base-300'>
            <div className='w-15/16 mx-auto grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 px-19 py-8'>
           {
            profiles.map(profile=>(
               <ProfileCard key={profile.id} profile={profile}/>
            ))
           }
        </div>
        </div>
    );
};

export default AllProfiles;