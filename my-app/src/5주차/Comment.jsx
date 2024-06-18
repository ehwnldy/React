import React from "react";

const style = {
    wrapper : {
        margin : 8,
        padding : 8,
        display : "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius : 16
    },
    imageContainer : {},
    image : {
        width : 50,
        height : 50,
        borderRadius: 25
    },
    contentContainer :{
        marginLeft : 8,
        display : "flex",
        flexDirection : "column",
        justifyContent: "center"
    },
    commentText :{
        color : "black",
        fontSize: 16
    },
    nameText :{
        color : "black",
        fontSize: 16,
        fontWeight : "bold"
    }

}

function Comment(props){
    return(
        <div style={style.wrapper}>
            <div style={style.imageContainer}>
                <image src="" style={style.image}></image> 
            </div>

            <div style={style.contentContainer}>
                <span style={style.nameText}>{props.name}</span>
                <span style={style.commentText}>{props.comment}</span>
            </div>
        </div>
    )
}
export default Comment;