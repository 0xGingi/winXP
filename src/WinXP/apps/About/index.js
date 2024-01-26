import React from 'react';
import styled from 'styled-components';
import twitter from 'assets/img/icons/twitter-logo-2.svg';
import telegram from 'assets/img/icons/telegram.svg';
import discord from 'assets/img/icons/discord-icon-.svg';
import debank from 'assets/img/icons/debank.png';
import reddit from 'assets/img/icons/reddit.png';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {

  return (
    <Div>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>

      <h1>About $GONE</h1>
      <ul>
      <li>The community driven Polygon meme token created by 50+ quality individuals to bring fun back to the ecosystem.</li>
      <br></br><li>$GONE today</li>
      <br></br><li>$GONE tomorrow</li>
      </ul>
      <div><a class="btn btn-secondary" role="button" href="https://twitter.com/gonepolygone" target="_blank"><img src={twitter} class="icon-16" width="16" height="16"></img>&nbsp;X</a><a class="btn btn-secondary" role="button" href="https://t.co/j3lqgMsKiB" target="_blank"><img src={telegram} class="icon-16" width="16" height="16"></img> telegram</a><a class="btn btn-secondary" role="button" href="https://discord.gg/WUJNfHxGqe" target="_blank"><img src={discord} class="icon-16" width="16" height="16"></img> discord</a><a class="btn btn-secondary" role="button" href="https://debank.com/token/matic/0x162539172b53e9a93b7d98fb6c41682de558a320/overview" target="_blank"><img src={debank} class="icon-16" width="16" height="16"></img>&nbsp;debank</a><a class="btn btn-secondary" role="button" href="https://www.reddit.com/r/polyGONE" target="_blank"><img src={reddit} class="icon-16" width="16" height="16"></img>&nbsp;reddit</a></div>

    </Div>    

  );
};
const Div = styled.div`
height: 100%;
width: 100%;
position: absolute;
display: flex;
overflow: hidden;
flex-direction: column;
background: linear-gradient(to right, #edede5 0%, #ede8cd 100%);
`;


export default About;