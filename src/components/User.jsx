import classes from './User.module.css'

function User({ name, age }) {
  return (
    <li className={classes.li}>
      <h1>{name}</h1>
      <p>{age}</p>
    </li>
  )
}

export default User
