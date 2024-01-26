import Main from '../../components/main/main.jsx'
import Card from '../../components/card/card.jsx'

const Home = ({giveValue, data,loading})=>{
    return(
        <>
        <Main/>
        <Card giveValue={giveValue} data={data} loading={loading}/>
        </>
    )
}

export default Home