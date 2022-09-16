function MontaSugestao(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.imagem} alt="Não foi possível carregar a imagem"/>
        <div class="texto">
          <div class="nome">{props.usuario}</div>
          <div class="razao">Segue você</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}

export default function Sugestoes() {
  const sugestao = [
    {
      imagem: "assets/img/bad.vibes.memes.svg",
      usuario: "bad.vibes.memes",
    },
    {
      imagem: "assets/img/chibirdart.svg",
      usuario: "chibirdart",
    },
    {
      imagem: "assets/img/razoesparaacreditar.svg",
      usuario: "razoesparaacreditar",
    },
    {
      imagem: "assets/img/adorable_animals.svg",
      usuario: "adorable_animals",
    },
    {
      imagem: "assets/img/smallcutecats.svg",
      usuario: "smallcutecats",
    },
  ];

  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {sugestao.map((elemento) => (
        <MontaSugestao imagem={elemento.imagem} usuario={elemento.usuario} />
      ))}
    </div>
  );
}
