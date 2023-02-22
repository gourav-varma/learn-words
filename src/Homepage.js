import { useState, useEffect } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import { FaUser } from "react-icons/fa";

const Homepage = () => {
  const isDesktop = useMediaQuery();
  return (
    <div>
      <Header />
      <Body />
      <div>
        {isDesktop ? (
          <div className="bg-blue-400 h-96 w-screen"></div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
    //  <Body />
    //  <Footer />
  );
};

export default Homepage;

function Header() {
  const isDesktop = useMediaQuery();
  return (
    <div className="bg-black h-20 w-screen relative">
      <h1 className="absolute left-[5%] top-[25%] text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-white">
        TempName
      </h1>
      {isDesktop ? (
        <h1 className="absolute right-[5%] top-[25%] text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-white">
          Sign Up/Login
        </h1>
      ) : (
        <h1 className="absolute right-[5%] top-[25%] text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-white">
          <FaUser />
        </h1>
      )}
    </div>
  );
}

function Body() {
  const isDesktop = useMediaQuery();
  return (
    <div className="w-screen relative">
      <h2>Hi and welcome.</h2>
      {/* <h2>learn words as quick and easy as possible.</h2>
      <h2>
        Whether you're preparing for the GRE or GMAT or you simply want to
        expand your vocabulary.
      </h2>
      <h2>We have your back.</h2>
      <h2>
        Make a list of the words you want to learn, their meanings, and sample
        sentences.
      </h2>
      <h2>
        Take short quizzes throughout the day, to stay on top of your learnings.
      </h2> */}
    </div>
  );
}
