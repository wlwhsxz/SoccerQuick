import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MypageIcon from '../styles/icon/mypage.svg';
import SoccerquickLogo from '../styles/icon/soccerquick-logo.png';
import MoreIcon from '../styles/icon/more.svg';
import AuthModal from './AuthModal/AuthModal';
import { MyPageMenu } from './Commons/MyPageMenu';
import HeaderSearch from './Search/FieldSearch';

const Header = () => {
  const [authModal, setAuthModal] = useState<boolean>(false);
  const [myPageMenu, setMyPageMenu] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleLoginModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setAuthModal((prev) => !prev);
    setMyPageMenu((prev) => !prev);
  };
  const handleMyPageMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setMyPageMenu((prev) => !prev);
  };

  return (
    <HeaderContainer>
      <LogoMain>
        <div onClick={() => navigate('/')}>
          <img src={SoccerquickLogo} alt="SoccerQuick" />
        </div>
      </LogoMain>
      <HeaderMenu>
        <HeaderMypage onMouseEnter={handleMyPageMenu}>
          <img src={MypageIcon} alt="my" />
          {myPageMenu && (
            <MyPageMenu
              handleMyPageMenu={handleMyPageMenu}
              handleLoginModal={handleLoginModal}
            />
          )}
        </HeaderMypage>
        <div>
          <img src={MoreIcon} alt="more" />
        </div>
      </HeaderMenu>
      {authModal && <AuthModal setAuthModal={setAuthModal} />}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 98.4rem;
  padding: 0 2rem;
  height: 6rem;
  margin: 1.4rem auto;

  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const LogoMain = styled.div`
  img {
    width: 13rem;
    height: 6rem;
    vertical-align: middle;
    cursor: pointer;
  }
`;

const HeaderMenu = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 1.1rem;
  img {
    width: 2.5rem;
    height: 100%;
  }
`;

const HeaderMypage = styled.div`
  position: relative;
  margin: 0.3rem 2rem 0 2rem;
`;
