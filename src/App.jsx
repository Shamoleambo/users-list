import { useState } from 'react'
import Form from './components/Form'
import UsersList from './components/UsersList'
import './App.css'

function App() {
  const [usersList, setUsersList] = useState([])

  function submitHandler(event) {
    event.preventDefault()
    const name = event.target[0].value
    const age = event.target[1].value

    setUsersList((prevState) => prevState.push({ name, age }))
  }
  return (
    <>
      <Form onSubmit={submitHandler} />
      <UsersList users={usersList} />
    </>
  )
}

export default App
