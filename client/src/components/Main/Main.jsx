import React from 'react'
import { Home } from '../Homee/Home';
import { Login } from '../Login/Login';
function parseJwt(token) {
    // Esta función toma un token JWT como entrada y devuelve el contenido del payload (datos del usuario)

    // 1. Separar el token:
    // Los tokens JWT tienen tres partes separadas por puntos (.).
    // Aquí obtenemos la segunda parte, que contiene el payload codificado en base64.
    const base64Url = token.split('.')[1];

    // 2. Convertir a base64 estándar:
    // El formato base64 utilizado en JWT es ligeramente diferente.
    // Aquí se reemplazan los caracteres especiales para ajustarlo al estándar base64.
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

    // 3. Decodificar base64 y convertir a UTF-8:
    // Se decodifica la cadena base64 y se convierte cada carácter a su representación en UTF-8.
    // Esto es necesario porque algunos caracteres especiales pueden requerir codificación UTF-8.
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    // 4. Parsear el JSON:
    // El resultado de la decodificación es una cadena JSON.
    // Aquí se utiliza JSON.parse para convertir la cadena en un objeto JavaScript.
    return JSON.parse(jsonPayload);
}
let tokenExistAndStillValid = (parseJwt(localStorage.getItem('token')).exp*1000 >Date.now())
export const Main = () => {
  return (
    <>

    {tokenExistAndStillValid ? <Home/>: <Login/>}

    </>
  )
}
