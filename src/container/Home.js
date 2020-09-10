import React, { Component } from 'react';
import '../style/index.css';
import MultiDropDown from '../core/MultiDropDown';
import { menuData } from '../mockData/data';

export default function Home() {
  return (
    <div className="home">
      <MultiDropDown data={menuData} />
    </div>
  )
}