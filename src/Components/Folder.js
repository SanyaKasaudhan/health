import React from 'react'

const Folder = ({data}) => {
  return (
    <div>
        📁{data.name}
        {/* {data.map((da) => (
            <div className="bg-pink-200 w-2/12 mx-2 my-2 ">
              {da.items.name}
            </div>
          ))} */}
          <div>
          {data.items.map((da) => (
            <div className="bg-pink-200 w-2/12 mx-2 my-2 ">
              {da.name}
            </div>
          ))}
          </div>
    </div>
  )
}

export default Folder