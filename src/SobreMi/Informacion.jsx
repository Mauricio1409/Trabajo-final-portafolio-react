import React from 'react'

export default function Informacion(props) {
  return (
    <div>
        <div>{props.subtitulo}</div>
        <p>{props.texto}</p>
    </div>
  )
}
