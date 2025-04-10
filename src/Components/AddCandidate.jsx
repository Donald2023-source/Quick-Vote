import { Plus } from 'lucide-react'
import React from 'react'
import {Candidates} from '../data/data'
import CandidateCard from './CandidateCard'
const AddCandidate = () => {
  return (
    <div>
      <div>
        <div className='flex gap-2 md:py-3 py-3'>
            <div className='flex justify-center items-center rounded-lg hoverEffect hover:scale-105 cursor-pointer h-48 w-64 p-3 gap-4 shadow-lg bg-gradient-to-r from-primary/70 to-purple-600 flex-col text-white'>
            <Plus color='wheat' size={40} />
            <h2>Add Candidate</h2>
            </div>

        </div>
            <div className='grid md:grid-cols-3 gap-8'>
                {
                    Candidates.President.map((candidate, index) => (
                        <div>
                            <CandidateCard btnText={'View Details'} key={index} data={candidate} onClick={(data) => console.log(data)} />
                        </div>
                    ))
                }
            </div>
      </div>
    </div>
  )
}

export default AddCandidate
