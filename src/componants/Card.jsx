import React from "react";

const Card = (myname) => {

    return (
        <div className="parent">
            <div class="card1">
                <div class="top-bar">
                    <div class="logo">a</div>
                    <div class="save">Save</div>
                </div>

                <div class="header">
                    <span class="company">{myname.company}</span>
                    <span class="date">5 days ago</span>
                </div>

                <div class="job-title">{myname.jobTitle}</div>

                <div class="tags">
                    <span class="tag">{myname.employmentType}</span>
                    <span class="tag senior">{myname.jobLevel}</span>
                </div>

                <div class="bottom-bar">
                    <div>
                        <div class="salary">{myname.salary}</div>
                        <div class="location">{myname.location}</div>
                    </div>
                    <button class="apply-btn">Apply now</button>
                </div>
            </div>



        </div>
    )
}

export default Card;

