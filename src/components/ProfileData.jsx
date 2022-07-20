import React from "react";

/**
 * Renders information about the user obtained from MS Graph
 * @param props 
 */
export const ProfileData = (props) => {
    console.log(props.accessToken);

    return (
        <div id="profile-div">
            <p><strong>Access Token: </strong> {props.accessToken}</p>
        </div>
    );
};