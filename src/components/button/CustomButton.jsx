import '../../components/button/RetroButton.css';

export default function CustomButton({ children, ...attributes }) {
    return (
      <button type="submit" {...attributes} className='retroButton blue'>
        {children}
      </button>
    );
  }