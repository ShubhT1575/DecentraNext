import React from "react";
import "./css/style.css";
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
      {/* Hero Section */}
      <div className="hero-wrapper hero-1" style={{height: "100vh"}}>
        <div className="bg-1 bg-img"></div>
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
                  <span className="word">C</span>
                  <span className="word">O</span>
                  <span className="word">O</span>
                  <span className="word">P</span>
                  <span className="word">G</span>
                  <span className="word">E</span>
                  <span className="word">N</span>
                  <span className="word">I</span>
                  <span className="word">X</span>
                </h1>
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="pt-3 text-light text-center" style={{ textAlign: "justify" }}>
                      Empowering Communities, One Contribution at a Time! A decentralized, trust-driven platform where members contribute, support, and grow together—ensuring financial empowerment for all.
                    </div>
                  </div>
                </div>
                <div className="hero-button mt-5">
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

      {/* About Us Section */}
      <div className="about-us hero-1 bg-img" id="about">
        <div className="about-container">
          <div className="about-content">
            <h2>Key Principles</h2>
            <p>
              CoopGenix operates on a cooperative funding model where members uplift each other. 
              Funds are distributed transparently, ensuring fairness, security, and community-driven empowerment.
            </p>
          </div>
          <div className="about-principles">
            <div className="principle">
              <span className="emoji">🔍</span>
              <h3>Transparency</h3>
              <p>All transactions are open and verifiable, fostering trust within the community.</p>
            </div>
            <div className="principle">
              <span className="emoji">🌍</span>
              <h3>Community Growth</h3>
              <p>Empowering individuals through mutual support, ensuring sustainable development.</p>
            </div>
            <div className="principle">
              <span className="emoji">🔗</span>
              <h3>Secure & Fair Transactions</h3>
              <p>Decentralized and tamper-proof transactions, ensuring fairness for all members.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-us hero-1 bg-img" id="why-us">
        <h2 className="section-title">Why Choose Us?</h2>
        
        <div className="value-propositions">
          <div className="value-box">
            <span className="icon">💡</span>
            <h3>Decentralized & Transparent</h3>
            <p>No banks, no hidden fees.</p>
          </div>

          <div className="value-box">
            <span className="icon">💡</span>
            <h3>Secure & Trustworthy</h3>
            <p>100% smart contract-driven transactions.</p>
          </div>

          <div className="value-box">
            <span className="icon">💡</span>
            <h3>Instant & Global Access</h3>
            <p>Raise funds from anywhere, anytime.</p>
          </div>

          <div className="value-box">
            <span className="icon">💡</span>
            <h3>Community-Driven</h3>
            <p>Support real causes with direct impact.</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="comparison-table">
          <h3>Traditional vs. Decentralized Crowdfunding</h3>
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Traditional</th>
                <th>Decentralized</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Middlemen</td>
                <td>Required (Banks, Platforms)</td>
                <td>No Middlemen (Direct P2P)</td>
              </tr>
              <tr>
                <td>Fees</td>
                <td>High Processing Fees</td>
                <td>Minimal to Zero Fees</td>
              </tr>
              <tr>
                <td>Security</td>
                <td>Vulnerable to Fraud</td>
                <td>Blockchain-Powered Security</td>
              </tr>
              <tr>
                <td>Access</td>
                <td>Limited to Certain Countries</td>
                <td>Global Access, No Restrictions</td>
              </tr>
              <tr>
                <td>Transparency</td>
                <td>Opaque Systems</td>
                <td>Fully Transparent & Immutable</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Fundraising Categories Section */}
      <div className="fundraising-categories hero-1 bg-img" id="categories">
        <h2 className="section-title">Who Can Raise Funds?</h2>

        <div className="categories-container">
          <div className="category-box">
            <span className="icon">🔥</span>
            <h3>Medical Emergencies</h3>
          </div>

          <div className="category-box">
            <span className="icon">🎓</span>
            <h3>Education & Scholarships</h3>
          </div>

          <div className="category-box">
            <span className="icon">🚀</span>
            <h3>Startups & Business Ideas</h3>
          </div>

          <div className="category-box">
            <span className="icon">🌱</span>
            <h3>Non-Profits & Charity</h3>
          </div>

          <div className="category-box">
            <span className="icon">🌍</span>
            <h3>Community Projects</h3>
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="testimonials hero-1 bg-img" id="success-stories">
        <h2 className="section-title">Success Stories & Testimonials</h2>

        <div className="testimonial-carousel">
          <button className="carousel-btn prev-btn">‹</button>

          <div className="testimonial-container">
            <div className="testimonial-box active">
              <p className="testimonial-text">💬 "Thanks to this platform, I raised ₹5,00,000 for my medical treatment in just 3 days!"</p>
              <h3 className="testimonial-user">– Real User</h3>
            </div>

            <div className="testimonial-box">
              <p className="testimonial-text">💬 "I got the funds I needed for my startup within a week. Life-changing!"</p>
              <h3 className="testimonial-user">– Entrepreneur</h3>
            </div>

            <div className="testimonial-box">
              <p className="testimonial-text">💬 "Community-driven funding helped us support 50+ students with scholarships!"</p>
              <h3 className="testimonial-user">– Non-Profit Organization</h3>
            </div>
          </div>

          <button className="carousel-btn next-btn">›</button>
        </div>
      </div>

      {/* Security Section */}
      <div className="security hero-1 bg-img" id="security">
        <h2 className="section-title">Security & Transparency</h2>
        <p className="section-description">
          We ensure that every transaction is secure, transparent, and tamper-proof with the power of blockchain technology.
        </p>

        <div className="security-container">
          <div className="security-box">
            <div className="icon">🔒</div>
            <h3>Smart Contract-Based Transactions</h3>
            <p>No middlemen, instant & automated fund transfers with full security.</p>
          </div>

          <div className="security-box">
            <div className="icon">📜</div>
            <h3>Full Fund Traceability</h3>
            <p>Every transaction is recorded on the blockchain, ensuring transparency.</p>
          </div>

          <div className="security-box">
            <div className="icon">✅</div>
            <h3>Customizable Wallets</h3>
            <p>Users can change creator & liquidity wallets anytime for flexibility.</p>
          </div>
        </div>
      </div>

      {/* Community Impact Section */}
      <div className="community-impact hero-1 bg-img" id="community">
        <h2 className="section-title">Community & Social Impact</h2>
        <p className="section-description">
          Be part of a movement that changes lives. Support causes, contribute, or help spread the word.
        </p>

        <div className="impact-container">
          <div className="impact-box">
            <div className="icon">👥</div>
            <h3>Join Our Mission</h3>
            <p>Help people raise funds for meaningful causes and be a part of real change.</p>
          </div>

          <div className="impact-box">
            <div className="icon">📢</div>
            <h3>Volunteer & Contribute</h3>
            <p>Make an impact by donating, volunteering, or spreading awareness.</p>
          </div>

          <div className="impact-box">
            <div className="icon">📲</div>
            <h3>Follow & Stay Updated</h3>
            <p>Connect with us on social media and stay inspired by real impact stories.</p>
          </div>
        </div>

        <div className="cta-container">
          <Link to="/signup" className="cta-button">Join the Community</Link>
        </div>
      </div>

      {/* CTA Section */}
      <div className="full-width hero-1 bg-img">
      <div className="cta-section">
        <h2 className="cta-title">🚀 Ready to Make a Difference?</h2>
        <p className="cta-description">💙 Start Your Fundraiser or Contribute Today!</p>

        <div className="cta-buttons">
          <Link to="/create-campaign" className="cta-btn primary">Start a Fundraiser</Link>
          <Link to="/campaigns" className="cta-btn secondary">Explore Campaigns</Link>
        </div>
      </div>
      </div>

      {/* Fundraising Stats */}
      <div className="full-width hero-1 bg-img">
      <div className="fundraising-stats hero-1 bg-img">
        <h2 className="stats-title">📊 Live Fundraising Stats</h2>

        <div className="stats-counters">
          <div className="counter-box">
            <h3 className="counter" id="totalRaised">₹0</h3>
            <p>Total Funds Raised</p>
          </div>
          <div className="counter-box">
            <h3 className="counter" id="activeCampaigns">0</h3>
            <p>Active Fundraisers</p>
          </div>
        </div>

        <div className="contribution-feed">
          <h3>🎉 Recent Contributions</h3>
          <ul id="contributionList">
            <li>Loading latest contributions...</li>
          </ul>
        </div>

        <div className="featured-fundraisers">
          <h3>🔥 Trending Fundraisers</h3>
          <div className="fundraiser-list">
            <div className="fundraiser-box">
              <h4>💖 Help Lisa's Surgery</h4>
              <p>Raised: ₹1,20,000 / Goal: ₹2,00,000</p>
              <div className="progress-bar"><div style={{width: "60%"}}></div></div>
              <Link to="/campaign/1" className="cta-btn">Donate Now</Link>
            </div>

            <div className="fundraiser-box">
              <h4>🎓 College Fees for Arjun</h4>
              <p>Raised: ₹80,000 / Goal: ₹1,50,000</p>
              <div className="progress-bar"><div style={{width: "53%"}}></div></div>
              <Link to="/campaign/2" className="cta-btn">Donate Now</Link>
            </div>

            <div className="fundraiser-box">
              <h4>🌍 Save the Forests</h4>
              <p>Raised: ₹50,000 / Goal: ₹1,00,000</p>
              <div className="progress-bar"><div style={{width: "50%"}}></div></div>
              <Link to="/campaign/3" className="cta-btn">Donate Now</Link>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* FAQ Section */}
      <div className="full-width hero-1 bg-img">
      <div className="faq-section hero-1 bg-img" id="faq">
        <h2>Frequently Asked Questions</h2>
        
        <div className="faq-wrapper">
          <div className="faq-category">
            <h3>General Questions</h3>
            <div className="faq-container">
              <div className="faq-box">
                <div className="faq-question">
                  <h3>How does CoopGenix work?</h3>
                  <span className="faq-toggle">+</span>
                </div>
                <p className="faq-answer">CoopGenix is a decentralized crowdfunding platform based on blockchain technology. It allows users to start fundraisers, contribute to causes, and withdraw funds seamlessly without intermediaries.</p>
              </div>
              
              <div className="faq-box">
                <div className="faq-question">
                  <h3>Are there any hidden fees?</h3>
                  <span className="faq-toggle">+</span>
                </div>
                <p className="faq-answer">No hidden fees! We operate transparently with minimal smart contract fees for blockchain transactions.</p>
              </div>
              
              <div className="faq-box">
                <div className="faq-question">
                  <h3>Can anyone start a fundraiser?</h3>
                  <span className="faq-toggle">+</span>
                </div>
                <p className="faq-answer">Yes! Anyone with a genuine need or cause can start a fundraiser and receive community support.</p>
              </div>
            </div>
          </div>

          <div className="faq-category">
            <h3>Security & Withdrawals</h3>
            <div className="faq-container">
              <div className="faq-box">
                <div className="faq-question">
                  <h3>Is my donation secure?</h3>
                  <span className="faq-toggle">+</span>
                </div>
                <p className="faq-answer">Yes! Every transaction is secured using blockchain technology, ensuring transparency and security.</p>
              </div>
              
              <div className="faq-box">
                <div className="faq-question">
                  <h3>How do I withdraw funds?</h3>
                  <span className="faq-toggle">+</span>
                </div>
                <p className="faq-answer">Withdrawals are processed through smart contracts. Once your campaign reaches the desired amount, you can request a withdrawal instantly.</p>
              </div>
              
              <div className="faq-box">
                <div className="faq-question">
                  <h3>Can I track my contributions?</h3>
                  <span className="faq-toggle">+</span>
                </div>
                <p className="faq-answer">Absolutely! Every transaction is recorded on the blockchain, making it fully traceable.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Get Involved Section */}
      <div className="get-involved hero-1 bg-img">
        <h2>Get Involved & Make an Impact</h2>
        <div className="involved-boxes">
          <div className="involved-box">
            <h3>🤝 Become a Volunteer</h3>
            <p>Help us spread awareness & support fundraisers.</p>
            <Link to="/volunteer" className="cta">Join Now</Link>
          </div>
          <div className="involved-box">
            <h3>🏛️ Partner With Us</h3>
            <p>Collaborate with us to amplify social impact.</p>
            <Link to="/partnership" className="cta">Partner Up</Link>
          </div>
          <div className="involved-box">
            <h3>💰 Start Your Own Campaign</h3>
            <p>Launch your fundraiser & receive community support.</p>
            <Link to="/create-campaign" className="cta">Start Fundraising</Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer hero-1 bg-img">
        <div className="footer-container">
          <div className="footer-column">
            <h3>📌 Quick Links</h3>
            <ul>
              <li><Link to="/">🏠 Home</Link></li>
              <li><Link to="/create-campaign">💰 Start a Fundraiser</Link></li>
              <li><Link to="/campaigns">🔎 Explore Campaigns</Link></li>
              <li><Link to="/faq">❓ FAQ</Link></li>
              <li><Link to="/contact">📞 Contact Us</Link></li>
              <li><Link to="/privacy">🔐 Privacy Policy & Terms</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>📲 Connect With Us</h3>
            <ul className="social-links">
              <li><a href="#">🌍 Telegram / Discord</a></li>
              <li><a href="#">🐦 Twitter</a></li>
              <li><a href="#">📘 Facebook</a></li>
              <li><a href="#">📸 Instagram</a></li>
              <li><a href="#">🎥 YouTube</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>📞 Contact & Support</h3>
            <p>📧 <a href="mailto:support@coopgenix.com">support@coopgenix.com</a></p>
            <p>📞 +91-123-456-7890</p>
            <p>🌍 Blockchain City, Web3 World</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 CoopGenix All Rights Reserved.</p>
          <p><Link to="/terms">🔗 Terms & Conditions</Link> | <Link to="/privacy">🔐 Privacy Policy</Link></p>
        </div>
      </footer>
    </>
  );
}