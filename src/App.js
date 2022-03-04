//librerias
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FeedbackProvider } from './context/FeedbackContext';

//hojas de estilo
import './App.css';

//importar los hooks, manejan los estados de la app
//import { useState } from 'react';


//componetes
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import About from './pages/About';
import AboutIconLink from './components/AboutIconLink';

// datos 
//import FeedbackData from './feedbackData';

function App() {

  /* 
    React router 6 necesita importar Routes, Route y Router(BrowserRoutes) para funcionar
    ---el prop component de Route se cambia por element y lleva adentro jsx,
        si son varios deben llevar un fragment como componente padre
    ---los elementos Route deben de ir anidados dentro del elemento Routes
    --- path es la direccion y exact va is quieres que solo sea esa ruta no que la incluya
  */
  return (
    <FeedbackProvider>
    <Router>
      <Header/>
      <div className="container">
      <Routes>
      <Route exact path='/' element={
          <>
            <FeedbackForm/>
            <FeedbackStats/>
            <FeedbackList/>
            <AboutIconLink/>
          </>
        }
      >
        
      </Route>
      <Route path='/about' element={ <About/> }/>
      </Routes>
        
      </div>
    </Router>
    </FeedbackProvider>
  );
}

export default App;
