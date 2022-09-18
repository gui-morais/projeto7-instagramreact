export default function Usuario(props) {
  return (
    <div class="usuario">
      <img src={props.imagem} alt="Não foi possível carregar a imagem" onClick={props.novaImagem}/>
      <div class="texto">
        <strong>{props.usuario}</strong>
        <span>
          {props.nome}
          <ion-icon name="pencil" onClick={props.novoNome}></ion-icon>
        </span>
      </div>
    </div>
  );
}
