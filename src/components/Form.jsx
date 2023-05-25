function Form({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <div className='form-control'>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' />
      </div>
      <div className='form-control'>
        <label htmlFor='age'>Age</label>
        <input type='number' id='age' />
      </div>
      <button>Submit</button>
    </form>
  )
}

export default Form
