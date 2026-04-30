import React from "react";

export default function SignUp() {
  return (
    <div className="min-h-screen bg-[#f8f8fb] flex items-center justify-center">
      <div className="bg-white w-[544px] px-[56px] py-[50px] shadow-[0px_0px_25px_10px_#f8f8fb] flex flex-col items-center">
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
            type="text"
            placeholder="Full Name"
            className="w-full h-full outline-none font-['Lato',sans-serif] not-italic text-[16px] text-[#9096b2] placeholder-[#9096b2] bg-transparent"
          />
        </div>

        {/* Email Input */}
        <div className="w-[432px] h-[52px] bg-white border border-[#c2c5e1] rounded-[2px] flex items-center px-3 mb-[18px]">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full h-full outline-none font-['Lato',sans-serif] not-italic text-[16px] text-[#9096b2] placeholder-[#9096b2] bg-transparent"
          />
        </div>

        {/* Password Input */}
        <div className="w-[432px] h-[52px] bg-white border border-[#c2c5e1] rounded-[2px] flex items-center px-3 mb-[18px]">
          <input
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
          <span className="cursor-pointer hover:underline">Login</span>
        </p>
      </div>
    </div>
  );
}
