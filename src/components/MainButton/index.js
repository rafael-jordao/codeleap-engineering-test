import React  from "react";

import "/Users/rafaeljordao/Documents/my-codes/codeleap/src/components/MainButton/button.css"



const MainButton = ({ btnContent, isDisabled, handleClick}) => {


    return (
        <div className="d-flex justify-content-end pt-3" >
            <button onClick={handleClick} disabled={isDisabled} >{btnContent}</button>
        </div>
    )

}


export default MainButton;