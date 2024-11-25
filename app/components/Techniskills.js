import React from "react";

const skills = [
  {
    idname: "Language/Technologies",
    feat: "Javascript(ES6),CSS3,HTML5",
  },
  {
    idname: "Libraries/Frameworks",
    feat: "Bootstrap, ReactJS, Redux, NextJS,Tailwindcss",
  },

  /* {
    idname: " Programming paradigms ",
    feat: " MVC Design, MicroServices architecture, Object-oriented Javascript",
  },
  { idname: "Libraries", feat: "JSX,ReactJS, Redux" },

  {
    idname: "Peripherals",
    feat: " RESTful APIs,JSON, XML, Jasmine",
  },*/
  {
    idname: "Other skills familiar with ",
    feat: "   NodeJS ",
  },
  {
    idname: "Development IDEs",
    feat: "   Visual Studio Code, Notepad++  ",
  },
  // {
  //   idname: "  Collaboration tools",
  //   feat: " Jira, Confluence, Figma, Trello  ",
  // },
  {
    idname: "Source control",
    feat: "   GitHub, GitLab ",
  },
  {
    idname: "Operating systems",
    feat: "  MacOS, Windows 10/8/7",
  },

  {
    idname: "Tools",
    feat: "NPM, Webpack, Chrome Development Tools",
  },
];

function Techniskills() {
  return (
    <div className=" pt-10 sm:mx-20">
      <h4 className=" p-2 "> TECHNICAL SKILLS</h4>

      <div className="md:px-32 py-8 w-full">
        <div class="shadow overflow-hidden rounded border-b border-gray-200">
          <table className="min-w-full bg-white">
            <tbody className="text-gray-700">
              {skills.map((skill, index) => {
                return (
                  <tr key={index}>
                    <td className="w-1/2 text-left py-3 px-4">
                      {skill.idname}
                    </td>
                    <td className="w-1/2 text-left py-3 px-4 border-l">
                      {skill.feat}
                    </td>
                  </tr>
                );
              })}

              {/*       <tr>
                <td className="w-1/2 text-left py-3 px-4">
                  Language/Technologies
                </td>
                <td className="w-1/2 text-left py-3 px-4 border-l">
                  Javascript(ES6),CSS3,HTML5,API,NextJS,Tailwindcss,ChatGpt
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="w-1/2 text-left py-3 px-4">Libraries</td>
                <td className="w-1/2 text-left py-3 px-4 border-l">
                  JSX,ReactJS, Redux
                </td>
              </tr>

              <tr>
                <td className="w-1/2 text-left py-3 px-4">
                  Programming paradigms
                </td>
                <td className="w-1/2 text-left py-3 px-4 border-l">
                  MVC Design, MicroServices architecture, Object-oriented
                  Javascript
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="w-1/2 text-left py-3 px-4">Peripherals</td>
                <td className="w-1/2 text-left py-3 px-4 border-l">
                  RESTful APIs,JSON, XML, Jasmine
                </td>
              </tr>

              <tr>
                <td className="w-1/2 text-left py-3 px-4">
                  Other languages familiar with
                </td>
                <td className="w-1/2 text-left py-3 px-4 border-l">
                  NodeJS, HighCharts
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="w-1/2 text-left py-3 px-4">Development IDEs</td>
                <td className="w-1/2 text-left py-3 px-4 border-l">
                  Visual Studio Code, Notepad++
                </td>
              </tr>

              <tr>
                <td className="w-1/2 text-left py-3 px-4">
                  Collaboration tools
                </td>
                <td className="w-1/2 text-left py-3 px-4 border-l">
                  Jira, Confluence, Figma, Trello
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="w-1/2 text-left py-3 px-4">Source control</td>
                <td className="w-1/2 text-left py-3 px-4 border-l">
                  GitHub, GitLab, SVN
                </td>
              </tr>

              <tr>
                <td className="w-1/2 text-left py-3 px-4">Operating systems</td>
                <td className="w-1/2 text-left py-3 px-4 border-l">
                  MacOS, Windows 10/8/7
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="w-1/2 text-left py-3 px-4">Tools</td>
                <td className="w-1/2 text-left py-3 px-4 border-l">
                  NPM,Webpack, Jenkins, Chrome Development Tools, Firebug, MS
                  Office
                </td>
</tr>*/}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Techniskills;
