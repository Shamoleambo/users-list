import Form from './components/Form'
import UsersList from './components/UsersList'
import './App.css'

function App() {
  function submitHandler(event) {
    event.preventDefault()
    console.log('Test')
  }
  return (
    <>
      <Form onSubmit={submitHandler} />
      <UsersList />
    </>
  )
}

export default App
