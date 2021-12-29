import React from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logo_transparent.png";

const Login = () => {
	return (
		<div className="flex justify-start items-center flex-col h-screen">
			<div className="relative w-full h-full">
				<video
					className="w-full h-full object-cover"
					src={shareVideo}
					type="video/mp4"
					control={false}
					autoPlay
					loop
					muted
				/>

				<div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay"></div>
			</div>
		</div>
	);
};

export default Login;
