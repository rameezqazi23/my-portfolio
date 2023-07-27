import React from 'react'
import HTML from '../asset/html.png';
import CSS from '../asset/css.png';
import TailwindLogo from '../asset/tailwind.png';
import JavaScript from '../asset/javascript.png';
import ReactLogo from '../asset/react.png';
import FirebaseLogo from '../asset/firebase.png';
import GithubLogo from '../asset/github.png';
import NodeJsLogo from '../asset/node.png';

const Skills = () => {
    return (
        <div className='text-gray-300 bg-[#0a192f] font-sans'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#C23B22]'>Experience</p>

                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 my-4'>
                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <img src={HTML} className='w-20 mx-auto' alt="html icon" />
                        <p className='my-4'>HTML</p>
                    </div>

                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <img src={CSS} className='w-20 mx-auto' alt="css icon" />
                        <p className='my-4'>CSS</p>
                    </div>

                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <img src={JavaScript} className='w-20 mx-auto' alt="javascript icon" />
                        <p className='my-4'>JavaScript</p>
                    </div>

                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <img src={ReactLogo} className='w-20 mx-auto animate-pulse' alt="react icon" />
                        <p className='my-4'>ReactJs</p>
                    </div>

                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <img src={GithubLogo} className='w-20 mx-auto' alt="github icon" />
                        <p className='my-4'>Github</p>
                    </div>

                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <img src={FirebaseLogo} className='w-20 mx-auto' alt="firebase icon" />
                        <p className='my-4'>Firebase</p>
                    </div>

                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <img src={TailwindLogo} className='w-20 mx-auto' alt="tailwind icon" />
                        <p className='my-4'>Tailwind CSS</p>
                    </div>

                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <img src={NodeJsLogo} className='w-20 mx-auto' alt="nodejs icon" />
                        <p className='my-4'>Nodejs</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Skills
