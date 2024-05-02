import './card.styles.scss';
import Ballot from '../ballot/ballot.component';
import { ErrorMessage } from "@hookform/error-message"
import Alert from '@mui/material/Alert';

const Card = ({items, register, errors}) => {
  const {title, candidates} = items;
  return (
    <div className='card-container'>
      <ErrorMessage errors={errors} name={title} render={({message}) => <Alert severity="error">
       {message}
      </Alert>} />
      <div className='card-header-container'>
        <h3>Vote for {title}</h3>
        <span>Select only one candidate</span>
      </div>
      <Ballot candidates={candidates} title={title} register={register} />
    </div>
  )
}

export default Card;