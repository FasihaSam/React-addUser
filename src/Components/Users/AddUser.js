import Card from "../UI/Card";
import style from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import { useState } from "react";

const AddUser = (props) => {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const usernameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };
    
    const addUserHandler =(event) => {
        event.preventDefault();
        if (enteredUserName.trim().length ===0 || enteredAge.trim().length===0){
            setError({title: "Invalid input",
                        message: "Please enter a valid input(non-empty values)"});
            return;
        }
        if (+enteredAge < 1) //by adding +, we onvert string value to number
         {
            setError({title: "Invalid age",
                        message: "Please enter a valid age(> 0)"}); 
            return;
        }
        props.onAddUser(enteredUserName, enteredAge)
        setEnteredUserName('');
        setEnteredAge('');
    };
    const errorButtonHandler = () => {
        setError(null);
    };
    
    return (
        <div>
            { error && <ErrorModal title = {error.title} message = {error.message} 
            onConfirm={errorButtonHandler}/>}
        <Card class={style.input}>
            <form onSubmit={addUserHandler}> 
                <label htmlFor="username">Username</label>
                <input type="text" id="username" 
                onChange={usernameChangeHandler} value={enteredUserName}/>
            
                <label htmlFor="age">Age(Years)</label>
                <input type="number" id="age" 
                onChange={ageChangeHandler} value={enteredAge}/>                    

                <Button type="submit">Add User</Button>
                
            </form>
        </Card>
        </div>
    )
    

}
export default AddUser;