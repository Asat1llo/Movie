import { useState, useEffect } from 'react'
import { Container, Section } from '../../Container.js'
import {CardWrraper, ContainerWrraper} from './card.js'
import CardsHeader from './cards_header/cards_header.jsx'
import CardsContainer from './cards_container/cards_container.jsx'
import {Loding} from './../../pages/index.jsx'

export function Card({giveValue,data,loading}){

   const filterData = data.filter(data2 =>{
    return data2.name.toLowerCase().includes(giveValue.toLowerCase()) 
   })

   if(loading){
    return <Loding/>
   }
   else return(
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
