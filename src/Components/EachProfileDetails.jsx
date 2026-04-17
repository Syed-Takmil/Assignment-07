


import  '../App.css'
import React, { useContext } from 'react';
import ProfileCard from './ProfileCard';
import { Archive, Bell, MessageSquareMore, PhoneCall, Trash, Video } from 'lucide-react';
import ProfileDetails from '../pages/ProfileDetails';
import ProfileDetailsCard from './ProfileDetailsCard';
import { ProfileContext } from '../context/ProfileContext';

const EachProfileDetails = ({profile}) => {
    const time=new Date().toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
   hour: "numeric",
  minute: "numeric",
  second: "numeric"
});
    const{HandleCall,HandleText,
    HandleVideoCall}=useContext(ProfileContext)
    const { name,days_since_contact,goal,next_due_date} = profile;
    return (
        <div className='p-5 pt-7 bg-base-300'>
        <div className='grid  grid-cols-1 lg:grid-cols-2 w-7/10 mx-auto justify-between  justify-items-center items-center  '>
            
            <div className='grid gap-4  ml-4 mt-6 justify-center justify-items-center items-center'>
                <ProfileDetailsCard profile={profile}/>
                <button className='bg-white rounded-lg p-4 btn w-full h-fit  flex '>
                   <Bell color="#808080" strokeWidth={1.75} /> 
                   <span>Snooze 2 Weeks</span>
                    </button>
                    <button className='bg-white rounded-lg p-4 btn w-full h-fit'>
                    <Archive color="#808080" strokeWidth={1.75} />
                   <span>  Archive  </span> </button>
                        <button className='bg-white rounded-lg p-4 btn w-full h-fit text-red-600'>
                            <Trash color="#ff1616" strokeWidth={1.75} />
                            <span> Delete</span></button>
            </div>

        <div className='grid grid-cols-1 w-full gap-3 mt-7'>
                <div className='flex w-full justify-center items-center justify-items-start  gap-4 '>
                <div className="bg-white w-80 h-full grid grid-cols-1 p-4 rounded-lg items-center justify-center gap-2  justify-items-center  " >
                   <span className='text-[32px] font-semibold'> {days_since_contact}</span>
                   <span className='text-[18px] text-[#64748B]'> Days Since Contact</span>
                    </div>
               
                <div className="bg-white w-80 h-full grid grid-cols-1 p-4 rounded-lg items-center justify-center gap-2  justify-items-center ">
                  <span className='text-[32px] font-semibold'> {goal}</span>
               <span className='text-[18px] text-[#64748B]'> Goal (days)</span>
                </div>
                <div className="bg-white w-80 h-full grid grid-cols-1 p-3 rounded-lg items-center justify-center gap-2  justify-items-center  ">
                    <span className='text-[24px] font-semibold'> {next_due_date}</span>
                    <span className='text-[18px] text-[#64748B]'>Next Due Date</span>
                </div>
                 </div>

                 <div className='bg-white p-4  grid gap-2 font-semibold text-[20px] text-black '>
                    <div className='flex  justify-between items-center '>
                        <span>RelationShip Goals</span>
                    <button className='btn btn-square '>Edit</button>
                    </div>
                   <div className='flex gap-1  justify-items-center items-center'>
                     <span className='text-[18px]  text-[#64748B]'>Connect every</span> 
                    30 days
                   </div>
                 </div>
                 <div className='bg-white p-5  grid gap-2 font-semibold text-[20px] text-black'>
                    Quick Check-In
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 font-semibold'>
                        <button onClick={()=>HandleCall(name,time)} className='bg-[#F8FAFC]  border-[#E9E9E9] justify-center items-center grid gap-5 p-5 rounded-lg '>
                            <PhoneCall color="#000000" size={35} />
                          <span>   Call</span>
                             </button>
                            <button onClick={()=>HandleText(name,time)} className='bg-[#F8FAFC] border-[#E9E9E9] justify-center justify-items-center grid gap-5 p-5 rounded-lg '>
                                <MessageSquareMore color="#000000" size={35}/>
                                <span>Text</span></button>
                            <button 
onClick={()=>
    HandleVideoCall(name,time)}
                            className='bg-[#F8FAFC] border-[#E9E9E9] justify-items-center justify-center items-center grid  gap-5 p-5 rounded-lg '>
                                <Video color="#000000" size={35} />
                               <span> Video</span></button>
                    </div>
                 </div>
        </div>
            </div>
            </div>
        
    );
};

export default EachProfileDetails;