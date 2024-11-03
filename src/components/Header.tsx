import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext'; // Importation du contexte d'authentification

const Header: React.FC = () => {
  const { user, logout } = useAuth(); // On récupère l'utilisateur et la fonction de déconnexion du contexte

  return (
    <header className="bg-amber-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Madagascar Vanilla</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-amber-200">Home</Link></li>
            <li><Link to="/products" className="hover:text-amber-200">Nos Produits</Link></li>
            <li><Link to="/about" className="hover:text-amber-200">Notre Équipe</Link></li>
            <li><Link to="/blog" className="hover:text-amber-200">Blog</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="hover:text-amber-200">
            <ShoppingCart />
          </Link>

          {/* Vérifie si l'utilisateur est connecté */}
          {user ? (
            <div className="flex items-center space-x-4">
              <Link to="/account" className="hover:text-amber-200 flex items-center">
                <User className="mr-2" />
                Mon Compte
              </Link>
              <button
                onClick={logout}
                className="hover:text-amber-200 underline"
              >
                Déconnexion
              </button>
            </div>
          ) : (
            <Link to="/login" className="hover:text-amber-200 flex items-center">
              <User className="mr-2" />
              Connexion
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
