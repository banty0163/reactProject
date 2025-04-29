import React, { useState } from 'react'
function Github() {
  const [value, setValue] = useState('') 
  const [data, setData] = useState(null)
  const handleSearch = async () => {
    try {
      const resp = await fetch(`https://api.github.com/users/${value}`)
      if (!resp.ok) {
      
        setData(null)
        alert('User not found')
        return
      }
      const userData = await resp.json()
      
      setData(userData)
    } catch (error) {
      console.error('Error fetching data:', error)
      alert('Error fetching data')
      setData(null)
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="github-username">
        User Name:
      </label>
      <input
        id="github-username"
        type="text"
        placeholder="Github User Name..."
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Find
      </button>

     
      {data && (
        <div className="mt-6 text-center">
          <div className="bg-green-400 text-2xl font-bold mb-4 rounded-md p-2">
            Github ID: {data.id}
          </div>
          <img
            src={data.avatar_url}
            alt={data.login}
            className="mx-auto rounded-full w-32 h-32 mb-4"
          />
          <p className="bg-green-400 text-xl font-semibold rounded-md p-2">
            {data.name}
          </p>
          <p className="bg-green-400 text-xl font-semibold rounded-md p-2 m-1">
            {data.followers}
          </p>
        </div>
      )}
    </div>
  )
}

export default Github
