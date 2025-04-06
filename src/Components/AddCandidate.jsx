import { Plus } from 'lucide-react'
import React from 'react'

const AddCandidate = () => {
  return (
    <div>
      <div>
        <div className='flex gap-2 md:py-3 py-3'>
            <div className='flex justify-center items-center rounded-lg hoverEffect hover:scale-105 cursor-pointer h-48 w-64 p-3 gap-4 shadow-lg bg-gradient-to-r from-primary/70 to-purple-600 flex-col text-white'>
            <Plus color='wheat' size={40} />
            <h2>Add Candidate</h2>
            </div>

            <div>
                {
                    
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddCandidate
