import Main from '../../components/main/main.jsx'
import Card from '../../components/card/card.jsx'

const Home = ({giveValue})=>{
    return(
        <>
        <Main/>
        <Card giveValue={giveValue}/>
        </>
    )
}

export default Home