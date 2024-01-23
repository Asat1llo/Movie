import { Section } from "../../Container"
import { LoadingWrraper, LoaderSpan } from "./loading"


export const Loading = ()=>{
    return(
        <Section>
          <LoadingWrraper>
            <LoaderSpan>Loading...</LoaderSpan>
          </LoadingWrraper>
        </Section>
    )
}