import React from 'react';
import './App.css';


const Maincontent= (props) => {
    const {repos} = props;
    if (!repos || repos.length === 0) return <p>No data</p>;
    return(
        
        <div class="container">
            <div class="row">
                <div className="col-sm-12">
                {repos.map((scp) => {
                    return(
                    <div id={scp.item}>
                        <h2>Item #: {scp.item}</h2>
                        <div className="row">
                        <h3><b>Object Class: </b><span>{scp.class}</span></h3>
                        </div>
                        <div className="row">
                            <h3>Description:</h3>
                            <div className="text-justify" dangerouslySetInnerHTML={{__html:scp.description}} />
                        </div>
                        <br></br>
                        <div className="row">
                            <h3>Special Containment Procedures:</h3>
                            <div className="text-justify" dangerouslySetInnerHTML={{__html:scp.containment}} />
                        </div>
                        <hr/>
                    </div>
                        );
                })}
                </div>
                
            </div>
        </div>
    )
}

export default Maincontent;