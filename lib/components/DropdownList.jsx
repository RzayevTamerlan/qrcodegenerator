const DropdownList = ({items, handler}) => {
  return (
    <ul className='w-full rounded-[10px] overflow-hidden'>
      {items.map(item => (
        <li className='cursor-pointer font-medium bg-white p-2 transition-all duration-300 hover:bg-gray-200'
            key={item.key} onClick={() => handler(item.prop)}>
          {item.label}
        </li>
      ))}
    </ul>
  );
};

export default DropdownList;