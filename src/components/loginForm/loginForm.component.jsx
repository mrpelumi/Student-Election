import './loginForm.styles.scss';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

const schema = z.object({
  username: z.string().min(3, {message: 'Must be 3 characters or more'}),
  password: z.string().min(8, {message: 'Must be 8 characters or more'}),
})


const LoginForm = () => {
  const navigate = useNavigate();
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: zodResolver(schema)});

  const onSubmitHandler = (data) => {
    navigate('/vote');
  }
  return (
    <form className='form-container' onSubmit={handleSubmit(onSubmitHandler)}>
      <div>
        <label htmlFor="">Username</label>
        <input {...register("username", {
          required: "Username is required",
          maxLength: 20
        } )} type="text" />
      </div>
      <div className='error-container'>
        {errors.username && <div>
          {errors.username.message}  
        </div>}
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input {...register("password")} type="password" />
      </div>
      <div className='error-container'>
        {errors.password && <div>{errors.password.message}</div>}
      </div>
      
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm;