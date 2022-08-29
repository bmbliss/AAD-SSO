import React from "react";
import CopyButton from "./CopyButton";

/**
 * Renders information about the user obtained from MS Graph
 * @param props 
 */
export const ProfileData = (props) => {
    console.log(props.accessToken);

    return (
        <div id="profile-div">
            <CopyButton copyValue={props.accessToken} text={'Copy Token'}/>
            <p>
                <strong>Access Token: </strong> 
                <pre>
                    {props.accessToken}
                </pre>
            </p>
        </div>
    );
};