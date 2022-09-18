import React from "react";

function MontaPosts(props) {
  const [like,setLike] = React.useState("heart-outline")
  
  function curtir() {
    if(like==="heart-outline") {
      setLike("heart")
      //setQTECurtidas(props.quantosCurtiram+1)
    } else {
      setLike("heart-outline")
      //setQTECurtidas(props.quantosCurtiram)
    }
  }

  const [salvo,setSalvo] = React.useState("bookmark-outline")

  function salvar() {
    if(salvo === "bookmark-outline") {
      setSalvo("bookmark")
    } else {
      setSalvo("bookmark-outline")
    }
  }

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
        <img src={props.imagemPost} alt="Não foi possível carregar a imagem" onClick={curtir}/>
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name={like} class={like==="heart-outline" ? "" : "curtida"} onClick={curtir}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name={salvo} onClick={salvar}></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.imagemCurtida} alt="Não foi possível carregar a imagem"/>
          <div class="texto">Curtido por <strong>{props.quemCurtiu}</strong> e <strong>outras {like==="heart-outline" ? props.quantosCurtiram : props.quantosCurtiram+1} pessoas</strong></div>
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
