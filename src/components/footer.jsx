import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className='footer-links'>
        <Link to="/" className="title logo">
          E-Commerce
        </Link>
        <Link to="/" className='text underline'>
          Home
        </Link>
        <Link to="/products" className='text underline'>
          Products
        </Link>
      </div>
      <div className='footer-right'>
        <text className='text-xs'>
          Copyright © 2024. All rights are reserved. Made by Eric Moreno Carvalho 1.4V
        </text>
        <Link to='#'>
          <img className='svg' alt='instagram' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABnUlEQVR4nM2XQU7CQBRA60L2ohH2BhEXbNirCSFewETROyCoV0C9gcgt9ABGPYRxJZqgG9CtRBKf+eabNGNLp2Wa8JLZTKfzmJn/px/Pm1WAPFAGKpZNxuaTyhaBc+CF5DwDZzKXrXQb+MAd70DNRjrGPeNQObDkeKUmQyAbJJYzdcUDcAV8G/2npnRuykAyyem810Z/LyhlbOkDHaClraN9fnZ0zseA95f9Ysm9KEZAA5gHSsCBtjXtO9QxUZT9Ykn8SXwCG8AqcB/w/A4oAJsW8koccUOlEplhDFXedCXu61YGrdTkFsgAry7EF8A69siZX7oQt4D9GOI94NiF+AioxxDvAieutroUQ1x0tdV9DS5JmShuNLjeXIjRFClEpNMAWNGYwJV4pJdDQVMmaKUi3Yp7gZQjBv/Jm7qVRQ24ul4sGQ3C2FdmHnvkcuj6PhLdiDMN/0gIwBPp0/NMtDBLm3ZYZSmFWVoMgIV/YpXXUir2voBqoNSQT8rXJCutTpT65FkpzCQYphBKsLZDt9eL/hG5BH9hfou9meQHO/aT+J3d0xMAAAAASUVORK5CYII=" />
        </Link>
        <Link to='#'>
          <img className='svg' alt='pinterest' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACjUlEQVR4nM2Wy0tVURTGb1GmUVRYSRK9IIgaCTWJHo4CezppUNGwPyAjgiZhDTTLeUHYg26TXrOwSWYYKEREEBSp0CCCoAdm2Yt+sWCdWHeftc89Jx34weVe9lrf/vZdr71LpekOoA7YA5wDykC/fsq6thuonUrB1cBVYJzqEJ8rwpmM4BygG/hBcXzXKNQUFV0MPGTyeAw05BVtAEaZOowAS/OEV06ZB1+Ad8CvHL6PMsOuOc3K2wVgBzDXcGYATUA78CGD3xUTXZNRSAPAihxpWgjcyjj4Ko8kLePhfhImYBZwGLgNPAeeaR+3BBGQlvJw2RsOXp9KDhepTyPwJCOU1+Vg6lsDvIrURa0Vlonk4ajZ6KlZ/whMOP6nzZ4HI3vussLS7CH+AMvUfsSstwEzpUWANwFnPCk8YJ7mNV5kwA3HYdTYe3VtMEjRRYe31dhfOvay3aDPcRhyNqhoCeCOw2s19kHH3mc3kAYPMewc7J+whvu9w9tufF5XE77rOMhEWqL2M7rWazibInVRb3L8s1qou/HRpvZ6LZx7hnPK8X9g7HI/ezhrhVsjTp+BlRpWGYcnDeda4Psb2OIUZIid4aj7FnF8C5zQ39sMp8WMWBkMh4xtX2SvMbmIbIGKcw/ZkJ6sSwpLv5cDzcCCIPefInv0VIgqYX2kGBIMGF8ptuaAPx84DnyN8CckbSnhjAmWoNP4vdA1uSRu6qMvJpjip6CXxVCEuN9cFtI2RdAPzE4rVoo36nMlxGa1HysoOpzMg7zvrvAKXKttNVLwn+YTTSD3JtBh3lQbgAM5BaWQOgs/by2AdcAlYGOOfzumbelXb+k/oBHYC5zX2S4Xi7y95eXRJRMpNRymI/4CabSI/0O78YgAAAAASUVORK5CYII=" />
        </Link>
        <Link to='#'>
          <img className='svg' alt='facebook' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABq0lEQVR4nMWXu0oDURCG1xhFJTY+iE06r4UiCFopvoRVFINgoyBEjJcnSGNlHkB7b4idtYqCKEksLETwSj4ZOYFlObtnzzEbf0iTnZlvMmfOZNbzYghoB0aAbeAcqAGf6lNT320Bw2IbJ2akgG5gGXgiviSRvPi6QueAB9x1D8zaANuAVaDO3yUxNoCUCZoCyjRf+5FwoEByWo86U1tdAPPAANAPZIFBoBRS9hld99o20kpE5XIRDdflN5QrY6OyoVfCwKIl/3CwuaeirAbWp0qdVYMmTNXfIaMmko2e5coFoFPAt0WMIc+QnU6Xml8rI9NGRRenEw1YqmCjM8/hfI804DfLGFVx+vgH8Ls4vcYwzERdH00ipr55EaObBMAHhnhXYnSaAPjaEO9YjDabCQY6gS9DvIIYjtH65hptZFhtIbgCdDQc8y0E5/yOGbWkJQ2uAD1B58mYe5YruA5Mh3XkboLgohbqW/ZKCYD3gHQo2Lfe7kSU3QYsMYrB/29TAhNqR3IFP4aeqWeG9wILwJ0F+BZYFF8naCBwWk24NXk50zw/VM/GjW8NSj+S6ZClU0UyfQAAAABJRU5ErkJggg==" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
