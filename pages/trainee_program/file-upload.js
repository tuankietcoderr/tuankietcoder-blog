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

  const handleUpdateData = async () => {
    if (json === null) {
      toast.error('Please select a file')
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
        })
    } catch (error) {
      toast.error('Error updating data')
    }
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
        onClick={handleUpdateData}
      >
        Update data
      </button>
    </>
  )
}

export default FileUpload
