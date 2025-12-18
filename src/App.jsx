import { useState } from 'react'
import Card from './componants/Card'

const App = () => {

  const jobOpenings = [
    {
      companyName: "TechNova Solutions",
      jobTitle: "Frontend Developer",
      employmentType: "Full-Time",
      jobLevel: "Junior",
      salary: "$45/hr",
      location: "Remote"
    },
    {
      companyName: "BlueWave Analytics",
      jobTitle: "Data Analyst",
      employmentType: "Part-Time",
      jobLevel: "Mid-Level",
      salary: "$60/hr",
      location: "Austin, TX"
    },
    {
      companyName: "CloudCore Systems",
      jobTitle: "DevOps Engineer",
      employmentType: "Full-Time",
      jobLevel: "Senior",
      salary: "$120/hr",
      location: "San Francisco, CA"
    },
    {
      companyName: "HealthSync",
      jobTitle: "UI/UX Designer",
      employmentType: "Part-Time",
      jobLevel: "Senior",
      salary: "$75/hr",
      location: "New York, NY"
    },
    {
      companyName: "FinEdge Group",
      jobTitle: "Backend Engineer",
      employmentType: "Full-Time",
      jobLevel: "Mid-Level",
      salary: "$95/hr",
      location: "Chicago, IL"
    }
  ];


  return (
    <div className='app'>
      {jobOpenings.map(function name(elem,idx) {
        return (
          <div key={idx}><Card company={elem.companyName} jobTitle={elem.jobTitle} employmentType={elem.employmentType} jobLevel={elem.jobLevel} salary={elem.salary} location={elem.location} /></div>
        )
      })}

    </div>
  )
}

export default App
