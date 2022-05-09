import React, { Component } from 'react';

function Post(props) {
    return (
      <div class="feed">
        <div class="titulo-feed">
          <div class="perfil-feed">
            <a href={props.linkProfile} target="_blank">
              <img src={props.imageProfile} />
            </a>
            <a href={props.linkProfile} target="_blank">
              <p>{props.nameProfile}</p>
            </a>
          </div>
          <div class="opcoes-feed cursor">
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
          </div>
        </div>
        <div class="media-feed">
          <img src={props.imageFeed} />
        </div>
        <div class="icones-feed">
          <div class="icones-feed-esquerda">
            <div class="cursor">
              <ion-icon name="heart-outline"></ion-icon>
            </div>
            <div class="cursor">
              <ion-icon name="chatbubble-outline"></ion-icon>
            </div>
            <div class="cursor">
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
          </div>
          <div class="icones-feed-direita">
            <div class="cursor">
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>
        </div>
        <div class="interacoes-feed">
          <img src={props.imageProfileLike} class="cursor" />
          <p class="texto-fino">Curtido por </p>
          <p class="texto-medium-feed cursor">{props.nameProfileLike}</p>
          <p class="texto-fino">e</p>
          <p class="texto-medium-feed cursor">
            outras {props.numberPeople} pessoas
          </p>
        </div>
      </div>
    );
  }
  
  export default function Posts() {
    const postsInfo = [
      {
        linkProfile: "https://instagram.com",
        imageProfile: "/images/macaco19.png",
        nameProfile: "mkey-nineteen",
        imageFeed: "/images/macaco19.png",
        imageProfileLike: "/images/macaco1.png",
        nameProfileLike: "mkey-one",
        numberPeople: "101.247"
      },
      {
        linkProfile: "https://instagram.com",
        imageProfile: "/images/macaco2.png",
        nameProfile: "mkey-two",
        imageFeed: "/images/macaco2.png",
        imageProfileLike: "/images/macaco7.png",
        nameProfileLike: "mkey-seven",
        numberPeople: "101.247"
      },
      {
        linkProfile: "https://instagram.com",
        imageProfile: "/images/macaco1.png",
        nameProfile: "mkey-one",
        imageFeed: "/images/macaco1.png",
        imageProfileLike: "/images/macaco4.png",
        nameProfileLike: "mkey-four",
        numberPeople: "101.247"
      },
      {
        linkProfile: "https://instagram.com",
        imageProfile: "/images/macaco4.png",
        nameProfile: "mkey-four",
        imageFeed: "/images/macaco4.png",
        imageProfileLike: "/images/macaco20.png",
        nameProfileLike: "mkey-twenty",
        numberPeople: "101.247"
      }
    ];
  
    return (
      <div>
        {postsInfo.map((info) => {
          return (
            <Post
              linkProfile={info.linkProfile}
              imageProfile={info.imageProfile}
              nameProfile={info.nameProfile}
              imageFeed={info.imageFeed}
              imageProfileLike={info.imageProfileLike}
              nameProfileLike={info.nameProfileLike}
              numberPeople={info.numberPeople}
            />
          );
        })}
      </div>
    );
  }
  