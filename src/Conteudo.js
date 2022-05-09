import Stories from "./Stories";
import Posts from "./Posts";
import Sugestoes from "./Sugestoes";

export default function Conteudo() {
  return (
    <main class="conteudo">
      <div class="conteudo-esquerda">
        <Stories />
        <Posts />
      </div>
      <div class="conteudo-direita">
        <Sugestoes />
      </div>
    </main>
  );
}
