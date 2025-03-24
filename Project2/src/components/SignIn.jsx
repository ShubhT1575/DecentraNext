import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ConnectWallet from "./ConnectWallet";
import { UserExist } from "./web3";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import LOGO from "../assets/img/logo.png";
import { useAccount, useChainId } from "wagmi";
import { useDispatch, useSelector } from "react-redux";
import { setWalletDetails } from "../Redux/Slice";


function SignIn() {
  // const address = "0xf0c90d0e550afa5c4d557a7bebfb89b1ea4d97f8";
  const wallet = useSelector((state)=>state.coreCrowd.wallet)
  console.log(wallet)
  const {address }= useAccount()
  const [walletAddress, setWalletAddress] = useState();
  const {  isConnected, status, isDisconnected } = useAccount();
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const chainId = useChainId();
      useAccount();

  const res = new URLSearchParams(window.location.search);
  const ref = res?.get("ref");
  useEffect(() => {
    setWalletAddress(ref ? ref : address);
  }, [ref]);

  const LogIn = async () => {
    try {
      const user = await UserExist(address);
      if (user) {
        navigate("/Dashboard");
         
            dispatch(
              setWalletDetails({
                walletAddress: address,
                chainId,
                isConnected,
                isDisconnected,
                status,
              })
            );
         
      } else {
        toast.error("User Not Exist! Please Register first");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("An error occurred during the login process.");
    }
  };

  return (
    <div className="row authentication authentication-cover-main mx-0">
      <div className="col-xxl-6 col-xl-7">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-xxl-7 col-xl-9 col-lg-6 col-md-6 col-sm-8 col-12">
            <div className="card custom-card my-auto">
              <div className="card-body p-5 signin-body">
                <div className="text-center mb-3">
                  <img src={LOGO} alt="" width={150} />
                </div>
                <p className="h5 mb-2 text-center">Sign In</p>
                <div className="d-flex justify-content-center gap-1">
                  <p className="mb-4 op-7 fw-normal text-center">
                    Welcome back
                  </p>
                  <p className="text-warning">
                    {/* {address
                      ? `${address?.slice(0, 5)}...${address?.slice(-5)}`
                      : ""} */}
                    !
                  </p>
                </div>
                <div className="row gy-3">
                  <div className="col-xl-12">
                    <label className="form-label text-default">
                      Wallet Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="signup-firstname"
                      value={isConnected ? address : " Please Connect Wallet"}
                      style={{ fontSize: "14px" }}
                      readOnly
                    />
                  </div>
                </div>
                <div className="d-grid mt-4">
                  {!isConnected ? (
                    <ConnectWallet className="address-connected-btn" />
                  ) : (
                    <button className="btn btn-primary" onClick={LogIn}>
                      Sign In
                    </button>
                  )}
                </div>
                <div className="text-center">
                  <p className=" mt-3 mb-0">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-primary">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-6 col-xl-5 col-lg-12 d-xl-block d-none px-0">
        <div className="authentication-cover overflow-hidden">
          <div className="authentication-cover-logo">
            <ConnectWallet />
          </div>
          <div className="aunthentication-cover-content d-flex align-items-center justify-content-center">
            <div>
              <div className="d-flex gap-2">
                <h3 className="text-fixed-white mb-1 fw-medium">Welcome </h3>
                <h3 className="text-primary2">
                  {/* {address
                    ? `${address.slice(0, 4)}...${address.slice(-4)}`
                    : ""} */}
                  !
                </h3>
              </div>
              <h6 className="text-fixed-white mb-3 fw-medium">
                Login to Your Account
              </h6>
              <p className="text-fixed-white mb-1 op-6">
                Welcome to the VIN TEC Dashboard. Please log in to securely
                manage your administrative tools and oversee platform
                activities. Your credentials ensure system integrity and
                functionality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
