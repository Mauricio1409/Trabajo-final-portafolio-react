import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Textarea, Button, Alert, AlertIcon } from '@chakra-ui/react';
import emailjs from 'emailjs-com';

export default function ContenedorFormulario() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefono: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos
    if (!formData.name || !formData.email || !formData.telefono || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true
      });
      return;
    }

    // Enviar el formulario usando EmailJS
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        setFormStatus({
          submitted: true,
          error: false
        });
        setFormData({
          name: '',
          email: '',
          telefono: '',
          message: ''
        });
      }, (error) => {
        console.log(error.text);
        setFormStatus({
          submitted: false,
          error: true
        });
      });
  };

  return (
    <Box
      className="contenedor-formulario"
      w="100%"
      as="form"
      onSubmit={handleSubmit}
    >
      <FormControl id="nombre" isRequired mb="20px">
        <FormLabel>Nombre</FormLabel>
        <Input
          type="text"
          name="name"
          placeholder="Ingrese su nombre"
          value={formData.name}
          onChange={handleChange}
          borderRadius="30px"
          p="20px"
        />
      </FormControl>
      <FormControl id="email" isRequired mb="20px">
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          placeholder="Ingrese su email"
          value={formData.email}
          onChange={handleChange}
          borderRadius="30px"
          p="20px"
        />
      </FormControl>
      <FormControl id="telefono" isRequired mb="20px">
        <FormLabel>Teléfono</FormLabel>
        <Input
          type="tel"
          name="telefono"
          placeholder="Ingrese su número de teléfono"
          value={formData.telefono}
          onChange={handleChange}
          borderRadius="30px"
          p="20px"
        />
      </FormControl>
      <FormControl id="mensaje" isRequired mb="20px">
        <FormLabel>Mensaje</FormLabel>
        <Textarea
          name="message"
          placeholder="Ingrese su mensaje"
          value={formData.message}
          onChange={handleChange}
          borderRadius="30px"
          p="20px"
        />
      </FormControl>
      <Button type="submit" colorScheme="teal" variant="outline" mt="4" w="full">Enviar</Button>
      {formStatus.submitted && (
        <Alert status="success" mt="4">
          <AlertIcon />
          Mensaje enviado con éxito.
        </Alert>
      )}
      {formStatus.error && (
        <Alert status="error" mt="4">
          <AlertIcon />
          Todos los campos son obligatorios.
        </Alert>
      )}
    </Box>
  );
}
