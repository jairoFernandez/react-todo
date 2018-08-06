import React, { Component } from 'react';
import GoogleMaps from "simple-react-google-maps"

export class UserProfile extends Component{  

    render(){        
        const { name, website, username, address, phone, email, company } = this.props.user;
        let { lat = "4.689329", lng = "-74.098792"  } = address.geo;
        lat = Number.parseFloat(lat);
        lng = Number.parseFloat(lng);
        
        const url = `https://${website}`;

        return(
                <div className="Profile">
                    <div>
                        <h1>{name}</h1>
                        <small>@{username}</small>
                    </div>
                    <br/>
                    <small> <i className="fa fa-globe"></i> <a target="_blank" href={url}>{url}</a></small>
                    
                    <p><i className="fa fa-phone"></i> {phone}</p>
                    <p><i className="fa fa-envelope"></i> {email}</p>
                    <div>
                        <i className="fa fa-building"></i> {company.name}<br/>
                        <small>{company.catchPhrase}</small><br/>
                        <small>{company.bs}</small>
                    </div>
                    <br/>
                    <div style={{borderRadius:"10px"}}>
                        {/* <GoogleMaps 
                            apiKey={"AIzaSyAQ_XE3MqBMlDuT2H0PzUz4BhDQWM-uejc"}
                            style={{height: "200px", width: "100%"}}
                            zoom={2}
                            center={{ lat, lng }}
                            markers={{ lat, lng }} //optional
                        /> */}
                    </div>
                </div>

        )
    }
}