import './signup.styles.scss';
import SignUpForm from '../../components/signupForm/signupForm.component';
import ElectionHeader from '../../components/Election-header/election-header.component';
import FormHeader from '../../components/form-header/form-header.component';
import FormSuffix from '../../components/form-suffix/form-suffix.component';

const SignUp = () => {
  return (
    <div className='main-container'>
      <div className='section-header-container'>
        <ElectionHeader />
      </div>
      <div className='section-form-container'>
        <FormHeader />
        <SignUpForm />
        <FormSuffix />
      </div>
    </div>
  )
}

export default SignUp;