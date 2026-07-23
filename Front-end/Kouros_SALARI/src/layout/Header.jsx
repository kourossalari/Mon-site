import { Link } from 'react-router-dom'
import MagneticButton from '../components/MagneticButton'
import '../style/StyleGlobal.css'

function Header () {

    return(
        <div className="logo">
            KS <span>Developpeur Web</span>
            <nav>
                <Link to='/'>Accueil</Link>
                <a href="#projets">Projets</a>
                <a href="#competences">Compétences</a>
                <a href="#parcours">Parcours</a>
            </nav>
            <MagneticButton className="btn btn-primary">
                Me contacter
            </MagneticButton>
        </div>
    )
}

export default Header