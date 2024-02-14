import { useNavigation } from "react-router-dom";

const SecondaryButton = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <>
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-[white] text-[black] font-medium px-[50px] py-[7px] rounded-3xl"
      >
        {isSubmitting ? "Submitting" : text}
      </button>
    </>
  );
};
export default SecondaryButton;
