import './success-page.styles.scss';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Alert } from '@mui/material';


const LogOutLink = styled(Link)`
  text-decoration:none;
  color:'#22353a';
  font-size:1.5rem;

  &:hover{
    text-decoration:underline;
    text-underline-offset:0.4rem;
  }
`

const SuccessPage = () => {
  return(
    <div className='success-main-container'>
      <div className="success-header-container">
        <div>
          <h2>Elections</h2>
        </div>
      </div>
      <Alert severity='success'>Your vote has been submitted successfully!</Alert>
      <LogOutLink to='/login'>Log Out</LogOutLink>
    </div>
  )
}

export default SuccessPage;