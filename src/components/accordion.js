import {
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


const AccordionComponent = ({title,text})=>
{
    return(
            <>
        <AccordionItem className='mb-4'>
            <AccordionItemHeading>
                        <AccordionItemButton style={{backgroundColor:`#fbfbfb`}}>{title}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>{text}</p>
            </AccordionItemPanel>
        </AccordionItem>
        </>
    )
}
export default AccordionComponent
