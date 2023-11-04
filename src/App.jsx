import { useState } from 'react'
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CCardSubtitle } from '@coreui/react';

import api from './services/api'

function App() {
  const [person, setPerson] = useState([])

  const getDados = async () => {
    await api
      .get("/character/")
      .then((response) => setPerson(response.data.results))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err)
      })
  }

  getDados()

  return (

    <>
      <div className='grid grid-cols-4 p-5'>
        {person.map(element => (<CCard style={{ width: '14rem' }}>
          <CCardBody className='bg-green-600 mb-5'>
          <CCardImage className='bg-green-600 p-3' orientation="top" src={element.image} />
            <CCardTitle className='text-center text-orange-950 font-semibold'>{element.name}</CCardTitle>
            <CCardSubtitle>Specices: {element.species}</CCardSubtitle>
            <CCardSubtitle>Gender: {element.gender}</CCardSubtitle>
          </CCardBody>
        </CCard>

        ))}
      </div>





    </>
  )
}

export default App
