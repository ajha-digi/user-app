import { useState, useRef } from 'react';
import './App.css';

function App() {


  const [isSubmitted, setIsSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    dob:"",
    image:""
  });


  const [submittedFormData, setSubmittedFormData] = useState({
    name:"",
    email:"",
    dob:"",
    image:""
  });

  const imageRef = useRef(null);

  const handleForm = e => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.files && e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    setSubmittedFormData(formData);
    setIsSubmitted(true);
    setFormData({
      name:"",
      email:"",
      dob:"",
      image:""
    })

    imageRef.current.value=null
  }

  const handleDelete = () => {
    setFormData({
      name:"",
      email:"",
      dob:"",
      image:""
    })

    imageRef.current.value=null
    setIsSubmitted(false);
  }

  const handleEdit = () => {
    setFormData(submittedFormData)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input name='name' value={formData.name} type="text"  onChange={handleForm}/>
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input name="email" value={formData.email} type="email"  onChange={handleForm} />
        </div>
        <div>
          <label htmlFor='dob'>D-O-B</label>
          <input name="dob" value={formData.dob} type="date"  onChange={handleForm}/>
        </div>
        <div>
          <label htmlFor='image'>Image</label>
          <input name="image" type="file" ref={imageRef} onChange={handleForm}/>
        </div>
        <div>
          <input type="submit" value="Save" onClick={handleSubmit}/>
        </div>
      </form>

      {
       isSubmitted && (
        <div className='user-info'>
            <img src={submittedFormData.image} alt={submittedFormData.name} />
            <p>{submittedFormData.name}</p>
            <p>{submittedFormData.email}</p>
            <p>{submittedFormData.dob}</p>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
       )
      }
    </div>
  );
}

export default App;
