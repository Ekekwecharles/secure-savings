import styled from "styled-components";

const PageNotAvailable = styled.div`
  color: gray;
  margin-left: 5rem;
  font-weight: 500;
  font-size: 1.8rem;
`;

export default function Settings() {
  return (
    <div>
      <PageNotAvailable>
        Due to regional restrictions, this page cannot be accessed from your
        current location.
      </PageNotAvailable>
    </div>
  );
}
