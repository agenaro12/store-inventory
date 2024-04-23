import './login.css';
import React,{useState} from 'react';

const Login = () => {
    const [user,setUser] = useState('');
    const [pass,setPass] = useState('');
    const [isValid,setValid] = useState(true);

    const onHandleUser = (event) => {
        setUser(event.target.value);
    }

    const onHandlePass = (event) => {
        setPass(event.target.value);
    }

    const onHandleSubmit = (event) => {
        event.preventDefault();
        if (user!=='genaro' || pass!=='genesis'){
            setValid(false);
        }
        else
            setValid(true);
    }

    const errorUser = <p className='login-form__error'>User or Password is invalid, please type the correct credentials</p>;

    const Form = (<form
                        className="login-form"
                        onSubmit={onHandleSubmit}>
        <div>
            <h1 className='login-form__title'>Sign In</h1>
        </div>
        <div>
            <label htmlFor='username'>Username:</label>
            <input type='text'
                    value={user}
                    placeholder="Johnny@email.com" 
                    id="username" 
                    name="username"
                    className='login-form__input'
                    onChange={onHandleUser}
                    required/>
        </div>
        <div>
            <label htmlFor='pass_user'>Password:</label>
            <input type='password'
                    value={pass}
                    placeholder="Password" 
                    id="pass_user" 
                    name="pass_user"
                    className='login-form__input'
                    onChange={onHandlePass}
                    required/>
        </div>
        <div>
            <a href='http://www.google.com' className='login-form__link'>You've forgotten your password, tap here!</a>
        </div>
        {(!isValid)?errorUser:''}
        <button className='login-form__btnLogin'>Login here!!</button>
    </form>);
    return(Form);
}

export default Login;