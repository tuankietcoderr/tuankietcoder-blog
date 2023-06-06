import { BlogSEO } from '@/components/SEO'
import { GlobalContext } from 'contexts/GlobalContext'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'

const SoWaste = () => {
  const router = useRouter()
  const { setHideNav } = useContext(GlobalContext)
  useEffect(() => {
    setHideNav(true)
    router.events.on('routeChangeComplete', () => {
      setHideNav(false)
    })
    return () => {
      router.events.off('routeChangeComplete', () => {
        setHideNav(false)
      })
    }
  }, [setHideNav, router])
  return (
    <>
      <BlogSEO
        title={'Download SoWaste App'}
        images={'/static/images/sowaste.png'}
        summary="Download the SoWaste app to help you reduce your waste and help the environment."
        date={new Date()}
      />
      <div className="min-h-screen items-center justify-center">
        <Image
          src="/static/images/sowaste.png"
          alt="sowaste logo"
          width={200}
          height={100}
          className="h-full w-full object-contain"
        />
        <p>Download the SoWaste app to help you reduce your waste and help the environment.</p>
        <button className=" mt-4 rounded bg-primary-500 px-4 py-2 text-white sm:hover:bg-primary-600">
          <a href="/file/soWaste.apk" target="_self" download>
            Download
          </a>
        </button>
      </div>
    </>
  )
}

export default SoWaste
