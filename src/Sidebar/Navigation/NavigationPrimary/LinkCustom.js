import React from 'react';
import {Link} from 'react-router-dom';

function LinkCustom(props) {
    return(
        <div>
            <li key={props.index} className='navigation__item'>
                <Link className='navigation__item--link' to={props.element.link}>{props.element.linkText}</Link>
            </li>
        </div>
    )
}

export default LinkCustom

// <li key={index} className='navigation__item'>
//                             <Link className='navigation__item--link' to={element.link}>
//                                 <svg className='navigation__item--svg' version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
//                                     <title>spoon-knife</title>
//                                     <path d="M7 0c-3.314 0-6 3.134-6 7 0 3.31 1.969 6.083 4.616 6.812l-0.993 16.191c-0.067 1.098 0.778 1.996 1.878 1.996h1c1.1 0 1.945-0.898 1.878-1.996l-0.993-16.191c2.646-0.729 4.616-3.502 4.616-6.812 0-3.866-2.686-7-6-7zM27.167 0l-1.667 10h-1.25l-0.833-10h-0.833l-0.833 10h-1.25l-1.667-10h-0.833v13c0 0.552 0.448 1 1 1h2.604l-0.982 16.004c-0.067 1.098 0.778 1.996 1.878 1.996h1c1.1 0 1.945-0.898 1.878-1.996l-0.982-16.004h2.604c0.552 0 1-0.448 1-1v-13h-0.833z"></path>
//                                 </svg>
//                                 {element.linkText}
//                             </Link>
//                         </li>