import { useState } from 'react'
import { General } from './General.jsx'
import { Education } from './Education.jsx'
import { Work } from './Work.jsx'
import '../styles/form.css'

export function Form(props) {
  const [active, setActive] = useState(0);
  const { info, setInfo } = props;

  const handleGenChange = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({
      ...prev,
      general: { ...prev.general, [name]: value },
    }));
  };

  const handleEducChange = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({
      ...prev,
      education: { ...prev.education, [name]: value },
    }));
  };

  const handleWorkChange = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({
      ...prev,
      work: { ...prev.work, [name]: value },
    }));
  };

  return (
    <form id='form'>
      <General 
        title='General Information' 
        isActive={active === 1}
        onShow={() => setActive(1)}
        onClose={() => setActive(0)}
        info={info} 
        setInfo={setInfo} 
      >
        <label>
          First name: 
          <input type="text" 
            name="firstName"
            value={info.general.firstName} 
            onChange={handleGenChange}
          />
        </label><br />

        <label>
          Last name: 
          <input type="text" 
            name="lastName"
            value={info.general.lastName} 
            onChange={handleGenChange}
          />
        </label><br />

        <label>
          Email: 
          <input type="text" 
            name="email"
            value={info.general.email} 
            onChange={handleGenChange}
          />
        </label><br />

        <label>
          Contact: 
          <input type="text" 
            name="contact"
            value={info.general.contact} 
            onChange={handleGenChange}
          />
        </label><br />
      </General>

      <Education 
        title='Education Background' 
        isActive={active === 2}
        onShow={() => setActive(2)}
        onClose={() => setActive(0)}
        info={info} 
        setInfo={setInfo} 
      >
        <label>
          University: 
          <input type="text" 
            name="university"
            value={info.education.university} 
            onChange={handleEducChange}
          />
        </label><br />

        <label>
          Degree: 
          <input type="text" 
            name="degree"
            value={info.education.degree} 
            onChange={handleEducChange}
          />
        </label><br />

        <label>
          Location: 
          <input type="text" 
            name="location"
            value={info.education.location} 
            onChange={handleEducChange}
          />
        </label><br />

        <label>
          From: 
          <input type="text" 
            name="fromDate"
            value={info.education.fromDate} 
            onChange={handleEducChange}
          />
        </label><br />

        <label>
          To: 
          <input type="text" 
            name="toDate"
            value={info.education.toDate} 
            onChange={handleEducChange}
          />
        </label><br />
      </Education>

      <Work 
        title='Work Experience' 
        isActive={active === 3}
        onShow={() => setActive(3)}
        onClose={() => setActive(0)}
        info={info} 
        setInfo={setInfo} 
      >
        <label>
          Position:
          <input
            type="text" 
            name="position"
            value={info.work.position}
            onChange={handleWorkChange}
          />
        </label><br />

        <label>
          Company:
          <input
            type="text" 
            name="company"
            value={info.work.company}
            onChange={handleWorkChange}
          />
        </label><br />

        <label>
          Location:
          <input
            type="text" 
            name="location"
            value={info.work.location}
            onChange={handleWorkChange}
          />
        </label><br />

        <label>
          From:
          <input
            type="text" 
            name="fromDate"
            value={info.work.fromDate}
            onChange={handleWorkChange}
          />
        </label> <br />

        <label>
        To:
          <input
            type="text" 
            name="toDate"
            value={info.work.toDate}
            onChange={handleWorkChange}
          />
        </label><br />

        <label>
          Description:
          <textarea 
            name="description" 
            id="description"
            value={info.work.description}
            onChange={handleWorkChange}
            cols={30}
            rows={5}
          ></textarea>
        </label><br />
      </Work>
    </form>
  )
}
