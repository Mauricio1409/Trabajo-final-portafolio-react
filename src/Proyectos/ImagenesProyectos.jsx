import React from 'react'

export default function ImagenesProyectos(props) {
  return (
    <>
        <div>
            <img src={props.linkuno} alt="" />
            <img src={props.linkdos} alt="" />
        </div>
        <div>
            <img src={props.linktres} alt="" />
            <img src={props.linkcuatro} alt="" />
        </div>
    </>

  )
}
