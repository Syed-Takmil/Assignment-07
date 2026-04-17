



import React, { useEffect, useState } from 'react';
import ProfileCard from '../../Components/ProfileCard';

const AllProfiles = () => {
    const[profiles, setProfiles] = React.useState([]);
    const [loading,setloading]=useState(true)
    useEffect(()=>{
        setTimeout(()=>{
          
fetch('friends.json')
            .then(response => response.json())
            .then(data => setProfiles(data));
              setloading(false)
        },500);
        
    },[])
    return (
        <div className='bg-base-300'>
            <div className='w-15/16 mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 lg:px-19 py-8'>
           {
            (loading)?
<div className='flex justify-center  gap-5 text-xl mt-5'>
                <div className="loading loading-spinner loading-xl"></div>
                 Loading Profiles
            </div>
   
            :
            profiles.map(profile=>(
               <ProfileCard key={profile.id} profile={profile}/>
            ))
           }
        </div>
        </div>
    );
};

export default AllProfiles;