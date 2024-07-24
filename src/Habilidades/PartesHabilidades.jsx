import React from 'react'

export default function PartesHabilidades(props) {
  return (
    <>
        <div class="nombre-seccion color-lenguajes"><h3>{props.titulo}</h3></div>
                
                <div class="lenguajes">
                    <div class="seccion-media-habilidades">
                        <svg>
                            <path>{props.urlsvguno}</path>
                        </svg>
                        <p class="color-lenguajes">{props.lenguajeuno}</p>
                    </div>
                    <div class="seccion-media-habilidades">
                        <svg>
                            <path>{props.urlsvgdos}</path>
                        </svg>
                        <p class="color-lenguajes">{props.lenguajedos}</p>
                    </div>
                </div>
                <div class="numero-de-seccion color-lenguajes">
                    <h3>{props.numero}</h3>
                </div>
                
    </>
  )
}
