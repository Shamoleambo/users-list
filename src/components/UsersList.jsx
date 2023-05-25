import User from './User'
import classes from './UsersList.module.css'

function UsersList({ users }) {
  return users.length ? (
    <ul className={classes.ul}>
      {users.map((user, index) => (
        <User key={index} name={user.name} age={user.age} />
      ))}
    </ul>
  ) : null
}

export default UsersList
