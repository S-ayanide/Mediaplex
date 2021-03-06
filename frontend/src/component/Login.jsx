import React from 'react'
import GoogleLogin from 'react-google-login'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import shareVideo from '../assets/share.mp4'
import logo from '../assets/logo_transparent.png'
import { client } from '../client'

const Login = () => {
  const navigate = useNavigate()
  const responseGoogle = (response) => {
    localStorage.setItem('user', JSON.stringify(response.profileObj))

    const { name, googleId, imageUrl } = response.profileObj

    // Save the user profile data to Sanity
    const doc = {
      _id: googleId,
      _type: 'user',
      userName: name,
      image: imageUrl,
    }

    client.createIfNotExists(doc).then(() => {
      navigate('/', { replace: true })
    })
  }

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          className="w-full h-full object-cover"
          src={shareVideo}
          type="video/mp4"
          control="false"
          autoPlay
          loop
          muted
        />

        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="mb-2 pb-2">
            <img src={logo} alt="logo" width="250px" />
          </div>

          <div className="shadow-2xl">
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
              render={(renderProps) => (
                <button
                  type="button"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                >
                  <FcGoogle className="mr-4" /> Sign in with Google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
