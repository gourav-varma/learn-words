import { useState, useEffect, createContext } from "react";

const useMediaQuery = () => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 960px)");
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    console.log(media.matches);
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener); // cleanup function
  }, [matches]);

  return matches;
};

export default useMediaQuery;
