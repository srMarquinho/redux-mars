import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import fetchImage from '../../helpers/fetchImage';

import './Header.css';

/**
 * Header component
 *
 * @return {*}
 */
function Header() {
  const [logoSrc, setLogoSrc] = useState('');
  const [marsSrc, setMarsSrc] = useState('');

  useEffect(() => {
    fetchImage(`${process.env.PUBLIC_URL}/img/logo.png`)
      .then((res) => {
        setLogoSrc(res);
      });
    fetchImage('https://source.unsplash.com/random/800x600/?mars')
      .then((res) => {
        setMarsSrc(res);
      });
  }, []);

  /**
   * Renders the logo
   *
   * @return {*}
   */
  function renderLogo() {
    if (!logoSrc) {
      return <CircularProgress />
    }
    return <img
      draggable={false}
      src={logoSrc}
      alt="Mars Mission"
    />;
  }

  /**
   * Renders the mars image
   *
   * @return {*}
   */
  function renderMars() {
    if (!marsSrc) {
      return <CircularProgress />
    }
    return <img
      draggable={false}
      src={marsSrc}
      alt="Mars"
    />;
  }

  return (
    <div className="header">
      <div className="logo">
        {renderLogo()}
      </div>
      <div>Cool Title</div>
      <div className="mars-img">
        {renderMars()}
      </div>
    </div>
  );
}

export default Header;
