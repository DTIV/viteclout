import React from 'react'
import profile from '../empty-profile.png'
import { CgProfile } from "react-icons/cg";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { useState } from 'react';

const EditVuilder = () => {
    const [blog, setBlog] = useState("")

    const handleOnChange = (e, editor) => {
        const data = editor.getData();
        console.log(data)
        setBlog(data)
    }
    var txt = ReactHtmlParser(blog)
    console.log(txt)
    return (
        <div id="edit-vuilders" className="l-border">
            <div className="l-txt edit-header">
                Edit Profile
            </div>
            <div className="line sm-ta"></div>
            <div>
                <form action="">
                    <div>
                        <div className="edit-pic-wrap">
                            <div>
                                <img src={profile} alt="" />
                            </div>
                            <div className="file-wrap">
                                <input name="files" type="file" classButton="file-input"/>
                            </div>
                        </div>
                        
                        <div className="header-input-wrap">
                            <input name="header-input" type="text" className="header-input" placeholder="Enter Header Text"/>
                        </div>
                        
                        <div>
                            <CKEditor
                                editor={ ClassicEditor }
                                data=""
                                onChange = {handleOnChange}
                            />
                            <input type="text" value={blog} hidden/>
                        </div>
                        <div>
                            <input type="url" placeholder="Github"/>
                        </div>
                        <div>
                            <input type="submit" />
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default EditVuilder