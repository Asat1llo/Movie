import Main from '../../main/main.jsx'
import Card from '../../card/card.jsx'

const Home = ({giveValue})=>{
    return(
        <>
        <Main/>
        <Card giveValue={giveValue}/>
        </>
    )
}

export default Home