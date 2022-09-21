import axios from 'axios'
import { AuthContext } from 'contexts/AuthContext'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useContext, useEffect, useMemo, useRef } from 'react'
import { toast, ToastContainer } from 'react-toastify'
const SignInPage = () => {
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)

  const router = useRouter()

  const { loginUser } = useContext(AuthContext)
  const handleSignIn = async () => {
    const username = usernameRef.current?.value
    const password = passwordRef.current?.value
    const pattern = new RegExp('^\\w[\\w.]{2,18}\\w$')
    if (!pattern.test(username)) {
      return toast('Tên người dùng không hợp lệ!')
    }
    const loginData = await loginUser({ username, password })
    if (!loginData.success) {
      toast(loginData.message)
      console.log(loginData)
    } else {
      console.log(loginData)
      router.replace('/')
    }
  }

  const MemoToastify = useCallback((props) => <ToastContainer {...props} />, [])

  return (
    <>
      <MemoToastify position="bottom-right" autoClose={3000} />
      <div className="fixed top-0 left-0 right-0 bottom-0 z-[1000] flex flex-col items-center justify-center gap-y-8 bg-white dark:bg-black">
        <Image
          alt="logo"
          src={'/static/favicons/android-icon-144x144.png'}
          width={100}
          height={100}
          priority
          className="rounded-md"
        />
        <h1 className="text-3xl font-extrabold">Đăng nhập</h1>
        <div
          className="flex flex-col gap-4"
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              handleSignIn()
            }
          }}
        >
          <div>
            <label className="sr-only" htmlFor="username-input">
              Tên người dùng
            </label>
            <input
              className="block w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
              id="username-input"
              name="username"
              placeholder="Tên người dùng"
              required
              type="text"
              ref={usernameRef}
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="password-input">
              Mật khẩu
            </label>
            <input
              className="block w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
              id="password-input"
              name="password"
              placeholder="Mật khẩu"
              required
              type="password"
              ref={passwordRef}
            />
          </div>
          <div>
            <button
              className="w-full rounded-md bg-primary-500 p-2 text-center text-white sm:hover:bg-primary-700"
              onClick={handleSignIn}
            >
              Đăng nhập
            </button>
            <div className="text-center text-black/[0.6]">hoặc</div>
            <Link href="/signup" passHref>
              <a>
                <button className="w-full rounded-md border p-2 text-center sm:hover:border-gray-300 sm:hover:bg-gray-200">
                  Đăng kí
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default SignInPage
