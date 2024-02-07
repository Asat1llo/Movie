import { Container , Section } from '../../Container.js'
import { AdminWrraper } from './admin.js'
import { AdminMOdal } from './admin_modal/admin_modal.jsx'

export const Admin = ()=>{

    return(
       <Section> 
        <Container>
        <AdminWrraper>
          <AdminMOdal/>
        </AdminWrraper>
        </Container>
       </Section>
    )
}
