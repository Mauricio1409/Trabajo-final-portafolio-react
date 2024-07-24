import React from 'react';

export default function ContenedorFormulario() {
  return (
    <>
      <form action="" className="formulario">
        <div className="formulario-nombre">
          <label htmlFor="">Nombre</label>
          <input type="text" placeholder="Ingrese su nombre" />
        </div>
        <div className="formulario-email">
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Ingrese su mail" />
        </div>
        <div className="formulario-telefono">
          <label htmlFor="">Telefono</label>
          <input type="number" placeholder="Ingrese su numero de telefono" />
        </div>
      </form>
    </>
  );
}

