import { GrAdd } from 'react-icons/gr';
import { HiMinus } from 'react-icons/hi';
import './Styles.css';

const Button = ({ onClick, showAddTask }) => {
  return (
    <button onClick={onClick} className="home-btn">
      {showAddTask ? (
        <HiMinus className="hi-minus" />
      ) : (
        <GrAdd className="gr-add" />
      )}
    </button>
  );
};

export default Button;
