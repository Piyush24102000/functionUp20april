import Image from 'next/image'
import { useState, useEffect } from 'react'


export default function Home() {
  const [student, setstudent] = useState()
  const [roll, setroll] = useState()
  const [father, setfather] = useState()
  const [mother, setmother] = useState()
  const [result, setResult] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const obj = {
      student,
      roll,
      father,
      mother
    }
    // console.log(obj)
    setResult([...result,obj])
  }
  useEffect(() => {
    console.log(result)
  }, [result])

  return (
    <>
      <div className='text-center text-xl mt-10'>
        <u>Function Up 20 April Assignment</u>
        <p className='mt-5'><u>Problem Statement:-</u> Create a component student form and add four input boxes and collect student information.
          Create a submit button and on click of submit button, read all the values from the form and show it in a table</p>
        <h1 className='mt-10 text-3xl '>  ★ Student Form  ★</h1>
      </div>

      {/* Form below */}
      <div className="flex justify-center items-center mt-8">
        <form className="w-full max-w-sm">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-cyan-300 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                Student :
              </label>
            </div>
            <div className="md:w-2/3">
              <input onChange={(e) => { setstudent(e.target.value) }} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-cyan-300	 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                Roll No :
              </label>
            </div>
            <div className="md:w-2/3">
              <input onChange={(e) => { setroll(e.target.value) }} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number" />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-cyan-300	 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                Father Name :
              </label>
            </div>
            <div className="md:w-2/3">
              <input onChange={(e) => { setfather(e.target.value) }} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-cyan-300	 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                Mother Name:
              </label>
            </div>
            <div className="md:w-2/3">
              <input onChange={(e) => { setmother(e.target.value) }} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
            </div>
          </div>

          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button onClick={handleSubmit} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                Submit
              </button>
            </div>
          </div>
        </form>

      </div>

      {/* Table below */}

      <div className="relative overflow-x-auto mt-10 ">
        <table className="mx-auto max-w-4xl w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Student Name
              </th>
              <th scope="col" className="px-6 py-3">
                Roll No.
              </th>
              <th scope="col" className="px-6 py-3">
                Father Name
              </th>
              <th scope="col" className="px-6 py-3">
                Mother Name
              </th>
            </tr>
          </thead>
          <tbody>

            {
              result.map((i, index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">
                    {i.student}
                  </td>
                  <td className="px-6 py-4">
                    {i.roll}
                  </td>
                  <td className="px-6 py-4">
                    {i.father}
                  </td>
                  <td className="px-6 py-4">
                    {i.mother}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>


    </>
  )
}
