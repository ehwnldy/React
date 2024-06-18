import Book from "./book";
import React from "react";

function Library(props){
    return(
        <div> 
            {/* Book.jsx에서 Book의 props로 name과 numOfPage 정의 */}
            <Book name="처음 만난 파이썬" numOfPage={300}></Book>
            <Book name="처음 만난 나" numOfPage={340}></Book>
            <Book name="처음 만난 너" numOfPage={500}></Book>
        </div>
    )
}
export default Library