import './Project.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';
import gemini from '../../assets/gemini.jpg'
import vmrm from '../../assets/vmrm.png';
import geminiClone from '../../assets/geminiClone.png';

const projectData = [
     { img: geminiClone, title: 'Gemini Clone' },
      { img: vmrm, title: 'VMRM' }
    // { img: Portfolio1, title: 'Project One' },
    // { img: Portfolio2, title: 'Project Two' },
    // { img: Portfolio3, title: 'Project Three' },
    // { img: Portfolio4, title: 'Project Four' },
    // { img: Portfolio5, title: 'Project Five' },
    // { img: Portfolio6, title: 'Project Six' },
];


const Works = () => {

    return (
        <section id='works'>
            <h2 className='worksTitle'>Projects</h2>
            <span className='worksDesc'>Here is the list of projects that i have worked on.</span>
            <div className='worksImgs'>
                {projectData.map((project, index) => (
                    <div className='projectCard' key={index}>
                        <img src={project.img} alt={project.title} className='worksImg' />
                        <p className='projectTitle'>{project.title}</p>
                    
                    </div>
                ))}
            </div>
            <button className='workBtn'>See More</button>
        </section>
    );
}

export default Works;