




import { Plus } from 'lucide-react';
import React from 'react';

const Banner = () => {
    return (
        <div className='w-full pt-15 pb-12 bg-base-300'>

            <div className='w-15/16 mx-auto grid gap-4 justify-center justify-items-center items-center  text-center '>
            <h2 className='font-bold text-[48px]'>Friends to keep close in your life</h2>
            <p className='text-[#64748B] text-[16px]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.</p>
<button className='btn bg-[#244D3F] text-white'> <Plus color="#ffffff" strokeWidth={2.25} /> Add Friend</button>
            {/* Stats Cards */}
      <div className='grid grid-cols-2 mt-4 md:grid-cols-4 gap-2' >
          <div className="card rounded-lg p-3 bg-base-100 grid justify-center items-center gap-1">
<span className='text-[32px] font-semibold'>10</span>
<span className='text-[18px] text-[#64748B]'>Total Friends</span>
        </div>
        <div className="card rounded-lg p-3 bg-base-100 grid justify-center items-center gap-1">
            <span className='text-[32px] font-semibold'> 3 </span>
                <span className='text-[18px] text-[#64748B]'> On Track  </span>
        </div>
        <div className="card rounded-lg p-3 bg-base-100 grid justify-center items-center gap-1">
            <span className='text-[32px] font-semibold'> 6 </span>
                <span className='text-[18px] text-[#64748B]'>  Need Attention </span>
        </div>
        <div className="card rounded-lg p-3 bg-base-100 grid justify-center items-center gap-1">
            <span className='text-[32px] font-semibold'>  12</span>
                <span className='text-[18px] text-[#64748B]'> Interactions This Month</span>
        </div>
      </div>
        </div>
        </div>
    );
};

export default Banner;