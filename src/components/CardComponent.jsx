import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';


const CardComponent = ({ icon, title, content }) => {
  return (
   <div className='col-lg-6 col-zzl-4 mb-5'>
    <Card className='bg-light border-0 h-100'>
      <Card.Body className='text-center p-4 p-lg-5 pt-0 pt-lg-0'>
      <div style={{marginTop:"-20px",fontSize:"2rem"}} className='d-inline-block bg-primary feature text-white rounded-3 p-2 mb-4 bg-gradient'>{icon}</div>
        <h2>{title}</h2>
        <p>{content}</p>
      </Card.Body>
    </Card>
   </div>
  );
};

CardComponent.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default CardComponent;