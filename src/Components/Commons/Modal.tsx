import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FormEvent } from 'react';

// form 이 받을 데이터 type
type FormProps = {
  children: React.ReactNode;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export function ModalForm({ children, onSubmit }: FormProps) {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
}

// input이 받게 될 데이터 type
type InputProps = {
  text: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  message?: string;
  check?: boolean;
};

// input 컴포넌트
export function ModalInput({
  text,
  name,
  type,
  placeholder,
  value,
  onChange,
  message,
  check,
}: InputProps) {
  return (
    <InputBox>
      <InputText>{text}</InputText>
      <InputBar check={check}>
        <StyledInput
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <span>{message}</span>
      </InputBar>
    </InputBox>
  );
}
type ButtonProps = {
  children: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void | null;
};

// button 컴포넌트
export function ModalButton({ children, onClick }: ButtonProps) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

// submit button 컴포넌트
export function ModalSubmitButton(props: { children: string }) {
  return <StyledButton type="submit">{props.children}</StyledButton>;
}

// select가 받게 될 데이터 type
type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  options: Option[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

// select 컴포넌트
export function ModalSelectBox({ options, value, onChange }: SelectProps) {
  return (
    <StyledSelect value={value} onChange={onChange}>
      <option value="" disabled hidden>
        성별
      </option>
      {options.map((option, idx) => (
        <option key={`gender-${idx}`} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export function ModalTerms(props: {
  children: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  term: boolean;
}) {
  return (
    <TermBox onClick={props.onClick} term={props.term}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {props.term ? (
          <rect width="20" height="20" rx="10" fill="#727f88" />
        ) : (
          <rect width="20" height="20" rx="10" fill="#D9D9D9" />
        )}
        <path d="M5 8.84211L9.24242 14L15 7" stroke="white" />
      </svg>
      <span>{props.children}</span>
    </TermBox>
  );
}

Modal.defaultProps = {
  long: false,
  register: false,
};

// modal 컴포넌트
export function Modal(props: {
  children: React.ReactNode;
  long: boolean;
  register: boolean;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}) {
  return (
    <ModalBox long={props.long}>
      <Logo src="/Images/soccerquick.png" alt="logo" />
      {props.children}
      <BottomLine />
      <ModalTextBox>
        {props.register ? (
          <>
            이미 회원이신가요?<div onClick={props.onClick}>로그인 하기</div>
          </>
        ) : (
          <>
            아직 아이디가 없으신가요?
            <div onClick={props.onClick}>회원가입 하기</div>
          </>
        )}
      </ModalTextBox>
    </ModalBox>
  );
}

// styled-components
const ModalBox = styled.div<{ long: boolean }>`
  position: absolute;
  width: 583px;
  height: ${(props) => (props.long ? '1200px' : '501px')};
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #fdfdfd;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
`;

const Logo = styled.img`
  width: 115px;
  height: 60px;
  margin-bottom: 24px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BottomLine = styled.div`
  width: 503px;
  height: 0px;
  border: 1px solid #e3e5e8;
  margin-top: 24px;
`;

const ModalTextBox = styled.div`
  display: flex;
  justify-contents: center;
  align-items: center;
  margin-top: 24px;

  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #898f9c;

  & > div {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-decoration: underline;
    margin-left: 10px;
    color: #09cf00;
  }
`;

// input styled-components
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 503px;
  height: 70px;

  &:not(:first-child) {
    margin-top: 24px;
  }
`;

const InputText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #727f88;
  margin-bottom: 6px;
`;

const StyledInput = styled.input`
  width: 503px;
  height: 49px;
  background: #ffffff;
  border: 1px solid #e3e5e8;
  border-radius: 8px;
  color: black;

  ::placeholder {
    color: #eeeeee;
  }
`;

const InputBar = styled.div<{ check?: boolean }>`
  & > span {
    margin-left: 5px;
    color: ${(props) => (props.check ? 'blue' : 'red')};
  }

  & > input {
    border-color: ${(props) => (props.check ? '#e3e5e8' : '#e3e5e8')};
  }
`;

const StyledSelect = styled.select`
  outline: none;
  width: 503px;
  height: 49px;
  text-align: center;
  margin-top: 32px;
  background: #ffffff;
  color: #727f88;
  border: 1px solid #e3e5e8;
  border-radius: 8px;

  &:focus {
    border: 1px solid #727f88;
  }
`;

const TermBox = styled.div<{ term: boolean }>`
  display: flex;
  justify-contents: flex;
  align-self: start;
  margin-top: 25px;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: ${(props) => (props.term ? ' #727f88' : '#eeeeee')};

  /*드래그 방지*/
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* 인터넷익스플로러 */
  user-select: none;

  & > span {
    margin-left: 10px;
  }
`;

const StyledButton = styled.button`
  width: 503px;
  height: 49px;
  background: #09cf00;
  border-radius: 8px;
  color: #fff;
  margin-top: 32px;
`;
