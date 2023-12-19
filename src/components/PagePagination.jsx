import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import React, { useState } from 'react'

const PagePagination = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const pageClick = (page) => {
    if (page > 4) {
      setCurrentPage(1)
        } else {
      setCurrentPage(page)
        }
  }

  return (
    <div className="flex items-center justify-center mt-8">
      <div className="flex gap-5">
        {[1, 2, 3, 4].map((page) => (
          <button key={page} onClick={() => pageClick(page)} 
          className={`flex justify-center items-center ${currentPage === page ? 'text-white bg-amber-500' : 'text-black bg-gray-100'} rounded-full w-10 h-10`}>
            {page}
          </button>
        ))}
        <button className="flex justify-center items-center bg-amber-500 rounded-full w-10 h-10"
          onClick={() => pageClick(currentPage + 1)}>
          <FeatherIcon icon="arrow-right" />
        </button>
      </div>
    </div>
  )
}

export default PagePagination
