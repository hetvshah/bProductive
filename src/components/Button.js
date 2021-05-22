import { GrAdd } from 'react-icons/gr';
import './Styles.css';

const Button = () => {
  return (
    <button
      //   onClick={onClick}
      className="btn"
    >
      <GrAdd className="gr-add" />
    </button>
  );
};

export default Button;
