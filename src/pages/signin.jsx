import { useState } from "react";
import "../index.css";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

function Signin() {
  const [showPW, setShowPW] = useState(false);
  const [showVerifyPW, setShowVerifyPW] = useState(false);

  return (
    <div>
      <div className="w-max h-max bg-slate-800/60 flex flex-col items-center justify-center fixed inset-0 m-auto text-whiteF rounded-3xl px-20 py-4">
        <div className="bg-logoGray w-12 h-12 rounded-full mb-2.5 mt-7"></div>
        <h1 className="text-3xl mb-7">회원가입</h1>
        <div>
          <div className="m-2.5 w-96">
            <label
              htmlFor="nickname"
              className="block text-sm font-medium leading-6 text-teal-500"
            >
              리더보드에서 사용할 닉네임
            </label>
            {/* <div className="mt-0">
            <input
              type="text"
              name="nickname"
              id="nickname"
              className="block w-full rounded-md border-0 px-1.5 py-1.5 shadow-sm ring-1 ring-inset ring-teal-500 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-teal-500 bg-transparent text-whiteF"
              placeholder="사용할 닉네임"
            />
          </div> */}
            <div className="mt-0">
              <input
                type="text"
                name="nickname"
                id="nickname"
                className="block w-full rounded-md border-0 px-1.5 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-teal-500 placeholder:text-red-300 focus:ring-1 focus:ring-inset focus:ring-teal-500 bg-transparent"
                placeholder="사용할 닉네임"
                defaultValue="error nickname"
                aria-invalid="true"
                aria-describedby="email-error"
              />
            </div>
            <p className="mt-0 text-sm underline text-red-500" id="email-error">
              Error message.
            </p>
          </div>
        </div>
        <div className="m-2.5 w-96">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-teal-500"
          >
            E-mail 주소
          </label>
          {/* <div className="mt-0">
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 px-1.5 py-1.5  shadow-sm ring-1 ring-inset ring-teal-500 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-teal-500  bg-transparent text-whiteF"
            placeholder="you@example.com"
          />
        </div> */}
          <div className="relative mt-0 rounded-md shadow-sm">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 px-1.5 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-teal-500 placeholder:text-red-300 focus:ring-1 focus:ring-inset focus:ring-teal-500 bg-transparent"
              placeholder="you@example.com"
              defaultValue="adamwathan"
              aria-invalid="true"
              aria-describedby="email-error"
            />
          </div>
          <p className="mt-0 text-sm underline text-red-500" id="email-error">
            Not a valid email address.
          </p>
        </div>

        <div className="m-2.5 w-96">
          <label
            htmlFor="password"
            className="flex text-sm justify-between font-medium leading-6 text-teal-500"
          >
            <p>비밀번호</p>
            {/* <div className="flex items-center">
            <EyeIcon className="h-4 w-4 mx-1 text-whiteF" />
            <p className="mx-1 text-whiteF">비밀번호 보이기</p>
          </div> */}
          </label>
          {/* <div className="relative mt-0 rounded-md shadow-sm">
          <input
            type={showPW ? "text" : "password"}
            name="password"
            id="password"
            className="block w-full rounded-md border-0 px-1.5 py-1.5 shadow-sm ring-1 ring-inset ring-teal-500 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-teal-500 bg-transparent text-whiteF"
            placeholder="비밀번호를 입력해주세요."
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
        </div> */}
          <div className="relative mt-0 rounded-md shadow-sm">
            <input
              type={showPW ? "text" : "password"}
              name="password"
              id="password"
              className="block w-full rounded-md border-0 px-1.5 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-teal-500 placeholder:text-red-300 focus:ring-1 focus:ring-inset focus:ring-teal-500 bg-transparent"
              placeholder="비밀번호를 입력해주세요."
              defaultValue="1234567"
              aria-invalid="true"
              aria-describedby="email-error"
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
          <p className="mt-0 text-sm underline text-red-500" id="email-error">
            8자리 이상 입력하세요.
          </p>
        </div>
        <div className="m-2.5 w-96">
          <label
            htmlFor="verifyPassword"
            className="flex text-sm justify-between font-medium leading-6 text-teal-500"
          >
            <p>비밀번호 확인</p>
            {/* <div className="flex items-center">
            <EyeIcon className="h-4 w-4 mx-1 text-whiteF" />
            <p className="mx-1 text-whiteF">비밀번호 보이기</p>
          </div> */}
          </label>
          {/* <div className="relative mt-0 rounded-md shadow-sm">
          <input
            type={showVerifyPW ? "text" : "password"}
            name="verifyPassword"
            id="verifyPassword"
            className="block w-full rounded-md border-0 px-1.5 py-1.5 shadow-sm ring-1 ring-inset ring-teal-500 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-teal-500 bg-transparent text-whiteF"
            placeholder="비밀번호 재입력"
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
        </div> */}
          <div className="relative mt-0 rounded-md shadow-sm">
            <input
              type={showVerifyPW ? "text" : "password"}
              name="verifyPassword"
              id="verifyPassword"
              className="block w-full rounded-md border-0 px-1.5 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-teal-500 placeholder:text-red-300 focus:ring-1 focus:ring-inset focus:ring-teal-500 bg-transparent"
              placeholder="비밀번호 재입력"
              defaultValue="12345678"
              aria-invalid="true"
              aria-describedby="email-error"
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
          <p className="mt-0 text-sm underline text-red-500" id="email-error">
            비밀번호가 일치하지 않아요.
          </p>
        </div>
        <div>
          <div className="text-left mt-3.5 mb-3">
            <div className="flex">
              <input
                id="comments"
                aria-describedby="comments-description"
                name="comments"
                type="checkbox"
                className="h-4 w-4 rounded border-teal-500 text-teal-500 focus:ring-teal-500 mr-1.5 mt-0.5"
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
              className="h-4 w-4 rounded border-teal-500 text-teal-500 focus:ring-teal-500 mr-1.5 mt-0.5"
            />
            <p className="text-sm">만 14세 이상입니다.</p>
          </div>
        </div>
        <div className="m-10">
          <button
            type="button"
            className="font-sans rounded-full bg-teal-800 px-20 py-3 text-base text-white shadow-sm hover:bg-teal-700"
          >
            가입하고 내 랭킹 확인하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
