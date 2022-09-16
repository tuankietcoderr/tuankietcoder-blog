import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Image from 'next/image'
import { AuthContext } from 'contexts/AuthContext'
import { useContext } from 'react'

const LayoutWrapper = ({ children }) => {
  const {
    authState: { user },
    logOutUser,
  } = useContext(AuthContext)

  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3 grid h-[50px] w-[50px] place-items-center">
                  <Image
                    src="/static/images/logo.png"
                    width={100}
                    height={100}
                    alt="tuankietcoder blog logo"
                    className="rounded-md"
                    quality={100}
                    objectFit="contain"
                  />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            {!user ? (
              <Link href="/signin">
                <button className="rounded-md bg-primary-500 py-2 px-4 text-white sm:hover:bg-primary-700">
                  Sign In
                </button>
              </Link>
            ) : (
              <Link href={`/user/${user?.username}`}>
                <button className="rounded-md bg-primary-500 py-2 px-4 text-white sm:hover:bg-primary-700">
                  Profile
                </button>
              </Link>
            )}
            {/* <button className="ml-2 rounded-md border border-gray-200 py-2 px-4">Register</button> */}
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
