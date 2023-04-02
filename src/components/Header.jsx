import logo from '../assets/images/logo.svg';

import { useNavigate } from 'react-router-dom'

function Header(){

    const navigate = useNavigate();

    const toFakeHomePage = () => {
        navigate('/');
    };

    return (
        <header>
            <img src={logo} alt="Logo de SportSee représentant un sprinter." 
            onClick={() => toFakeHomePage()}
            />
            <a href="#">Accueil</a>
            <a href="#">Profil</a>
            <a href="#">Réglage</a>
            <a href="#">Communauté</a>
        </header>
    )
}

export default Header;