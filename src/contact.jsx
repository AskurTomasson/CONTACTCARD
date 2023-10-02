import askur from './images/askur.png'

function Contact() {
    return (
        <header>
            <img src={askur}/>
            <h1 className="profile-name">Askur Tomasson</h1>
            <h3 className="profile-job-title">Frontend Developer</h3>
        </header>
    )
}

export default Contact