import React, {useState} from "react";

const MainScreen = () => {
   
    return (
       
       <div className="container p-5">
                <div className="container bg-dark">
                    <h2 className="p-4 text-light">My First Post at CodeLeap Network!</h2>
                </div>
                <div className="container border border-black">
                    <div className="container align-items-center d-flex justify-content-between p-3">
                        <p><strong>@Victor</strong></p>
                        <p>25 minutes ago</p>
                    </div>
                    <p className="container">
                        Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.

                        Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
                    </p>
                </div>
            </div>
    )
}

export default MainScreen;