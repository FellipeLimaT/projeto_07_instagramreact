import React, { Component } from 'react';

function Storie(props) {
    return (
      <div class="storie">
        <div class="borda-storie cursor">
          <a href={props.link} target="_blank">
            <img src={"/images/stories_background.jpg"} />
          </a>
          <div class="imagem-storie">
            <img src={props.image} />
          </div>
        </div>
        <p>{props.name}</p>
      </div>
    );
  }
  
  export default function Stories() {
    const storiesInfo = [
      {
        link: "https://instagram.com",
        image: "/images/macaco7.png",
        name: "mkey-seven"
      },
      {
        link: "https://instagram.com",
        image: "/images/macaco12.png",
        name: "mkey-twelve"
      },
      {
        link: "https://instagram.com",
        image: "/images/macaco9.png",
        name: "mkey-nine"
      },
      {
        link: "https://instagram.com",
        image: "/images/macaco20.png",
        name: "mkey-twenty"
      },
      {
        link: "https://instagram.com",
        image: "/images/macaco11.png",
        name: "mkey-eleven"
      },
      {
        link: "https://instagram.com",
        image: "/images/macaco8.png",
        name: "mkey-eight"
      },
      {
        link: "https://instagram.com",
        image: "/images/macaco2.png",
        name: "mkey-two"
      },
      {
        link: "https://instagram.com",
        image: "/images/macaco3.png",
        name: "mkey-three"
      }
    ];
  
    return (
      <div class="stories">
        <div class="proximos-stories cursor">
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </div>
  
        {storiesInfo.map((info) => {
          return <Storie link={info.link} image={info.image} name={info.name} />;
        })}
      </div>
    );
  }
  