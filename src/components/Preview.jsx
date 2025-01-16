import '../styles/preview.css'

export function Preview(props) {
    const { info } = props;
    const fullName = info.general.firstName + ' ' + info.general.lastName;
    const educDate = info.education.fromDate + ' - ' + info.education.toDate;
    const workDate = info.work.fromDate + ' - ' + info.work.toDate;

  return (
    <div className="preview">
        <div className="general">
            <h1 className="genName">{fullName}</h1>
            <p className="genEmail">{info.general.email}</p>
            <p className="genContact">{info.general.contact}</p>
        </div>
        <hr />

        <div className="education">
            <h3>Education</h3>
            <div className="educLeft">
                <p className="educDate">{educDate}</p>
                <p className="educLoc">{info.education.location}</p>
            </div>
            <div className="educRight">
                <p className="educUniv">{info.education.university}</p>
                <p className="educDegree">{info.education.degree}</p>
            </div>          
        </div>
        <hr />

        <div className="work">
            <h3>Work Experience</h3>
            <div className="workLeft">
                <p className="workDate">{workDate}</p>
                <p className="workLoc">{info.work.location}</p>
            </div>
            <div className="workRight">
                <p className="workCompany">{info.work.company}</p>
                <p className="workPosition">{info.work.position}</p>
                <p className="workDesc">{info.work.description}</p>
            </div>
        </div>
    </div>
  )
}
