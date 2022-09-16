function MontaPosts(props) {
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imagemUsuario} alt="Não foi possível carregar a imagem"/>
          {props.usuario}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.imagemPost} alt="Não foi possível carregar a imagem"/>
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.imagemCurtida} alt="Não foi possível carregar a imagem"/>
          <div class="texto">Curtido por <strong>{props.quemCurtiu}</strong> e <strong>outras {props.quantosCurtiram.toLocaleString("pt-BR")} pessoas</strong></div>
        </div>
      </div>
    </div>
  );
}

export default function Posts() {
  const postsUsuarios = [
    {
      imagemUsuario: "assets/img/meowed.svg",
      usuario: "meowed",
      imagemPost: "assets/img/gato-telefone.svg",
      imagemCurtida: "assets/img/respondeai.svg",
      quemCurtiu:"respondeai",
      quantosCurtiram:101523
    },
    {
      imagemUsuario: "assets/img/barked.svg",
      usuario: "barked",
      imagemPost: "assets/img/dog.svg",
      imagemCurtida: "assets/img/adorable_animals.svg",
      quemCurtiu:"dorable_animals",
      quantosCurtiram:99159
    },
  ];

  return (
    <div class="posts">
      {postsUsuarios.map((elemento) => (
        <MontaPosts
          imagemUsuario={elemento.imagemUsuario}
          usuario={elemento.usuario}
          imagemPost={elemento.imagemPost}
          imagemCurtida={elemento.imagemCurtida}
          quemCurtiu={elemento.quemCurtiu}
          quantosCurtiram={elemento.quantosCurtiram}
        />
      ))}
    </div>
  );
}
