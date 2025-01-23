import { useForm } from "react-hook-form";
import PopUpMe from "../pop-up-mensagem";
import { useState } from "react";


export default function ContactForm() {
    const {handleSubmit,register ,formState:{errors}, reset, watch} = useForm();
    const [submitForm, setSubmitForm] = useState(false);
    const queryResult = watch('queryType')


    function onSubmit() {
        reset()
        setSubmitForm(true)
        setTimeout(() => {
          setSubmitForm(false)
        }, 5000)
    }

    return (
        <main>
        {submitForm ? <PopUpMe /> : null}
        <section id='container'>
             <form id="form--container" onSubmit={handleSubmit(onSubmit)}>
            <legend>Contact us</legend>
           <div className="grid-1">
           <div className="input--row1">
            <label htmlFor="firstName">First Name *</label>
           <input style={{outlineColor: errors.firstName ? 'red' : ''}} {...register('firstName', {
            required: true
           })} name='firstName' id='firstName' type='text' />
           {errors.firstName ? <p>This field is required</p> : null}
           </div>
           
           </div>

          <div className="grid-2">
          <div className="input--row2">
            <label htmlFor="lastName">Last Name *</label>
           <input style={{outlineColor: errors.lastName ? 'red' : ''}} {...register('lastName', {
            required: true
           })} name='lastName' id='lastName' type='text' />
            {errors.lastName ? <p>This field is required</p> : null}
           </div>
          </div>

          <div className="grid-3">
          <div className="input--row3">
            <label htmlFor="email">Email address *</label>
           <input  style={{outlineColor: errors.email ? 'red' : ''}} {...register('email', {
            required: true
           })} name={'email'} id={'email'} type={'email'} />
            {errors.email ? <p>please enter a valid email address</p> : null}
           </div>
          </div>

          <div className="grid-4">
          <label className="lb">Query Type *</label>
          <div className="input--row4"> 

            <div className={queryResult === 'General Enquiry' ? 'Qr1 G-box' : 'Qr1'}  style={{outlineColor: errors.queryType ? 'red' : ''}}>
            <input className="notMe" {...register('queryType', {
            required: true
           })} name='queryType' id='queryType1' type='radio' value='General Enquiry' />
              
              <label htmlFor="queryType1">
             General Enquiry 
            </label>
            
            </div>

            <div className={queryResult === 'Support Request' ? 'Qr2 G-box' : 'Qr2'}   style={{outlineColor: errors.queryType ? 'red' : ''}} >
            <input className="notMe"   {...register('queryType', {
            required: true
           })} name='queryType' id='queryType2' type='radio' value='Support Request' />
             <label htmlFor="queryType2">
            Support Request
            </label>
          
             </div>
            
             
           {errors.queryType ? <p>please select a query type</p> : null}
           </div>
           
          </div>

          <div className="grid-5">
            
          <label htmlFor="message">Message *</label>
          <div className="input--row5">
           <textarea style={{outlineColor: errors.message ? 'red' : ''}}  {...register('message', {
            required: true
           })} name='message' id='message' />
           </div>
           
           {errors.message ? <p>This field is required</p> : null}
          </div>

          <div className="grid-6">
          <input  className="notMe" style={{borderColor: errors.confirmCheckBox ? 'red' : ''}}  {...register('confirmCheckBox', {
            required: true
           })} name='confirmCheckBox' id='confirmTerms' type="checkbox" />
          <label className='check' htmlFor="confirmTerms">
            I consent to being contacted by the team
            </label>   
            <div>
            {errors.confirmCheckBox  ? 
            <p>To submit this form, please consent to being contacted</p> : null}
            </div>
          </div>
                     
           <button type="submit">Submit</button>
        </form>
        </section>
        </main>
    )
}