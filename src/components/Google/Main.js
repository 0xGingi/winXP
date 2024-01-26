import React, { useState } from 'react';
import styled from 'styled-components';
import smile from './smile.svg';

function Main({ onSearch, className }) {
  const [value, setValue] = useState('');
  function onChange(e) {
    setValue(e.target.value);
  }
  function onClick() {
    onSearch(value);
  }
  function onKeyDown(e) {
    if (e.key !== 'Enter') return;
    onSearch(value);
  }
  /*
  return (
    <div className={className}>
      <header>
        <div className="text">Gmail</div>
        <div className="text">Images</div>
        <img src={smile} alt="avatar" />
      </header>
      <section className="content">
        <img
          className="logo"
          alt="Google"
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        />
        <div className="search-bar">
          <input
            id="search"
            type="text"
            name="search"
            onChange={onChange}
            value={value}
            onKeyDown={onKeyDown}
          />
          <div className="icon">
            <img
              src="https://www.gstatic.com/images/branding/googlemic/2x/googlemic_color_24dp.png"
              alt="microphone"
            />
          </div>
        </div>
        <div className="buttons">
          <button onClick={onClick} id="enter">
            Google Search
          </button>
          <button>I'm Feeling Lucky</button>
        </div>
      </section>
      <footer>
        <section className="upper">
          <div className="items left">
            <div className="item">Taiwan</div>
          </div>
        </section>
        <section className="lower">
          <div className="items left">
            <div className="item">Advertising</div>
            <div className="item">Business</div>
            <div className="item">About</div>
          </div>
          <div className="items right">
            <div className="item">Privacy</div>
            <div className="item">Terms</div>
            <div className="item">Settings</div>
          </div>
        </section>
      </footer>
    </div>
  );
  */
 return(
  <iframe title="squid_widget" width="420" height="641" src="https://widget.squidrouter.com/iframe?config=%7B%22integratorId%22%3A%22squid-swap-widget%22%2C%22companyName%22%3A%22Custom%22%2C%22style%22%3A%7B%22neutralContent%22%3A%22%23747379%22%2C%22baseContent%22%3A%22%232E2C33%22%2C%22base100%22%3A%22%23F5F5F7%22%2C%22base200%22%3A%22%23F2F2F2%22%2C%22base300%22%3A%22%23DADADA%22%2C%22error%22%3A%22%23ED6A5E%22%2C%22warning%22%3A%22%23FFB155%22%2C%22success%22%3A%22%232EAEB0%22%2C%22primary%22%3A%22%232E2C33%22%2C%22secondary%22%3A%22%23070707%22%2C%22secondaryContent%22%3A%22%23FFFFFF%22%2C%22neutral%22%3A%22%23FFFFFF%22%2C%22roundedBtn%22%3A%22999px%22%2C%22roundedCornerBtn%22%3A%22999px%22%2C%22roundedBox%22%3A%221rem%22%2C%22roundedDropDown%22%3A%22999px%22%7D%2C%22slippage%22%3A1.5%2C%22infiniteApproval%22%3Afalse%2C%22enableExpress%22%3Atrue%2C%22apiUrl%22%3A%22https%3A%2F%2Fapi.squidrouter.com%22%2C%22comingSoonChainIds%22%3A%5B%5D%2C%22titles%22%3A%7B%22swap%22%3A%22Swap%22%2C%22settings%22%3A%22Settings%22%2C%22wallets%22%3A%22Wallets%22%2C%22tokens%22%3A%22Select%2BToken%22%2C%22chains%22%3A%22Select%2BChain%22%2C%22history%22%3A%22History%22%2C%22transaction%22%3A%22Transaction%22%2C%22allTokens%22%3A%22Select%2BToken%22%2C%22destination%22%3A%22Destination%2Baddress%22%7D%2C%22priceImpactWarnings%22%3A%7B%22warning%22%3A3%2C%22critical%22%3A5%7D%2C%22showOnRampLink%22%3Atrue%2C%22preferDex%22%3A%5B%22%22%5D%2C%22initialFromChainId%22%3A43114%2C%22initialToChainId%22%3A137%2C%22defaultTokens%22%3A%5B%7B%22address%22%3A%220xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE%22%2C%22chainId%22%3A%2243114%22%7D%2C%7B%22address%22%3A%220x162539172b53E9a93b7d98Fb6c41682De558a320%22%2C%22chainId%22%3A%22137%22%7D%5D%7D"></iframe>

 );
}

export default styled(Main)`
  height: 100%;
  background: white;
  position: relative;
  header {
    position: absolute;
    top: 0;
    width: 100%;
    height: 641px;
    padding: 0 15px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 13px;
    color: rgb(80, 80, 80);
    * {
      padding-right: 15px;
      cursor: pointer;
    }
    .text:hover {
      text-decoration: underline;
    }
    img {
      width: 48px;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo {
      height: 92px;
      width: 272px;
      margin-top: 198px;
    }
    .search-bar {
      margin-left: 11px;
      margin-top: 26px;
      width: 586px;
      height: 46px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.2);
      border-radius: 2px;
      display: flex;
      align-items: center;
      padding: 0 8px 0 16px;
      &:hover {
        box-shadow: 0 2px 8px -1px rgba(0, 0, 0, 0.3);
      }
      input {
        border: none;
        color: rgba(0, 0, 0, 0.87);
        height: 100%;
        flex: 1;
        height: 34px;
        margin-top: 5px;
        font-size: 16px;
        border: 0;
        outline: 0;
      }

      .icon {
        width: 40px;
        padding: 0 8px;
        height: 44px;
        cursor: pointer;
        display: flex;
        align-items: center;
        img {
          height: 24px;
          width: 24px;
        }
      }
    }
    .buttons {
      width: 100%;
      height: 36px;
      margin-top: 31px;
      display: flex;
      align-items: center;
      justify-content: center;
      button {
        padding: 0 16px;
        height: 36px;
        margin: 0 6px;
        border: 0;
        font-weight: 700;
        font-size: 13px;
        color: rgb(120, 120, 120);
        border: 1px transparent solid;
        background: rgb(242, 242, 242);
      }
      button:hover {
        border-radius: 2px;
        color: rgb(34, 34, 34);
        background: rgb(248, 248, 248);
        border: 1px rgb(198, 198, 198) solid;
        box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.1);
      }
    }
  }
  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 83px;
    border-top: 1px solid rgba(0, 0, 0, 0.07);
    background-color: rgba(0, 0, 0, 0.05);
    .upper {
      position: relative;
      color: rgba(0, 0, 0, 0.54);
      width: 100%;
      font-size: 15px;
      padding-bottom: 2px;
      height: 50%;
    }
    .lower {
      position: relative;
      border-top: 1px solid rgba(0, 0, 0, 0.07);
      height: 50%;
      color: rgb(95, 99, 104);
      font-size: 13px;
      width: 100%;
      .item {
        cursor: pointer;
      }
      .item:hover {
        text-decoration: underline;
      }
    }
    .items {
      position: absolute;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .left {
      left: 3px;
    }
    .right {
      right: 3px;
    }
    .left .item {
      padding-left: 27px;
    }
    .right .item {
      padding-right: 27px;
    }
  }

  @media (max-width: 768px) {
    header {
      img {
        width: 36px;
      }
    }
    .content .search-bar {
      width: 90%;
      margin-left: 0;
    }
    .logo {
      width: 204px;
      height: 69px;
    }
    footer {
      .left .item {
        padding-left: 14px;
      }
      .right .item {
        padding-right: 14px;
      }
      .lower {
        .item {
          display: none;
        }
      }
    }
  }
`;
