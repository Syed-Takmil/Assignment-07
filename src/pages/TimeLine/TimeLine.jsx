import React, { useContext } from 'react';
import { ProfileContext } from '../../context/ProfileContext';
import { Camera, ChevronDown, MessageCircleMore, PhoneCall } from 'lucide-react';
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
        <div className='bg-base-200 w-full grid gap-5 p-10 '>
        
            <span className='text-3xl font-bold '>TimeLine</span>

<button className="btn bg-base-200 w-fit " popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
 Filter TimeLine <ChevronDown size={32} color="#808080" />
</button>

<ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
  popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */ }>
  <li><a>By Name</a></li>
  <li><a>By Date</a></li>
</ul>

           {
            (interactionList?.length>0)?
        <div className='grid grid-cols-1 gap-5'>
            {
                    interactionList.map(profile => (

                    <div key={profile.id} className='flex gap-7 rounded-xl bg-base-100 p-5 hover:-translate-y-1 transition-all duration-300 hover:border hover:border-gray-200'>
<div className='rounded-full  p-1'>
    <img className='w-10 h-10' src={img(profile.type)}/>
</div>
<div className='text-[18px] text-[#64748B]'>
<span className='font-medium text-[20px] text-[#244D3F]'>{(profile.type).toUpperCase()}</span> with {profile.name} <br />
{profile.time}
</div>
                    </div>
            ))
            }
        </div> :
            <div className='text-[16px] text-gray-400 font-bold text-center mt-6 bg-base-100 p-10'>
                No TimeLine Set Yet
            </div>
           }
        </div>
    );
};

export default TimeLine;