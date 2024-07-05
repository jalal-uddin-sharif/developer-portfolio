import React from "react";
import HeroCodePlate from "../component/HeroCodePlate";
import Socialicon from "../component/Socialicon";
import { RiContactsLine } from "react-icons/ri";
import { MdOutlineFileDownload } from "react-icons/md";
import SkillCard from "../component/SkillCard";
import SectionTitle from "../component/SectionTitle";

const Home = () => {
  return (
    <section>
      <div className="grid md:grid-cols-2 ">
        <div className="text-3xl font-bold text-white leading-10 py-10  flex items-center">
          <div>
            <div>
              <h1>Hello,</h1>
              <h1>
                This is{" "}
                <span className="text-pink-500">Jalal Uddin Sharif</span>
              </h1>
              <h1>
                I'm a Frontend{" "}
                <span className="text-[#16F2B3]">Web Developer.</span>
              </h1>
            </div>
            <div>
              <Socialicon />
            </div>
            <div className="text-sm font-normal my-6 flex gap-6">
              <button className="px-6 py-2 rounded-full border-pink-600 border flex items-center gap-2 hover:gap-3 transition-all duration-300 hover:border-green-400">
                Contact <RiContactsLine />
              </button>
              <a href="/My.cv2.pdf" download>
                <button className="group px-6 py-2 rounded-full border-cyan-300  border flex items-center gap-2 hover:gap-3 transition-all duration-300 hover:border-green-400">
                  Resume{" "}
                  <MdOutlineFileDownload className="group-hover:animate-bounce" />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div>
          <HeroCodePlate />
        </div>

        {/* about section */}
        <div className="my-16">
          <h1 className="uppercase text-lg font-medium text-green-400">
            Who i am ?
          </h1>
          <p className="text-lg text-white inter my-4">
            My name is JALAL UDDIN SHARIF. I am a professional and enthusiastic
            programmer in my daily life. I am a quick learner with a
            self-learning attitude. I love to learn and explore new technologies
            and am passionate about problem-solving. I love almost all the
            stacks of web application development and love to make the web more
            open to the world. My core skill is based on JavaScript and I love
            to do most of the things using JavaScript. I am available for any
            kind of job opportunity that suits my skills and interests.
          </p>
        </div>

        {/* my image */}
        <div className="flex justify-center items-center">
          <img src="profile.jpg" alt="" className="h-64 w-auto rounded-lg" />
        </div>
      </div>

      {/* skills */}
      <div className="w-full">
        {/* <div className="flex items-center justify-center my-6">
          <span class="w-24 h-[2px] bg-[#251e55]"></span>
          <span class="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span class="w-24 h-[2px] bg-[#251e55]"></span>
        </div> */}
          <SectionTitle title={'Skills'}/>
        {/* skill card */}
        <div className="flex flex-wrap gap-4">
          <SkillCard image="https://i.ibb.co/kx1BycZ/pngwing-com-4.png" cardName={"HTML"}/>
          <SkillCard image="https://i.ibb.co/gZNJg52/pngwing-com-6.png" cardName={"Css"}/>
          <SkillCard image="https://i.ibb.co/tp9NsyW/pngwing-com-5.png" cardName={"Tailwind Css"}/>
          <SkillCard image="https://i.ibb.co/d0wbckW/pngwing-com-7.png" cardName={"JavaScript"}/>
          <SkillCard image="https://i.ibb.co/WWTm6Np/pngwing-com-8.png" cardName={"ReactJs"}/>
          <SkillCard image="https://i.ibb.co/yqmQDJ0/pngwing-com-9.png" cardName={"NodeJs"}/>
          <SkillCard image="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" cardName={"ExpressJS"}/>
          <SkillCard image="https://i.ibb.co/K2GXq28/pngwing-com-10.png" cardName={"MongoDB"}/>
        </div>

        <SectionTitle title={'Projects'}/>
      </div>
    </section>
  );
};

export default Home;
