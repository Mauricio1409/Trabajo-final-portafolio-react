import React from 'react';
import { Box, FormControl, FormLabel, Input, Textarea, Button, useToast } from '@chakra-ui/react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Esquema de validación con Yup
const esquemaDeValidacion = Yup.object({
  nombre: Yup.string().required('El nombre es obligatorio'),
  correoElectronico: Yup.string().email('Correo electrónico inválido').required('El correo electrónico es obligatorio'),
  telefono: Yup.string().required('El teléfono es obligatorio'),
  mensaje: Yup.string().required('El mensaje es obligatorio'),
});

export default function ContenedorFormulario() {
  const toast = useToast();

  const enviarFormulario = async (valores, setStatus, resetForm, setSubmitting) => {
    try {
      const response = await fetch('https://formsubmit.co/mauriciotorti1@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name: valores.nombre,
          email: valores.correoElectronico,
          telefono: valores.telefono,
          message: valores.mensaje
        }).toString(),
      });

      if (response.ok) {
        setStatus({ submitted: true, error: false });
        resetForm();
        toast({
          title: 'Mensaje enviado con éxito.',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'bottom-left',
        });
      } else {
        setStatus({ submitted: false, error: true });
        toast({
          title: 'Ocurrió un error al enviar el mensaje.',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'bottom-left',
        });
      }
    } catch (error) {
      setStatus({ submitted: false, error: true });
      toast({
        title: 'Ocurrió un error al enviar el mensaje.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'bottom-left',
      });
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ nombre: '', correoElectronico: '', telefono: '', mensaje: '' }}
      validationSchema={esquemaDeValidacion}
      onSubmit={(valores, { setSubmitting, resetForm, setStatus }) => {
        setStatus(null); // Restablecer el estado antes de enviar el formulario
        enviarFormulario(valores, setStatus, resetForm, setSubmitting);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Box w="100%">
            <FormControl id="nombre" isRequired mb="20px">
              <FormLabel>Nombre</FormLabel>
              <Field
                as={Input}
                type="text"
                name="nombre"
                placeholder="Ingrese su nombre"
                borderRadius="30px"
                p="20px"
              />
              <ErrorMessage name="nombre" component="div" style={{ color: 'red' }} />
            </FormControl>
            <FormControl id="correoElectronico" isRequired mb="20px">
              <FormLabel>Correo Electrónico</FormLabel>
              <Field
                as={Input}
                type="email"
                name="correoElectronico"
                placeholder="Ingrese su correo electrónico"
                borderRadius="30px"
                p="20px"
              />
              <ErrorMessage name="correoElectronico" component="div" style={{ color: 'red' }} />
            </FormControl>
            <FormControl id="telefono" isRequired mb="20px">
              <FormLabel>Teléfono</FormLabel>
              <Field
                as={Input}
                type="tel"
                name="telefono"
                placeholder="Ingrese su número de teléfono"
                borderRadius="30px"
                p="20px"
              />
              <ErrorMessage name="telefono" component="div" style={{ color: 'red' }} />
            </FormControl>
            <FormControl id="mensaje" isRequired mb="20px">
              <FormLabel>Mensaje</FormLabel>
              <Field
                as={Textarea}
                name="mensaje"
                placeholder="Ingrese su mensaje"
                borderRadius="30px"
                p="20px"
              />
              <ErrorMessage name="mensaje" component="div" style={{ color: 'red' }} />
            </FormControl>
            <Button type="submit" colorScheme="teal" variant="outline" mt="4" w="full" isLoading={isSubmitting}>
              Enviar
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
