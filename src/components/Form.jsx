function Form() {
  return (
    <form>
      <div className='form-control'>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' />
      </div>
      <div className='form-control'>
        <label htmlFor='age'>Age</label>
        <input type='text' id='age' />
      </div>
    </form>
  )
}

export default Form
