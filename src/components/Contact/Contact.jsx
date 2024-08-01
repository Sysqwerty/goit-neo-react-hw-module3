import { FaUser, FaPhone } from 'react-icons/fa6';
import css from './Contact.module.css';

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={css.contact}>
      <div className={css.contactData}>
        <div>
          <FaUser /> {name}
        </div>
        <div>
          <FaPhone /> {number}
        </div>
      </div>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};
export default Contact;
