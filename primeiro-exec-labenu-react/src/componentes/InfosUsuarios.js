import spiderMan from "../img/spiderman.jpeg";
// import '../App.css'

function InfosUsuario() {
const nome = 'Thiago';
     return (
          <>
               <p>Usuario : {nome}</p>
               <img id='foto'  src={spiderMan}/>
          </>
     )
}

export default InfosUsuario;