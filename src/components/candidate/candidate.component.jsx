import './candidate.styles.scss';

const Candidate = ({candidate}) => {
  const {name, course, level, image} = candidate;
  
  return (
    <div className='candidate-container'>
      <img src={image} alt="" />
      <div className='candidate-detail-container'>
        <span>{name}</span>
        <span>{course}</span>
        <span>{level}</span>
      </div>
    </div>
  )
}

export default Candidate;