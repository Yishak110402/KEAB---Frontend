import './ProjectDetail.css'

export default function ProjectDetail({selectedProject,setProjectDetail}) {
  return (
    <>
    <div className='project-detail'>
                    <button onClick={()=>setProjectDetail(false)}>Back</button>
                  <h1>title</h1>
            <div className="project-img">
                  <img src="./assets/bootcamp2.jpg" alt="jjj" />
              </div>
                  <span className='date-location'>date</span>
              <div className="project-description">
                  <p className='short-description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quod quibusdam consequatur nam quae illo, sunt distinctio nobis recusandae iste? Reprehenderit consequatur esse, dolorem quas quaerat sint cum ullam asperiores!Loremlorem
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatem quod commodi totam dolorum at numquam, ducimus, est eos, culpa possimus rem itaque qui minus illo facilis! Sint, quisquam quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus atque illo facere cum dolorum totam. Dolores minima perspiciatis porro debitis atque libero et? Corporis ipsum tempore ad quisquam porro.</p>
              </div>
      </div>
              <div className="call-to-action"> 
                    <img src="./assets/call to action.jpg" alt="call to action" />
                    <div className="prompt">
                        <h1>Ready to Make a Difference?</h1>
                        <p>Contact us to learn how you can support or join our mission.</p>
                        <button>Contact Us</button>
                    </div>
             </div> 
    </>
  )
}
