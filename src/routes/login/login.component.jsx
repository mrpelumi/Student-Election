import './login.styles.scss';
import FormSuffix from '../../components/form-suffix/form-suffix.component';
import FormHeader from '../../components/form-header/form-header.component';
import ElectionHeader from '../../components/Election-header/election-header.component';
import LoginForm from '../../components/loginForm/loginForm.component';

const Login = () => {
  return (
    <div className='main-container'>
      <div className='section-header-container'>
        <ElectionHeader />
      </div>
      <div className='section-form-container'>
        <FormHeader />
        <LoginForm />
        <FormSuffix />
      </div>
    </div>
  )
}

export default Login;