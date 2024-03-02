import { useState } from "react";

import "./App.css";
import GoogleFontLoader from "react-google-font-loader";
import twitter_icon from "./assets/image/twitter_icon.png";
import ellipse_icon from "./assets/image/ellipse_icon.png";
import menu from "./assets/image/menu.png";
import rect_12 from "./assets/image/rect_12.png";
import slogun_chicken from "./assets/image/slogun_chicken.png";
import slogun_background from "./assets/image/slogun_background.png";
import faq_chicken from "./assets/image/faq_chicken.png";
import figure_1 from "./assets/image/figure_1.png";
import figure_2 from "./assets/image/figure_2.png";
import figure_6 from "./assets/image/figure_6.png";
import figure_7 from "./assets/image/figure_7.png";
import figure_8 from "./assets/image/figure_8.png";
import figure_10 from "./assets/image/figure_10.png";
import figure_11 from "./assets/image/figure_11.png";
import figure_12 from "./assets/image/figure_12.png";
import figure_14 from "./assets/image/figure_14.png";
import figure_15 from "./assets/image/figure_15.png";
import other_1 from "./assets/image/other_1.png";
import other_2 from "./assets/image/other_2.png";
import other_3 from "./assets/image/other_3.png";
import other_4 from "./assets/image/other_4.png";
import a1 from "./assets/image/a1.png";
import a2 from "./assets/image/a2.png";
import a3 from "./assets/image/a3.png";
import a4 from "./assets/image/a4.png";
import a5 from "./assets/image/a5.png";
import a6 from "./assets/image/a6.png";
import list_1 from "./assets/image/list_1.png";
import list_2 from "./assets/image/list_2.png";
import list_3 from "./assets/image/list_3.png";
import introduction from "./assets/image/introduction.png";
import hungry from "./assets/image/hungry.png";
import strange from "./assets/image/strange.png";
import sm_back from "./assets/image/sm_back.png";
import rect_1 from "./assets/image/rect_1.png";
import rect_2 from "./assets/image/rect_2.png";
import strange_box from "./assets/image/strange_box.png";

