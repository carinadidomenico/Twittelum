import React, { Component, Fragment } from 'react';
import Cabecalho from '../../components/Cabecalho'
import NavMenu from '../../components/NavMenu'
import Dashboard from '../../components/Dashboard'
import Widget from '../../components/Widget'
import TrendsArea from '../../components/TrendsArea'
import Tweet from '../../components/Tweet'
import {postTweets} from '../../services/tweets'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            novoTweet: '',
            tweets: []
        }
    }

    adicionaTweet = (event) => {
        event.preventDefault();

        const postarNovoTweet = {
            conteudo: this.state.novoTweet,
        }

        // DOIS PARAMETROS QUE A FUNÇÃO PEDE: (url, tweet)
        postTweets (postarNovoTweet, localStorage.getItem('TOKEN'))
            .then (resposta => {
                console.log (resposta.data)
                this.setState (stateAnterior => ({
                    tweets: [resposta.data, ...stateAnterior.tweets],
                    novoTweet: ''
                }))
        })
        

        //FEITO COM MÉTODO FETCH

        // fetch('http://localhost:3001', {
        //     method: "POST",
        //     body: JSON.stringify(postTweet)
        // })
        //     .then (response => response.json())
        //     .then (responseJson => {
        //         console.log (responseJson)
        //     })

    }

  render() {

    return (
      <Fragment>
        <Cabecalho>
            <NavMenu usuario="@carinadidomenico"/>
        </Cabecalho>
        <div className="container">
            <Dashboard>
                <Widget>
                    <form className="novoTweet" onSubmit={this.adicionaTweet}>
                        <div className="novoTweet__editorArea">
                            <span className={`${this.state.novoTweet.length > 140 ? "novoTweet__status novoTweet__status--invalido" : "novoTweet__status"}`}>{this.state.novoTweet.length}/140</span>
                            <textarea className="novoTweet__editor" placeholder="O que está acontecendo?" value={this.state.novoTweet} onChange={(event) => this.setState({novoTweet: event.target.value})}></textarea>
                        </div>
                        <button type="submit" className="novoTweet__envia" disabled={this.state.novoTweet.length > 140 ||this.state.novoTweet == 0}>Tweetar</button>
                    </form>
                </Widget>
                <Widget>
                    <TrendsArea/>
                </Widget>
            </Dashboard>
            <Dashboard posicao="centro">
                <Widget>
                    <div className="tweetsArea">
                        {
                            this.state.tweets.length > 0 ?
                            this.state.tweets.map ((elemento, index) => (
                                <Tweet {...elemento} key={index}/>
                            )):
                            <p>Compartilhe seu primeiro tweet!</p>
                        }
                    </div>
                </Widget>
            </Dashboard>
        </div>
      </Fragment>
    );
  }
}

export default Home;