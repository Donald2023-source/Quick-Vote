import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const CandidateCard = ({data}) => {
  return (
    <div className='border p-4'>
      <div className='flex flex-col gap-1 items-center justify-center'>
        <div>
            {
                data.image ? (
                    <img className='h-32 w-32 object-cover rounded-full p-2' src={data?.image} alt={data?.name} />
                ) : (
                    <AccountCircleIcon />   
                )
            }
        </div>
        <h2 className='text-xl text-primary font-bold'>{data?.name}</h2>
        <p className='text-primary'>{data?.depart}</p>
      </div>
    </div>
  )
}

export default CandidateCard
