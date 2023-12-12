import React, { Component } from 'react';
import './form.css';

export default class FormCompo extends Component {
   constructor() {
      super();
      this.state = {
         name: '',
         department: '',
         rating: '',
         arr: [],
      }
   }

   handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value })
   }

   handleSubmit = () => {
      const tempobj = {
         name: this.state.name,
         department: this.state.department,
         rating: this.state.rating,
      }
      this.state.arr.push(tempobj);
      this.setState({ arr: this.state.arr, name: '', department: '', rating: '' })
   }

   render() {
      return (
         <>
            <h1>EMPLOYEE FEEDBACK FORM</h1>
            <form>
               <fieldset>
                  <label>Name: </label>
                  <input type='text' name='name' value={this.state.name} placeholder='Enter your name' onChange={this.handleChange} />
               </fieldset>
               <fieldset>
                  <label>Department: </label>
                  <input type='text' name='department' value={this.state.department} placeholder='Enter your department' onChange={this.handleChange} />
               </fieldset>
               <fieldset>
                  <label>Rating: </label>
                  <input type='number' name='rating' value={this.state.rating} placeholder='Provide rating' onChange={this.handleChange} />
               </fieldset>
            </form>
            <button onClick={this.handleSubmit}>Submit</button>
            <div className='display-data'>
               {this.state.arr.map((item, index) => {
                  return (
                     <p key={index} className='box'>
                        <span>Name: {item.name} | </span>
                        <span>Department: {item.department} | </span>
                        <span>Rating: {item.rating}</span>
                     </p>
                  )
               })}
            </div>
         </>
      )
   }
}
