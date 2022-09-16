import formatDate from '@/lib/utils/formatDate'
import React, { useContext, useEffect, useState } from 'react'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import axios from 'axios'
import { BASE_API_URL } from 'constants'
import { AuthContext } from 'contexts/AuthContext'

const ListItemCard = ({ slug, date, title, summary, tags, handleSavePost }) => {
  const {
    authState: { user },
  } = useContext(AuthContext)
  return (
    <li key={slug} className="py-12">
      <article>
        <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              <time dateTime={date}>{formatDate(date)}</time>
            </dd>
          </dl>
          <div className="space-y-5 xl:col-span-3">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                  <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                    {title}
                  </Link>
                </h2>
                <div className="flex flex-wrap">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              </div>
              <div className="prose max-w-none text-justify text-gray-500 dark:text-gray-400">
                {summary}
              </div>
            </div>
            <div className="flex items-center justify-between text-base font-medium leading-6">
              <Link
                href={`/blog/${slug}`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`Read "${title}"`}
              >
                Read more &rarr;
              </Link>
              {/* <button onClick={handleSavePost}>
                {!user?.saved_posts.includes(slug) ? (
                  <svg
                    aria-label="Lưu"
                    className="_ab6-"
                    color="rgb(20 184 166)"
                    fill="#262626"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m20 21-8-7.56L4 21V3h16v18z"
                    />
                  </svg>
                ) : (
                  <svg
                    aria-label="Gỡ"
                    className="_ab6-"
                    color="rgb(20 184 166)"
                    fill="rgb(20 184 166)"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M20 22a.999.999 0 01-.687-.273L12 14.815l-7.313 6.912A1 1 0 013 21V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1z"></path>
                  </svg>
                )}
              </button> */}
            </div>
          </div>
        </div>
      </article>
    </li>
  )
}

export default ListItemCard
