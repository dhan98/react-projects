// import minew from './assets/minew.png'
function Alchemy(props){
    return (
        
            <div className="card">
            <h1>{props.title}</h1>
        
            <h3>{props.text}</h3>
        
        <img src={props.imagg} alt="dummy" /><br />
        <button>Sabotage</button>
        </div>
        
    )

}

export default Alchemy

