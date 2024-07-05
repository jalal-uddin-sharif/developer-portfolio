import React from 'react';

const HeroCodePlate = () => {
    return (
        <section class="bg-gray-900 text-white rounded-md">
          <div>
              <div class="flex space-x-1 p-4">
                <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="h-[1px] bg-violet-600"></div>
          </div>
          <div className="p-4 roboto-mono text-md">
            <p><span className="text-pink-500">const</span> coder <span className="text-pink-500">=</span> &#123;  </p>
            <div className="px-4">
            <p>name: '<span className=" text-yellow-300">Ahmed Sharif</span>',</p>
            <p>skills: &#91; '<span className=" text-yellow-300">React</span>','<span className=" text-yellow-300">NodeJS</span>','<span className=" text-yellow-300">ExpressJS</span>','<span className=" text-yellow-300">MongoDB</span>' &#93; , </p>
            <p>hardWorker: <span className=" text-orange-600">true</span> ,</p>
            <p>quickLearner: <span className=" text-orange-600">true</span> ,</p>
            <p>problemSolver: <span className=" text-orange-600">true</span> ,</p>
            <p><span className="text-green-400">hirable</span>: <span className=" text-orange-600">function&#40;&#41;</span> &#123;</p>
            <p className="px-4"><span className="text-orange-600">return</span> &#40;</p>
            <div className="px-10">
                <p><span className="text-cyan-500">this.</span>hardWorker <span className="text-yellow-400">&&</span></p>
                <p><span className="text-cyan-500">this.</span>problemSolver <span className="text-yellow-400">&&</span></p>
                <p><span className="text-cyan-500">this.</span>skills.length <span className="text-yellow-400"> &#62;= <span className="text-orange-600">5</span></span></p>
            </div>
            <span className="px-4">&#41;;</span> <br />
            &#125;;
            </div>
            &#125;;
          </div>
        </section>
    );
};

export default HeroCodePlate;