import React,{useState} from 'react';
import Card from './Card';
import classes from './AddUser.module.css'
import Button from './Button';
import ErrorModel from './ErrorModel'

const AddUser = (props) =>{

    const [state, setstate] = useState('');
    const [age, setage] = useState('');
    const [error, seterror] = useState();



    const adduserHandler=(event)=>{
        event.preventDefault();
        if(state.trim().length ===0 || age.trim().length ===0){
            seterror({
                title: 'invalid input',
                message: "plz fill the input"
            });
            return;
        }

        if(+age<1 ){
            seterror({
                title: 'invalid age',
                message: "plz enter valid age(> 0)"
            });

            return;
        }

        props.onAddUser(state,age);
        setage('');
        setstate('');
    };                                                                                 

        const changeusername =(event) =>{
            setstate(event.target.value);
        };

        const changeage =(event) =>{
            setage(event.target.value);
        };
        const errorhandler=()=>{
            seterror(null);
        }
    

    return (
        <div>
       {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorhandler}/>}
 <Card className={classes.input}>
     <form onSubmit={adduserHandler}>
        <label htmlFor='username'>UserName</label>
        <input id='username' type='text' value={state} onChange={changeusername}/>

        <label htmlFor='age'>Age</label>
        <input id='age' type='number' value={age} onChange={changeage}/>

        <Button type='submit'>Add Use</Button>
      </form>
    
  </Card>
   </div>
    );
};
export default AddUser;