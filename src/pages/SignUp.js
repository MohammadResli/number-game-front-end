import SignUpForm from "../components/SignUpForm";
import { redirect } from 'react-router-dom';


const SignUpPage = () => {
    return (
        <SignUpForm/>
    );
}

export default SignUpPage;

export const SignUpAction  = async ({request}) => {
    const data = await request.formData();
    const signUpData = {
        user_name: data.get('user_name'),
        password: data.get('password'),
        email: data.get('email'),
      };
    console.log(JSON.stringify(signUpData));

    const response = await fetch('/api/user/create/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(signUpData),
  });
  if(!response.ok){
    //...   
  }
  return redirect('/login');
}