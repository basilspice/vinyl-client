import {useState} from 'react'


function Create() {
  const [vinyls, setVinyls] = useState([])
  const [vinyl, setVinyl] = useState({artist: "", album: ""})

  const handleClick = () => {
    fetch("http://localhost:4000/vinyls")
      .then(response => response.json())
      .then(data => setVinyls(data.vinyls))
  }

  const handleChange = event => {
    event.persist()
    setVinyl(prevVinyl => {
      const editedVinyl = {...prevVinyl, [event.target.name]: event.target.value}
      return editedVinyl
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(vinyl)
    fetch("http://localhost:4000/vinyls", {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(vinyl)
    })
      .then(() => fetch("http://localhost:4000/vinyls"))
      .then(response => response.json())
      .then(data => setVinyls(data.vinyls))
      .then(() => setVinyl({artist: "", album: ""}))
  }

 

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={vinyl.artist} name="artist" placeholder="Artist"/>
        <input onChange={handleChange} value={vinyl.album} name="album" placeholder="Album"/>
        <button type="Submit">Add Vinyl</button>
      </form>

      
    </div>
  );
}

export default Create;