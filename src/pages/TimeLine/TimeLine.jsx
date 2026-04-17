import React, { useContext, useState } from 'react';
import { ProfileContext } from '../../context/ProfileContext';
import { Camera, ChevronDown, MessageCircleMore, PhoneCall } from 'lucide-react';
import call from '../../assets/call.png'
import text from '../../assets/text.png'
import video from '../../assets/video.png'
const TimeLine = () => {
const[value,setValue]=useState("")
    const {callList, videoCallList,textList, interactionList } = useContext(ProfileContext);
    const [list,setList] =React.useState(interactionList);
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

    // Search Button
    const Search=(val)=>{
        val=val.toLowerCase()
       setList (interactionList.filter(item=>item.name.toLowerCase().includes(val)
    ||item.type.toLowerCase().includes(val)))
// console.log(val)
    }

    // Sorting Function declared here
    const Filter=(type)=>{
if(type==="Call"){
    setList(callList);
    return;
}
else if(type==="Text"){
setList(textList)
return
}
else{
    setList(videoCallList)
}
    }
    return (
        <div className='bg-base-200 w-full grid gap-5 p-10 '>
        
            <span className='text-3xl font-bold '>TimeLine</span>

<div className='flex justify-between items-center'>
    <button className="btn bg-base-200 gap-5 w-fit " popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
 Filter TimeLine <ChevronDown size={32} color="#808080" />
</button>
<span className='flex justify-items-center items-center justify-center gap-2'>
    <input 
className='border rounded-lg p-3 bg-base-100' 
type='text'
placeholder='Search here'
onChange={(e)=>setValue(e.target.value)}/>
<button className='btn  btn-primary m-2'
onClick={()=>{Search(value)}}>Search</button>
</span>
</div>

<ul className="dropdown grid gap-1 menu w-52 rounded-box bg-base-100 shadow-sm"
  popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */ }>
  <li><button onClick={()=>Filter("Call")} className='btn'>By Calls</button></li>
  <li><button onClick={()=>Filter("Text")} className='btn'>By Texts</button></li>
  <li><button  onClick={()=>Filter("VideoCall")} className='btn'>By Video Calls</button></li>
</ul>

           {
            (interactionList?.length>0)?
        <div className='grid grid-cols-1 gap-5'>
            {
                (list.length>0)?
                    list.map((profile,ind) => (

                    <div key={ind} className='flex gap-7 rounded-xl bg-base-100 p-5 hover:-translate-y-1.5 transition-all hover:scale-102 duration-200 hover:border-2 hover:border-gray-200'>
<div className='rounded-full  p-1'>
    <img className='w-10 h-10' src={img(profile.type)}/>
</div>
<div className='text-[18px] text-[#64748B]'>
<span className='font-medium text-[20px] text-[#244D3F]'>{(profile.type).toUpperCase()}</span> with {profile.name} <br />
{profile.time}
</div>
                    </div>
            ))
            :
            <div className='text-[20px] text-gray-400 font-semibold text-center mt-4 bg-base-100 p-10'>No data Found</div>
            }
        </div> :
            <div className='text-[20px] text-gray-400 font-semibold text-center mt-4 bg-base-100 p-10'>
                No TimeLine Set Yet
            </div>
           }
        </div>
    );
};

export default TimeLine;