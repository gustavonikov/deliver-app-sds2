import './index.css';

import { ReactComponent as Logo } from '../../images/logo.svg';

export default function Header() {
    return (
        <header className="main-header">
            <Logo />
            <a href="home" className="logo-text">Nikov Delivery</a>
        </header>
    );
}
