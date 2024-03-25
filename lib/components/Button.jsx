const Button = ({label, isLight, type, onClick, text}) => {
  return (
    <button type={type} onClick={onClick} aria-label={label}
            className={`w-full sm:w-auto ${isLight ? 'bg-blue-500' : 'bg-blue-700'} text-white p-2 rounded-md`}>{text}
    </button>
  );
};

export default Button;