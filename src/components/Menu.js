import open from "../images/icon-hamburger.svg"
import close from "../images/icon-close.svg"

const Menu = ({isOpen,setIsOpen}) => {
  return (
    <>
      <button onClick={()=>{    setIsOpen(!isOpen)  }} className="md:hidden">
          {isOpen ?<img src={close}></img>: <img src={open}></img>}
      </button>
    </>
  )
}

export default Menu
