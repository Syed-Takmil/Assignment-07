import React, { useContext } from 'react';
import { ProfileContext } from '../../context/ProfileContext';
import { Camera, MessageCircleMore, PhoneCall } from 'lucide-react';
import call from '../../assets/call.png'
import text from '../../assets/text.png'
import video from '../../assets/video.png'
const TimeLine = () => {

    const { interactionList } = useContext(ProfileContext);
    const img=(type)=>{
if(type==="Call"){
    return call
}
else if(type==="Text"){
    return text
}
else{
    return video
}
    }
    return (
        <div className='bg-base-200 w-full grid grid-cols-1 gap-3 p-5'>
            <span className='text-3xl font-bold '>TimeLine</span>
           {
            (interactionList!=="")?
            interactionList.map(profile => (

                    <div key={profile.id} className='flex gap-7 rounded-xl bg-base-100 p-5 '>
<div className='rounded-full  p-1'>
    <img className='w-10 h-10' src={img(profile.type)}/>
</div>
<div className='text-[18px] text-[#64748B]'>
<span className='font-medium text-[20px] text-[#244D3F]'>{(profile.type).toUpperCase()}</span> with {profile.name} <br />
{profile.time}
</div>
                    </div>
            )) :
            <div className='text-[16px] text-gray-400 font-bold text-center mt-6 bg-base-100 p-10'>
                No TimeLine Set Yet
            </div>
           }
        </div>
    );
};

export default TimeLine;