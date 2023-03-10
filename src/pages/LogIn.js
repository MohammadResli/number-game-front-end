import LogInForm from "../components/LogInForm";
import { redirect } from 'react-router-dom';


const LoginPage = () => {
    return (
        <LogInForm/>
        );
}

export default LoginPage;

export const LoginAction  = async ({request}) => {
    const data = await request.formData();
    const loginData = {
        user: data.get('user_name'),
        password: data.get('password'),
      };
    const response = await fetch('/api/user/token/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
  });
  const resData = await response.json();
  const token = resData.token;
  localStorage.setItem('user', data.get('user_name'));
  localStorage.setItem('token',token);
  return redirect('/');
}