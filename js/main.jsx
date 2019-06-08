
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Image from '../img/donald.png'
document.addEventListener('DOMContentLoaded', function(){



class Timer extends React.Component{
    state = {
        counter: 30
    }

    componentDidMount() {
        this.startTimer = setTimeout(() => {
            this.timer = setInterval(()=>{
                this.state.counter !== 0 ?this.setState((prevState) => {return {counter: prevState.counter-1}}) : 0;
            }, 1000)
        },1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render(){
        return(
        this.state.counter !==0 ?
            <div className = 'timer-clock'>
                    <div>
                        <p>
                            TIME
                        </p>
                        <p>
                         {this.state.counter}
                        </p>
                    </div>
             </div> : <div className = ' timer-finishScreen'>
                            <h1> TIME OUT !</h1>
                            <h2>Your score: {result.length -1}</h2>
                            <button className = 'button-restart'>
                                <a href = "http://localhost:8080/">Play again!</a>
                            </button> 
                      </div>
        )
    }
}

const result = []

class ScoreBoard extends React.Component {
    render(){
        {result.push(this.props.points)}
        return(
            <div className = 'scoreBoard-board'>
                <div className = 'scoreBoard-points'>
                    <p>POINTS</p>
                    <p>{this.props.points}</p>
                </div>
            </div>
        )
    }
}

class Start extends React.Component {
    state = {
        style : {
            display: 'flex',
            justifyContent:'center',
            alignItems: 'center',
            background: 'black',
            overflow: 'hidden',
            width: '100vw',
            height: '100vh',
            color: 'white',
        },
        isOn: false
    }

    hooverIn = () => {
        this.setState(prevState =>({
            style: {
                ...prevState.style,
            color: 'red',
            transition: '0.3s ease-in',
            }
        })
        )
    }

    hooverOut = () => {
        this.setState(prevState =>({
            style: {
                ...prevState.style,
            color: 'white'
            }
        })
        )
    }

    changeDisplay = () => {
        this.setState({
            style : {
                display: 'none',
                transition: '1s ease-out'
            },
            isOn: !this.state.isOn
        })
    }

    render(){
        return(
            <>
            <div style = {this.state.style}>
                <h1 className= 'start-mainHeader' onClick = {this.changeDisplay} onMouseEnter = {this.hooverIn} onMouseLeave = {this.hooverOut}>
                    PLAY
                </h1>
            </div>
            {this.state.isOn ? <Timer/> : null}
            </>
        )
    }
}

class GameBox extends React.Component {
    state = {
        style : {
            width: '65px',
            background: 'rgba(0,0,0,0.0)',
            borderRadius: '50%',
            height: '80px',
            fontSize: '15px',
            color: 'whitesmoke',
            textAlign: 'center',
            position: 'absolute',
            top: ((Math.random() * (600 - 5 + 1)) + 5) + 'px',
            left: ((Math.random() * (1000 - 5 + 1)) + 5) + 'px',
            zIndex: -1
        },
        points: 0
    }

    Change = () => {
        this.setState(prevState =>({
            style: {
                ...prevState.style, 
                top: ((Math.random() * (600 - 5 + 1)) + 5) + 'px',
                left: ((Math.random() * (1000 - 5 + 1)) + 5) + 'px',
                transitionTimingFunction: 'ease-out',
                transitionDuration: '0.2s'
            },
            points: this.state.points + 1 
        })
        )
    }

    render(){
        return (
            <>
            <div style = {this.state.style} onMouseEnter = {this.Change} className = 'mainBox'>
                <img src = {Image} style = {{width: this.state.style.width, height: this.state.style.height}}/>
                <p>CATCH ME !</p>
            </div>
            
            <ScoreBoard points = {this.state.points}/>
            
            </>
        )
    }
}

class App extends React.Component {
    render(){
        return(
            <>
            <Start/>
            <GameBox />
            </>
        )
    }
}

    ReactDom.render(<App />, document.querySelector('#app'))
});