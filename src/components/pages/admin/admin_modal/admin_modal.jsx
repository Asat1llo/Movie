import { AdminModalWrraper,AdminModalContainer, AdminForm,AdminInput } from "./admin_modal"
import { useRef, useState, useEffect } from "react"

const AdminMOdal = ()=>{

    const[name,setName]= useState()
    const[action,setAction] = useState()
    const[quality,setQuality] = useState()
    const[time, setTime] = useState()
    const[year, setYear] = useState()
    const[rating, setRating] = useState()
    const[trailer, setTrailer] = useState()
    const[img, setImg] = useState()

    const data = {'name':name, 'action':action, 'quality':quality, 'time':time, 'year':year, 'rating':rating, 'trailer':trailer, 'img':img}


    const onSubmit = (evt)=>{
        evt.preventDefault()
        if(name == ''|| action == '' || quality == ''|| time == ''|| year == ''|| rating == ''|| trailer == ''|| img == ''){
          console.log('error');
        }
          else {
            fetch('https://64c9fecab2980cec85c2b76e.mockapi.io/movie/movie',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((res)=>{
           setName('')
           setAction('')
           setQuality('')
           setTime('')
           setYear('')
           setRating('')
           setTrailer('')
           setImg('')
        })
        }
    }


    return(
        <AdminModalWrraper>
        <AdminModalContainer>
            <AdminForm>
                <AdminInput type="text" placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <AdminInput type="text" placeholder="action" value={action} onChange={(e)=>{setAction(e.target.value)}}/>
                <AdminInput type="text" placeholder="quality" value={quality} onChange={(e)=>{setQuality(e.target.value)}}/>
                <AdminInput type="text" placeholder="img" value={img} onChange={(e)=>{setImg(e.target.value)}}/>
                <AdminInput type="text" placeholder="trailer" value={trailer} onChange={(e)=>{setTrailer(e.target.value)}}/>
                <AdminInput type="number" placeholder="time" value={time} onChange={(e)=>{setTime(e.target.value)}}/>
                <AdminInput type="number" placeholder="year" value={year} onChange={(e)=>{setYear(e.target.value)}}/>
                <AdminInput type="number" placeholder="rating" value={rating} onChange={(e)=>{setRating(e.target.value)}}/>
                <AdminInput type="submit" onClick={onSubmit} />
            </AdminForm>
        </AdminModalContainer>
        </AdminModalWrraper>
    )
}

export {AdminMOdal} 