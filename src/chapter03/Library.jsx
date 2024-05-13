import React from 'react';
import Book from "./Book";

function Library() {
    return (
        <div>
            <Book name="처음 만난 파이썬" numOfPages={300} />
            <Book name="처음 만난 AWS" numOfPages={400} />
            <Book name="처음 만난 리액트" numOfPages={500} />
        </div>
    );
}

export default Library;
