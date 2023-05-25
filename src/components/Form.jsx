import classes from './Form.module.css'

function Form({ onSubmit, nameRef, ageRef }) {
  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <div className={classes.formControl}>
        <label htmlFor='name'>Name</label>
        <input ref={nameRef} type='text' id='name' />
      </div>
      <div className={classes.formControl}>
        <label htmlFor='age'>Age</label>
        <input ref={ageRef} type='number' id='age' />
      </div>
      <button>Submit</button>
    </form>
  )
}

export default Form
