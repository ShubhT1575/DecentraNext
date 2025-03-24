import React from "react";
import "./css/style.css";
// import "./css/slick.css";
import "./css/responsive.css";
import "./css/default.css";
import "./css/Button.css";
import "./css/Newbutton.css";

import trans from "../../assets/img/security.png";
import effe from "../../assets/img/efficacy.png";
import creator from "../../assets/img/creator.png";
import investor from "../../assets/img/crowdfunding.png";
import dcent from "../../assets/img/blockchain1.png";
import blockchain from "../../assets/img/blockchain.png";
import Header from "./Header";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />
      {/* <!--==============================Hero Area==============================--> */}
      <div className="hero-wrapper hero-1 ">
        <div className="bg-1 bg-img "></div>
        <div className="ripple-shape">
          <span className="ripple-1"></span>
          <span className="ripple-2"></span>
          <span className="ripple-3"></span>
          <span className="ripple-4"></span>
          <span className="ripple-5"></span>
        </div>
        <div className="container">
          <div className="hero-style1">
            <div className="row flex-row-reverse">

              <div className="col-lg-12">
                <h1 className="hero-title text-center animated-text">
                  <span className="word">V</span>
                  <span className="word">I</span>
                  <span className="word">N</span>
                  <span className="word"> </span>
                  <span className="word">T</span>
                  <span className="word">E</span>
                  <span className="word">C</span>
                  <span className="word">H</span>


                </h1>
                <div className="row justify-content-center">
                  <div className=" col-lg-8 ">
                    <div
                      className="pt-3 text-light text-center"
                      style={{ textAlign: "justify" }}
                    >
                      JOIN THE REVOLUTION IN CROWDFUNDING TODAY. WHETHER YOU'RE
                      LOOKING TO RAISE CAPITAL OR INVEST IN GROUNDBREAKING
                      PROJECTS, THE WORLD OF CRYPTOCURRENCY CROWDFUNDING IS
                      WAITING FOR YOU!{" "}
                    </div>
                  </div>
                </div>
                <div className="hero-button mt-5">
                  {/* <a href="/learnmore" >
                    Learn More
                  </a>
                  <a href="/signup" className="mx-4">
                    Register
                  </a> */}
                  <Link to={'/learnmore'} className="">
                    <button className="buttons">
                      <span class="boxx">
                        Learn More
                        <div class="star-1">
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>bitcoin</title><path d="M14.24 10.56C13.93 11.8 12 11.17 11.4 11L11.95 8.82C12.57 9 14.56 9.26 14.24 10.56M11.13 12.12L10.53 14.53C11.27 14.72 13.56 15.45 13.9 14.09C14.26 12.67 11.87 12.3 11.13 12.12M21.7 14.42C20.36 19.78 14.94 23.04 9.58 21.7C4.22 20.36 .963 14.94 2.3 9.58C3.64 4.22 9.06 .964 14.42 2.3C19.77 3.64 23.03 9.06 21.7 14.42M14.21 8.05L14.66 6.25L13.56 6L13.12 7.73C12.83 7.66 12.54 7.59 12.24 7.53L12.68 5.76L11.59 5.5L11.14 7.29C10.9 7.23 10.66 7.18 10.44 7.12L10.44 7.12L8.93 6.74L8.63 7.91C8.63 7.91 9.45 8.1 9.43 8.11C9.88 8.22 9.96 8.5 9.94 8.75L8.71 13.68C8.66 13.82 8.5 14 8.21 13.95C8.22 13.96 7.41 13.75 7.41 13.75L6.87 15L8.29 15.36C8.56 15.43 8.82 15.5 9.08 15.56L8.62 17.38L9.72 17.66L10.17 15.85C10.47 15.93 10.76 16 11.04 16.08L10.59 17.87L11.69 18.15L12.15 16.33C14 16.68 15.42 16.54 16 14.85C16.5 13.5 16 12.7 15 12.19C15.72 12 16.26 11.55 16.41 10.57C16.61 9.24 15.59 8.53 14.21 8.05Z"></path></svg>


                        </div>
                        <div class="star-2">
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>bitcoin</title><path d="M14.24 10.56C13.93 11.8 12 11.17 11.4 11L11.95 8.82C12.57 9 14.56 9.26 14.24 10.56M11.13 12.12L10.53 14.53C11.27 14.72 13.56 15.45 13.9 14.09C14.26 12.67 11.87 12.3 11.13 12.12M21.7 14.42C20.36 19.78 14.94 23.04 9.58 21.7C4.22 20.36 .963 14.94 2.3 9.58C3.64 4.22 9.06 .964 14.42 2.3C19.77 3.64 23.03 9.06 21.7 14.42M14.21 8.05L14.66 6.25L13.56 6L13.12 7.73C12.83 7.66 12.54 7.59 12.24 7.53L12.68 5.76L11.59 5.5L11.14 7.29C10.9 7.23 10.66 7.18 10.44 7.12L10.44 7.12L8.93 6.74L8.63 7.91C8.63 7.91 9.45 8.1 9.43 8.11C9.88 8.22 9.96 8.5 9.94 8.75L8.71 13.68C8.66 13.82 8.5 14 8.21 13.95C8.22 13.96 7.41 13.75 7.41 13.75L6.87 15L8.29 15.36C8.56 15.43 8.82 15.5 9.08 15.56L8.62 17.38L9.72 17.66L10.17 15.85C10.47 15.93 10.76 16 11.04 16.08L10.59 17.87L11.69 18.15L12.15 16.33C14 16.68 15.42 16.54 16 14.85C16.5 13.5 16 12.7 15 12.19C15.72 12 16.26 11.55 16.41 10.57C16.61 9.24 15.59 8.53 14.21 8.05Z"></path></svg>

                        </div>
                        <div class="star-3">
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>bitcoin</title><path d="M14.24 10.56C13.93 11.8 12 11.17 11.4 11L11.95 8.82C12.57 9 14.56 9.26 14.24 10.56M11.13 12.12L10.53 14.53C11.27 14.72 13.56 15.45 13.9 14.09C14.26 12.67 11.87 12.3 11.13 12.12M21.7 14.42C20.36 19.78 14.94 23.04 9.58 21.7C4.22 20.36 .963 14.94 2.3 9.58C3.64 4.22 9.06 .964 14.42 2.3C19.77 3.64 23.03 9.06 21.7 14.42M14.21 8.05L14.66 6.25L13.56 6L13.12 7.73C12.83 7.66 12.54 7.59 12.24 7.53L12.68 5.76L11.59 5.5L11.14 7.29C10.9 7.23 10.66 7.18 10.44 7.12L10.44 7.12L8.93 6.74L8.63 7.91C8.63 7.91 9.45 8.1 9.43 8.11C9.88 8.22 9.96 8.5 9.94 8.75L8.71 13.68C8.66 13.82 8.5 14 8.21 13.95C8.22 13.96 7.41 13.75 7.41 13.75L6.87 15L8.29 15.36C8.56 15.43 8.82 15.5 9.08 15.56L8.62 17.38L9.72 17.66L10.17 15.85C10.47 15.93 10.76 16 11.04 16.08L10.59 17.87L11.69 18.15L12.15 16.33C14 16.68 15.42 16.54 16 14.85C16.5 13.5 16 12.7 15 12.19C15.72 12 16.26 11.55 16.41 10.57C16.61 9.24 15.59 8.53 14.21 8.05Z"></path></svg>

                        </div>
                        <div class="star-4">
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>bitcoin</title><path d="M14.24 10.56C13.93 11.8 12 11.17 11.4 11L11.95 8.82C12.57 9 14.56 9.26 14.24 10.56M11.13 12.12L10.53 14.53C11.27 14.72 13.56 15.45 13.9 14.09C14.26 12.67 11.87 12.3 11.13 12.12M21.7 14.42C20.36 19.78 14.94 23.04 9.58 21.7C4.22 20.36 .963 14.94 2.3 9.58C3.64 4.22 9.06 .964 14.42 2.3C19.77 3.64 23.03 9.06 21.7 14.42M14.21 8.05L14.66 6.25L13.56 6L13.12 7.73C12.83 7.66 12.54 7.59 12.24 7.53L12.68 5.76L11.59 5.5L11.14 7.29C10.9 7.23 10.66 7.18 10.44 7.12L10.44 7.12L8.93 6.74L8.63 7.91C8.63 7.91 9.45 8.1 9.43 8.11C9.88 8.22 9.96 8.5 9.94 8.75L8.71 13.68C8.66 13.82 8.5 14 8.21 13.95C8.22 13.96 7.41 13.75 7.41 13.75L6.87 15L8.29 15.36C8.56 15.43 8.82 15.5 9.08 15.56L8.62 17.38L9.72 17.66L10.17 15.85C10.47 15.93 10.76 16 11.04 16.08L10.59 17.87L11.69 18.15L12.15 16.33C14 16.68 15.42 16.54 16 14.85C16.5 13.5 16 12.7 15 12.19C15.72 12 16.26 11.55 16.41 10.57C16.61 9.24 15.59 8.53 14.21 8.05Z"></path></svg>

                        </div>
                        <div class="star-5">
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>bitcoin</title><path d="M14.24 10.56C13.93 11.8 12 11.17 11.4 11L11.95 8.82C12.57 9 14.56 9.26 14.24 10.56M11.13 12.12L10.53 14.53C11.27 14.72 13.56 15.45 13.9 14.09C14.26 12.67 11.87 12.3 11.13 12.12M21.7 14.42C20.36 19.78 14.94 23.04 9.58 21.7C4.22 20.36 .963 14.94 2.3 9.58C3.64 4.22 9.06 .964 14.42 2.3C19.77 3.64 23.03 9.06 21.7 14.42M14.21 8.05L14.66 6.25L13.56 6L13.12 7.73C12.83 7.66 12.54 7.59 12.24 7.53L12.68 5.76L11.59 5.5L11.14 7.29C10.9 7.23 10.66 7.18 10.44 7.12L10.44 7.12L8.93 6.74L8.63 7.91C8.63 7.91 9.45 8.1 9.43 8.11C9.88 8.22 9.96 8.5 9.94 8.75L8.71 13.68C8.66 13.82 8.5 14 8.21 13.95C8.22 13.96 7.41 13.75 7.41 13.75L6.87 15L8.29 15.36C8.56 15.43 8.82 15.5 9.08 15.56L8.62 17.38L9.72 17.66L10.17 15.85C10.47 15.93 10.76 16 11.04 16.08L10.59 17.87L11.69 18.15L12.15 16.33C14 16.68 15.42 16.54 16 14.85C16.5 13.5 16 12.7 15 12.19C15.72 12 16.26 11.55 16.41 10.57C16.61 9.24 15.59 8.53 14.21 8.05Z"></path></svg>

                        </div>
                        <div class="star-6">
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>bitcoin</title><path d="M14.24 10.56C13.93 11.8 12 11.17 11.4 11L11.95 8.82C12.57 9 14.56 9.26 14.24 10.56M11.13 12.12L10.53 14.53C11.27 14.72 13.56 15.45 13.9 14.09C14.26 12.67 11.87 12.3 11.13 12.12M21.7 14.42C20.36 19.78 14.94 23.04 9.58 21.7C4.22 20.36 .963 14.94 2.3 9.58C3.64 4.22 9.06 .964 14.42 2.3C19.77 3.64 23.03 9.06 21.7 14.42M14.21 8.05L14.66 6.25L13.56 6L13.12 7.73C12.83 7.66 12.54 7.59 12.24 7.53L12.68 5.76L11.59 5.5L11.14 7.29C10.9 7.23 10.66 7.18 10.44 7.12L10.44 7.12L8.93 6.74L8.63 7.91C8.63 7.91 9.45 8.1 9.43 8.11C9.88 8.22 9.96 8.5 9.94 8.75L8.71 13.68C8.66 13.82 8.5 14 8.21 13.95C8.22 13.96 7.41 13.75 7.41 13.75L6.87 15L8.29 15.36C8.56 15.43 8.82 15.5 9.08 15.56L8.62 17.38L9.72 17.66L10.17 15.85C10.47 15.93 10.76 16 11.04 16.08L10.59 17.87L11.69 18.15L12.15 16.33C14 16.68 15.42 16.54 16 14.85C16.5 13.5 16 12.7 15 12.19C15.72 12 16.26 11.55 16.41 10.57C16.61 9.24 15.59 8.53 14.21 8.05Z"></path></svg>

                        </div>
                      </span>
                    </button>
                  </Link>
                  <Link to={'/signup'}>
                    <button className="buttons">
                      <span class="boxx">
                        Register
                        <div class="star-1">
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>bitcoin</title><path d="M14.24 10.56C13.93 11.8 12 11.17 11.4 11L11.95 8.82C12.57 9 14.56 9.26 14.24 10.56M11.13 12.12L10.53 14.53C11.27 14.72 13.56 15.45 13.9 14.09C14.26 12.67 11.87 12.3 11.13 12.12M21.7 14.42C20.36 19.78 14.94 23.04 9.58 21.7C4.22 20.36 .963 14.94 2.3 9.58C3.64 4.22 9.06 .964 14.42 2.3C19.77 3.64 23.03 9.06 21.7 14.42M14.21 8.05L14.66 6.25L13.56 6L13.12 7.73C12.83 7.66 12.54 7.59 12.24 7.53L12.68 5.76L11.59 5.5L11.14 7.29C10.9 7.23 10.66 7.18 10.44 7.12L10.44 7.12L8.93 6.74L8.63 7.91C8.63 7.91 9.45 8.1 9.43 8.11C9.88 8.22 9.96 8.5 9.94 8.75L8.71 13.68C8.66 13.82 8.5 14 8.21 13.95C8.22 13.96 7.41 13.75 7.41 13.75L6.87 15L8.29 15.36C8.56 15.43 8.82 15.5 9.08 15.56L8.62 17.38L9.72 17.66L10.17 15.85C10.47 15.93 10.76 16 11.04 16.08L10.59 17.87L11.69 18.15L12.15 16.33C14 16.68 15.42 16.54 16 14.85C16.5 13.5 16 12.7 15 12.19C15.72 12 16.26 11.55 16.41 10.57C16.61 9.24 15.59 8.53 14.21 8.05Z"></path></svg>


                        </div>
                        <div class="star-2">
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>bitcoin</title><path d="M14.24 10.56C13.93 11.8 12 11.17 11.4 11L11.95 8.82C12.57 9 14.56 9.26 14.24 10.56M11.13 12.12L10.53 14.53C11.27 14.72 13.56 15.45 13.9 14.09C14.26 12.67 11.87 12.3 11.13 12.12M21.7 14.42C20.36 19.78 14.94 23.04 9.58 21.7C4.22 20.36 .963 14.94 2.3 9.58C3.64 4.22 9.06 .964 14.42 2.3C19.77 3.64 23.03 9.06 21.7 14.42M14.21 8.05L14.66 6.25L13.56 6L13.12 7.73C12.83 7.66 12.54 7.59 12.24 7.53L12.68 5.76L11.59 5.5L11.14 7.29C10.9 7.23 10.66 7.18 10.44 7.12L10.44 7.12L8.93 6.74L8.63 7.91C8.63 7.91 9.45 8.1 9.43 8.11C9.88 8.22 9.96 8.5 9.94 8.75L8.71 13.68C8.66 13.82 8.5 14 8.21 13.95C8.22 13.96 7.41 13.75 7.41 13.75L6.87 15L8.29 15.36C8.56 15.43 8.82 15.5 9.08 15.56L8.62 17.38L9.72 17.66L10.17 15.85C10.47 15.93 10.76 16 11.04 16.08L10.59 17.87L11.69 18.15L12.15 16.33C14 16.68 15.42 16.54 16 14.85C16.5 13.5 16 12.7 15 12.19C15.72 12 16.26 11.55 16.41 10.57C16.61 9.24 15.59 8.53 14.21 8.05Z"></path></svg>

                        </div>
                        <div class="star-3">
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>bitcoin</title><path d="M14.24 10.56C13.93 11.8 12 11.17 11.4 11L11.95 8.82C12.57 9 14.56 9.26 14.24 10.56M11.13 12.12L10.53 14.53C11.27 14.72 13.56 15.45 13.9 14.09C14.26 12.67 11.87 12.3 11.13 12.12M21.7 14.42C20.36 19.78 14.94 23.04 9.58 21.7C4.22 20.36 .963 14.94 2.3 9.58C3.64 4.22 9.06 .964 14.42 2.3C19.77 3.64 23.03 9.06 21.7 14.42M14.21 8.05L14.66 6.25L13.56 6L13.12 7.73C12.83 7.66 12.54 7.59 12.24 7.53L12.68 5.76L11.59 5.5L11.14 7.29C10.9 7.23 10.66 7.18 10.44 7.12L10.44 7.12L8.93 6.74L8.63 7.91C8.63 7.91 9.45 8.1 9.43 8.11C9.88 8.22 9.96 8.5 9.94 8.75L8.71 13.68C8.66 13.82 8.5 14 8.21 13.95C8.22 13.96 7.41 13.75 7.41 13.75L6.87 15L8.29 15.36C8.56 15.43 8.82 15.5 9.08 15.56L8.62 17.38L9.72 17.66L10.17 15.85C10.47 15.93 10.76 16 11.04 16.08L10.59 17.87L11.69 18.15L12.15 16.33C14 16.68 15.42 16.54 16 14.85C16.5 13.5 16 12.7 15 12.19C15.72 12 16.26 11.55 16.41 10.57C16.61 9.24 15.59 8.53 14.21 8.05Z"></path></svg>

                        </div>
                        <div class="star-4">
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>bitcoin</title><path d="M14.24 10.56C13.93 11.8 12 11.17 11.4 11L11.95 8.82C12.57 9 14.56 9.26 14.24 10.56M11.13 12.12L10.53 14.53C11.27 14.72 13.56 15.45 13.9 14.09C14.26 12.67 11.87 12.3 11.13 12.12M21.7 14.42C20.36 19.78 14.94 23.04 9.58 21.7C4.22 20.36 .963 14.94 2.3 9.58C3.64 4.22 9.06 .964 14.42 2.3C19.77 3.64 23.03 9.06 21.7 14.42M14.21 8.05L14.66 6.25L13.56 6L13.12 7.73C12.83 7.66 12.54 7.59 12.24 7.53L12.68 5.76L11.59 5.5L11.14 7.29C10.9 7.23 10.66 7.18 10.44 7.12L10.44 7.12L8.93 6.74L8.63 7.91C8.63 7.91 9.45 8.1 9.43 8.11C9.88 8.22 9.96 8.5 9.94 8.75L8.71 13.68C8.66 13.82 8.5 14 8.21 13.95C8.22 13.96 7.41 13.75 7.41 13.75L6.87 15L8.29 15.36C8.56 15.43 8.82 15.5 9.08 15.56L8.62 17.38L9.72 17.66L10.17 15.85C10.47 15.93 10.76 16 11.04 16.08L10.59 17.87L11.69 18.15L12.15 16.33C14 16.68 15.42 16.54 16 14.85C16.5 13.5 16 12.7 15 12.19C15.72 12 16.26 11.55 16.41 10.57C16.61 9.24 15.59 8.53 14.21 8.05Z"></path></svg>

                        </div>
                        <div class="star-5">
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>bitcoin</title><path d="M14.24 10.56C13.93 11.8 12 11.17 11.4 11L11.95 8.82C12.57 9 14.56 9.26 14.24 10.56M11.13 12.12L10.53 14.53C11.27 14.72 13.56 15.45 13.9 14.09C14.26 12.67 11.87 12.3 11.13 12.12M21.7 14.42C20.36 19.78 14.94 23.04 9.58 21.7C4.22 20.36 .963 14.94 2.3 9.58C3.64 4.22 9.06 .964 14.42 2.3C19.77 3.64 23.03 9.06 21.7 14.42M14.21 8.05L14.66 6.25L13.56 6L13.12 7.73C12.83 7.66 12.54 7.59 12.24 7.53L12.68 5.76L11.59 5.5L11.14 7.29C10.9 7.23 10.66 7.18 10.44 7.12L10.44 7.12L8.93 6.74L8.63 7.91C8.63 7.91 9.45 8.1 9.43 8.11C9.88 8.22 9.96 8.5 9.94 8.75L8.71 13.68C8.66 13.82 8.5 14 8.21 13.95C8.22 13.96 7.41 13.75 7.41 13.75L6.87 15L8.29 15.36C8.56 15.43 8.82 15.5 9.08 15.56L8.62 17.38L9.72 17.66L10.17 15.85C10.47 15.93 10.76 16 11.04 16.08L10.59 17.87L11.69 18.15L12.15 16.33C14 16.68 15.42 16.54 16 14.85C16.5 13.5 16 12.7 15 12.19C15.72 12 16.26 11.55 16.41 10.57C16.61 9.24 15.59 8.53 14.21 8.05Z"></path></svg>

                        </div>
                        <div class="star-6">
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>bitcoin</title><path d="M14.24 10.56C13.93 11.8 12 11.17 11.4 11L11.95 8.82C12.57 9 14.56 9.26 14.24 10.56M11.13 12.12L10.53 14.53C11.27 14.72 13.56 15.45 13.9 14.09C14.26 12.67 11.87 12.3 11.13 12.12M21.7 14.42C20.36 19.78 14.94 23.04 9.58 21.7C4.22 20.36 .963 14.94 2.3 9.58C3.64 4.22 9.06 .964 14.42 2.3C19.77 3.64 23.03 9.06 21.7 14.42M14.21 8.05L14.66 6.25L13.56 6L13.12 7.73C12.83 7.66 12.54 7.59 12.24 7.53L12.68 5.76L11.59 5.5L11.14 7.29C10.9 7.23 10.66 7.18 10.44 7.12L10.44 7.12L8.93 6.74L8.63 7.91C8.63 7.91 9.45 8.1 9.43 8.11C9.88 8.22 9.96 8.5 9.94 8.75L8.71 13.68C8.66 13.82 8.5 14 8.21 13.95C8.22 13.96 7.41 13.75 7.41 13.75L6.87 15L8.29 15.36C8.56 15.43 8.82 15.5 9.08 15.56L8.62 17.38L9.72 17.66L10.17 15.85C10.47 15.93 10.76 16 11.04 16.08L10.59 17.87L11.69 18.15L12.15 16.33C14 16.68 15.42 16.54 16 14.85C16.5 13.5 16 12.7 15 12.19C15.72 12 16.26 11.55 16.41 10.57C16.61 9.24 15.59 8.53 14.21 8.05Z"></path></svg>

                        </div>
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--======== / Hero Section ========--> */}




      {/* <!--==============================Why Choose Us Area==============================--> */}
      <div className="" id="about">
        <div className="coreWhatIs bg-img">
          <div className="coreWhatoverlay">
            <div className="wcu-area-1 pt-50 pb-4 " id="feature">
              <div className="container">
                <div className="mb-25">
                  <div className="row gy-5">
                    <div className="col-lg-12">
                      <div className="section-title mb-0">
                        <h2 className="title style2">
                          What is VIN TEC Crowdfunding?
                        </h2>
                        <p
                          className="sec-text  pt-2 pb-4"
                          style={{ textAlign: "justify" }}
                        >
                          VIN TEC crowdfunding is a modern approach to
                          fundraising that uses digital currencies like Bitcoin,
                          Ethereum, or custom tokens to raise funds for
                          projects. Unlike traditional crowdfunding platforms,
                          which rely on fiat currency, cryptocurrency
                          crowdfunding harnesses blockchain technology to
                          provide several key benefits:
                        </p>
                      </div>
                    </div>
                    {/* <div className="col-lg-5">
                    <div className="wcu-thumb text-center alltuchtopdown">
                    <img
                        src="/img/update/normal/why_1-1.png"
                        alt="img"
                    />
                    </div>
                </div> */}
                  </div>
                </div>
                <div className="row gy-1 justify-content-center">
                  <div className="col-sm-6 col-lg-6">
                    <div className="feature-card">
                      <div className="feature-card-icon">
                        <img
                          src={dcent}
                          alt="img"
                          style={{ height: "40px", width: "40px" }}
                          className="feature-img"
                        />
                      </div>
                      <div className="feature-card-details">
                        <h4 className="feature-card-title">Decentralization</h4>
                        <p className="feature-card-text">
                          Bypass intermediaries and raise funds directly from
                          the global community.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-6 ">
                    <div className="feature-card">
                      <div className="feature-card-icon">
                        <img
                          src={trans}
                          alt="img"
                          style={{ height: "40px", width: "40px" }}
                          className="feature-img"
                        />
                      </div>
                      <div className="feature-card-details">
                        <h4 className="feature-card-title">Transparency</h4>
                        <p className="feature-card-text">
                          All transactions are recorded on the blockchain,
                          ensuring full transparency and accountability
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-6">
                    <div className="feature-card">
                      <div className="feature-card-icon">
                        <img
                          src={effe}
                          alt="img"
                          style={{ height: "40px", width: "40px" }}
                          className="feature-img"
                        />
                      </div>
                      <div className="feature-card-details">
                        <h4 className="feature-card-title">
                          Speed & Efficiency
                        </h4>
                        <p className="feature-card-text">
                          Fundraising can happen almost instantly with minimal
                          fees.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" col-sm-6 col-lg-6">
                    <div className="feature-card">
                      <div className="feature-card-icon">
                        <img
                          src={blockchain}
                          alt="img"
                          style={{ height: "40px", width: "40px" }}
                          className="feature-img"
                        />
                      </div>
                      <div className="feature-card-details">
                        <h4 className="feature-card-title">Security</h4>
                        <p className="feature-card-text">
                          Protects funds and data with advanced encryption.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--==============================Invest Area==============================--> */}
      <div className="coreWorkIs bg-img" id="howitwork">
        <div className="coreWhatoverlay ">
          <div className="container pt-130">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-7">
                <div className="section-title text-center mb-50">
                  <h2 className="title style2">How It Works</h2>
                </div>
              </div>
            </div>
            <div className="row gy-30">
              <div className="col-md-4 col-lg-4">
                <div className="invest-card">
                  {/* <h5>Early Investment Opportunities</h5> */}

                  <div className="invest-card-icon">
                    <div className="inv-div">Create Your Campaign</div>
                    <p className="">
                      Start by creating your fundraising campaign on our
                      platform. Set your goal, describe your project, and
                      provide the details to attract potential users.
                    </p>

                    {/* <img src="/img/update/invest/invest-icon-1.png" alt="icon"/> */}
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="invest-card">
                  <div className="invest-card-icon">
                    <div className="inv-div">Start Fundraising</div>
                    <p className="">
                      Share your campaign link with your network, social media,
                      and relevant crypto communities to start raising funds.
                      Users can easily contribute using their crypto wallets.
                    </p>

                    {/* <img src="/img/update/invest/invest-icon-2.png" alt="icon"/> */}
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="invest-card">
                  <div className="invest-card-icon">
                    <div className="inv-div">
                      Track Contributions in Real-Time
                    </div>
                    <p className="">
                      Keep track of the funds raised with real-time blockchain
                      transparency. Our platform updates every transaction, so
                      you always know where your funding stands.
                    </p>

                    {/* <img src="/img/update/invest/invest-icon-3.png" alt="icon"/> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--==============================Intro Area==============================--> */}
      <div className="coreChooseIs bg-img" id="whycorecrowd">
        <div className="coreWhatoverlay">
          <div className="pt-100 pb-2  overflow-hidden bg-black2">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="section-title mb-45">
                    <h2 className="title style2">
                      Why Choose VIN TEC Crowdfunding?
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between align-items-center" style={{marginBottom: '50px'}}>
                <div className="col-xl-12">
                  <div className="intro-wrap mt-xl-4">
                    <h6 className="intro-wrap-title">Lower Fees</h6>
                    <p className="intro-wrap-text">
                      Traditional platforms often take a large percentage of
                      your raised funds. VIN TEC transactions usually have
                      lower fees, meaning more of your funds go toward your
                      project.
                    </p>
                  </div>
                  <div className="intro-wrap">
                    <h6 className="intro-wrap-title">Security</h6>
                    <p className="intro-wrap-text">
                      Blockchain technology ensures the security of
                      transactions, reducing the risk of fraud or chargebacks.
                    </p>
                  </div>
                  <div className="intro-wrap">
                    <h6 className="intro-wrap-title">
                      Access to Crypto Investors
                    </h6>
                    <p className="intro-wrap-text">
                      Tap into the growing community of crypto enthusiasts,
                      investors, and supporters who are eager to invest in
                      innovative ideas.
                    </p>
                  </div>
                  <div className="intro-wrap mt-50">
                    <h6 className="intro-wrap-title">Innovation</h6>
                    <p className="intro-wrap-text">
                      VIN TEC crowdfunding aligns with the future of finance,
                      bringing innovation to the way funding works in various
                      sectors—tech, arts, real estate, and more.
                    </p>
                  </div>
                </div>
                {/* <div className="col-xl-6">
              <div className="intro-thumb1 alltuchtopdown">
                <img src="/img/update/normal/intro_1-1.png" alt="img" />
              </div>
              <div className="intro-wrap mt-50">
                <h6 className="intro-wrap-title">Innovation</h6>
                <p className="intro-wrap-text">
                  VIN TEC crowdfunding aligns with the future of finance,
                  bringing innovation to the way funding works in various
                  sectors—tech, arts, real estate, and more.
                </p>
              </div>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--==============================Invest Area==============================--> */}
      <div className="coreChooseIs bg-img" id="benefits">
        <div className="">
          <div className="pt-130 overflow-hidden">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-7">
                  <div className="section-title text-center mb-50">
                    <h2 className="title style2">
                      Benefits for Backers (Users)
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row gy-30">
                <div className="col-lg-4 col-md-6">
                  <div className="invest-card">
                    {/* <h5>Early Investment Opportunities</h5> */}

                    <div className="invest-card-icon">
                      <h5>Early Investment Opportunities</h5>
                      <p className=" btn3">
                        By backing a compaign with VIN TEC, investors get
                        access to early-stage projects that could turn into
                        valuable assets
                      </p>

                      {/* <img src="/img/update/invest/invest-icon-1.png" alt="icon"/> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="invest-card">
                    <div className="invest-card-icon">
                      <h5>Global Participation</h5>
                      <p className=" btn3">
                        Backers can support projects from anywhere in the world
                        without the need for currency conversions or
                        international fees.
                      </p>

                      {/* <img src="/img/update/invest/invest-icon-2.png" alt="icon"/> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="invest-card">
                    <div className="invest-card-icon">
                      <h5>Potential for Growth</h5>
                      <p className=" btn3">
                        Some crypto crowdfunding campaigns issue tokens that can
                        increase in value, offering potential financial growth
                        for early backers.
                      </p>

                      {/* <img src="/img/update/invest/invest-icon-3.png" alt="icon"/> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--==============================Why Choose Us Area==============================--> */}
      <div className="coreChooseIs bg-img wcu-area-1 pt-130 pb-4 position-relative" id="feature">
        <div className="bg-gradient-1">
          <img src="/img/update/bg/bg-gradient1-1.jpg" alt="img" />
        </div>
        <div className="container">
          <div className="mb-25">
            <div className="row gy-5 text-center">
              <div className="col-lg-12">
                <div className="section-title mb-0">
                  <h2 className="title style2">Get Started Today!</h2>
                  <p
                    className="sec-text text-center  pt-2 pb-4"
                    style={{ textAlign: "justify" }}
                  >
                    Are you a project creator ready to launch your crypto
                    crowdfunding campaign? Or are you an investor looking for
                    innovative opportunities? Get in touch with us today and
                    start raising or backing funds in the world of
                    cryptocurrency.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row gy-1 justify-content-center">
            <div className="col-lg-6">
              <div className="feature-card">
                <div className="feature-card-icon">
                  <img
                    src={creator}
                    alt="img"
                    style={{ height: "40px", width: "40px" }}
                  />
                </div>
                <div className="feature-card-details">
                  <h4 className="feature-card-title">For Project Creators</h4>
                  <p className="feature-card-text">
                    Start your campaign now and bring your idea to life using
                    the power of blockchain technology!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-card">
                <div className="feature-card-icon">
                  <img
                    src={investor}
                    alt="img"
                    style={{ height: "40px", width: "40px" }}
                  />
                </div>
                <div className="feature-card-details">
                  <h4 className="feature-card-title">For Investors</h4>
                  <p className="feature-card-text">
                    Discover exciting, groundbreaking projects, and invest in
                    the future of innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--==============================Faq Area==============================--> */}
      <div className="pt-100 pb-4 overflow-hidden coreChooseIs bg-img" id="faq">
        <div className="container">
          <div className="section-title mb-50 text-center">
            <h2 className="title style2">Frequently Asked Questions</h2>
            <p className="sec-text">
              DO have any kind Of questions? We're here to help.
            </p>
          </div>
          <div className="row gy-40 justify-content-between">
            <div className="col-xl-4 text-xl-start">
              <div className="faq-thumb mt-1">
                <img src="/img/update/normal/faq_1-1.png" alt="img" />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-8">
              <div className="accordion-area accordion" id="faqAccordion">
                <div className="accordion-card">
                  <div className="accordion-header" id="collapse-item-1">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1"
                      aria-expanded="true"
                      aria-controls="collapse-1"
                    >
                      <span className="number">1</span> What types of projects can use VIN TEC crowdfunding?
                    </button>
                  </div>
                  <div
                    id="collapse-1"
                    className="accordion-collapse collapse show"
                    aria-labelledby="collapse-item-1"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        From tech startups to creative projects, real estate developments to social impact initiatives, almost any type of project can benefit from VIN TEC crowdfunding.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-card">
                  <div className="accordion-header" id="collapse-item-2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-2"
                      aria-expanded="false"
                      aria-controls="collapse-2"
                    >
                      <span className="number">2</span> How can I contribute to a campaign?
                    </button>
                  </div>
                  <div
                    id="collapse-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-2"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Simply connect your cryptocurrency wallet like MetaMask, Trust Wallet, TokenPocket, or any other decentralized wallet, select the amount you want to contribute, and confirm the transaction.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-card">
                  <div className="accordion-header" id="collapse-item-3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-3"
                      aria-expanded="false"
                      aria-controls="collapse-3"
                    >
                      <span className="number">3</span> Are there any risks?
                    </button>
                  </div>
                  <div
                    id="collapse-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-3"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        As with any investment, cryptocurrency crowdfunding carries some risk. We recommend doing thorough research and understanding the project before contributing.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-card">
                  <div className="accordion-header" id="collapse-item-4">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-4"
                      aria-expanded="false"
                      aria-controls="collapse-4"
                    >
                      <span className="number">4</span> Can I use my local currency to back a project?
                    </button>
                  </div>
                  <div
                    id="collapse-4"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-4"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Currently, contributions are made via cryptocurrency. However, we are working to integrate more fiat-to-crypto payment options in the future.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--==============================Footer Area==============================--> */}
      <footer className="footer-wrapper footer-layout1 position-relative mt-100">
        <div className="bg-gradient-1">
          <img src="/img/update/bg/bg-gradient1-1.jpg" alt="img" />
        </div>
        <div className="container">
          <div className="footer-menu-area m-0 p-0">
            <div className="row justify-content-center align-items-center">
              <div className="col-xl-5 col-lg-12 d-flex w-100 justify-content-center align-items-center flex-wrap font-landing-footer">
                <span className="">Contract Address:</span>
                <a
                  className="ps-2 "
                  target="_blank"
                  // href="https://polygonscan.com/address/0x7E64d0fbA2908eba5F1FeF73fC9BD358c9fCc8D6#readProxyContract"
                  href="#"
                >
                  0x7E64d0fbA2908eba5F1FeF73fC9BD358c9fCc8D6
                </a>
                {/* <div className="social-btn justify-content-center justify-content-lg-start">
                            <a href="https://www.facebook.com/">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path
                                        d="M10.0596 7.34522L15.8879 0.570312H14.5068L9.44607 6.45287L5.40411 0.570312H0.742188L6.85442 9.46578L0.742188 16.5703H2.12338L7.4676 10.3581L11.7362 16.5703H16.3981L10.0593 7.34522H10.0596ZM8.16787 9.54415L7.54857 8.65836L2.62104 1.61005H4.74248L8.71905 7.29827L9.33834 8.18405L14.5074 15.5779H12.386L8.16787 9.54449V9.54415Z"
                                        fill="currentColor"></path>
                                </svg>
                            </a>
                            <a href="https://instagram.com/">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://linkedin.com/">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div> */}
              </div>
              {/* <div className="col-xl-7 col-lg-8 text-lg-end text-center">
                        <ul className="footer-menu-list">
                            <li>
                                <a href="index.html">
                                    HOME
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    OUR PROJECTS
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    OUR TEAM
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    NEWS FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    DOCUMENTS
                                </a>
                            </li>
                        </ul>
                    </div> */}
            </div>
          </div>
        </div>
        <div className="copyright-wrap text-center text-lg-start">
          <div className="container">
            <div className="row gy-3 justify-content-between align-items-center">
              <div className="col-lg-6 align-self-center">
                <div className="social-btn justify-content-center justify-content-lg-start">
                  <a href="https://www.facebook.com/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M10.0596 7.34522L15.8879 0.570312H14.5068L9.44607 6.45287L5.40411 0.570312H0.742188L6.85442 9.46578L0.742188 16.5703H2.12338L7.4676 10.3581L11.7362 16.5703H16.3981L10.0593 7.34522H10.0596ZM8.16787 9.54415L7.54857 8.65836L2.62104 1.61005H4.74248L8.71905 7.29827L9.33834 8.18405L14.5074 15.5779H12.386L8.16787 9.54449V9.54415Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <a href="https://instagram.com/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://linkedin.com/">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-end footer-text-landing">
                <p className="copyright-text">
                  Copyright © 2024 <a href="#">VIN TEC.</a> All rights
                  reserved.
                </p>

                {/* <ul className="footer-links">
                            <li>
                                <a href="blog.html">
                                    Job & Career
                                </a>
                            </li>
                            <li>
                                <a href="contact.html">
                                    Terms and Condition
                                </a>
                            </li>
                            <li>
                                <a href="contact.html">
                                    Help Center
                                </a>
                            </li>
                        </ul> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
