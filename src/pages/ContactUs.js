import React from 'react'
import chantel from '../assets/chantel-photo.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const ContactUs = () => {
  const teamMembers = [
    {
      name: "Chantel Carter",
      bio: "Chantel has been collecting perfume since August 2023, and since then has found two passions, fragrance and programming. After a meeting with her mentor, she decided to combine the two passions in order to keep track of her ever growing perfume collection.",
      linkedin: "https://www.linkedin.com/in/chantelalexiacarter/",
      github: "https://github.com/chantelcarter",
      email: "carter.chantel.a@gmail.com",
      image: chantel,
    }
  ]

  return (
    <>
      <div>
        We're eager to hear from perfume brands of all sizes, so please share your news with us. For efficient communication, <a href="mailto:carter.chantel.a@gmail.com">email us</a> or reach out to team members directly. Providing detailed information allows our editors to seamlessly feature your products in our encyclopedia.
        <h2>
          Meet the Perfume App Team!
        </h2>
        <div>
        {teamMembers.map((member) => (
          <div>
            <img src={member.image} alt="team member" className='member-image'/>
            <h3>{member.name}</h3>
            <p>{member.bio}</p>
              <a
                href={member.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
              <a
                href={member.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
              <a href={`mailto:${member.email}`}>
                <MailOutlineIcon />
              </a>
          </div>
      ))}
        </div>
      </div>
    </>
    
  )
}

export default ContactUs