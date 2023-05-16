import logo from './image/logo.png';
import Input from './Input/Input';

function RegistrationPage(){
    return(
        <>
        
        <div className="Registration">
            <div className="top">
                <img src = {logo} alt="logo" className="top-logo"/>
                <p className='registration-header'>Techtitude Academy</p>
                <div className='course-reg'>COURSE REGISTRATION</div>
            </div>
            <div className='form'>
                <div className='form-text'>First Name</div> 
                <Input className='name-input' placeholder ="eg. Daniel" type="text"/>
                <div className='form-text'>Last Name</div>
                <Input className='name-input' placeholder="eg. Olabanji" type ="text"/>
                <div className='form-text'>Email Address</div>
                <Input className='name-input' placeholder="eg. @daniel.olabanji@gmail.com" type ="text"/>
                <div className='form-text'>Phone Number</div>
                <Input className='name-input' placeholder="eg. 09012345678" type ="text"/>
                <div className='form-text'>Date of Birth</div>
                <Input className='name-input' placeholder="eg. Olabanji" type ="date"/>
                <div className='interests'>
                    <div className='form-text'>Courses Interested in</div>
                    <fieldset className='radio-input'>
                        <label><Input type ="radio"/>  Business Analysis</label>
                        <label><Input type ="radio"/>  Data Analytics</label>
                        <label><Input type ="radio"/>  Scrum Master</label>
                        <label><Input type ="radio"/>  Cyber Security</label>
                        <label><Input type ="radio"/>  UI/UX Design</label>
                    </fieldset>
                </div>
                <div className='form-text'>Any special Requirements or requests</div>
                <Input className='name-input' placeholder="Your answer" type ="text"/>
                <div className='interests'>
                    <div className='form-text'>How did you hear about this course</div>
                    <fieldset className='radio-input'>
                        <label><Input type ="radio"/>  Friends</label>
                        <label><Input type ="radio"/>  Website</label>
                        <label><Input type ="radio"/>  Social Media</label>
                        <label><Input type ="radio"/>  Others: <hr></hr></label>
                    </fieldset>
                </div>
            </div>
        </div>
    </> 
    )
}
export default RegistrationPage;