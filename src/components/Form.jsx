import axios from "axios";
import stylesForm from './styles/stylesForm.css'
 
const Form = () => {
    const handleSubit = e =>{
        e.preventDefault()
        const data = {
            name : e.target.name.value,
            email : e.target.email.value,
            mensaje : e.target.mensaje.value
        }
        
        alert("Hello! I am an alert box!!");
        const url = 'https://formsubmit.co/ajax/hernanconce1213@gmail.com'
    axios.post(url,data)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))

     
    //  console.log(e.target.name.value);
    //  console.log(e.target.email.value);
    //  console.log(e.target.mensaje.value);
}
  return (
    <form onSubmit={handleSubit} className='form__Contact' >
        <label htmlFor="email">Correo</label>
      <input type="email" placeholder="Email" id="email"  />
      <label htmlFor="name">Nombre</label>
      <input type="text" placeholder="Name" id="name" />
      <label htmlFor="mensaje">Mesaje</label>
      <textarea
        name=""
        id="mensaje"
        cols="30"
        rows="10"
        placeholder="Message"
    
      ></textarea>
      <button className="btn_from">Enviar</button>
    </form>
  );
};

export default Form;
