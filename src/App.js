import React, { Component } from 'react'
import NavBar from './components/NavBar'
import CoursesList from './components/CoursesList'
import CheckboxList from './components/CheckboxList'
import NestedList from './components/NestedList'
//import FloatingActionButtonZoom from './components/FloatingActionButtonZoom'

class App extends Component {
  render() {
    return (<div>
      <NavBar />
      <CoursesList />
      
      <CheckboxList/>
      <NestedList />
     
    </div>);
  }
}

export default App;
