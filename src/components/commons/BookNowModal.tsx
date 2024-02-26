import React, { useEffect, useState } from 'react';

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Head from 'next/head';

const BootstrapDialog = styled(Dialog)(({ theme }:any) => ({
}));

export default function BookNowModal({handleClose,open}:any) {
    const [name, setName] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('+254');
    const [description, setDescription] = useState<string>('');
    const [status,setStatus] = useState<string>("");
  

     useEffect(()=>{
        setStatus('We will Reach out as soon as possible')
     },[])
    const handleSubmit = () => {
    if(name === '' || phoneNumber === null ||description === ""){
    setStatus('Please Fill in all the fields');
    return;
    }
    const bsPhoeNo = "+254722810585";
    // const bsPhoeNo = "+254790236990";
    const message = `Hi, I'm ${name}. \n${description}.\nHere is my Phone Number: ${bsPhoeNo}. Reach out soon`;
    const whatsappLink = `https://wa.me/${bsPhoeNo}?text=${encodeURIComponent(message)}`;
     window.open(whatsappLink, '_blank');
     setName('');
     setPhoneNumber('');
     setDescription('');
    };
  

  return (
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>

    </Head>
<div className=''>
<BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        // maxWidth="lg"
        fullWidth
      >
        <div className='w-[100%]  mx-auto items-center flex md:mt-4 justify-end'>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            color: (theme:any) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        </div>
        <div className='w-[90%] mx-auto mb-5 md:mb-8 '>
<div>

<form>
<div className='grid gap-1 my-2'>
<label className='text-[12px] md:text-[14px] text-black_1 opacity-80'>Name </label>
<input type='text' value={name} onChange={(e)=>setName(e.target.value)} className='py-1 md:py-2 px-2 focus:outline-none focus:border-none rounded-md bg-[gainsboro] text-black_1 md:text-[16px] opacity-80'/>
</div>
<div className='grid gap-1 my-3'>
<label className='text-[12px] md:text-[14px] text-black_1 opacity-80'>Phone Number </label>
<input type='text' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} className='py-1 md:py-2 px-2 focus:outline-none focus:border-none rounded-md bg-[gainsboro] text-black_1 md:text-[16px] opacity-80'/>
</div>
<div className='grid gap-1 my-3'>
<label className='text-[12px] md:text-[14px] text-black_1 opacity-80'>A brief description of your service needed </label>
<textarea  value={description} onChange={(e)=>setDescription(e.target.value)} className='py-1 md:py-2 px-2 focus:outline-none focus:border-none rounded-md bg-[gainsboro] text-black_1 md:text-[16px] opacity-80'></textarea>
</div>
</form>

<p className={` ${status === 'Please Fill in all the fields' ? 'text-brown_1':""}  text-gray_text text-[12px] md:text-[14px] w-full flex justify-center`}>{status}</p>

    <div className="modal-action">
      <div className='flex justify-center w-full '>
      <button className={`py-2 rounded-md px-4 bg-[#FFAF00] text-white`} onClick={handleSubmit}>Submit</button>
      </div>
    </div>

  </div>
  </div>
      </BootstrapDialog>
</div>
    </>
  );
}