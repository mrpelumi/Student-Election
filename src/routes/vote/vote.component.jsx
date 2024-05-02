import './vote.styles.scss';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../../components/card/card.component';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ElectionButton from '../../components/election-button/election-button.component';

import Img1 from '../../assets/candidate-1.jpg';
import Img2 from '../../assets/candidate-2.jpg';
import Img3 from '../../assets/candidate-3.jpg';
import Img4 from '../../assets/candidate-4.jpg';
import Img5 from '../../assets/candidate-5.jpg';


const POSITION_TITLE = [{
  title: 'President',
  candidates: [
    {
      name: 'John Doe',
      course:'Computer Science',
      level:'500 level',
      image: Img1
    },
    {
      name: 'Deshawn Marcus',
      course:'Business Administration',
      level: '200 level',
      image: Img2
    },
    {
      name: 'Israel Helio',
      course: 'Mass Communication',
      level: '300 level',
      image: Img3
    },
    {
      name:'Michael Richard',
      course: 'Law',
      level: '300 level',
      image: Img4
    }
  ]
  },
  {
    title: 'Vice President',
    candidates : [
    {
    name:'Kasheem Shettima',
    course: 'Computer Science',
    level: '400 level',
    image: Img4
  },
  {
    name: 'Jovic Halo',
    course: 'Physiology',
    level: '300 level',
    image: Img5
  },
  {
    name:'Cecil Joe',
    course:'Biochemistry',
    level: '400 level',
    image: Img3
  }
  ]}
]

const Links = styled(Link)`
  text-decoration:none;
  color:#fff;
`

const Vote = () => {
  const navigate = useNavigate();
  const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm();

  const onSubmitHandler = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate('/success');
  }

  return (
    <form className='vote-main-container' onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="vote-header-container">
        <div>
          <h2><Links to=''>Elections</Links></h2>
        </div>
      </div>
      {POSITION_TITLE.map((items,idx) => {
        return(
          <Card items={items} key={idx} register={register} errors={errors}/>
        )
      })}
      <ElectionButton isSubmitting={isSubmitting} />

    </form>
  )
}

export default Vote;