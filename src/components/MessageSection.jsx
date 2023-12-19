import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from './Buttons'

const MessageSection = () => {
  return (
    <div className="flex p-5 border border-gray-200 h-fit max-w-sm">
      <div className="flex flex-col gap-2.5">
        <div className="flex w-12 h-12 rounded-2xl bg-yellow-950 justify-center items-center">
          <FontAwesomeIcon icon="fa-solid fa-message fa-lg" style={{ color: '#ffffff' }} />
        </div>
        <div className="text-lg text-gray-700 font-bold">Send Us Message</div>
        <div className="flex text-gray-700">
          If you're unable to find an answer or your product quickly, please describe your problem and tell us. We will give you a solution.
        </div>
        <Button buttonName={'Send Message'} />
      </div>
    </div>
  )
}

export default MessageSection
