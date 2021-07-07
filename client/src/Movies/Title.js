import React, { Component } from 'react';
import './Title.css';
import { Link } from "react-router-dom";

export default class SavedList extends Component {
  
    render() {
      return (
        <div className="title">
        <Link to="/" style={{ textDecoration: 'none' }}>
        <h1><i class="fas fa-ticket-alt"></i> Lambda Movie Selector</h1>
        </Link>
        </div>
      );
    }
  }