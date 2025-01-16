import { useState } from 'react'
import { Form } from './components/Form'
import { Preview } from './components/Preview'
import './styles/app.css'

function App() {
  const [info, setInfo] = useState({
    general: {
      firstName: 'Audrey',
      lastName: 'Hepburn',
      email: 'audreyhep@email.com',
      contact: 'xxxxxxxxxxx'
    },
    education: {
      university: 'Harvard University',
      degree: 'Computer Science',
      location: 'Toronto, Canada',
      fromDate: '1/2025',
      toDate: '08/2025'
    },
    work: {
      position: 'Software Engineer',
      company: 'Google Inc.',
      location: 'Toronto, Canada',
      fromDate: '1/2025',
      toDate: '08/2025',
      description: 'Decription of your position and responsibilities'
    }
  })

  return (
    <main>
      <Form info={info} setInfo={setInfo} />
      <Preview info={info} />
    </main>
  )
}

export default App
