import User from './User'

function UsersList({ users }) {
  return (
    <ul>
      {users.map((user, index) => (
        <User key={index} name={user.name} age={user.age} />
      ))}
    </ul>
  )
}

export default UsersList
