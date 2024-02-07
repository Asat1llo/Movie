import {Main, Card} from '../../components/index.jsx'

export const Home = ({giveValue, data,loading})=>{
    return(
        <>
        <Main/>
        <Card giveValue={giveValue} data={data} loading={loading}/>
        </>
    )
}
