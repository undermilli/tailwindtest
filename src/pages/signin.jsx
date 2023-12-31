import { useState } from "react";
import "../index.css";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();

  // 비밀번호 show/hide
  const [showPW, setShowPW] = useState(false);
  const [showVerifyPW, setShowVerifyPW] = useState(false);

  // input값
  const [inputs, setInputs] = useState({
    nickname: "",
    password: "",
    verifyPassword: "",
  });

  const inputChangeHandler = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // errorMsg 상태관리
  const [errorType, setErrorType] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // error 처리 함수
  const errorCheck = (error) => {
    if (error.response.data.errorCode === 422) {
      getErrorMsg(error.response.data.details[0].message);
    } else if (error.response.data.errorCode === 409) {
      getErrorMsg(error.response.data.message);
    }
  };

  // errorMsg 함수
  const getErrorMsg = (msg) => {
    // 에러 메시지 위치 특정
    if (msg.includes("username") || msg.includes("Username")) {
      setErrorType("username");
    } else if (msg.includes("password")) {
      setErrorType("password");
    } else {
      alert("네트워크 오류입니다. 관리자에게 문의해주세요");
    }

    // 한글 에러 메시지 제공
    if (msg === '"username" is not allowed to be empty') {
      setErrorMsg("닉네임을 입력해주세요.");
    } else if (msg === '"password" is not allowed to be empty') {
      setErrorMsg("비밀번호를 입력해주세요.");
    } else if (msg.includes("fails to match the required pattern")) {
      setErrorMsg("비밀번호는 소문자, 대문자, 숫자를 포함한 2~20글자 입니다.");
    } else if (msg === "Username already exists") {
      setErrorMsg("이미 존재하는 닉네임입니다.");
    } else if (msg === '"username" length must be at least 2 characters long') {
      setErrorMsg("닉네임은 최소 2글자 이상이어야 합니다.");
    } else if (
      msg === '"username" must only contain alpha-numeric characters'
    ) {
      setErrorMsg("닉네임은 영문자와 숫자로만 구성되어야 합니다.");
    } else {
      alert("회원가입에 실패했습니다.");
    }
  };

  // checkbox
  const [personalInfo, setPersonalInfo] = useState(false);
  const [fourteen, setFourteen] = useState(false);

  // 회원가입
  const signupHandler = () => {
    setErrorType("");
    if (inputs.password !== inputs.verifyPassword) {
      setErrorType("verifyPassword");
    } else if (!personalInfo || !fourteen) {
      alert("약관 동의에 체크해주세요.");
    } else {
      axios
        .post("http://test.ekkozulu.com:8090/api/auth/signup", {
          username: inputs.nickname,
          password: inputs.password,
        })
        .then(function (response) {
          console.log(response);
          alert(response.data.message);
          navigate("/ex");
        })
        .catch(function (error) {
          console.log(error);
          errorCheck(error);
        });
    }
  };

  return (
    <div>
      <div className='bg-modalGray/60 text-whiteF fixed inset-0 m-auto flex h-max w-max flex-col items-center justify-center rounded-3xl px-20 py-4'>
        <div className='bg-logoGray mb-2.5 mt-7 h-12 w-12 rounded-full'></div>
        <h1 className='mb-5 text-3xl'>회원가입</h1>
        <div>
          <div className='m-2.5 w-96'>
            <label htmlFor='nickname' className='block text-lg font-medium leading-6 text-teal-500'>
              리더보드에서 사용할 닉네임
            </label>
            <div className="relative mt-0 rounded-md shadow-sm">
              <input
                type="text"
                name="nickname"
                id="nickname"
                className={`block w-full rounded-xl border-0 px-4 py-3  ring-1 ring-inset ring-teal-500 focus:ring-1 focus:ring-inset focus:ring-teal-500 bg-inputBg/[0.55] text-lg ${
                  errorType === "username"
                    ? "text-red-900 placeholder:text-red-300 pr-10"
                    : "text-whiteF shadow-sm placeholder:text-gray-400"
                }`}
                placeholder="사용할 닉네임"
                onChange={inputChangeHandler}
                defaultValue={
                  errorType === "username" ? `${inputs.nickname}` : ""
                }
                aria-invalid={errorType === "username" && "true"}
                aria-describedby={errorType === "username" && "nickname-error"}
              />
            </div>
            {errorType === "username" && (
              <p
                className="mt-0 text-xs underline text-red-500"
                id="nickname-error"
              >
                {errorMsg}
              </p>
            )}
          </div>
        </div>
        <div className="m-2.5 w-96">
          <label
            htmlFor='password'
            className='flex justify-between text-lg font-medium leading-6 text-teal-500'
          >
            <p>비밀번호</p>
          </label>
          <div className="relative mt-0 rounded-md shadow-sm">
            <input
              type={showPW ? "text" : "password"}
              name="password"
              id="password"
              className={`block w-full rounded-xl border-0 px-4 py-3  ring-1 ring-inset ring-teal-500 focus:ring-1 focus:ring-inset focus:ring-teal-500 bg-inputBg/[0.55] text-lg ${
                errorType === "password"
                  ? "text-red-900 placeholder:text-red-300 pr-10"
                  : "text-whiteF shadow-sm placeholder:text-gray-400"
              }`}
              placeholder="비밀번호를 입력해주세요."
              onChange={inputChangeHandler}
              defaultValue={
                errorType === "password" ? `${inputs.password}` : ""
              }
              aria-invalid={errorType === "password" && "true"}
              aria-describedby={errorType === "password" && "password-error"}
            />
            <div
              className='pointer-events-auto absolute inset-y-0 right-0 flex items-center pr-3'
              onClick={() => {
                setShowPW(!showPW);
              }}
            >
              {showPW ? (
                <EyeIcon className='text-whiteF mx-1 h-4 w-4' />
              ) : (
                <EyeSlashIcon className='text-whiteF h-5 w-5' aria-hidden='true' />
              )}
            </div>
          </div>
          {errorType === "password" && (
            <p
              className="mt-0 text-xs underline text-red-500"
              id="password-error"
            >
              {errorMsg}
            </p>
          )}
        </div>
        <div className='m-2.5 w-96'>
          <label
            htmlFor='verifyPassword'
            className='flex justify-between text-lg font-medium leading-6 text-teal-500'
          >
            <p>비밀번호 확인</p>
          </label>
          <div className="relative mt-0 rounded-md shadow-sm">
            <input
              type={showVerifyPW ? "text" : "password"}
              name="verifyPassword"
              id="verifyPassword"
              className={`block w-full rounded-xl border-0 px-4 py-3  ring-1 ring-inset ring-teal-500 focus:ring-1 focus:ring-inset focus:ring-teal-500 bg-inputBg/[0.55] text-lg ${
                errorType === "verifyPassword"
                  ? "text-red-900 placeholder:text-red-300 pr-10"
                  : "text-whiteF shadow-sm placeholder:text-gray-400"
              }`}
              placeholder="비밀번호 재입력"
              onChange={inputChangeHandler}
              defaultValue={
                errorType === "verifyPassword" ? `${inputs.verifyPassword}` : ""
              }
              aria-invalid={errorType === "password" && "true"}
              aria-describedby={
                errorType === "password" && "verifyPassword-error"
              }
            />
            <div
              className='pointer-events-auto absolute inset-y-0 right-0 flex items-center pr-3'
              onClick={() => {
                setShowVerifyPW(!showVerifyPW);
              }}
            >
              {showVerifyPW ? (
                <EyeIcon className='text-whiteF mx-1 h-4 w-4' />
              ) : (
                <EyeSlashIcon className='text-whiteF h-5 w-5' aria-hidden='true' />
              )}
            </div>
          </div>
          {errorType === "verifyPassword" && (
            <p
              className="mt-0 text-xs underline text-red-500"
              id="verifyPassword-error"
            >
              비밀번호가 일치하지 않습니다.
            </p>
          )}
        </div>
        <div>
          <div className='mb-3 mt-3.5 text-left'>
            <div className='flex'>
              <input
                id="comments"
                aria-describedby="comments-description"
                name="comments"
                type="checkbox"
                className="h-5 w-5 rounded border-teal-500 text-teal-500 focus:ring-teal-500 mr-1.5"
                onChange={(e) => {
                  setPersonalInfo(e.target.checked);
                }}
              />
              <p className="text-sm" id="comments-description">
                개인정보 수집 및 이용에 동의합니다.
              </p>
            </div>
            <a
              href="http://localhost:5173/ex"
              target="-blank"
              className="text-teal-500 text-xs ml-7 underline"
            >
              약관 자세히 보기
            </a>
          </div>
          <div className='flex text-left'>
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-5 w-5 rounded border-teal-500 text-teal-500 focus:ring-teal-500 mr-1.5"
              onChange={(e) => {
                setFourteen(e.target.checked);
              }}
            />
            <p className='text-sm'>만 14세 이상입니다.</p>
          </div>
        </div>
        <div className='m-10'>
          <button
            type="button"
            className="h-16 font-sans rounded-full bg-teal-800 px-20 py-3 text-xl text-white shadow-sm hover:bg-teal-700"
            onClick={signupHandler}
          >
            가입하고 내 랭킹 확인하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
