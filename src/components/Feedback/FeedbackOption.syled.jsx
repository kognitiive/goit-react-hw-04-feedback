import styled from '@emotion/styled';

export const FeedbackList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  cursor: pointer;

  font-family: inherit;
  font-size: 16px;
  font-weight: 500;

  color: #45f3ff;
  background-color: #1c1c1c;
  border: 1px solid #45f3ff;
  border-radius: 2px;

  transition: background-color 0.3s ease-in;

  &:hover,
  &:focus {
    color: #1c1c1c;
    background-color: #45f3ff;
    box-shadow: 0px 8px 43px #45f3ff;
  }
`;
