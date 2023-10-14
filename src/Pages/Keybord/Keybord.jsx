import React, { useState, useEffect } from 'react';
import './keybord.css'; // Import your CSS file with styles

const Home = () => {
  const [selectedKey, setSelectedKey] = useState(null);

  const handleKeyUp = (event) => {
    // Check if the key that was released is one of the keys you want to track
    const key = event.key.toLowerCase();
    if ('qwertyuiop'.includes(key) || 'asdfghjkl'.includes(key) || 'zxcvbnm/'.includes(key)) {
      setSelectedKey(key);
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const kbdClassName = (key) => {
    return selectedKey === key ? 'kbd kbd-selected' : 'kbd';
  };

  return (
    <div>
      <div className="flex justify-center gap-1 my-1 w-full">
        <kbd className={kbdClassName('q')}>q</kbd>
        <kbd className={kbdClassName('w')}>w</kbd>
        <kbd className={kbdClassName('e')}>e</kbd>
        <kbd className={kbdClassName('r')}>r</kbd>
        <kbd className={kbdClassName('t')}>t</kbd>
        <kbd className={kbdClassName('y')}>y</kbd>
        <kbd className={kbdClassName('u')}>u</kbd>
        <kbd className={kbdClassName('i')}>i</kbd>
        <kbd className={kbdClassName('o')}>o</kbd>
        <kbd className={kbdClassName('p')}>p</kbd>
      </div> 
      <div className="flex justify-center gap-1 my-1 w-full">
        <kbd className={kbdClassName('a')}>a</kbd>
        <kbd className={kbdClassName('s')}>s</kbd>
        <kbd className={kbdClassName('d')}>d</kbd>
        <kbd className={kbdClassName('f')}>f</kbd>
        <kbd className={kbdClassName('g')}>g</kbd>
        <kbd className={kbdClassName('h')}>h</kbd>
        <kbd className={kbdClassName('j')}>j</kbd>
        <kbd className={kbdClassName('k')}>k</kbd>
        <kbd className={kbdClassName('l')}>l</kbd>
      </div> 
      <div className="flex justify-center gap-1 my-1 w-full">
        <kbd className={kbdClassName('z')}>z</kbd>
        <kbd className={kbdClassName('x')}>x</kbd>
        <kbd className={kbdClassName('c')}>c</kbd>
        <kbd className={kbdClassName('v')}>v</kbd>
        <kbd className={kbdClassName('b')}>b</kbd>
        <kbd className={kbdClassName('n')}>n</kbd>
        <kbd className={kbdClassName('m')}>m</kbd>
        <kbd className={kbdClassName('/')}>/</kbd>
      </div>
    </div>
  );
};

export default Home;