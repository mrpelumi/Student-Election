import './ballot.styles.scss';
import Candidate from '../candidate/candidate.component';

const Ballot = ({candidates, title, register}) => {
  return (
    <div className='main-ballot-container'>
      <div className='ballot-form'>
      {candidates.map((candidate, idx) => {
        return (
          <div className='ballot-container' key={idx}>
            <input type="radio" value={candidate.name} {...register(title, {required: "Kindly, select a candidate"})} />
            <Candidate candidate={candidate} />
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Ballot;