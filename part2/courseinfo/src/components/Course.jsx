import React from 'react'
import Content from './Content'
import Header from './Header'
import Total from './Total'

function Course({courses}) {

    
    return (
        <div className="Course">
            {
                courses.map(course => (
                    <>
                       <Header courseName = {course.name}/>
                        <Content parts = {course.parts} />
                        <Total parts={course.parts} />  
                    </>
                ))
            }

        </div>
    )
}

export default Course
