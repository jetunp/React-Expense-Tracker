import {useState} from 'react'

const AddTransaction = () => {
  
  // These are the component level state , i.e, the data
  // coming into the form, we can use the hook useState
  // useState is a React Hook that lets you add a state variable to your component.
  const[text, setText] = useState('')
  const[amount, setAmount] = useState(0)
  return (
    <>
        <h3>Add new transaction</h3>
        <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            [Expense(-), Income(+)]</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
        </form>
    </>
  )
}

export default AddTransaction