import React, { Component } from 'react';

function Icon(props) {
    return (
      <div class="cursor">
        <ion-icon name={props.icon}></ion-icon>
      </div>
    );
  }
  
  export default function Rodape() {
    return (
      <footer>
        <div class="fixar-rodape display-off">
          <div class="rodape">
            <Icon icon="home-outline" />
            <Icon icon="search-outline" />
            <Icon icon="add-circle-outline" />
            <Icon icon="heart-outline" />
            <Icon icon="person-outline" />
          </div>
        </div>
      </footer>
    );
  }
  