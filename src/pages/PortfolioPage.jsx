import React, { useEffect } from "react";
import { Loading, Portfolio } from "../components";
import { useAppContext } from "../context.jsx";
import { styled } from "styled-components";

const PortfolioPage = () => {
  const { isLoading, setIsLoading } = useAppContext();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return <Loading loader={"portfolio"}></Loading>;
  }

  return (
    <Wrapper>
      <Portfolio padding={"50px"} showExtra={true} />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  margin-top: 100px;
  @media (max-width: 576px) {
    margin-top: 70px;
  }
`;
export default PortfolioPage;
