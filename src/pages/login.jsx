import backdrop from '../assets/images/backdrop.png';
import LogoIcon from '../assets/icons/LogoIcon';
import EyeIcon from '../assets/icons/EyeIcon';
import DeActivateIcon from '../assets/icons/deactivate';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div
      className='flex h-screen items-center justify-center bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage: `url(${backdrop})`,
      }}
    >
      <div className='flex h-[790px] w-[690px] flex-col items-center justify-center rounded-[24px] bg-[#80efe86b] px-[32px] leading-none text-[#ffffff]'>
        <div className='flex w-full max-w-[500px] flex-col gap-y-[40px]'>
          <div className='flex flex-col items-center gap-y-[14px]'>
            <LogoIcon />
            <div className='text-[32px]'>로그인</div>
          </div>
          <div className='flex w-full flex-col items-center gap-y-[23px]'>
            <div className='flex w-full flex-col gap-y-[4px]'>
              <label htmlFor='email' className='text-[18px]'>
                E-mail 주소
              </label>
              <input
                id='email'
                type='text'
                className='h-[56px] rounded-[12px] border border-solid border-[#ffffff] bg-[#6666666E] pr-[50px]'
              />
              <div className='mt-[3px] text-[14px] text-[#EE1D52]'>Error message</div>
            </div>
            <div className='flex w-full flex-col gap-y-[4px]'>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-[18px]'>
                  비밀번호
                </label>
                <div className='flex items-center gap-x-[9px]'>
                  <DeActivateIcon />
                  <button className='text-[#D9D9D9]'>비밀번호 보이지 않기</button>
                </div>
              </div>
              <div className='relative flex items-center'>
                <input
                  id='password'
                  type='text'
                  className='h-[56px] w-full rounded-[12px] border border-solid border-[#ffffff] bg-[#6666666E] pr-[50px]'
                />
                <div className='absolute right-[15px]'>
                  <EyeIcon />
                </div>
              </div>
              <div className='mt-[3px] text-[14px] text-[#EE1D52]'>Error message</div>
            </div>
            <div className='flex flex-col gap-y-[52px]'>
              <div className='flex flex-col gap-y-[8px]'>
                <button className='rounded-[40px] bg-[#005F60] px-[68px] py-[21px] text-[20px]'>
                  로그인 하고 내 점수 업데이트 하기
                </button>
                <div className='text-center text-[14px]'>
                  로그인 시 <Link className='text-[#C9CACA] underline'>이용약관</Link>과&nbsp;
                  <Link className='text-[#C9CACA] underline'>개인정보 취급방침</Link>에 동의하게
                  됩니다.
                </div>
              </div>
              <div className='flex w-full justify-between'>
                <Link className='text-[14px] text-[#C9CACA] underline'>
                  로그인에 어려움이 있으신가요?
                </Link>
                <Link className='text-[14px] text-[#C9CACA] underline'>비밀번호를 잊으셨나요?</Link>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-[50px] flex w-full items-center gap-x-[23px] p-[20px]'>
          <div className='h-[2px] w-full bg-[#04C2C480]' />
          <div className='whitespace-nowrap text-[22px] text-[#FFFFFFE5]'>처음 방문하셨나요?</div>
          <div className='h-[2px] w-full bg-[#04C2C480]' />
        </div>
        <button className='rounded-[40px] bg-[#04C2C4] px-[116px] py-[21px] text-[21px]'>
          가입하고 내 랭킹 확인하기
        </button>
      </div>
    </div>
  );
}
