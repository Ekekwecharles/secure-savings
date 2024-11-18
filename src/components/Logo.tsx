import styled from "styled-components";

const StyledLogo = styled.div`
  font-size: 3rem;
  font-weight: bolder;
  color: #030368;
  /* font-family: "Roboto", sans-serif; */
  font-family: "DM Sans", sans-serif;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 37.5em) {
    font-size: 2rem;
  }

  img {
    height: 4rem;
  }
`;

export default function Logo() {
  return (
    <StyledLogo>
      SECURE SAVINGS
      <img src="icon.png" alt="" />
    </StyledLogo>
  );
}
