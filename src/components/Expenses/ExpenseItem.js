import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';


/*This component is a collective of all the ExpenseItems from "ExpenseDate component* , targets the css file names such as
description and price to give them form*/ 
function ExpenseItem(props) {
     return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                    <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </Card>
    </li>
    );
   }

export default ExpenseItem;