import React from 'react';
import { Container } from 'reactstrap';
import BackgroundError from './backgroundError/BackgroundError'

const Error = () => {
  return (
    <Container className="conditional-game">
      <div className="background-image-bgi-conditional">
        <BackgroundError />
      </div>

      <div className="conditional-text">
        <h1>Oups... La définition de votre écran ne supporte pas la taille d'affichage minimum des jeux.</h1>
        <h2 style={{ color: 'blue' }}>Ce site est conçu pour être visionné sur un ordinateur</h2>
        <h3 className="alert" style={{ color: 'orangered' }}>
          "veuillez afficher cette page sur un écran plus grand...
                </h3>
      </div>
    </Container>
  )
}

export default Error
