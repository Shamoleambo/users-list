import { useState, useRef } from 'react'
import Form from './components/Form'
import UsersList from './components/UsersList'
import './App.css'

function App() {
  const [usersList, setUsersList] = useState([])
  const nameInputRef = useRef()
  const ageInputRef = useRef()

  function submitHandler(event) {
    event.preventDefault()
    const name = nameInputRef.current.value
    const age = ageInputRef.current.value

    setUsersList((prevState) => [...prevState, { name, age }])
  }
  return (
    <>
      <Form
        onSubmit={submitHandler}
        nameRef={nameInputRef}
        ageRef={ageInputRef}
      />
      <UsersList users={usersList} />
    </>
  )
}

export default App
