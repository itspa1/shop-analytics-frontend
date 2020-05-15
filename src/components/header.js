import React from 'react';
import DatePicker from "react-datepicker";
import moment from 'moment'
import { Container, Row, NavbarBrand, Navbar, Nav, Badge, ToggleButton, ButtonGroup, Spinner, Modal, Collapse, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEye, faWifi, faUserFriends, faCalendar } from '@fortawesome/free-solid-svg-icons'




function Header(props) {

    return (


        <Navbar bg="dark" variant="dark" expand="lg">
            <div className="container">
                <Navbar.Brand href="/"><h2>PI-ANALYTICS</h2></Navbar.Brand>
                <Nav navbar className="mr-auto">
                    <NavItem>
                        <NavLink className="nav-link" to='/home'><FontAwesomeIcon icon={faHome} /> Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/pisniff'><FontAwesomeIcon icon={faWifi} /> Pi-Sniff</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/pivision'><FontAwesomeIcon icon={faEye} /> Pi-Vision</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/about'><FontAwesomeIcon icon={faUserFriends} /> About</NavLink>
                    </NavItem>
                    {/* <ButtonGroup toggle className="mb-2" onChange={props.rawFrameToggleHandler}>
                        <ToggleButton variant="light" type="checkbox">
                            Raw Frames
                            </ToggleButton>
                    </ButtonGroup> */}
                </Nav>
                <Nav className="ml-auto" >
                    {/* <h4><Badge className="p-2 mr-2 ml-3" variant="light"><FontAwesomeIcon icon={faCalendar} /></Badge></h4> */}
                    <DatePicker className="ml-6"
                        placeholderText="click to select date"
                        // showTimeSelect
                        selected={props.piDataFileRequestName}
                        onChange={props.datePickerHandler}
                        // timeFormat="h:mm aa"
                        // timeIntervals={60}
                        // timeCaption="time"
                        // minDate={moment()
                        //   .subtract(1, "week")
                        //   .toDate()}
                        dateFormat="MMMM d, yyyy"
                        maxDate={moment().toDate()}
                    />
                </Nav>

            </div>
        </Navbar>
    );
}

export default Header;
