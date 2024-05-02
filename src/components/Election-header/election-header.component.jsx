import './election-header.styles.scss';
import Logo from '../../assets/logo.png';

const ElectionHeader = () => {
  return (
    <div className='header-container'>
      <div className='logo-container'>
        <img src={Logo} alt="The Site" />
        <span>Student Elections</span>
      </div>
      <div className='subtitle-container'>
        <span>Democracy must be strengthened</span>
      </div>
    </div>
  )
}

export default ElectionHeader;