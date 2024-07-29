import React from 'react';
import { Box, FormControl, FormLabel, Input, Textarea, Button, Alert, AlertIcon } from '@chakra-ui/react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Esquema de validación con Yup
const validationSchema = Yup.object({
  name: Yup.string().required('El nombre es obligatorio'),
  email: Yup.string().email('Correo electrónico inválido').required('El correo electrónico es obligatorio'),
  telefono: Yup.string().required('El teléfono es obligatorio'),
  message: Yup.string().required('El mensaje es obligatorio'),
});

export default function ContenedorFormulario() {
  return (
    <Formik
      initialValues={{ name: '', email: '', telefono: '', message: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm, setStatus }) => {
        fetch('https://formsubmit.co/mauriciotorti1@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(values).toString(),
        })
          .then(response => {
            if (response.ok) {
              setStatus({ submitted: true, error: false });
              resetForm();
            } else {
              setStatus({ submitted: false, error: true });
            }
            setSubmitting(false);
          })
          .catch(() => {
            setStatus({ submitted: false, error: true });
            setSubmitting(false);
          });
      }}
    >
      {({ isSubmitting, status }) => (
        <Form>
          <Box w="100%">
            <FormControl id="name" isRequired mb="20px">
              <FormLabel>Nombre</FormLabel>
              <Field
                as={Input}
                type="text"
                name="name"
                placeholder="Ingrese su nombre"
                borderRadius="30px"
                p="20px"
              />
              <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
            </FormControl>
            <FormControl id="email" isRequired mb="20px">
              <FormLabel>Email</FormLabel>
              <Field
                as={Input}
                type="email"
                name="email"
                placeholder="Ingrese su email"
                borderRadius="30px"
                p="20px"
              />
              <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
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
            <FormControl id="message" isRequired mb="20px">
              <FormLabel>Mensaje</FormLabel>
              <Field
                as={Textarea}
                name="message"
                placeholder="Ingrese su mensaje"
                borderRadius="30px"
                p="20px"
              />
              <ErrorMessage name="message" component="div" style={{ color: 'red' }} />
            </FormControl>
            <Button type="submit" colorScheme="teal" variant="outline" mt="4" w="full" isLoading={isSubmitting}>
              Enviar
            </Button>
            {status?.submitted && (
              <Alert status="success" mt="4">
                <AlertIcon />
                Mensaje enviado con éxito.
              </Alert>
            )}
            {status?.error && (
              <Alert status="error" mt="4">
                <AlertIcon />
                Ocurrió un error al enviar el mensaje.
              </Alert>
            )}
          </Box>
        </Form>
      )}
    </Formik>
  );
}
