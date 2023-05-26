import React from 'react'

const cities=[
    {
        id:1,
        cityname:'Delhi'
    },
    {
        id:2,
        cityname:'New York'
    },

    {
        id:3,
        cityname:'London'
    },
    {
        id:4,
        cityname:'Paris'
    },
    {
        id:5,
        cityname:'Toronto'
    }
]

function TopButtons({setQuery}) {
  return (
    <div className='flex justify-around items-center my-6 '>
      {cities.map((city)=>{
        return <button key={city.id} className='text-white text-lg font-medium transition ease-out hover:scale-125' onClick={()=>{setQuery({q:city.cityname})}}>{city.cityname}</button>
      })}
    </div>
  )
}

export default TopButtons
