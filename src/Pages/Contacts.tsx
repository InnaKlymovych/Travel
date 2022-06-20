import React from 'react'
import {IoIosBriefcase} from 'react-icons/io';
import {IoIosAt} from 'react-icons/io';
import {IoIosCall} from 'react-icons/io';
import {ImLocation} from 'react-icons/im';




function Contacts(){
    return (<>
        <div className='Contacts' >
            <h2>If You have any question , please contact Us.</h2>
            <div className='contact-box'>
                <div className='map'><a href="https://www.google.com/maps/@37.0217165,-7.9266122,15z" target="_blank">GOOGLE.MAP</a> </div>    
                <div className="contacts-list">
                    <ul>
                        <li><a href="/">< IoIosBriefcase /> Travel_Portugal</a></li>
                        <li><a href="/"><IoIosAt /> travelportugal@gmail.com</a></li>
                        <li><a href="/"><IoIosCall /> +351-123-4567</a></li>
                        <li><a href="/"><ImLocation /> Rua Nova , 37  8100-777 Loulé, Portugal</a></li>
                    </ul>   
                </div>
                
            </div>
        </div>
    </>
    
    )   
}

export default Contacts;