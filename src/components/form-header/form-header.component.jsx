import './form-header.styles.scss';
import {useLocation} from 'react-router-dom';
import SignUpLogo from '../../assets/sign-up.png';

const FormHeader = () => {
  const path = useLocation();
  return (
    <>
      {(path.pathname === '/signup') ? (
      <>
        <div className='signup-logo-container'>
          <img src={SignUpLogo} alt="This is a sign up logo" />
          <span>Sign Up</span>
        </div>
        <div className='signup-subtitle-container'>
          <span>Welcome, kindly enter your details</span>
        </div>
      </>) : (
      <>
        <div className='signup-logo-container'>
          <img src={SignUpLogo} alt="This is a login logo" />
          <span>Log In</span>
        </div>
        <div className='signup-subtitle-container'>
          <span>Kindly, enter your login details</span>
        </div>
      </>
    )}
    </>
  )
}

export default FormHeader;