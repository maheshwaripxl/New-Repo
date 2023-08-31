import React, { useState } from "react";
import './style.css'
import Switch from '@mui/material/Switch';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { detailsArray } from '../Array'

function Information({ index, detail, newData }) {
console.log(index)
  const [list, setList] = useState(detailsArray)

  const handleRemove = () => {
    const UpdatedItem = list.filter((item ,ind) => ind !== index)
    console.log('UpdatedItem',UpdatedItem)
    newData(UpdatedItem);
    // console.log(newData)
  }

  return (

    <div className="rowContain">
      <table>
        <tbody className="rowBody">
          <tr className="detailRow">
            <img className="img" src={detail.Images} />
            <td>{detail.Agency}</td>
            <td className="addres">{detail.Address}</td>
            <td>{detail.PhoneNumber}</td>
            <td>{detail.AgencyType}</td>
            <td>{detail.WhiteLabels}</td>
            <td>{detail.Actions}
              <Switch defaultChecked size="small" />
              <DeleteOutlineOutlinedIcon onClick={(ind) => handleRemove()} />
              <VisibilityOutlinedIcon />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Information;
