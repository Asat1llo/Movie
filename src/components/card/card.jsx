import { useState, useEffect } from 'react'
import { Container, Section } from '../../Container.js'
import {CardWrraper, ContainerWrraper} from './card.js'
import CardsHeader from './cards_header/cards_header.jsx'
import CardsContainer from './cards_container/cards_container.jsx'

function Card({giveValue}){

   const[data,setData]= useState([])

   useEffect(()=>{
    fetch('https://64c9fecab2980cec85c2b76e.mockapi.io/movie/movie')
    .then((res)=>res.json())
    .then((data)=>setData(data))
   },[])

   console.log(giveValue);

   const filterData = data.filter(data2 =>{
    return data2.name.toLowerCase().includes(giveValue.toLowerCase()) 
   })


    return(
          <Section section={'section_card'} >
            <Container>
            <CardWrraper>
                <CardsHeader/>
                <ContainerWrraper>
                {
                  filterData.map((item,index)=>{
                    return <CardsContainer item={item} key={item.id}/>
                  })
                }
                </ContainerWrraper>
            </CardWrraper>
            </Container>
          </Section>
    )
}

export default Card