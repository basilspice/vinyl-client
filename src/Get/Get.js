import {useState} from 'react'

function Get() {
  const [vinyls, setVinyls] = useState([])
  
  const handleClick = () => {
    fetch(apiUrl + '/vinyls')
      .then(response => response.json())
      .then(data => setVinyls(data.vinyls))
  }

  const vinylList = vinyls.map(vinyl => <li key={vinyl._id}>{vinyl.artist}: {vinyl.album}</li>)

  return (
    <div className="App">
      <button onClick={handleClick}>View Vinyls</button> 
      <ul>{vinylList}</ul>
    </div>
  );
}

export default Get;