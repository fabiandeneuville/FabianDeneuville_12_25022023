import logo from '../assets/images/logo.svg';

function Header(){
    return (
        <header>
            <img src={logo} alt="Logo de SportSee représentant un sprinter." />
            <a href="#">Accueil</a>
            <a href="#">Profil</a>
            <a href="#">Réglage</a>
            <a href="#">Communauté</a>
        </header>
    )
}

export default Header;