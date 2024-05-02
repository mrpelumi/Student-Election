import './signupForm.styles.scss';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

const schema = z.object({
  username: z.string().min(3, {message: 'Must be 3 characters or more'}),
  email: z.string().email(),
  password: z.string().min(8, {message: 'Must be 8 characters or more'}),
  passwordConfirm: z.string()
}).refine((data) => data.password === data.passwordConfirm, {
  message: 'Password do not match',
  path: ['passwordConfirm']
})

const SignUpForm = () => {
  const navigate = useNavigate();
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: zodResolver(schema)});

  const onSubmitHandler = (data) => {
    navigate('/login');
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
        <label htmlFor="">Email</label>
        <input {...register("email")} type="email" />
      </div>
      <div className='error-container'>
        {errors.email && <div>{errors.email.message}</div>}
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input {...register("password")} type="password" />
      </div>
      <div className='error-container'>
        {errors.password && <div>{errors.password.message}</div>}
      </div>
      <div>
        <label htmlFor="">Confirm Password</label>
        <input {...register("passwordConfirm",)} type="password" />
      </div>
      <div className='error-container'>
        {errors.passwordConfirm && <div>{errors.passwordConfirm.message}</div>}
      </div>
      <button type="submit">Sign Up</button>
    </form>
  )
}

export default SignUpForm;