import React from 'react';
import './sideBar.css';
import navList from '../data/navItem.js';
import NavItem from './NavItem';
import { Link } from 'react-router-dom';



const SideBar=(props)=> {


    function CustomLink({ to, children, ...props}) {
        const path =window.location.pathname 
        return(
            <li className={path === to ? 'active' : ''}>
                <Link to={to} {...props}>
                    {children}
                </Link>

            </li>
        )
    }



  return (
    <aside className='sidebar' id='sidebar' >
     <ul className='sidebar-nav' id='sidebar-nav'>
        <li className='nav-item' onClick={props.homeclick}>
            <Link to="/home">
            <i className='bi bi-grid'></i>
            <span>Dashboard</span>
            </Link>
        </li>

        <li className='nav-item'>
            <Link to="#"
            className='nav-link collapsed'
            data-bs-target='#components-nav'
            data-bs-toggle='collapse'>
                <i className='bi bi-align-start'></i>
                <span>Start off Day</span>
                <i className='bi bi-chevron-down ms-auto'></i>
            </Link>
            <ul id='components-nav' className='nav-content collapse'
            data-bs-parent='#sidebar-nav'>
                <li onClick={props.filesclick}>
                    <Link to="/Files">
                        <i className='bi bi-circle'></i>
                <span>File Management</span>
                </Link>
                </li>
                <li onClick={props.salesrunclick}>
                    <Link to="/SalesRun">
                        <i className='bi bi-circle'></i>
                <span>Sale Run</span>
                </Link>
                </li>
                <li onClick={props.growerregclick}>
                    <Link to="/GrowerReg">
                        <i className='bi bi-circle'></i>
                <span>Grower Registration</span>
                </Link>
                </li>
                <li onClick={props.bookingclick}>
                    <Link to="/Booking">
                        <i className='bi bi-circle'></i>
                <span>Grower Booking</span>
                </Link>
                </li>
                <li onClick={props.stoporderproclick}>
                    <Link to="/StopOrderProcess">
                        <i className='bi bi-circle'></i>
                <span>Stoporder Processing</span>
                </Link>
                </li>
            </ul>
        </li>


        
        <li className='nav-item'>
            <a href="#"
            className='nav-link collapsed'
            data-bs-target='#receiving-nav'
            data-bs-toggle='collapse'>
                <i className='bi bi-truck'></i>
                <span>Receiving</span>
                <i className='bi bi-chevron-down ms-auto'></i>

            </a>

            {/* RECEIVING-NAV */}

            <ul id='receiving-nav' className='nav-content collapse'
            data-bs-parent='#sidebar-nav'>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                <span>Delivery Notes</span>
                </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                <span>Bale receiving</span>
                </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                <span>Ticket Printing</span>
                </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                <span>Ticket Batching</span>
                </a>
                </li>
            </ul>
        </li>

        {/* FLOOR NAV */}

        <li className='nav-item'>
            <a href="#"
            className='nav-link collapsed'
            data-bs-target='#floor-nav'
            data-bs-toggle='collapse'>
                <i className='bi bi-shop-window'></i>
                <span>Floor</span>
                <i className='bi bi-chevron-down ms-auto'></i>

            </a>

            <ul id='floor-nav' className='nav-content collapse'
            data-bs-parent='#sidebar-nav'>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                <span>Floor Summary</span>
                </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                <span>Dispatch</span>
                </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                <span>Bale Adjustments</span>
                </a>
                </li>
            </ul>
        </li>

        {/* SALES/CAPTURING */}

        <li className='nav-item'>
            <a href="#"
            className='nav-link collapsed'
            data-bs-target='#sales-nav'
            data-bs-toggle='collapse'>
                <i className='bi bi-ticket-perforated'></i>
                <span>Sales</span>
                <i className='bi bi-chevron-down ms-auto'></i>

            </a>

            <ul id='sales-nav' className='nav-content collapse'
            data-bs-parent='#sidebar-nav'>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                <span>Capturing</span>
                </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                <span>Balancing</span>
                </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                <span>Sale Batching(barcode)</span>
                </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                <span>Sale Processing</span>
                </a>
                </li>

            </ul>
        </li>

        {/* STOPORDERS */}

        <li className='nav-item'>
            <a href="#"
            className='nav-link collapsed'
            data-bs-target='#stoporder-nav'
            data-bs-toggle='collapse'>
                <i className='bi bi-building-check'></i>
                <span>Stoporders</span>
                <i className='bi bi-chevron-down ms-auto'></i>

            </a>

            <ul id='stoporder-nav' className='nav-content collapse'
            data-bs-parent='#sidebar-nav'>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                <span>Stoporder Verification</span>
                </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                <span>Capturing</span>
                </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                <span>Batching</span>
                </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                <span>Edit Internals</span>
                </a>
                </li>
            </ul>
        </li>

        {/* ACCOUNTS */}

        <li className='nav-item'>
            <a href="#"
            className='nav-link collapsed'
            data-bs-target='#accounts-nav'
            data-bs-toggle='collapse'>
                <i className='bi bi-cash-coin'></i>
                <span>Accounts</span>
                <i className='bi bi-chevron-down ms-auto'></i>

            </a>

            <ul id='accounts-nav' className='nav-content collapse'
            data-bs-parent='#sidebar-nav'>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                <span>Purchase Summary</span>
                </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                <span>Capture Internals</span>
                </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                <span>Grower Loans</span>
                </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                <span>Parameters</span>
                </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                <span>QuickAcc</span>
                </a>
                </li>
            </ul>
        </li>

        {/* Reports */}

        <li className='nav-item'>
            <a href="#"
            className='nav-link collapsed'
            data-bs-target='#reports-nav'
            data-bs-toggle='collapse'>
                <i className='bi bi-journal-text'></i>
                <span>Reports</span>
                <i className='bi bi-chevron-down ms-auto'></i>

            </a>

            <ul id='reports-nav' className='nav-content collapse'
            data-bs-parent='#sidebar-nav'>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                <span>Revenues</span>
                </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                <span>Creditor Schedules</span>
                </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                <span>Invoices</span>
                </a>
                </li>
            </ul>
        </li>

        <li className='nav-item'>
            <a href="#"
            className='nav-link collapsed'
            data-bs-target='#eod-nav'
            data-bs-toggle='collapse'>
                <i className='bi bi-align-end'></i>
                <span>EOD</span>
                <i className='bi bi-chevron-down ms-auto'></i>

            </a>

            <ul id='eod-nav' className='nav-content collapse'
            data-bs-parent='#sidebar-nav'>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                <span>Daily Statistics</span>
                </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                <span>TIMB files</span>
                </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                <span>Creditor Files</span>
                </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                <span>Earnings</span>
                </a>
                </li>
            </ul>
        </li>

        {/* Settings */}

        <li className='nav-item'>
            <a href="#"
            className='nav-link collapsed'
            data-bs-target='#settings-nav'
            data-bs-toggle='collapse'>
                <i className='bi bi-gear'></i>
                <span>Settings</span>
                <i className='bi bi-chevron-down ms-auto'></i>

            </a>

            <ul id='settings-nav' className='nav-content collapse'
            data-bs-parent='#sidebar-nav'>
                <li onClick={props.buyerclick}>
                    <Link to="/Buyer">
                        <i className='bi bi-circle'></i>
                <span>Buyer</span>
                </Link>
                </li>
                <li onClick={props.sellingpointclick}>
                    <Link to="/SellingPoint">
                        <i className='bi bi-circle'></i>
                <span>Selling Point</span>
                </Link>
                </li>
                <li onClick={props.gradesclick}>
                    <Link to="/Grades">
                        <i className='bi bi-circle'></i>
                <span>Grades</span>
                </Link>
                </li>
                <li onClick={props.parametersclick}>
                    <Link to="/Parameters">
                        <i className='bi bi-circle'></i>
                <span>Statutory Parameters</span>
                </Link>
                </li>
                <li onClick={props.backupclick}>
                    <Link to="/Backup">
                        <i className='bi bi-circle'></i>
                <span>Backup</span>
                </Link>
                </li>
                <li onClick={props.usersclick}>
                    <Link to="/ManageUsers">
                        <i className='bi bi-circle'></i>
                <span>Manage Users</span>
                </Link>
                </li>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                <span>Audit Trail</span>
                </a>
                </li>
            </ul>
        </li>

        <li className='nav-heading'>Pages
        </li>
        {navList.map(nav => (
            <NavItem key={nav._id} nav={nav}/>

        ))}
    
     </ul>
    </aside>
  );
}

export default SideBar;