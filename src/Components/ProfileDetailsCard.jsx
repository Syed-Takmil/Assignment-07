import React from 'react';



const ProfileDetailsCard = ({profile}) => {
     const {name,picture,email,days_since_contact,status,tags,bio} = profile;
    return (
        <div className='w-full'>
                 <div className=" w-70 bg-base-100 p-3 grid justify-items-center rounded-lg gap-3 shadow-xl">
  <figure  className='flex justify-center items-center'>
    <img
    className='rounded-full object-cover w-24 h-24'
     src={picture} alt={name} />  </figure>
  <div className="grid grid-cols-1 justify-center items-center justify-items-center ">
    <h2 className='font-semibold  text-[20px]'>{name}</h2>
       <span className='text-[12px] text-center text-[#64748B]'> {days_since_contact}d ago</span>
       <br />
       <span className='flex gap-3'>
        {tags.map((tag, index) => (
          <span key={index} className='font-medium w-fit text-[#244D3F] bg-[#CBFADB] text-[12px] px-2 py-1 rounded-full '>
            {tag.toUpperCase()}
          </span>
        ))}
       </span>

     <span className={`mt-3 text-white rounded-full px-2 py-1 ${
        status === "overdue" ? "bg-red-500" :
        status === "almost due" ? "bg-yellow-500" :
        "bg-green-600"
      }`}>   {status}</span>
    </div>
  </div>
        </div>
    );
};

export default ProfileDetailsCard;