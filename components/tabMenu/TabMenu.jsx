import './TabMenu.css'

const TabMenu = ({show}) =>{
    return(
        <div className="modalNav" style={{
            transform : show ? 'translatey(0)' : 'translateY(-90vh)',
        }}>
            <h3>COMPANY PROFILE</h3>
            <h3>PRODUCT</h3>
            <h3>PROJECT</h3>
            <h3>CONTACT</h3>
            <h3 onClick={()=>{
                window.location.href = "/ecommplan"
            }}>E-COMM PLAN</h3>
        </div>
    )
}

export default TabMenu