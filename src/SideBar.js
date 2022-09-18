import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";
import React from "react";

export default function SideBar() {
  const [usuario,setUsuario] = React.useState("catanacomics")
  const [nome,setNome] = React.useState("Catana")
  const [imagem,setImagem] = React.useState("assets/img/catanacomics.svg")
  
  function mudaNome() {
    let novoNome = prompt("Qual seu novo nome?");
    while(novoNome===""||novoNome===null) {
      alert("Nome inválido")
      novoNome = prompt("Qual seu novo nome?");
    }

    let novoUsuario = prompt("Qual seu novo nome de usuário?");
    while(novoUsuario===""||novoUsuario===null) {
      alert("Nome de Usuário inválido")
      novoUsuario = prompt("Qual seu novo nome de usuário?");
    }
    setNome(novoNome)
    setUsuario(novoUsuario)
  }

  function mudaImagem() {
    setImagem(prompt("Digite a URL da sua nova imagem de perfil"))
  }

  return (
    <div class="sidebar">
      <Usuario usuario={usuario} nome={nome} imagem={imagem} novoNome={mudaNome} novaImagem={mudaImagem}/>
      <Sugestoes />

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2022 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
