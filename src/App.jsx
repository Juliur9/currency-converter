import { CurrencyOptions } from './CurrencyOptions'
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([])

  const [value1, setValue1] = useState('1')
  const [value2, setValue2] = useState('1')

  const [cur1, setCur1] = useState('USD')
  const [cur2, setCur2] = useState('USD')

  const [lastChange, setLastChange] = useState('1')

  function handleCurrencyChange(value, field) {
    console.log(value, field)

    if (field === '1') {
      if (lastChange === '1') {
        convertCurrency(value, cur2, value1, lastChange)
        console.log(value, cur2, value1, lastChange)
      } else if (lastChange === '2') {
        convertCurrency(value, cur2, value2, lastChange)
        console.log(value, cur2, value2, lastChange)
      }
    }
    if (field === '2') {
      if (lastChange === '1') {
        convertCurrency(cur1, value, value1, lastChange)
        console.log(cur1, value, value1, lastChange)
      } else if (lastChange === '2') {
        convertCurrency(cur1, value, value2, lastChange)
        console.log(cur1, value, value2, lastChange)
      }
    }
  }

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

  function convertCurrency(fromCurrency, toCurrency, amount, field) {
    console.log('Converting from:', fromCurrency, 'to:', toCurrency)

    //console.log(data)
    if (!data.rates) return
    const fromRate = data.rates[fromCurrency]
    const toRate = data.rates[toCurrency]

    const convertedAmount = (amount / fromRate) * toRate

    if (field === '1') {
      setValue2(convertedAmount.toFixed(2))
    }
    if (field === '2') {
      setValue1(convertedAmount.toFixed(2))
    }
  }

  return (
    <>
      <div className="mt-10 flex flex-col items-center">
        <div className="flex flex-col items-center gap-5 rounded-lg bg-slate-100 p-6 shadow-lg">
          <div className="flex items-center justify-center gap-4">
            <div className="flex w-[450px] items-center justify-between rounded-lg border-2 border-gray-300 bg-gray-100 p-4 px-6 shadow-md">
              <CurrencyOptions
                onChange={(value) => {
                  setCur1(value)
                  handleCurrencyChange(value, '1')
                }}
              />
            </div>
            <input
              type="number"
              className="h-8 w-36 rounded-lg bg-gray-200 p-2"
              value={value1}
              onChange={(e) => {
                const newValue = e.target.value
                setValue1(newValue)
                convertCurrency(cur1, cur2, newValue, '1')
                setLastChange('1')
              }}
            />
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="flex w-[450px] items-center justify-between rounded-lg border-2 border-gray-300 bg-gray-100 p-4 px-6 shadow-md">
              <CurrencyOptions
                onChange={(value) => {
                  setCur2(value)
                  handleCurrencyChange(value, '2')
                }}
              />
            </div>
            <input
              type="number"
              className="h-8 w-36 rounded-lg bg-gray-200 p-2"
              value={value2}
              onChange={(e) => {
                const newValue = e.target.value
                setValue2(newValue)
                convertCurrency(cur2, cur1, newValue, '2')
                setLastChange('2')
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
