import React from 'react';
import mockData from '../data/mockData';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="card-container">
        <div className="card">🏋️ Today’s Workout: {mockData.workout}</div>
        <div className="card">🍽 Nutrition: {mockData.nutrition}</div>
        <div className="card">📉 Weight Progress: {mockData.weight}</div>
        <div className="card">👥 Community: {mockData.community}</div>
      </div>
    </div>
  );
}


const styles = {
  container: {
    padding: '20px',
    fontFamily: 'sans-serif'
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginTop: '20px'
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  }
};
