import ListItemCard from '@/components/card/ListItemCard'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import AuthorLayoutForUserPage from '@/layouts/AuthorLayoutForUserPage'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import axios from 'axios'
import { memo, useEffect, useMemo, useRef, useState } from 'react'
import { BASE_API_URL } from '../../constants'

export async function getServerSideProps({ params }) {
  try {
    const username = params.username
    const posts = await getAllFilesFrontMatter('blog')
    // const response = await axios.get(`${BASE_API_URL}/api/user/${username}`)
    // const user = response.data.user
    // const filterPosts = posts.filter((post) => user.saved_posts.includes(post.slug))
    return {
      props: {
        posts,
        username,
        // user,
      },
    }
  } catch {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }
}

const UserDetails = ({ posts, username }) => {
  const inputRef = useRef(null)

  // useEffect(() => {
  //   window.addEventListener('keyup', (e) => {
  //     if (e.key === '/') {
  //       inputRef.current?.focus()
  //     }
  //   })
  //   return () => {
  //     window.removeEventListener('keyup', () => {
  //       inputRef.current = null
  //     })
  //   }
  // }, [])

  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      await axios
        .get(`/api/user/${username}`)
        .then((res) => res.data)
        .then((res) => {
          setUser(res.user)
        })
    }
    fetchUser()
  }, [username])
  console.log(user)

  const [searchValue, setSearchValue] = useState('')
  const SavedPosts = useMemo(() => {
    return posts.filter((post) => user?.saved_posts.includes(post.slug))
  }, [user?.saved_posts, posts])
  const filteredBlogPosts = useMemo(
    () =>
      SavedPosts.filter((frontMatter) => {
        const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
        return searchContent.toLowerCase().includes(searchValue.toLowerCase())
      }),
    [SavedPosts, searchValue]
  )

  return (
    <>
      <PageSEO title={`${username}'s page`} description={`About ${username}`} />
      <AuthorLayoutForUserPage {...user}>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Bài viết đã lưu
            </h1>
            <div className="relative max-w-lg">
              <input
                ref={inputRef}
                aria-label="Thử nhập react, framework,..."
                type="text"
                // value={inputRef.current.value}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder={inputRef.current?.placeholder || 'Tìm kiếm'}
                onFocus={() => (inputRef.current.placeholder = 'Thử nhập react, framework,...')}
                onBlur={() => (inputRef.current.placeholder = 'Tìm kiếm')}
                className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
              />
              <svg
                className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <ul>
            {!filteredBlogPosts.length && 'No posts found.'}
            {filteredBlogPosts.map((frontMatter) => (
              <ListItemCard
                {...frontMatter}
                key={frontMatter.slug}
                // handleSavePost={() => handleSavePost(frontMatter.slug)}
              />
            ))}
          </ul>
        </div>
      </AuthorLayoutForUserPage>
    </>
  )
}

export default memo(UserDetails)
