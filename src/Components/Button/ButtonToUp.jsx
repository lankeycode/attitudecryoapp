import React, {useState, useEffect} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowUp} from '@fortawesome/free-solid-svg-icons/faCircleArrowUp';

function ButtonToUp() {

    //STATE
    const [showTopBtn,setShowTopBtn] = useState(false)


    //BEHAVIORS
    useEffect(() => {
      // Display button fo scrollTop
        window.addEventListener("scroll", () => {
            if(window.scrollY > 400) {
                setShowTopBtn(true)
            } else {
                setShowTopBtn(false)
            }
        })
    },[])
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior:'smooth' })
      }

  return (
    <div className="top-to-btn">
    {/* {" "} */}
    {showTopBtn && (
    <FontAwesomeIcon icon={faCircleArrowUp} 
         className="icon-position icon-style" 
         onClick={scrollTop}
    />
    )}
    {/* {" "} */}
    </div>
  )
}

export default ButtonToUp