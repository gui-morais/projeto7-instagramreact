function MontaStory(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.imagem} alt="Não foi possível carregar a imagem"/>
      </div>
      <div class="usuario">{props.usuario}</div>
    </div>
  );
}

export default function Stories() {
  const usuarios = [
    {
      usuario: "9gag",
      imagem: "assets/img/9gag.svg",
    },
    {
      usuario: "meowed",
      imagem: "assets/img/meowed.svg",
    },
    {
      usuario: "barked",
      imagem: "assets/img/barked.svg",
    },
    {
      usuario: "nathanwpylestrangeplanet",
      imagem: "assets/img/nathanwpylestrangeplanet.svg",
    },
    {
      usuario: "wawawicomics",
      imagem: "assets/img/wawawicomics.svg",
    },
    {
      usuario: "respondeai",
      imagem: "assets/img/respondeai.svg",
    },
    {
      usuario: "filomoderna",
      imagem: "assets/img/filomoderna.svg",
    },
    {
      usuario: "memeriagourmet",
      imagem: "assets/img/memeriagourmet.svg",
    },
  ];

  return (
    <div class="stories">
      {usuarios.map((elemento) => (
        <MontaStory imagem={elemento.imagem} usuario={elemento.usuario} />
      ))}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
