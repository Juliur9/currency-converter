import { CurrencyOptions } from './CurrencyOptions'
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.exchangeratesapi.io/v1/latest?access_key=${import.meta.env.VITE_API_KEY}`
        )
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  console.log(data)

  return (
    <>
      <div className="mt-10 flex flex-col items-center bg-gray-50">
        <div className="flex flex-col items-center rounded-lg bg-slate-100 p-6 shadow-lg">
          <div className="mb-5 flex items-center justify-center gap-4">
            <div className="flex w-[510px] items-center justify-between rounded-lg border-2 border-gray-300 bg-gray-100 p-4 shadow-md">
              <label for="currencies" className="mr-4 text-lg">
                From Currency:
              </label>
              <CurrencyOptions />
            </div>
            <input
              type="number"
              className="h-8 w-36 rounded-lg bg-gray-200 p-2"
            />
          </div>

          <div className="mb-5 flex items-center justify-center gap-4">
            <div className="flex w-[510px] items-center justify-between rounded-lg border-2 border-gray-300 bg-gray-100 p-4 shadow-md">
              <label for="currencies" className="mr-4 text-lg">
                To Currency:
              </label>
              <CurrencyOptions />
            </div>
            <input
              type="number"
              disabled
              className="h-8 w-36 rounded-lg bg-gray-200 p-2"
            />
          </div>
          <button className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Convert
          </button>
        </div>
      </div>
    </>
  )
}

export default App
