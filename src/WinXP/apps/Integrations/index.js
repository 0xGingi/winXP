import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';


const Integrations = () => {

  return (

    <Div>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>

      <h1>$GONE Integrations</h1>
      <div class="card-body">
                        <ul class="list-unstyled mt-3 mb-4">
                            <li><a href="https://gravityfinance.io/farms" target="_blank">GravityFi</a></li>
                            <li><a href="https://iocf.moonshot.win/crash" target="_blank">Moonshot</a></li>
                            <li><a href="https://next.moonflow.club/" target="_blank">Moonflow</a></li>
                            <li><a href="https://polygon.maxis.gg/raffle/explore" target="_blank">Maxis</a></li>
                            <li><a href="https://flipguard.xyz/" target="_blank">FlipSuite</a></li>
                            <li><a href="https://app.gamma.xyz/vault/qi/polygon/details/gone-quick-wide" target="_blank">Gamma</a></li>
                            <li><a href="https://orium.network/home" target="_blank">Orium Network</a></li>
                            <li><a href="https://makeitgone.xyz/" target="_blank">MakeItGone</a></li>
                            <li><a href="https://quickswap.exchange/#/swap?outputCurrency=0x162539172b53E9a93b7d98Fb6c41682De558a320" target="_blank">QuickSwap</a></li>
                            <li><a href="https://app.rubic.exchange/?fromChain=ETH&amp;toChain=POLYGON&amp;from=ETH&amp;to=GONE&amp;amount=89.000050173305084" target="_blank">Rubic</a></li>
                            <li><a href="https://realitykingdom.xyz/raffles" target="_blank">RealityKingdom</a></li>
                            <li><a href="https://luckysea.gg/open-box/polygon/thrift-shop-gone" target="_blank">LuckySea</a></li>
                            <li><a href="https://www.pondx.com/bridge" target="_blank">Pondx</a></li>
                            <li><a href="https://app.squidrouter.com/?chains=cosmoshub-4%2C137&amp;tokens=uatom%2C0x162539172b53E9a93b7d98Fb6c41682De558a320" target="_blank">SquidRouter</a></li>
                        </ul>
                    </div>


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


export default Integrations;