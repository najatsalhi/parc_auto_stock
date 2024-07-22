import React, {useEffect,useState} from 'react'
import Login from './login'
function App() {

  const [ backendData, setBackendData] = useState([{}])
  useEffect(() => {
    fetch("/api").then(
      Response => Response.json()
    ).then(
      data => {
        setBackendData(data)
    }
  )
  }, [])
  return (
    <div>
      {(typeof backendData.users === 'undefined') ? (
        <p>
          <Login/>
        </p>
      ): (
        backendData.users.map((user,i) => (
          <p key={i}>{user}</p>
        ))
      )
      } 
    </div>
  );
}
export default App;
