function IconLink(props) {
    return (
      <a href={props.link} target="_blank">
        <ion-icon name={props.icon}></ion-icon>
      </a>
    );
  }
  
  function Icon(props) {
    return (
      <div class="cursor">
        <ion-icon name={props.icon}></ion-icon>
      </div>
    );
  }
  
  function Image(props) {
    return (
      <div class="nome-topo">
        <a href={props.link} target="_blank">
          <img src={props.image} />
        </a>
      </div>
    );
  }
  
  export default function Topo() {
    return (
      <header>
        <div class="fixar-topo">
          <div class="topo">
            <div class="topo-esquerda">
              <div class="icone-topo">
                <IconLink link="https://instagram.com" icon="logo-instagram" />
              </div>
  
              <div class="separador-topo"></div>
  
              <Image
                link="https://instagram.com"
                image="/images/nome-instagram-img.png"
              />
            </div>
  
            <div class="topo-centro">
              <div>
                <IconLink link="https://instagram.com" icon="search-outline" />
              </div>
              <p>Pesquisar</p>
            </div>
  
            <div class="topo-direita">
              <Icon icon="paper-plane-outline" />
              <Icon icon="compass-outline" />
              <Icon icon="heart-outline" />
              <Icon icon="person-outline" />
            </div>
          </div>
        </div>
  
        <div class="topo-mobile display-off">
          <div class="topo-esquerda">
            <div class="icone-topo">
              <IconLink link="https://instagram.com" icon="logo-instagram" />
            </div>
          </div>
  
          <div class="topo-centro-mobile">
            <Image
              link="https://instagram.com"
              image="/images/nome-instagram-img.png"
            />
          </div>
  
          <div class="topo-direita-mobile">
            <div>
              <Icon icon="paper-plane-outline" />
            </div>
          </div>
        </div>
  
        <div class="borda-horizontal"></div>
      </header>
    );
  }
  