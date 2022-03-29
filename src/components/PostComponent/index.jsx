import React from "react";
import './styles.css';

function PostComponent({props}) {

    const post = props.users.map((user, index) => 
                    <div className="cardContainer">
                        <div className="imageContainer">
                            <img className="imgPerson" src={user.profile_image_url} alt="" />
                        </div>
                        <div className="contentContainer">
                                <div className="description">
                                    <p id="namePerson">{user.name}</p>
                                    <p id="userPerson">@{user.username}</p>
                                </div>
                                <div className="comment">
                                    <p>
                                    {props.text[index].text}
                                    </p>
                                </div>
                                <div >
                                    <button className="buttonSeeMore">Ver mais no Twitter</button>
                                </div>
                        </div>
                    </div>
    )
    
    return <>
        <div className="mainContainer">
            {post}
        </div>
    </>
}

export default PostComponent;