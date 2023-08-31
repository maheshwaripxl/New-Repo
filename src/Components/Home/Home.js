import React, { useEffect, useState } from 'react'
import './style.css'
import Information from '../Information/Information'
import Search from '../Search/Search'
import Drawer from '../Drawer'
import { detailsArray } from '../Array'

function Home() {

  const [ data, setData] = useState(detailsArray)

  return (
    <div>
      <Drawer />
      <Search />
      <div className='entireTable'>
        <tr className='headings'>
          <th>Images</th>
          <th>Agency</th>
          <th>Address</th>
          <th>Phone Number</th>
          <th>Agency Type</th>
          <th>WhiteLabel</th>
          <th>Actions</th>
        </tr>
        <div>
        {data.map((item, ind) => {
          return <Information index={ind} detail={item} newData={(i) => setData(i)}/>
        })}
        </div>
        {/* {detailsArray.map((detail) =>
        (<Information item={detail} */}
        {/* // Images={detail.img}
          // Agency={detail.Agency}
          // Address={detail.Address}
          // PhoneNumber={detail.PhoneNumber}
          // AgencyType={detail.AgencyType}
          // WhiteLabels={detail.WhiteLabels}
          // Actions={detail.Actions} */}
        {/* />) */}
        {/* )} */}
      </div>
    </div>
  )
}

export default Home;
