import { useNavigation } from "react-router-dom";

const SecondaryButton = ({ text, onClick }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <>
      <button
        type="submit"
        disabled={isSubmitting}
        className=" text-white border-[2px] tracking-widest text-[20px] border-darkGrey font-medium px-[15px] py-[7px] rounded-3xl w-[150px]"
        onClick={onClick}
      >
        {isSubmitting ? "Submitting" : text}
      </button>
    </>
  );
};
export default SecondaryButton;
