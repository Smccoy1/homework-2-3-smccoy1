import React from 'react';
import pageData from "./PageData";


function OddPages() {
    return (
        <>
        <br />
        {pageData.page1}
        <br />
        {pageData.page3}
        </>
    );
}

export default OddPages;