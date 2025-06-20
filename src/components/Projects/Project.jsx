import './Project.css';
import Portfolio2 from '../../assets/portfolio-2.png';
import vmrm from '../../assets/vmrm.png';
import geminiClone from '../../assets/geminiClone.png';
import UGH from '../../assets/ugh.png';
import { useState } from 'react';


const Works = () => {
    const [showList, setShowList] = useState(false);

    return (
        <section id='works'>
            <h2 className='worksTitle'>Projects</h2>
            <span className='worksDesc'>Here is the list of projects that i have worked on.</span>
            <div className='worksImgs'>

                <div className='projectCard' >
                    <a href='https://vehicle-maintenance-repairing-manag.vercel.app/' target='_blank' rel='noopener noreferrer'>
                        <img src={vmrm} alt='VMRM' className='worksImg' />
                    </a>
                    <p className='projectTitle'>VMRM</p>
                </div>

                <div className='projectCard'>
                    <a href="https://imabwahab.github.io/Gemini-Clone/" target='_blank'>
                        <img src={geminiClone} alt='Gemini-Clone' className='worksImg' />
                    </a>
                    <p className='projectTitle'>Gemini-Clone</p>
                </div>


                {showList ? <div className='projectCard' >
                    <a href=" https://imabwahab.github.io/Gaming-Hub/" target='_blank'>
                        <img src={UGH} alt='Ultimate Gaming Hub' className='worksImg' />
                    </a>
                    <p className='projectTitle'>Gaming Hub</p>
                </div> : null}

            </div>
            {showList ? <button className='workBtn' onClick={() => setShowList(!showList)}>Reduce</button> : <button className='workBtn' onClick={() => setShowList(!showList)}>See More</button>}
        </section>
    );
}

export default Works;


// https://drive.google.com/file/d/1qDgzBzD3WNFkeIWaePoW9qmYez7RJ53R/view?usp=drive_link