const PrimaryInput = ({
  type,
  placeholder,
  name,
  required,
  onChange,
  value,
  focus,
}) => {
  return (
    <>
      <input
        type={type}
        className="min-w-[250px] bg-bg  border-[2px] outline-none text-black border-darkGrey w-[100%] max-w-[400px] py-[5px] px-[15px] rounded-2xl mb-[3px]"
        placeholder={placeholder}
        name={name}
        value={value}
        onFocus={(e) => focus && (e.target.type = "date")}
        onBlur={(e) => focus && (e.target.type = "text")}
        onChange={onChange}
        required
      />
    </>
  );
};

PrimaryInput.defaultProps = {
  focus: false,
};
export default PrimaryInput;
