import { useNavigation } from "react-router-dom";

const Button = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <>
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-primary text-[white] font-medium px-[50px] py-[7px] rounded-3xl"
      >
        {isSubmitting ? "Submitting" : text}
      </button>
    </>
  );
};
export default Button;
