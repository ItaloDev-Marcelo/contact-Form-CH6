import success from './assets/icon-success-check.svg';

export default function PopUpMe() {
    return (
        <article id='pop-sms'>
           <div className="row">
            <img src={success} alt=''/>
           <h1 id="pop-title">Message Sent!</h1>
           </div>
           <p id="pop-text">Thanks for completing the form. We'll be in touch soon!</p>
        </article>
    )
}