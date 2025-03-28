import React, { useState } from "react";
import styled from "styled-components";
import { getSuspendedStatus } from "../firebase/apiFirebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const StyledTokenInput = styled.div`
  h3 {
    font-size: 2.5rem;
    margin-bottom: 0.6rem;
  }

  input {
    text-align: center;
    font-size: 20px;
    width: 40px;
    height: 50px;
    /* border: 1px solid gray; */
    border: none;

    &:focus {
      outline: 3px solid #d30b29;
      border: none;
    }
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;

  button {
    font-family: inherit;
    border: none;
    /* width: 8rem; */
    width: 12rem;
    padding: 1rem;
    font-size: 1.5rem;
    margin-top: 2rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:disabled {
      opacity: 0.4;
      cursor: default;
    }
  }

  button:first-child {
    color: white;
    background-color: #d30b29;
    width: 12rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

interface TokenInputProps {
  generatedToken: number; // Assuming the token is a numeric value
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export default function TokenInput({
  generatedToken,
  setStep,
}: TokenInputProps) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const [token, setToken] = useState<string[]>(["", "", "", "", "", ""]); // Holds values for each of the 6 boxes

  // Function to handle the change in each input box
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;

    // Allow only numbers and update the respective box
    if (/^[0-9]$/.test(value)) {
      const newToken = [...token];
      newToken[index] = value;
      setToken(newToken);

      // Focus on the next input box if current box is filled
      if (index < 5 && value !== "") {
        const nextInput = document.getElementById(`token-input-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  function handleKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) {
    if (e.key === "Backspace") {
      const newToken = [...token];

      if (newToken[index] !== "") {
        //clear the current box
        newToken[index] = "";
      } else if (index > 0) {
        // Move focus to the previous box
        newToken[index - 1] = "";
        document.getElementById(`token-input-${index - 1}`)?.focus();
      }

      setToken(newToken);
    }

    // Auto-submit on Enter if all boxes are filled
    if (e.key === "Enter" && !token.includes("")) {
      handleSubmit();
    }
  }

  // Function to handle form submission
  const handleSubmit = async () => {
    // Fetch suspended status
    const isSuspended = await getSuspendedStatus();

    //Token Validation
    const tokenValue = token.join("");

    if (parseInt(tokenValue) === generatedToken) {
      if (isSuspended) {
        navigate("/account-suspension");
        logout();
        return;
      }
      setStep(3);
    } else {
      alert("Invalid Token");
    }
  };

  return (
    <StyledTokenInput>
      <h3>Enter Token</h3>

      <InputContainer>
        {token.map((value, index) => (
          <input
            key={index}
            id={`token-input-${index}`}
            type="text"
            maxLength={1}
            value={value}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            style={{}}
          />
        ))}
      </InputContainer>

      <BtnContainer>
        <button
          onClick={handleSubmit}
          disabled={token.includes("")} // Disable button if any of the boxes is empty
        >
          Submit Token
        </button>
        <button onClick={() => setStep(1)}>Cancel</button>
      </BtnContainer>
    </StyledTokenInput>
  );
}
