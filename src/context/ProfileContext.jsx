



import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';



export const ProfileContext=createContext();
const ProfileContextProvider = ({children}) => {
    const [callList,setCallList]=useState([]);
    const [videoCallList,setVideoCallList]=useState([]);
    const [textList,setTextList]=useState([]);
    const [interactionList,setInteractionList]=useState([]);
    
    const HandleCall=(profile,time)=>{
        const data={
            name:profile
            ,time:time,
            type:"Call"
        }
setCallList([...callList,data]);
setInteractionList([...interactionList,data]);
toast(`Call scheduled with ${profile}  `)
    }
    const HandleText=(profile,time)=>{
        const data={
            name:profile
            ,time:time,
            type:"Text"
        }
setTextList([...textList,data]);
setInteractionList([...interactionList,data]);
toast(`Text scheduled with ${profile}  `)
    }
    const HandleVideoCall=(profile,time)=>{
        const data={
            name:profile
            ,time:time
            ,type:"VideoCall"
        }
setVideoCallList([...videoCallList,data]);
setInteractionList([...interactionList,data]);
toast.success(`Video Call scheduled with ${profile}  `)
    }
const data={
    callList,setCallList,
    videoCallList,setVideoCallList,
    textList,setTextList,
    HandleCall,
    HandleText,
    HandleVideoCall,
    interactionList
}

    return  <ProfileContext.Provider value={data}>{children}</ProfileContext.Provider>
};

export default ProfileContextProvider;