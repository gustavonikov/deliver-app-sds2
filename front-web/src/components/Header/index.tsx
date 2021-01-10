import './index.css';

import { ReactComponent as Logo } from '../../images/logo.svg';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="main-header">
            <Logo />
            <Link to="/" className="logo-text">Nikov Delivery</Link>
        </header>
    );
}
