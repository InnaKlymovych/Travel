import React from 'react'
import Acores from '../images/acores.png'
import Bacalhoa from '../images/bacalhoa.png'
import Fiesa from '../images/fiesa.png'
import Oceanario from '../images/oceanario.png'

function Portugal(){
    return (<>
    <div className="portugal"></div>
    <div className="portugal-text" >
        <div className="portugal-main">
            <h4>Interesting places in Portugal that you have to visit!
            </h4>
            <p>Portugal é um país no sul da Europa, localizado na Península Ibérica, que faz fronteira com a Espanha. Sua localização às margens do Oceano 
                Atlântico influenciou muitos aspectos da cultura do país: o bacalhau salgado e as sardinhas assadas são pratos típicos nacionais, as praias 
                do Algarve são destinos muito procurados e boa parte da arquitetura do país data dos séculos XVI a XIX, 
                quando Portugal era um poderoso império marítimo.
            </p>
        </div>
        
        <div className="cards">               
            <div className="cardBox card1">
                <img src={Acores} alt="Acores" />
                <h3>Mosteiros</h3>
                <p>Sao Miguel - Acores</p>
                <p>Portugal</p>
                
            </div>
            <div className="cardBox card2">
                <img src={Bacalhoa} alt="Bacalhoa"/>
                <h3>Bacalhõa Buddha Eden</h3>
                <p>Estrada Nacional 10 , 2925-901 <br/> Vila Nogueira de Azeitao </p>
                <p>Portugal</p>
            </div>
            <div className="cardBox card3">
                <img src={Fiesa} alt="Fiesa"/>
                <h3>Fiesa Sand City</h3>
                <p>En 125 , 252A, Sitio dos Lombos , 8400-395 Lagoa</p>
                <p>Portugal</p>
            </div>
            <div className="cardBox card4">
                <img src={Oceanario} alt="Oceanario"/>
                <h3>Oceanario de Lisboa</h3>
                <p> Esplanada Dom  Carlos 1, 1990-005 <br/> Lisboa </p>
                <p>Portugal</p>
            </div>
        </div>   
    </div>
    </>
        
    )   
}
 
export default Portugal;