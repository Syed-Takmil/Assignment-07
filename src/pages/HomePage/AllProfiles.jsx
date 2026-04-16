



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
        },2000);
        
    },[])
    return (
        <div className='bg-base-300'>
            <div className='w-15/16 mx-auto grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 px-19 py-8'>
           {
            (loading)?
 <div className='w-1/3 font-semibold text-xl mx-auto grid gap-5 justify-center items-center justify-items-center'>
<div><span className="loading loading-spinner loading-xl"></span>  </div>
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