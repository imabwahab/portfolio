import './Project.css';
import { useState } from 'react';
// project pictures
import vmrm from '../../assets/vmrm.png';
import geminiClone from '../../assets/geminiClone.png';
import UGH from '../../assets/ugh.png';
import BlogPlatform from '../../assets/BlogPlatform.png'

import { FiEye } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";

const Works = () => {
  const [showList, setShowList] = useState(false);

  return (
    <section id='works'>
      <h2 className='worksTitle'>Projects</h2>
      <span className='worksDesc'>Here is the list of projects that i have worked on.</span>
      <div className='worksImgs'>


        <div className='projectCard'>

          <img src={UGH} alt='Gaming Hub' className='worksImg'
            loading='lazy' />
          <p className='projectTitle'>Gaming Hub</p>

          <div className="linkBtns">
            <a href="https://imabwahab.github.io/Gaming-Hub/" target="_blank" rel="noopener noreferrer" className="fancyBtn">
              <FiEye />
              <span>Live Preview</span>
            </a>
            <a href="https://github.com/imabwahab/Gaming-Hub.git" target="_blank" rel="noopener noreferrer" className="fancyBtn">
              <FaGithub />
              <span>Code</span>
            </a>
          </div>
        </div>



        <div className='projectCard'>

          <img src={geminiClone} alt='Gemini-Clone' className='worksImg'
            loading='lazy' />
          <p className='projectTitle'>Gemini-Clone</p>

          <div className="linkBtns">
            <a href="https://imabwahab.github.io/Gemini-Clone/" target="_blank" rel="noopener noreferrer" className="fancyBtn">
              <FiEye />
              <span>Live Preview</span>
            </a>
            <a href="https://github.com/imabwahab/Gemini-Clone" target="_blank" rel="noopener noreferrer" className="fancyBtn">
              <FaGithub />
              <span>Code</span>
            </a>
          </div>
        </div>


        {/* Preload images */}
        <img src={vmrm} alt="menu preload" style={{ display: 'none' }} />
        <img src={BlogPlatform} alt="menu preload" style={{ display: 'none' }} />

        {showList ? <div className='projectCard'>

          <img src={BlogPlatform} alt='Blog Platform' className='worksImg'
            loading='lazy' />
          <p className='projectTitle'>Blog Platform</p>
          <div className="linkBtns">
            <a href="" target="_blank" rel="noopener noreferrer" className="fancyBtn">
              <FiEye />
              <span>Live Preview</span>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="fancyBtn">
              <FaGithub />
              <span>Code</span>
            </a>
          </div>
        </div>
          : null}

        {showList ?
          <div className='projectCard'>

            <img src={vmrm} alt='VMRM' className='worksImg'
              loading='lazy' />
            <p className='projectTitle'>VMRM</p>
            <div className="linkBtns">
              <a href="https://vehicle-maintenance-repairing-manag.vercel.app/" target="_blank" rel="noopener noreferrer" className="fancyBtn">
                <FiEye />
                <span>Live Preview</span>
              </a>
              <a href="https://github.com/imabwahab/Vehicle-Maintenance-Repairing-Management.git" target="_blank" rel="noopener noreferrer" className="fancyBtn">
                <FaGithub />
                <span>Code</span>
              </a>
            </div>
          </div>
          : null}

      </div>
      {showList ? <button className='workBtn' onClick={() => setShowList(!showList)}>Reduce</button> : <button className='workBtn' onClick={() => setShowList(!showList)}>See More</button>}
    </section>
  );
}

export default Works;
