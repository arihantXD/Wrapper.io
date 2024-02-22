const PrimaryInput = ({
  type,
  placeholder,
  name,
  required,
  onChange,
  value,
}) => {
  return (
    <>
      <input
        type={type}
        className="border-b-[2px] outline-none border-[#ddd] w-[100%] max-w-[400px] p-[5px] my-[10px]"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </>
  );
};
export default PrimaryInput;
