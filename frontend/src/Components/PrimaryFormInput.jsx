const PrimaryInput = ({ type, defaultValue, placeholder, name, required }) => {
  return (
    <>
      <input
        type={type}
        className="border-b-[2px] outline-none border-[#ddd] w-[100%] max-w-[400px] p-[5px] my-[10px]"
        defaultValue={defaultValue}
        placeholder={placeholder}
        name={name}
        required
      />
    </>
  );
};
export default PrimaryInput;
