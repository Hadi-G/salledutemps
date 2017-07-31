var React = require('react');

var Router = require('react-router-dom').BrowserRouter
var Route = require('react-router-dom').Route
var Link = require('react-router-dom').Link

var objectif ={
    objectif1:{
      objectif : 'LE MATIN AJEUN BOIRE UN VERRE D EAU TIÈDE AVEC UN ZESTE DE CITRON',
      succes : 'Boire de l’eau citronnée régulièrement peut servir à éliminer l’acidité totale du corps. Un corps équilibré permet d avoir un corps au maximum de ses capacités ! (des muscles puissants, des os dur, un système immunitaire efficace, une bonne régulation du poids, etc..)'
    },
    objectif2:{
      objectif :'DANS LA JOURNÉE BOIRE UNE TASSE DE THÉ VERT',
      succes :'Le thé vert est un combattant de l’extrême, il brûle le gras. Son ingrédient actif, l’EGCG (gallate d’épigallocatéchine), augmente la vitesse à laquelle la graisse est brûlée dans votre corps.'
    },
    objectif3:{
      objectif :'NE PRENEZ NI ASCENSEUR, NI ESCALATOR SEULEMENT LES ESCALIERS',
      succes :'Monter les escaliers vous fait dépenser 9 fois plus d’énergie que quand vous êtes assis, et 7 fois plus de calories que quand vous êtes debout dans l’ascenseur.'
    },
    objectif4:{
      objectif :'DESCENDRE UNE STATION AVANT SON ARRÊT HABITUEL',
      succes :'L activité physique le matin rends également plus productif au travail.'
    },
    objectif5:{
      objectif :'REMERCIÉ 3 CHOSES QUI SE SONT PRODUITE HIER',
      succes :'Selon les dernières études américaines en psychologie, La gratitude participerait activement à la bonne santé émotionnelle. Elle renforce les liens sociaux, affaiblit les émotions négatives et procure un sentiment de bien-être. Une bonne santé émotionnelle augmente votre niveau basique de votre corps ! (Revenir Objectif n*1)'
    },
    objectif6:{
      objectif :'MARCHER 10-15MIN APRÈS VOTRE REPAS DU MIDI',
      succes :'Selon une étude américaine de l université George Washington publié dans Diabetes Care, montre que si, après un repas, on marche de manière plutôt soutenue pendant un quart d heure, notre taux de sucre dans le sang va se mettre à baisser, et que les effets de cette baisse durent pas moins de 24 heures ! Ce qui permet une meilleure sensibilité à l insuline donc aide vos muscle à consommer vos sucre dans le sang et inéluctablement un perdre plus facilement de la matière grasse.'
    },
    objectif7:{
      objectif :'LORSQUE VOUS TRAVAILLEZ LEVEZ VOUS QUELQUE MINUTE POUR VOUS ÉTIRER LÉGÈREMENT',
      succes :'S’étirer est un moyen tout simple de chasser les contractures et d’apaiser son mental. D’autant que quelques secondes suffisent pour en profiter pleinement.'
    },
    objectif8:{
      objectif :'LORS DE VOS MARCHES PENSEZ À CONTRACTER VOS FESSIER ET VOS ABDOS',
      succes :'Le faite de faire des contractions volontaires (c est vous qui contractez le muscle pour le faire bouger et non le contraire) augmente dans un 1er temps votre circulation sanguine, ce qui va permettre d enlever le mauvais dépôts de graisse et une meilleure consommation du sucre (Objectif n*6) et en logiquement dans un second temps, augmenter rapidement vos résultats musculaire.'
    },
    objectif9:{
      objectif :'PRENEZ DE LA CANNELLE LORS DE VOS REPAS',
      succes :'Elle étonne par sa richesse en fibre alimentaire, et son pouvoir antioxydant la situe parmi les aliments les plus puissants de sa catégorie. Les antioxydants sont des molécules naturelles qui neutralisent des particules extrêmement agressive (radicaux libre) qui sont fabriqués à chaque instant par le simple fait de respirer ou de s’alimenter et qui sont capable d endommager tout les constituant vivant.'
    },
    objectif10:{
      objectif :'FINISSEZ VOS DOUCHES PAR 1MIN D EAU FROIDE',
      succes :'L eau froide stimule le système immunitaire, diminue les varices et améliore la circulation sanguine (Objectif n*6). Et une bonne circulation permet d enlever les mauvais dépôts de graisse.'
    }
};



class Objectif extends React.Component {
  constructor() {
    super();
    this.genererObjectif = this.genererObjectif.bind(this);
    this.state={objectif:{objectif:'MARCHER 10-15MIN APRÈS VOTRE REPAS DU MIDI', succes:'et decouvrer l objectif du jour' }};
  }

  genererObjectif(){
    var keyArray = Object.keys(objectif);
    var randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];
    this.setState({objectif:objectif[randomKey]});
    }

  render() {
    var keyArray = Object.keys(objectif);
    var randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];

    return (
      /*
      <div className="content">
        <h3 className='tobj'>Objectif du jour</h3>
          <div>
            <h6 className="obj">{this.state.objectif.objectif}</h6>
            <p className="succes">{this.state.objectif.succes}</p>
          </div>
        <div className="centerBtn">
            <button onClick={this.genererObjectif} className="succes">Succes</button>
        </div>
      </div>
      */
      <div className="content">
          <h3 className='tobj'>Objectif du jour</h3>
          <h6 className="obj">{this.state.objectif.objectif}</h6>
            <div className="centerBtn">
              <Link to="/succes" className="succes">Succes</Link>
            </div>
      </div>
    );
  }
}


module.exports = Objectif;
