import styled from "styled-components";
import Survey from ".";

// 설문 문항 감싸는 컨테이너
export const SurveyContainer = styled.div``;

// 맨위 제목 스타일
export const TitleStyled = styled.div`
  margin-top: 270px;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 100px;
  text-align: center;
`;
// 질문 스타일
export const BoxStyled = styled.div`
  margin-top: 100px;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 100px;
  text-align: center;
`;

export const Desc = styled.div`
  margin-top: 150px;
  margin-bottom: 5px;
`;

// 설문 문항 스타일
export const ButtonStyled = styled.button`
  width: 350px;
  height: 50px;
  /* #d0dfff; */
  background-color: #d0dfff;
  color: black;
  cursor: pointer;
  display: block;
  margin-top: 10px;
  border: 1.5px solid rgb(75, 94, 237);
  border-radius: 5px;
  color: rgb(49, 61, 154);
  font-weight: 700;
  font-size: 15px;
`;

//설문 답변 스타일
export const FormCheckText = styled.label`
  width: 350px;
  height: 50px;
  margin-top: 10px;
  color: rgb(49, 61, 154);
  border: 1.5px solid rgb(75, 94, 237);
  font-weight: 700;
  font-size: 15px;
  padding: 8px;
  background-color: #d0dfff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const FormCheckLeft = styled.input`
  &:checked + ${FormCheckText} {
    background-color: #939ef4;
  }
  display: none;
`;

export const FormInput = styled.input`
  width: 400px;
  height: 100px;
  color: black;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
  background-color: transparent;
  border: 1.5px solid rgba(0, 0, 0, 0.06666666666666667);
  outline: none;

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

// 전체 felx
export const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
`;

// 이전 다음 버튼 flex
// 반응형일 때 flex 조절 필요
export const ButtonFlex = styled.div`
  margin-top: 40px;
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

// 이전 다음 버튼 스타일
export const ButtonStyled2 = styled.button`
  border: 1.5px solid rgb(75, 94, 237);
  width: 4rem;
  height: 3rem;
  background-color: rgb(75, 94, 237);
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 10px;

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #025ce2);
  }
`;
