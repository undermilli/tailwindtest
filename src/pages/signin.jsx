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
    email: "",
    password: "",
    verifyPassword: "",
  });

  const inputChangeHandler = (e) => {
    setErrorMsg("");
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  //errorMsg
  const [errorType, setErrorType] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // checkbox
  const [personalInfo, setPersonalInfo] = useState(false);
  const [fourteen, setFourteen] = useState(false);

  // 회원가입
  const signupHandler = () => {
    if (!personalInfo || !fourteen) {
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
          setErrorType(error.response.data.details[0].path[0]);
          setErrorMsg(error.response.data.details[0].message);
        });
    }
  };

  return (
    <div>
      <div className="w-max h-max bg-modalGray/60 flex flex-col items-center justify-center fixed inset-0 m-auto text-whiteF rounded-3xl px-20 py-4">
        <div className="bg-logoGray w-12 h-12 rounded-full mb-2.5 mt-7"></div>
        <h1 className="text-3xl mb-5">회원가입</h1>
        <div>
          <div className="m-2.5 w-96">
            <label
              htmlFor="nickname"
              className="block text-lg font-medium leading-6 text-teal-500"
            >
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
                id="email-error"
              >
                {errorMsg}
              </p>
            )}
          </div>
        </div>
        <div className="m-2.5 w-96">
          <label
            htmlFor="email"
            className="block text-lg font-medium leading-6 text-teal-500"
          >
            E-mail 주소
          </label>
          <div className="relative mt-0 rounded-md shadow-sm">
            <input
              type="email"
              name="email"
              id="email"
              className={`block w-full rounded-xl border-0 px-4 py-3  ring-1 ring-inset ring-teal-500 focus:ring-1 focus:ring-inset focus:ring-teal-500 bg-inputBg/[0.55] text-lg ${
                errorType === "email"
                  ? "text-red-900 placeholder:text-red-300 pr-10"
                  : "text-whiteF shadow-sm placeholder:text-gray-400"
              }`}
              placeholder="you@example.com"
              onChange={inputChangeHandler}
              defaultValue={errorType === "email" ? `${inputs.email}` : ""}
              aria-invalid={errorType === "email" && "true"}
              aria-describedby={errorType === "email" && "email-error"}
            />
          </div>

          {errorType === "email" && (
            <p className="mt-0 text-xs underline text-red-500" id="email-error">
              Not a valid email address.
            </p>
          )}
        </div>

        <div className="m-2.5 w-96">
          <label
            htmlFor="password"
            className="flex text-lg justify-between font-medium leading-6 text-teal-500"
          >
            <p>비밀번호</p>
            {/* <div className="flex items-center">
            <EyeIcon className="h-4 w-4 mx-1 text-whiteF" />
            <p className="mx-1 text-whiteF">비밀번호 보이기</p>
            </div> */}
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
              className="pointer-events-auto absolute inset-y-0 right-0 flex items-center pr-3"
              onClick={() => {
                setShowPW(!showPW);
              }}
            >
              {showPW ? (
                <EyeIcon className="h-4 w-4 mx-1 text-whiteF" />
              ) : (
                <EyeSlashIcon
                  className="h-5 w-5 text-whiteF"
                  aria-hidden="true"
                />
              )}
            </div>
          </div>
          {errorType === "password" && (
            <p className="mt-0 text-xs underline text-red-500" id="email-error">
              {errorMsg}
            </p>
          )}
        </div>
        <div className="m-2.5 w-96">
          <label
            htmlFor="verifyPassword"
            className="flex text-lg justify-between font-medium leading-6 text-teal-500"
          >
            <p>비밀번호 확인</p>
            {/* <div className="flex items-center">
            <EyeIcon className="h-4 w-4 mx-1 text-whiteF" />
            <p className="mx-1 text-whiteF">비밀번호 보이기</p>
            </div> */}
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
              className="pointer-events-auto absolute inset-y-0 right-0 flex items-center pr-3"
              onClick={() => {
                setShowVerifyPW(!showVerifyPW);
              }}
            >
              {showVerifyPW ? (
                <EyeIcon className="h-4 w-4 mx-1 text-whiteF" />
              ) : (
                <EyeSlashIcon
                  className="h-5 w-5 text-whiteF"
                  aria-hidden="true"
                />
              )}
            </div>
          </div>
          {errorType === "verifyPassword" && (
            <p className="mt-0 text-xs underline text-red-500" id="email-error">
              비밀번호가 일치하지 않아요.
            </p>
          )}
        </div>
        <div>
          <div className="text-left mt-3.5 mb-3">
            <div className="flex">
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
              <p className="text-sm">개인정보 수집 및 이용에 동의합니다.</p>
            </div>
            <a
              href="http://localhost:5173/ex"
              className="text-teal-500 text-xs ml-7 underline"
            >
              약관 자세히 보기
            </a>
          </div>
          <div className="text-left flex">
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
            <p className="text-sm">만 14세 이상입니다.</p>
          </div>
        </div>
        <div className="m-10">
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
