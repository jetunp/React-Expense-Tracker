const Transaction = ({transaction}) => {
    const amountSign = transaction.amount > 0 ? '+' : '-';
    return (
        <>
        <li className={transaction.amount > 0 ? "plus" : "minus"}>
            {transaction.text}<span>{amountSign}${Math.abs(transaction.amount)}</span><button className="delete-btn">x</button>
        </li> 
        </>
    )
}

export default Transaction