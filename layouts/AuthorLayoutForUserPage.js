import axios from 'axios'
import { BASE_API_URL } from 'constants'
import { AuthContext } from 'contexts/AuthContext'
import { useRouter } from 'next/router'
import { useCallback, useContext, useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

const { default: formatDate } = require('@/lib/utils/formatDate')

const UpdateBoxModal = ({ setUpdateBoxModal, handleUpdate, formData, setFormData }) => {
  const onInputChange = (e) => {
    const { target } = e
    setFormData((prev) => ({ ...prev, [target.name]: target.value }))
  }
  const hobbies =
    typeof formData.hobbies === 'string' ? formData.hobbies.split(',') : formData.hobbies
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-400/[0.8]">
        <div className="rounded-md bg-white p-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-center text-2xl font-extrabold">Cập nhật thông tin</h2>
            <div>
              <label className="sr-only" htmlFor="fullName-input">
                Họ tên
              </label>
              <input
                className="block w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
                id="fullName-input"
                name="fullName"
                placeholder="Họ và tên"
                required
                type="text"
                onChange={onInputChange}
                value={formData.fullName}
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="school-input">
                Trường học
              </label>
              <input
                className="block w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
                id="school-input"
                name="school"
                placeholder="Tên trường học"
                required
                type="text"
                onChange={onInputChange}
                value={formData.school}
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="company-input">
                Tên công ty
              </label>
              <input
                className="block w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
                id="company-input"
                name="company"
                placeholder="Tên công ty"
                required
                type="text"
                onChange={onInputChange}
                value={formData.company}
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="hobbies-input">
                Sở thích
              </label>
              <input
                className="block w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
                id="hobbies-input"
                name="hobbies"
                placeholder="Sở thích (cách nhau bởi dấu phẩy). Ví dụ: cpp, c, c#"
                required
                type="text"
                title="Sở thích (cách nhau bởi dấu phẩy). Ví dụ: cpp, c, c#"
                onChange={onInputChange}
                value={hobbies}
              />
            </div>
            {/* <div className="flex"> */}
            <button
              onClick={handleUpdate}
              className="w-full rounded-md bg-primary-500 p-2 text-center text-white sm:hover:bg-primary-700"
            >
              Cập nhật
            </button>
            <button
              onClick={() => setUpdateBoxModal(false)}
              className="w-full rounded-md bg-red-500 p-2 text-center text-white sm:hover:bg-red-700"
            >
              Hủy
            </button>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

const DeleteBoxModal = ({ setDeleteBoxModal, handleDelete }) => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-400/[0.8]">
        <div className="w-[300px] rounded-md bg-white p-6">
          <div className="flex flex-col gap-y-6">
            <h2 className="text-center text-2xl font-extrabold">Xóa tài khoản</h2>

            <div className="border-b " />
            <div className="flex gap-x-2">
              <button
                onClick={handleDelete}
                className="w-full rounded-md bg-red-500 p-2 text-center text-white sm:hover:bg-red-700"
              >
                Xác nhận
              </button>
              <button
                onClick={() => setDeleteBoxModal(false)}
                className="w-full rounded-md border p-2 text-center sm:hover:bg-gray-300"
              >
                Thoát
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const AuthorLayoutForUserPage = ({ children, username, createdAt, additional_info }) => {
  const router = useRouter()
  const {
    authState: { user },
    logOutUser,
  } = useContext(AuthContext)
  const [formData, setFormData] = useState({
    fullName: user?.additional_info?.fullName || '',
    school: user?.additional_info?.school || '',
    company: user?.additional_info?.company || '',
    hobbies: user?.additional_info?.hobbies || [],
  })

  const [updateBoxModal, setUpdateBoxModal] = useState(false)
  const [deleteBoxModal, setDeleteBoxModal] = useState(false)

  const handleUpdate = async () => {
    const hobbies =
      typeof formData.hobbies === 'string' ? formData.hobbies.split(',') : formData.hobbies
    await axios
      .put(`${BASE_API_URL}/api/user/${username}`, { additional_info: { ...formData, hobbies } })
      .then((res) => res.data)
      .then((res) => {
        setUpdateBoxModal(false)
        toast(res.message)
      })
      .then(() => router.reload())
      .catch((err) => toast(err.message))
  }

  const handleDelete = async () => {
    await axios
      .delete(`${BASE_API_URL}/api/user/${username}`)
      .then((res) => res.data)
      .then((res) => console.log(res.message))
      .then(() => router.replace('/'))
      .then(() => router.reload())
      .catch((err) => {
        toast(err.message)
        console.log(err.message)
      })
  }

  const MemoToastify = useCallback((props) => <ToastContainer {...props} />, [])

  return (
    <>
      <MemoToastify position="bottom-right" autoClose={3000} />

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{username}</h3>
            <div className="flex flex-col gap-y-4 pt-6 text-justify">
              <p className="text-center text-sm">Tham gia vào {formatDate(createdAt)}</p>
              {additional_info.school && (
                <div className="flex justify-between gap-x-4 text-sm">
                  <span>Trường học:</span>{' '}
                  <span className="max-w-[160px] font-bold">{additional_info.school}</span>
                </div>
              )}
              {additional_info.company && (
                <div className="flex justify-between gap-x-4 text-sm">
                  <span>Công ty:</span>{' '}
                  <span className="max-w-[160px] font-bold">{additional_info.company}</span>
                </div>
              )}
              {additional_info.hobbies && (
                <div className="flex justify-between gap-x-4 text-sm">
                  <span>Sở thích:</span>{' '}
                  <span className="max-w-[160px] font-bold">
                    {additional_info.hobbies.join(', ') || ''}
                  </span>
                </div>
              )}
              {user && user.username === username && (
                <>
                  <button
                    className="w-full rounded-md bg-primary-500 p-2 text-center text-white sm:hover:bg-primary-700"
                    onClick={() => {
                      setFormData(user ? user.additional_info : {})
                      setUpdateBoxModal(true)
                    }}
                  >
                    Cập nhật thông tin
                  </button>
                  <button
                    className="w-full rounded-md bg-red-500 p-2 text-center text-white sm:hover:bg-red-700"
                    onClick={() => setDeleteBoxModal(true)}
                  >
                    Xóa tài khoản
                  </button>
                  <button
                    onClick={() => {
                      logOutUser()
                      router.replace('/')
                    }}
                    className="w-full rounded-md border p-2 text-center sm:hover:bg-gray-300"
                  >
                    Đăng xuất
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="max-w-none pt-8 pb-8 xl:col-span-2">{children}</div>
        </div>
      </div>
      {updateBoxModal && (
        <UpdateBoxModal
          handleUpdate={handleUpdate}
          setUpdateBoxModal={setUpdateBoxModal}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {deleteBoxModal && (
        <DeleteBoxModal handleDelete={handleDelete} setDeleteBoxModal={setDeleteBoxModal} />
      )}
    </>
  )
}

export default AuthorLayoutForUserPage
