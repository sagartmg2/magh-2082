import axios from "axios";
import { Link } from "react-router";
import { ToastContainer, toast } from "react-toastify";

export default function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);

    axios
      .post(`${import.meta.env.VITE_API_URL}/signup`, {
        firstName: e.target.first_name.value,
        lastName: e.target.last_name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      })
      .then((ress) => {
        toast("signup success!");
      })
      .catch((err) => {
        toast.error("something went wrong please try gagin later....!");
      });
  };

  return (
    <div className="min-h-screen bg-[#f8f8fb] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-[544px] px-[56px] py-[50px] shadow-[0px_0px_25px_10px_#f8f8fb] flex flex-col items-center"
      >
        {/* Title */}
        <p className="font-['Josefin_Sans',sans-serif] font-bold text-[32px] text-black leading-normal mb-3">
          Sign Up
        </p>

        {/* Subtitle */}
        <p className="font-['Lato',sans-serif] not-italic text-[17px] text-[#9096b2] leading-normal mb-7 text-center">
          Please create an account using the details below.
        </p>

        {/* Full Name Input */}
        <div className="w-[432px] h-[52px] bg-white border border-[#c2c5e1] rounded-[2px] flex items-center px-3 mb-[18px]">
          <input
            required
            type="text"
            name="first_name"
            placeholder="First Name"
            className="w-full h-full outline-none font-['Lato',sans-serif] not-italic text-[16px] text-[#9096b2] placeholder-[#9096b2] bg-transparent"
          />
        </div>
        <div className="w-[432px] h-[52px] bg-white border border-[#c2c5e1] rounded-[2px] flex items-center px-3 mb-[18px]">
          <input
            type="text"
            placeholder="Last Name"
            name="last_name"
            className="w-full h-full outline-none font-['Lato',sans-serif] not-italic text-[16px] text-[#9096b2] placeholder-[#9096b2] bg-transparent"
          />
        </div>

        {/* Email Input */}
        <div className="w-[432px] h-[52px] bg-white border border-[#c2c5e1] rounded-[2px] flex items-center px-3 mb-[18px]">
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full h-full outline-none font-['Lato',sans-serif] not-italic text-[16px] text-[#9096b2] placeholder-[#9096b2] bg-transparent"
          />
        </div>

        {/* Password Input */}
        <div className="w-[432px] h-[52px] bg-white border border-[#c2c5e1] rounded-[2px] flex items-center px-3 mb-[18px]">
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full h-full outline-none font-['Lato',sans-serif] not-italic text-[16px] text-[#9096b2] placeholder-[#9096b2] bg-transparent"
          />
        </div>

        {/* Confirm Password Input */}
        <div className="w-[432px] h-[52px] bg-white border border-[#c2c5e1] rounded-[2px] flex items-center px-3 mb-5">
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full h-full outline-none font-['Lato',sans-serif] not-italic text-[16px] text-[#9096b2] placeholder-[#9096b2] bg-transparent"
          />
        </div>

        {/* Create Account Button */}
        <button className="w-[432px] h-[52px] bg-[#f03e7a] text-white font-bold text-[16px] rounded-[2px] mb-5 hover:opacity-90 transition-opacity">
          Create Account
        </button>

        {/* Footer */}
        <p className="font-['Lato',sans-serif] not-italic text-[17px] text-[#9096b2] leading-normal">
          Already have an Account?{" "}
          <Link to="/login" className="cursor-pointer hover:underline">
            Login
          </Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
}