function App() {
  const [showStatus, setShowStatus] = useState(false);
  return (
    <div className="App">
      <GoogleFontLoader
        fonts={[
          {
            font: "Alumni Sans Inline One",
            weights: [400, "400i"],
          },
          {
            font: "Roboto Mono",
            weights: [400, 700],
          },
        ]}
        subsets={["cyrillic-ext", "greek"]}
      />
      <div className="w-full px-[4%] pb-4">
        <div className="flex justify-between items-center">
          <div>
            <div className="hidden md:flex gap-8 md:text-[28px] lg:text-[48px]">
              <a
                style={{ fontFamily: "Alumni Sans Inline One" }}
                className="italic tracking-[5px] font-normal"
                href="/#introduction"
              >
                Introduction
              </a>
              <a
                style={{ fontFamily: "Alumni Sans Inline One" }}
                className="italic tracking-[5px]  font-[normal]"
                href="/#roadmap"
              >
                Roadmap
              </a>
              <a
                style={{ fontFamily: "Alumni Sans Inline One" }}
                className="italic tracking-[5px] font-normal"
                href="/#contract"
              >
                Contract
              </a>
              <a
                style={{ fontFamily: "Alumni Sans Inline One" }}
                className="italic tracking-[5px] font-normal"
                href="/#faq"
              >
                Q&A
              </a>
            </div>
            <div className="block md:hidden">
              <div className="" onClick={() => setShowStatus(!showStatus)}>
                <img
                  src={menu}
                  className="lg:w-[50px] lg:h-[50px] w-[30px] h-[30px]"
                  alt="menu"
                />
              </div>
              <div
                className={`absolute bg-gray-200 items-center justify-center  ${
                  showStatus ? "flex" : "hidden"
                } flex-col text-[28px] z-50`}
              >
                <a
                  style={{ fontFamily: "Alumni Sans Inline One" }}
                  className="italic tracking-[5px] font-normal"
                  href="/#introduction"
                  onClick={() => setShowStatus(false)}
                >
                  Introduction
                </a>
                <a
                  style={{ fontFamily: "Alumni Sans Inline One" }}
                  className="italic tracking-[5px]  font-[normal]"
                  href="/#roadmap"
                  onClick={() => setShowStatus(false)}
                >
                  Roadmap
                </a>
                <a
                  style={{ fontFamily: "Alumni Sans Inline One" }}
                  className="italic tracking-[5px] font-normal"
                  href="/#contract"
                  onClick={() => setShowStatus(false)}
                >
                  Contract
                </a>
                <a
                  style={{ fontFamily: "Alumni Sans Inline One" }}
                  className="italic tracking-[5px] font-normal"
                  href="/#faq"
                  onClick={() => setShowStatus(false)}
                >
                  Q&A
                </a>
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <img
              src={twitter_icon}
              className="lg:w-[50px] lg:h-[50px] w-[30px] h-[30px]"
              alt="twitter"
            />
            <img
              src={ellipse_icon}
              className="lg:w-[50px] lg:h-[50px] w-[30px] h-[30px]"
              alt="ellipse"
            />
          </div>
        </div>
      </div>
      <div className="relative h-[50vh] sm:h-[70vh] lg:h-screen pt-4">
        <div className="flex px-[4%] h-full">
          <img src={rect_12} className="w-[6.5%] h-full" alt="rect_12" />
          <img
            src={rect_12}
            className="w-[6.5%] ml-[7%] h-full"
            alt="rect_12"
          />
          <img
            src={rect_12}
            className="w-[6.5%] ml-[7%] h-full"
            alt="rect_12"
          />
          <img
            src={rect_12}
            className="w-[6.5%] ml-[7%] h-full"
            alt="rect_12"
          />
          <img
            src={rect_12}
            className="w-[6.5%] ml-[7%] h-full"
            alt="rect_12"
          />
          <img
            src={rect_12}
            className="w-[6.5%] ml-[7%] h-full"
            alt="rect_12"
          />
          <img
            src={rect_12}
            className="w-[6.5%] ml-[7%] h-full"
            alt="rect_12"
          />
          <img
            src={rect_12}
            className="w-[6.5%] ml-[7%] h-full"
            alt="rect_12"
          />
        </div>
        <div className="absolute w-[36%] h-[50%] right-[6%] top-[17%] ml-[4%]">
          <img src={figure_2} className="w-full h-full" alt="figure_2" />
        </div>
        <div className="absolute w-[36%] h-[50%] left-[20%] top-[40%] ml-[4%]">
          <img src={figure_2} className="w-full h-full" alt="figure_2" />
        </div>
        <div className="absolute w-[40%] h-[50%] left-0 bottom-0 ml-[4%]">
          <img src={figure_1} className="w-full h-full" alt="figure_1" />
        </div>
        <div className="absolute w-[30%] h-[35%] left-[40%] top-[28%] ml-[4%]">
          <img src={hungry} className="w-full h-full" alt="hungry" />
        </div>

        <div className="absolute w-[55%] bottom-0 h-[75%] ml-[4%]">
          <img
            src={slogun_chicken}
            className=" w-full h-full"
            alt="slogun_chicken"
          />
        </div>
        <div className="absolute w-[40%] h-[45%] right-[5%] bottom-[5%] bg-[url('./assets/image/rect_3.png')] bg-repeat-round bg-cover text-right">
          <div className="relative right-[20%] top-[35%]">
            <p className="text-stroke-6 2xl:text-[3vw] xl:text-[60px] lg:text-[48px] md:text-[32px] sm:text-[24px] xs:text-[20px] text-[12px] text-skia 2xl:tracking-[10px] leading-[20px] sm:leading-[40px] md:leading-[60px] font-[3]">
              Stay Hungry,
              <br />
              Stay Foolish.
            </p>
            <button className="mt-2 sm:mt-4 lg:text-[30px] md:text-[20px] text-skia xs:text-[16px] text-[10px] rounded-full bg-white p-1 sm:p-2 border-black 2xl:tracking-[5px] border-2">
              Wallet Connect
            </button>
          </div>
        </div>
        <div className="absolute w-[10%] h-[20%] right-[7%] bottom-[-10%]">
          <img src={other_2} className="w-full h-full" alt="other_2" />
        </div>
      </div>
      <div
        className="relative h-[50vh] sm:h-[70vh] lg:h-screen pt-4 mt-4"
        id="introduction"
      >
        <div className="absolute w-[37%] h-[75%] left-[13%] top-[10%] border-black border-2">
          <img src={sm_back} className="w-full h-full" alt="sm_back" />
        </div>
        <div className="absolute w-[40%] h-[53%] left-0 top-0">
          <img src={figure_2} className="w-full h-full" alt="figure_2" />
        </div>
        <div className="absolute w-[40%] h-[53%] right-0 bottom-0">
          <img src={figure_2} className="w-full h-full" alt="figure_2" />
        </div>
        <div className="absolute w-[37%] h-[75%] left-[13%] top-[10%] border-black border-2">
          <img
            src={strange}
            className="w-[70%] h-[50%] ml-[30%]"
            alt="strange"
          />
          <img
            src={strange}
            className="w-[70%] h-[50%] ml-[30%]"
            alt="strange"
          />
        </div>
        <div className="absolute w-[25%] left-[40%] h-[40%] top-[-17%] ml-[4%]">
          <img
            src={introduction}
            className="w-full h-full"
            alt="introduction"
          />
        </div>
        <div className="absolute w-[10%] h-[15%] left-[5%] top-[65%] bg-[url('./assets/image/figure_4.png')] bg-repeat-round bg-cover flex justify-center items-center"></div>
        <div className="absolute w-[12%] h-[20%] right-[7%] bottom-[-7%]">
          <img src={other_1} className="w-full h-full" alt="other_1" />
        </div>
        <div className="absolute w-[43%] h-[90%] right-4 top-[5%] bg-[url('./assets/image/figure_3.png')] bg-repeat-round bg-cover flex justify-center">
          <p className="relative w-[70%] top-[20%] text-stroke-1 text-[8px] sm:text-[16px] md:text-[14px] lg:text-[20px] 2xl:text-[28px] text-skia sm:tracking-[3px] leading-[8px] xs:leading-[14px] sm:leading-[20px] md:leading-[20px] lg:leading-[28px] font-bold">
            Hungry Chickens are a group of people who are curious and foolish.
            We are curious about everything in the world and willing to
            learning. But we only choose one thing we love and stick to it. As
            old saying goes, "We only live once, but if we work it right once is
            enough". On the way of chasing our dreams, we will surely fight
            against fate and competitors. Let's fight life together! Fight for
            delicacy! Fight for dreams!
          </p>
        </div>
      </div>
      <div className="relative h-[50vh] sm:h-[70vh] lg:h-screen pt-4 z-1" id="roadmap">
        <div className="absolute w-[46%] h-[110%] left-[5%] top-0">
          <img src={rect_1} className="w-full h-full" alt="rect_1" />
        </div>
        <div className="absolute w-[40%] h-[53%] left-[20%] top-0">
          <img src={figure_2} className="w-full h-full" alt="figure_2" />
        </div>
        <div className="absolute w-[40%] h-[53%] left-[25%] top-[75%]">
          <img src={figure_2} className="w-full h-full" alt="figure_2" />
        </div>
        <div className="absolute w-[35%] h-[80%] left-[10%] top-[5%]">
          <img src={strange_box} className="w-full h-full" alt="strange_box" />
        </div>
        <div className="absolute w-[27%] h-[50%] left-0 top-[-5%]">
          <img src={figure_6} className="w-full h-full" alt="figure_6" />
        </div>
        <div className="absolute w-[10%] h-[20%] left-[13%] bottom-[-10%]">
          <img src={other_3} className="w-full h-full" alt="other_3" />
        </div>
        <div className="absolute w-[44%] h-[40%] left-[32%] bottom-[-7%]">
          <img src={list_1} className="w-full h-full" alt="list_1" />
        </div>
        <div className="absolute w-[20%] h-[18%] left-[35%] top-[50%]">
          <img src={figure_7} className="w-full h-full" alt="figure_7" />
        </div>
        <div className="absolute w-[40%] h-[85%] left-[53%] top-[2%] bg-[url('./assets/image/figure_5.png')] bg-repeat-round bg-cover flex justify-center items-center">
          <div className="ml-[5%] w-[40%] text-[6px] xs:text-[8px] sm:text-[12px] md:text-[16px] lg:text-[24px] leading-[6px] xs:leading-[8px] sm:leading-2 md:leading-4 lg:leading-5 font-black">
            <p className="text-stroke-1 text-skia font-[1000]">Roadmap</p>
            <br />
            <p className="text-skia text-[#FFC24B]">First Stage</p>
            <p className="text-skia ">
              PFP
              <br /> A Flock Of Chicken Carving For Good Things
            </p>
            <br />
            <p className="text-skia text-[#FFC24B]">Second Stage</p>
            <p className="text-skia ">
              GameFi
              <br /> Hungry Chicken NFT And Potion NFT Synthesis Fighting
              Chicken NFT
            </p>
            <br />
            <p className="text-skia text-[#FFC24B]">Third Stage</p>
            <p className="text-skia ">Airdrop Food NFT</p>
            <br />
            <p className="text-skia text-[#FFC24B]">Forth Stage:</p>
            <p className="text-skia ">
              PFP <br />
              Fighting Chicken NFT And Food NFT Synthesis Fighting Chicken NFT
            </p>
            <br />
          </div>
        </div>
      </div>
      <div className="relative h-[50vh] sm:h-[70vh] lg:h-screen pt-4" id="contract">
        <div className="absolute w-[60%] h-[88%] left-[2%] top-[40%]">
          <img src={rect_2} className="w-full h-full" alt="rect_2" />
        </div>
        <div className="absolute w-[30%] h-[88%] left-[2%] top-[40%] p-1">
          <img src={figure_8} className="w-full h-full" alt="figure_8" />
        </div>
        <div className="absolute w-[40%] h-[53%] right-[13%] top-[85%]">
          <img src={figure_2} className="w-full h-full" alt="figure_2" />
        </div>
        <div className="absolute w-[95%] h-[75%] right-0 top-0">
          <img src={list_2} className="w-full h-full" alt="list_2" />
        </div>
        <div className="absolute w-[80%] h-[75%] right-0 top-[50%] bg-[url('./assets/image/figure_9.png')] bg-repeat-round bg-cover flex justify-center">
          <div className="relative w-[50%] ml-[10%] top-[35%] text-[8px] xs:text-[8px] sm:text-[24px] md:text-[20px] text-skia sm:tracking-[1px] leading-[7px] xs:leading-[10px] sm:leading-[20px] md:leading-[16px]">
            <p className="font-black text-stroke-1">Standard:</p>
            <p>Metaplex </p>
            <br />
            <p className="font-black text-stroke-1">Contract:</p>
            <p>
              Distribution: sooo For Whitelists, 3000 For Public Sale, 2000 For
              Team
            </p>
            <br />
            <p className="font-black text-stroke-1">Launching Date:</p>
            <p>2022/10/20</p>
          </div>
        </div>
        <div className="absolute w-[60%] h-full left-0 top-[50%]">
          <img src={list_3} className="w-full h-full" alt="list_3" />
        </div>
        <div className="absolute w-[40%] h-[50%] left-[2%] top-[78%]">
          <img src={figure_10} className="w-full h-full" alt="figure_10" />
        </div>
        <div className="absolute w-[10%] h-[20%] right-[10%] bottom-[-20%]">
          <img src={other_2} className="w-full h-full" alt="other_2" />
        </div>
      </div>
      <div className="relative h-[50vh] sm:h-[70vh] lg:h-screen pt-4" id="faq">
        <div className="absolute w-[28%] h-[53%] left-0 top-[40%]">
          <img src={figure_11} className="w-full h-full" alt="figure_11" />
        </div>
        <div className="absolute w-[60%] h-[73%] left-[12%] top-[80%]">
          <img
            src={slogun_background}
            className="w-full h-full border-black border-4"
            alt="slogun_background"
          />
        </div>
        <div className="absolute w-[28%] h-[53%] right-[25%] bottom-[-58%]">
          <img src={figure_11} className="w-full h-full" alt="figure_11" />
        </div>
        <div className="absolute w-[60%] h-full left-[10%] top-[43%] bg-[url('./assets/image/figure_13.png')] bg-repeat-round bg-cover flex justify-center">
          <div className="relative w-[60%] top-[15%] text-[8px] md:text-[16px] lg:text-[22px] text-skia md:tracking-[3px] lg:tracking-[6px] font-black leading-[6px] xs:leading-[8px] md:leading-[14px] lg:leading-[18px] text-stroke-1">
            <p className="text-skia text-[#FFC24B]">
              1. What Makes Hungry Chicken
              <br /> So Unique?
            </p>
            <br />
            <p className="text-skia ">
              Hungry Chicken Is The First GameFi NFT On Aptos Backed By A
              Passionate Community Of Free- Thinking Degens.
            </p>
            <br />
            <p className="text-skia text-[#FFC24B]">
              2. What marketplaces Are You Listed on?
            </p>
            <br />
            <p className="text-skia ">Souffl3, Topaz, Bluemove</p>
            <br />
            <p className="text-skia text-[#FFC24B]">
              3. What Is The Total Supply And The Mint Price?
            </p>
            <br />
            <p className="text-skia ">
              10,000 Hungry Chicken. The Price Is TBA.
            </p>
            <br />
            <p className="text-skia text-[#FFC24B]">
              4. How To Get The Allowlist?
            </p>
            <br />
            <p className="text-skia ">
              You Can Participate In Our Giveaway Events. Stay Tuned.
            </p>
            <br />
            <p className="text-skia text-[#FFC24B]">
              5. When Does The Game Launch?
            </p>
            <br />
            <p className="text-skia ">
              The Game Will Be Released In Early November.
            </p>
          </div>
        </div>
        <div className="absolute w-[40%] h-[50%] left-[26%] top-[20%]">
          <img src={figure_12} className="w-full h-full" alt="figure_12" />
        </div>
        <div className="absolute w-[35%] h-[50%] right-0 bottom-[-53%]">
          <img src={faq_chicken} className="w-full h-full" alt="faq_chicken" />
        </div>
        <div className="absolute w-[10%] h-[20%] left-[7%] bottom-[-60%]">
          <img src={other_4} className="w-full h-full" alt="other_4" />
        </div>
      </div>
      <div className="relative h-[55vh] sm:h-[77vh] lg:h-[110vh] pt-4 flex justify-center">
        <div className="absolute w-full h-[40%] bottom-0 flex">
          <div className="w-[33%] h-full">
            <img src={figure_15} className="w-full h-full" alt="figure_15" />
          </div>
          <div className="w-[33%] h-full">
            <img src={figure_15} className="w-full h-full" alt="figure_15" />
          </div>
          <div className="w-[33%] h-full">
            <img src={figure_15} className="w-full h-full" alt="figure_15" />
          </div>
        </div>
        <div className="absolute w-[20%] h-[25%] bottom-[30%]">
          <img src={figure_14} className="w-full h-full" alt="figure_14" />
        </div>
        <div className="absolute w-full gap-[2%] h-[20%] bottom-[10%] flex">
          <img src={a1} className="w-[15%] h-full" alt="a1" />
          <img src={a2} className="w-[15%] h-full" alt="a2" />
          <img src={a3} className="w-[15%] h-full" alt="a3" />
          <img src={a4} className="w-[15%] h-full" alt="a4" />
          <img src={a5} className="w-[15%] h-full" alt="a5" />
          <img src={a6} className="w-[15%] h-full" alt="a6" />
        </div>
      </div>
    </div>
  );
}

export default App;
