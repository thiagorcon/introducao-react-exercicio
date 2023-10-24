import InfosUsuario from "./InfosUsuarios";
function CardVideo() {
     function reproduzVideo() {
          alert("O vídeo está sendo reproduzido")
        }
        const titulo = "Titulo do vídeo";
     return (
          <>
               <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img className='foto' src="https://picsum.photos/400?a=1 " alt=""></img>
                    <h4>{titulo}</h4>
                    <InfosUsuario />
               </div>
          </>
     )
}
export default CardVideo;