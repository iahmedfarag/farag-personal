import React, { useEffect } from "react";
import { ContactComp, Hero, Loading, Portfolio } from "../components";
import { useAppContext } from "../context.jsx";

const Home = () => {
  const { isLoading, setIsLoading } = useAppContext();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return <Loading loader={"main"}></Loading>;
  }

  return (
    <>
      <Hero />
      <Portfolio showExtra={false} />
      <ContactComp />
    </>
  );
};

export default Home;
