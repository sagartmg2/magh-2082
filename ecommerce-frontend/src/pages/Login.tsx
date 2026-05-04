import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { login } from "../redux/features/userSlice";
import { useDispatch } from "react-redux";

export default function Login({ setUser }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);

    axios
      .post("http://localhost:4000/api/login", {
        email: e.target.email.value,
        password: e.target.password.value,
      })
      .then((res) => {
        toast("login success!");
        console.log(res.data);
        // setUser(res.data.user);
        // navigate("/");
        dispatch(login(res.data.user));
      })
      .catch((err) => {
        console.log(err);

        if (err.response.status == 401) {
          toast.error("Invalid Credentails");
        } else if (err.response.status == 400) {
          toast.error(err.response.data.msg);
        } else {
          toast.error(err.response.data.msg);
        }
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
          Login
        </p>

        {/* Subtitle */}
        <p className="font-['Lato',sans-serif] not-italic text-[17px] text-[#9096b2] leading-normal mb-7 text-center">
          Please login using account detail bellow.
        </p>

        {/* Email Input */}
        <div className="w-[432px] h-[52px] bg-white border border-[#c2c5e1] rounded-[2px] flex items-center px-3 mb-[23px]">
          <input
            defaultValue={"buyer@gmail.com"}
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full h-full outline-none font-['Lato',sans-serif] not-italic text-[16px] text-[#9096b2] placeholder-[#9096b2] bg-transparent"
          />
        </div>

        {/* Password Input */}
        <div className="w-[432px] h-[52px] bg-white border border-[#c2c5e1] rounded-[2px] flex items-center px-3 mb-4">
          <input
            defaultValue={"password"}
            name="password"
            type="password"
            placeholder="Password"
            className="w-full h-full outline-none font-['Lato',sans-serif] not-italic text-[16px] text-[#9096b2] placeholder-[#9096b2] bg-transparent"
          />
        </div>

        {/* Forgot Password */}
        <div className="w-[432px] mb-5">
          <p className="font-['Lato',sans-serif] not-italic text-[17px] text-[#9096b2] leading-normal cursor-pointer hover:underline">
            Forgot your password?
          </p>
        </div>

        {/* Sign In Button */}
        <button className="w-[432px] h-[52px] bg-[#f03e7a] text-white font-bold text-[16px] rounded-[2px] mb-5 hover:opacity-90 transition-opacity">
          Sign In
        </button>

        {/* Footer */}
        <p className="font-['Lato',sans-serif] not-italic text-[17px] text-[#9096b2] leading-normal">
          Don't have an Account?
          <Link to="/signup" className="cursor-pointer hover:underline">
            Create account
          </Link>
        </p>
      </form>
    </div>
  );
}
