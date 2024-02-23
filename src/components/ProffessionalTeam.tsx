import React, { useEffect, useState } from 'react';
import Card from './commons/Card';
import { TeamProps, team } from '@/data/team';
import Title from './commons/Title';
import Image from 'next/image';

function ProffessionalTeam() {
  const [active,setActive] = useState<TeamProps>(team[0]);
  const [activeStatus,setActiveStatus] = useState<number | null>(null);

  useEffect(()=>{
    setActive(team[0])
    setActiveStatus(team[0].id)
    
  },[])
  const setActiveTeamMember =(person:TeamProps,id:number)=>{
    setActive(person)
    setActiveStatus(id)
  }
  
  return (
   <Card>
<div className='grid gap-5'>
<div>
  <Title title='Meet Out Team'/>
</div>

<div className='grid justify-center'>
  <Image src={active?.image} alt='' width={200} height={200} className='md:w-[300px] md:h-[320px] rounded-t-md'/>
  <div className='bg-brown_2 rounded-b-[3px]  grid '>
    <p className=' mx-auto text-[14px] md:text-[16px] font-[600] font-frank text-black_1'>{active?.name}</p>
    <p className= ' mx-auto text-[12px] italic md:text-[14px] font-[500] font-frank text-black_1 opacity-70 '>{active?.title}</p>
  </div>
</div>

<div className='flex gap-4 md:gap-6 flex-wrap justify-center my-5'>
  {team.map((person)=>(
    <div className={` rounded-full  flex justify-center items-center  ${activeStatus === person.id ? 'border-[4px] border-[#FFAF00] scale-75 shadow-2xl': ''} `} key={person.id} onClick={()=>setActiveTeamMember(person,person.id)}>
        <Image src={person.image} alt='' width={90} height={90} className='rounded-full w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px]'/>
    </div>
  ))}
</div>
</div>
   </Card>
  )
}

export default ProffessionalTeam;
