import React from "react";
import "./Component_Styles/all_Games.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Games() {

    const games = [
        {
          game1: 'BGMI',
          game2: 'Bgmi',
          direct: '/all-bgmi',
          pic: require('./Images/All_Games/Bgmi.jpg')
        },{
          game1: 'VALORANT',
          game2: 'Valorant',
          direct: '/all-valo',
          pic: require('./Images/All_Games/Valorant.jpg') 
        },{
          game1: 'FREEFIRE',
          game2: 'Free Fire',
          direct: '/all-ff',
          pic: require('./Images/All_Games/Freefire.jpg') 
        },{
          game1: 'CALLOFDUTY',
          game2: 'Call of Duty',
          direct: '/coming-soon',
          pic: require('./Images/All_Games/Cod.jpg')
        },{
          game1: 'CHESS',
          game2: 'Chess',
          direct: '/coming-soon',
          pic: require('./Images/All_Games/Chess.jpg') 
        },{
          game1: 'OTHERS',
          game2: 'Others',
          direct: '/coming-soon',
          pic: require('./Images/All_Games/Others.jpg')
        }
    ];

    return (

        <div className="games-section reveal" id="pasthistory">
            <Container>
                <div className="games-title">
                    <h2>
                        Games
                    </h2>
                    <p>Past History</p>
                </div>
                <Row lg={3} sm={2} xs={1}>

                    {games.map((game, index) => (
                        <Col className="game-col">
                            <a href={game.direct}>
                              <div className="card game-card">
                                  <img className="games-img" src={game.pic} alt="game-pix" />
                                  <div className="intro">
                                      <h1 className="game-title">{game.game1}</h1>
                                      <p className="game-content">In this <span className="game-excontent">{game.game2}</span> section you can see past results.</p>
                                  </div>
                              </div>
                            </a>
                        </Col>
                    ))}

                 </Row>
            </Container>
        </div>

    );
}

export default Games;