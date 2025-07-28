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
        console.log('Fetched data:', result)
        setData(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    //fetchData()
    setData({
      success: true,
      timestamp: 1753713916,
      base: 'EUR',
      date: '2025-07-28',
      rates: {
        AED: 4.276736,
        AFN: 80.017754,
        ALL: 97.45419,
        AMD: 446.851704,
        ANG: 2.08388,
        AOA: 1067.731366,
        ARS: 1496.751686,
        AUD: 1.783265,
        AWG: 2.098202,
        AZN: 1.978714,
        BAM: 1.954422,
        BBD: 2.352222,
        BDT: 142.71614,
        BGN: 1.955747,
        BHD: 0.438941,
        BIF: 3472.354099,
        BMD: 1.164374,
        BND: 1.496661,
        BOB: 8.078542,
        BRL: 6.50594,
        BSD: 1.164994,
        BTC: 0.000009844594,
        BTN: 100.902507,
        BWP: 15.703447,
        BYN: 3.812234,
        BYR: 22821.734815,
        BZD: 2.33998,
        CAD: 1.596747,
        CDF: 3363.877008,
        CHF: 0.932181,
        CLF: 0.028452,
        CLP: 1116.180469,
        CNY: 8.329919,
        CNH: 8.357849,
        COP: 4849.688511,
        CRC: 588.434672,
        CUC: 1.164374,
        CUP: 30.855917,
        CVE: 110.193948,
        CZK: 24.588098,
        DJF: 207.434182,
        DKK: 7.463149,
        DOP: 70.869435,
        DZD: 151.24394,
        EGP: 56.706424,
        ERN: 17.465613,
        ETB: 162.048662,
        EUR: 1,
        FJD: 2.620775,
        FKP: 0.861617,
        GBP: 0.867441,
        GEL: 3.154773,
        GGP: 0.861617,
        GHS: 12.173269,
        GIP: 0.861617,
        GMD: 83.835131,
        GNF: 10108.874191,
        GTQ: 8.94093,
        GYD: 243.71518,
        HKD: 9.140152,
        HNL: 30.506496,
        HRK: 7.535825,
        HTG: 152.401446,
        HUF: 397.727528,
        IDR: 19083.162052,
        ILS: 3.897137,
        IMP: 0.861617,
        INR: 100.929064,
        IQD: 1526.111128,
        IRR: 49034.698869,
        ISK: 142.216797,
        JEP: 0.861617,
        JMD: 186.879872,
        JOD: 0.825537,
        JPY: 172.48166,
        KES: 150.398548,
        KGS: 101.653317,
        KHR: 4665.270687,
        KMF: 487.289432,
        KPW: 1047.936507,
        KRW: 1615.848162,
        KWD: 0.355425,
        KYD: 0.970724,
        KZT: 633.347315,
        LAK: 25120.918898,
        LBP: 104373.366261,
        LKR: 351.681894,
        LRD: 233.572314,
        LSL: 20.794263,
        LTL: 3.438094,
        LVL: 0.704318,
        LYD: 6.309552,
        MAD: 10.523073,
        MDL: 19.62831,
        MGA: 5175.973574,
        MKD: 61.516637,
        MMK: 2444.693764,
        MNT: 4177.486052,
        MOP: 9.419154,
        MRU: 46.298551,
        MUR: 52.839493,
        MVR: 17.929225,
        MWK: 2019.885349,
        MXN: 21.742247,
        MYR: 4.926449,
        MZN: 74.473333,
        NAD: 20.794263,
        NGN: 1782.144811,
        NIO: 42.869781,
        NOK: 11.834414,
        NPR: 161.444411,
        NZD: 1.944984,
        OMR: 0.447722,
        PAB: 1.164869,
        PEN: 4.129125,
        PGK: 4.901587,
        PHP: 66.596964,
        PKR: 329.926298,
        PLN: 4.263003,
        PYG: 8725.849094,
        QAR: 4.247642,
        RON: 5.071084,
        RSD: 117.196026,
        RUB: 94.429578,
        RWF: 1684.467941,
        SAR: 4.367798,
        SBD: 9.646951,
        SCR: 16.471191,
        SDG: 699.220903,
        SEK: 11.143929,
        SGD: 1.496116,
        SHP: 0.915015,
        SLE: 26.722226,
        SLL: 24416.349912,
        SOS: 665.782084,
        SRD: 42.690038,
        STD: 24100.1956,
        STN: 24.482637,
        SVC: 10.193814,
        SYP: 15138.962786,
        SZL: 20.800551,
        THB: 37.78509,
        TJS: 11.095626,
        TMT: 4.086954,
        TND: 3.414464,
        TOP: 2.727077,
        TRY: 47.226663,
        TTD: 7.921838,
        TWD: 34.499229,
        TZS: 2992.441764,
        UAH: 48.724772,
        UGX: 4176.020432,
        USD: 1.164374,
        UYU: 46.689895,
        UZS: 14658.359627,
        VES: 140.043243,
        VND: 30506.604701,
        VUV: 138.091946,
        WST: 3.189203,
        XAF: 655.433061,
        XAG: 0.030524,
        XAU: 0.000351,
        XCD: 3.146779,
        XCG: 2.099467,
        XDR: 0.807388,
        XOF: 655.534319,
        XPF: 119.331742,
        YER: 280.556197,
        ZAR: 20.79654,
        ZMK: 10480.777684,
        ZMW: 27.316164,
        ZWL: 374.928025,
      },
    })
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
