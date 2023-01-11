import { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [image, setImage] = useState("");

  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false)

  


  const handleName = e => {
    setName(e.target.value);
  }

  const handleEmail = e => {
    setEmail(e.target.value);
  }

  const handleDob = e => {
    setDob(e.target.value);
  }

  const handleFile = e => {
    setImage(URL.createObjectURL(e.target.files[0]));
  }

  const handleForm = e => {
    e.preventDefault();
    setFormData({
      name,
      email,
      dob,
      image
    });
    setIsSubmitted(true);
  }

  return (
    <div className="App">
      <form onSubmit={handleForm}>
        <div>
          <label htmlFor='name'>Name</label>
          <input value={name} type="text" onChange={handleName}/>
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input value={email} type="email" onChange={handleEmail} />
        </div>
        <div>
          <label htmlFor='dob'>D-O-B</label>
          <input value={dob} type="date" onChange={handleDob}/>
        </div>
        <div>
          <label htmlFor='image'>Image</label>
          <input type="file" onChange={handleFile}/>
        </div>
        <div>
          <input type="submit" value="Save" />
        </div>
      </form>

      {
       isSubmitted && (
        <div className='user-info'>
            <img src={image} alt={name} />
            <p>{name}</p>
            <p>{email}</p>
            <p>{dob}</p>

        </div>
       )
      }
    </div>
  );
}

export default App;
