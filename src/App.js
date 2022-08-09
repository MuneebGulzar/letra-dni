import React, { useState, useEffect } from "react";
import { GlobalStyle } from "./StyledComponents/GlobalStyles";
import { StyledButton, StyledForm, StyledInput } from "./StyledComponents/StyledForm";
import Swal from 'sweetalert2'

function App() {

  const [numDNI, setnumDNI] = useState('');
  const [resto, setResto] = useState(0);

  useEffect(() => {
    setResto(numDNI % 23)
  })

  var arrLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
  var letra = '';

  const handleOnChange = (e) => {
    setnumDNI(e.target.value);

  }

  const handleOnSubmit = (e) => {

    e.preventDefault();

    for (let i = 0; i < arrLetras.length; i++) {
      if (i == resto) {
        letra = arrLetras[i];
      }
    } if (numDNI !== '') {
      if (resto !== 0) {
        Swal.fire(
          'Tu nº de DNI es: ' + numDNI + letra
        );
        setnumDNI('')
      } else {
        console.log(resto)
      }
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Intrduce tu nº DNI.',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
  }





  return (
    <>
      <GlobalStyle />
      <StyledForm onSubmit={handleOnSubmit}>
        <StyledInput type="text" pattern="[0-9]{8}" placeholder="Nº DNI" id="numDNI" value={numDNI} onChange={handleOnChange} />
        <StyledButton type="submit">Calcular</StyledButton>
      </StyledForm>
    </>
  );
}

export default App;
