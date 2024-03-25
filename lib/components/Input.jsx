const Input = ({register, name, type, placeholder, errors, label}) => {
  return (
    <div className='flex flex-col gap-3'>
      <label className='text-white cursor-pointer' htmlFor={name}>{label}</label>
      <input {...register(name)} name={name} id={name} type={type} placeholder={placeholder}
             className='bg-gray-800 text-white p-2 rounded-md'/>
      {errors[name] && <p className='text-red-500 text-3xs font-semibold'>{errors[name].message}</p>}
    </div>
  );
};

export default Input;