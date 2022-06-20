import * as React from 'react';

function Home(){

    
    return (<>
    
        <div className="Main">

            <div className='Home'></div>
            <h1>Travel Portugal</h1>
            <p>A stunning natural beauty that combines with the great climate and friendly people.Portugal has the largest area covered by golf courses in southern Europe, in pleasant and easily accessed locations.
                Excellent direct flight connections and a very advanced road infrastructure.Near the mountains, or closest to the coast, Portugal offers you the ideal scenario for your second home.
            </p>
            <div className="News">
                <div className="News-left" id="news">
                    <h3>Portugal tourism news</h3>
                    <p>Update of Clean & Safe requirements in accordance with the Directorate-General for Health guidelines.The Portuguese Tourism board has updated the requirements to obtain the pioneering health label for tourism-related companies
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis vero quibusdam nesciunt deleniti blanditiis laborum nulla numquam, eius commodi doloribus reiciendis quas, ducimus facilis officiis velit fuga! Tenetur, nisi doloribus. ...</p>
                    
                </div>
                <div className="News-right">
                
                </div>
            </div>
            <div className="News-foto">
                <h3>Where are you going?</h3>
                <div className="News-foto-container">
                    <div className="card1">
                        <div className="cardPorto">
                        </div>
                        <h4>Porto</h4>
                    </div>
                    <div className="card2">
                        <div className="cardMadeira">
                        </div>
                        <h4>Madeira</h4>
                    </div>
                    <div className="card3">
                        <div className="cardLisboa">
                        </div>
                        <h4>Lisboa</h4>
                    </div>
                    <div className="card4">
                        <div className="cardAlentejo">
                        </div>
                        <h4>Alentejo</h4>
                    </div>
                </div>
            </div>
        </div>
        </>
    )   
}

export default Home;