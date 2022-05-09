function Profile(props) {
    return (
      <div class="perfil">
        <div class="perfil-imagem">
          <a href={props.linkMyProfile} target="_blank">
            <img src={props.imageMyProfile} alt="" />
          </a>
        </div>
        <div class="perfil-texto">
          <div class="perfil-texto-espaco">
            <a href="https://instagram.com" target="_blank">
              <p class="texto-medium">{props.nameMyProfile}</p>
            </a>
          </div>
          <div class="perfil-texto-espaco texto-fino">
            <p class="texto-fino">{props.nikeProfile}</p>
          </div>
        </div>
      </div>
    );
  }
  
  function Sugestion(props) {
    return (
      <div class="box-sugestao-perfil">
        <div class="sugestao-imagem">
          <a href={props.linkProfile} target="_blank">
            <img src={props.imageProfile} alt="" />
          </a>
        </div>
        <div class="sugestao-texto">
          <div class="sugestao-texto-superior">
            <a href={props.linkProfile} target="_blank">
              <p class="texto-grafite">{props.nameProfile}</p>
            </a>
          </div>
          <div class="sugestao-texto-inferior">
            <p class="texto-cinza">{props.statusProfile}</p>
          </div>
        </div>
      </div>
    );
  }
  
  function Follow(props) {
    return <p class="cursor">{props.statusFollow}</p>;
  }
  
  export default function Sugestoes() {
    const profileInfo = {
      linkMyProfile: "https://instagram.com",
      imageMyProfile: "/images/macaco16.png",
      nameMyProfile: "mkey-sixteen",
      nikeProfile: "Monkey Sixteen"
    };
  
    const sugestionInfo = [
      {
        linkProfile: "https://instagram.com",
        imageProfile: "/images/macaco6.png",
        nameProfile: "mkey-six",
        statusProfile: "Segue você"
      },
      {
        linkProfile: "https://instagram.com",
        imageProfile: "/images/macaco14.png",
        nameProfile: "mkey-fourteen",
        statusProfile: "Segue você"
      },
      {
        linkProfile: "https://instagram.com",
        imageProfile: "/images/macaco13.png",
        nameProfile: "mkey-thirteen",
        statusProfile: "Novo no instagram"
      },
      {
        linkProfile: "https://instagram.com",
        imageProfile: "/images/macaco15.png",
        nameProfile: "mkey-fifteen",
        statusProfile: "Segue você"
      },
      {
        linkProfile: "https://instagram.com",
        imageProfile: "/images/macaco18.png",
        nameProfile: "mkey-eighteen",
        statusProfile: "Segue você"
      }
    ];
  
    return (
      <div>
        <Profile
          linkMyProfile={profileInfo.linkMyProfile}
          imageMyProfile={profileInfo.imageMyProfile}
          nameMyProfile={profileInfo.nameMyProfile}
          nikeProfile={profileInfo.nikeProfile}
        />
  
        <div class="sugestoes-texto">
          <p class="texto-cinza">Sugestões para você</p>
          <p class="texto-grafite">Ver tudo</p>
        </div>
  
        <div class="sugestoes-geral">
          <div class="sugestoes-perfil">
            {sugestionInfo.map((info) => {
              return (
                <Sugestion
                  linkProfile={info.linkProfile}
                  imageProfile={info.imageProfile}
                  nameProfile={info.nameProfile}
                  statusProfile={info.statusProfile}
                />
              );
            })}
          </div>
          <div class="sugestao-seguir">
            <Follow statusFollow="Seguir" />
            <Follow statusFollow="Seguir" />
            <Follow statusFollow="Seguir" />
            <Follow statusFollow="Seguir" />
            <Follow statusFollow="Seguir" />
          </div>
        </div>
  
        <div class="box-sobre">
          <p>
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
            Localizações • Contas mais relevantes • Hashtags • Idioma
          </p>
        </div>
  
        <div class="box-texto-ano">
          <p>© 2021 INSTAGRAM DO FACEBOOK</p>
        </div>
      </div>
    );
  }
  