import { useForm } from "react-hook-form";


export default function ContactForm() {
    const {handleSubmit,register ,formState:{errors}, reset} = useForm()

    function onSubmit(formData) {
        console.log(formData)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          
           <div className="input--row1">
            <label htmlFor="firstName">First Name *</label>
           <input {...register('firstName', {
            required: true
           })} name='firstName' id='firstName' type='text' />
           </div>

           <div className="input--row2">
            <label htmlFor="lastName">Last Name *</label>
           <input {...register('lastName', {
            required: true
           })} name='lastName' id='lastName' type='text' />
           </div>

           <div className="input--row3">
            <label htmlFor="email">Email address *</label>
           <input {...register('email', {
            required: true
           })} name={'email'} id={'email'} type={'email'} />
           </div>

           <div className="input--row4">
            <label htmlFor="">Query Type *</label>
            <label htmlFor="queryType1">
             General Enquiry 
            <input {...register('queryType', {
            required: true
           })} name='queryType' id='queryType1' type='radio' value='General Enquiry' />
            </label>

            <label htmlFor="queryType2">
            Support Request
            <input {...register('queryType', {
            required: true
           })} name='queryType' id='queryType2' type='radio' value='Support Request' />
            </label>
           </div>

           <div className="input--row5">
            <label htmlFor="message">Message *</label>
           <textarea {...register('message', {
            required: true
           })} name='message' id='message' />
           </div>

           <label htmlFor="confirmTerms">
              <input {...register('confirmCheckBox', {
            required: true
           })} name='confirmCheckBox' id='confirmTerms' type="checkbox" />
            I consent to being contacted by the team
            </label>   
                     
           <button type="submit">Submit</button>
        </form>
    )
}