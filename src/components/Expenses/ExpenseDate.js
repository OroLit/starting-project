/*Importing the styles from your css stylesheet*/
import './ExpenseDate.css';

/*Creating the component thru functions and using the props 
arguement to set the variables data to be transfered*/
function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day:'2-digit'});
    const year = props.date.getFullYear();

    /*You return the css styles, targeted by their class names,
    wrapped around the data set to give it a "look" */
    return (  
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    );
}

/*Once done you then export the component to be imported elsewhere*/
export default ExpenseDate;