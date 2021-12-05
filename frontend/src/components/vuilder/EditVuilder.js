import React from 'react'
import profile from '../empty-profile.png'
import { CgProfile } from "react-icons/cg";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithubSquare, FaTwitterSquare } from 'react-icons/fa';
const EditVuilder = (props) => {
    const location = useLocation();
    const path = location.pathname.replace("/edit","")
    const [blog, setBlog] = useState("")

    const handleOnChange = (e, editor) => {
        const data = editor.getData();
        console.log(data)
        setBlog(data)
    }

    // Submitted blog post will need to be html parsed before being placed on page
    var txt = ReactHtmlParser(blog)

    return (
        <div id="edit-vuilders" className="l-border">
            <div className="l-txt edit-header">
                Edit Profile
            </div>
            <div className="line sm-ta"></div>
            <div className="sm-ta">
                <Link to={path}>
                    <div className="sec-btn sb-ta">
                        Back
                    </div>
                </Link>
            </div>
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
                        <div className="editor-wrap">
                            <div className="text-editor">
                                <CKEditor
                                    editor={ ClassicEditor }
                                    data=""
                                    onChange = {handleOnChange}
                                />
                                <input type="text" value={blog} hidden/>
                            </div>
                        </div>
                        <div className="social-edit-main">
                            <div className="social-edit-wrap">
                                <div className="social-wrap">
                                    <div className="social-icon"><FaGithubSquare /></div>
                                    <div className="social-input-wrap"><input name="social-input" className="social-input" type="text"  placeholder="Enter Github"/></div>
                                </div>
                            </div>
                            <div className="social-edit-wrap">
                                <div className="social-wrap">
                                    <div className="social-icon"><FaTwitterSquare /></div>
                                    <div className="social-input-wrap"><input name="social-input" className="social-input" type="text"  placeholder="Enter Twitter"/></div>
                                </div>
                            </div>
                        </div>
                        <div className="edit-input-wrap">
                            <input className="edit-submit sec-btn" value="Save Changes" type="submit" />
                        </div>
                        
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default EditVuilder