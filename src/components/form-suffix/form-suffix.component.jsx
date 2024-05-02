import './form-suffix.styles.scss';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const FormSuffix = () => {
  const path = useLocation();
  return (
    <div className='login-container'>
      {(path.pathname === '/signup') ? 
      <>
        <span className='login-text'>Do you have an account?</span>
        <span className='login-link'><Link to='/login'>Login</Link></span>
      </>: 
      <>
        <span className='login-text'>Don&apos;t have an account?</span>
        <span className='login-link'><Link to='/signup'>Sign Up</Link></span>
      </>}

    </div>
  )
}

export default FormSuffix;