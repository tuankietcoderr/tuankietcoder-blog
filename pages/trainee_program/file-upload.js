import { PageSEO } from '@/components/SEO'
import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify'
import readXlsxFile from 'read-excel-file'

const FileUpload = () => {
  const [json, setJson] = React.useState(null)

  const onChange = (e) => {
    e.preventDefault()
    if (e.target.files[0] === null || e.target.files.length === 0) {
      toast.error('Please select a file')
      return
    }
    readXlsxFile(e.target.files[0])
      .then((res) => {
        console.log(res)
        let i = 0
        var headers = []
        const json_object = []

        res.map((row, index) => {
          if (i == 0) headers = row
          if (i > 0) {
            var temp = {}
            for (let x = 0; x < row.length; x++) {
              temp[headers[x]] = row[x]
            }
            json_object.push(temp)
          }
          i++
        })
        console.log(json_object)
        setJson(JSON.stringify(json_object, null, 2))
      })
      .catch((err) => {
        setJson(null)
        toast.error(err.message)
      })
  }
  const [password, setPassword] = React.useState('')
  const handleUpdateData = async () => {
    console.log(password)
    if (password !== process.env.NEXT_PUBLIC_PASSWORD_TO_UPDATE) {
      toast.error('Wrong password')
      return
    }
    try {
      await axios
        .post('/api/trainee_program', {
          json,
        })
        .then((res) => res.data)
        .then((res) => {
          toast.success(res.message)
          setIsOpen(false)
        })
    } catch (error) {
      toast.error('Error updating data')
    }
  }
  const [isOpen, setIsOpen] = React.useState(false)

  const handleOpen = () => {
    if (json === null) {
      toast.error('Please select a file')
      return
    }
    setIsOpen(true)
  }

  return (
    <>
      <PageSEO title={'Trainee Program File Upload'} />
      <h1 className="text-2xl font-bold">Excel file upload for updating trainee API data</h1>
      <br />
      <input type="file" id="trainee-file-upload" onChange={onChange} accept=".xlsx" />
      <br />
      <br />
      <textarea
        name="json-data"
        className="boreder-none min-h-[200px] min-w-full rounded-md outline-none dark:bg-gray-700"
        value={json ? json : ''}
        readOnly
      />
      <button
        className="dark: float-right mt-4 rounded bg-primary-500 px-4 py-2 text-white sm:hover:bg-primary-600"
        onClick={handleOpen}
      >
        Update data
      </button>
      {isOpen && (
        <PopUp
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          password={password}
          setPassword={setPassword}
          handleUpdate={handleUpdateData}
        />
      )}
    </>
  )
}

export default FileUpload

const PopUp = ({ isOpen, setIsOpen, password, setPassword, handleUpdate }) => {
  const onChange = (e) => {
    setPassword(e.target.value)
  }
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 grid min-h-screen place-items-center bg-gray-300/[0.7]">
        <div className="w-[400px] rounded-md !bg-white p-4">
          <label htmlFor="password-upload">
            <div className="mb-2 dark:text-black">Please enter password to update data</div>
            <input
              type="text"
              id="password-upload"
              onChange={onChange}
              className="w-full rounded-md dark:text-black"
            />
          </label>
          <button
            onClick={handleUpdate}
            className="float-right mt-4 rounded-md bg-primary-500 px-4 py-2 text-white dark:text-black sm:hover:bg-primary-600"
          >
            Submit
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="float-right mt-4 mr-4 rounded-md px-4 py-2 text-red-500 sm:hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  )
}
