import { Form } from 'react-router-dom';
import classes from './SignUpForm.module.css';

const SignUpForm = () => {
    return (
        <div className={classes.box}>
            <Form method="post" className={classes.form}>
            <h1 className={classes.form__h1}>Sign Up</h1>
            <p className={classes.form_group}>
          <label htmlFor="user_name" className={classes.form__label}>User Name</label>
          <input id="user_name" type="text" name="user_name" required />
        </p>
        <p className={classes.form_group}>
          <label htmlFor="email" className={classes.form__label}>Email</label>
          <input id="email" type="email" name="email" required />
        </p>

        <p className={classes.form_group}>
          <label htmlFor="password" className={classes.form__label}>Password</label>
          <input id="password" type="password" name="password" autoComplete='off' required />
        </p>
        <div className={classes.actions}>
          <button>Register</button>
        </div>
            </Form>
        </div>
    );
};

export default SignUpForm;