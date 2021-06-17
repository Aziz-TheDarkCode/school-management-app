import Background from './header-bg.jpg'
const BackgrounedSection =()=>
{
    return(
        <div className='d-flex justify-content-between section p-3' style={{backgroundImage:`linear-gradient(to top, rgba(12, 12, 12, 0.56), rgba(12, 12, 12, 0.56)),url(${Background})`}}>
             <div className='d-flex flex-column justify-content-center ml-5'>
                <p className='text-larger mb-5'>SUP'INFO</p>
                <p className='text-larger'>INTERNATIONAL IT ACADEMY OF DAKAR</p>
             </div>
        </div>
    )
}
export default BackgrounedSection