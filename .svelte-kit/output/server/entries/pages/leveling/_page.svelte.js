import { c as create_ssr_component, e as escape, v as validate_component, b as each, d as add_attribute, a as subscribe } from "../../../chunks/index2.js";
import { w as writable } from "../../../chunks/index.js";
const teams = writable([
  { key: "design", value: "Design" },
  { key: "web", value: "Web Engineering" }
]);
const all_trades = writable([
  { team: "design", key: "ux", value: "UX Design" },
  { team: "design", key: "pd", value: "Visual Design" },
  { team: "design", key: "ur", value: "User Research" },
  { team: "web", key: "all", value: "All" }
]);
const career_paths = writable([
  {
    team: "design",
    trade: "ux",
    stages: [
      {
        key: "cp_1",
        value: "Graduate UX Designer",
        level_up: ["cp_2"],
        can_value: "Graduate",
        cat_levels: {
          "c0_1": { value: "Potential" },
          "c0_2": { value: "Self" },
          "c0_3": { value: "Motivated<br>Curious<br>Collaborative" },
          "c0_4": { value: "Learns continuously<br>Reports progress<br>Manages own time" },
          "c1_1": { level: "l1", display: "stars" },
          "c1_2": { level: "l1", display: "stars" },
          "c1_3": { level: "l2", display: "stars" },
          "c2_1": { level: "l1", display: "stars" },
          "c2_2": { level: "l0", display: "stars" },
          "c2_3": { level: "l0", display: "stars" },
          "c2_4": { level: "l0", display: "stars" },
          "c3_1": { level: "l0", display: "stars" },
          "c3_2": { level: "l0", display: "stars" },
          "c3_3": { level: "l0", display: "stars" }
        },
        intro: "Graduate UX design is the entry-level position in the UX team and we seek people who are highly motivated and curious. You might just be beginning your UX practice and your main focus should be improving that craft and beginning to engage with a complex mix of engineers, designers, executives and the community of open source. There is an expectation for you to level up."
      },
      {
        key: "cp_2",
        value: "Associate UX Designer",
        level_up: ["cp_3"],
        can_value: "Associate",
        cat_levels: {
          "c0_1": { value: "Potential" },
          "c0_2": { value: "Self" },
          "c0_3": { value: "Engaged<br>Focused" },
          "c0_4": { value: "Communicates effectively" },
          "c1_1": { level: "l2", display: "stars" },
          "c1_2": { level: "l2", display: "stars" },
          "c1_3": { level: "l2", display: "stars" },
          "c2_1": { level: "l1", display: "stars" },
          "c2_2": { level: "l1", display: "stars" },
          "c2_3": { level: "l0", display: "stars" },
          "c2_4": { level: "l0", display: "stars" },
          "c3_1": { level: "l0", display: "stars" },
          "c3_2": { level: "l1", display: "stars" },
          "c3_3": { level: "l0", display: "stars" }
        },
        intro: "Associate UX design is the opportunity for you to hone your craft, learning from more senior team members. You're beginning to establish a rigor of process, enjoying the full cycle that working on complex products affords. There is an expectation for you to level up."
      },
      {
        key: "cp_3",
        value: "UX Designer 1",
        level_up: ["cp_4"],
        can_value: "Prof I",
        cat_levels: {
          "c0_1": { value: "Competence" },
          "c0_2": { value: "Work" },
          "c0_3": { value: "Dependable<br>Independent" },
          "c0_4": { value: "Breaks down tasks<br>Understands definition of done" },
          "c1_1": { level: "l3", display: "stars" },
          "c1_2": { level: "l3", display: "stars" },
          "c1_3": { level: "l3", display: "stars" },
          "c2_1": { level: "l2", display: "stars" },
          "c2_2": { level: "l1", display: "stars" },
          "c2_3": { level: "l0", display: "stars" },
          "c2_4": { level: "l0", display: "stars" },
          "c3_1": { level: "l1", display: "stars" },
          "c3_2": { level: "l1", display: "stars" },
          "c3_3": { level: "l0", display: "stars" }
        },
        intro: "UXers at this level are highly competent and independent. Aside from delivering great UX, you'll be expected to work on communication and ownership as well as forming an awareness of systemic and organisational needs, not just user-centric ones."
      },
      {
        key: "cp_4",
        value: "UX Designer 2",
        level_up: ["cp_5", "cp_6"],
        can_value: "Prof II",
        cat_levels: {
          "c0_1": { value: "Competence" },
          "c0_2": { value: "Work" },
          "c0_3": { value: "Approachable<br>Supportive" },
          "c0_4": { value: "Estimates<br>Reports accurately" },
          "c1_1": { level: "l3", display: "stars" },
          "c1_2": { level: "l3", display: "stars" },
          "c1_3": { level: "l3", display: "stars" },
          "c2_1": { level: "l2", display: "stars" },
          "c2_2": { level: "l2", display: "stars" },
          "c2_3": { level: "l1", display: "stars" },
          "c2_4": { level: "l0", display: "stars" },
          "c3_1": { level: "l1", display: "stars" },
          "c3_2": { level: "l2", display: "stars" },
          "c3_3": { level: "l1", display: "stars" }
        },
        intro: ""
      },
      {
        key: "cp_5",
        value: "UX Expert",
        level_up: [],
        can_value: "Prof III",
        cat_levels: {
          "c0_1": { value: "Expertise" },
          "c0_2": { value: "Work" },
          "c0_3": { value: "Accountable<br>Rigorous" },
          "c0_4": { value: "Prioritises" },
          "c1_1": { level: "l4", display: "stars" },
          "c1_2": { level: "l4", display: "stars" },
          "c1_3": { level: "l4", display: "stars" },
          "c2_1": { level: "l3", display: "stars" },
          "c2_2": { level: "l2", display: "stars" },
          "c2_3": { level: "l1", display: "stars" },
          "c2_4": { level: "l0", display: "stars" },
          "c3_1": { level: "l2", display: "stars" },
          "c3_2": { level: "l2", display: "stars" },
          "c3_3": { level: "l1", display: "stars" }
        },
        intro: "UX Expert (Prof 3 for Canonical) is a career path for those that don't wish to take on responisibilities of leadership and management. It is the avenue for deep exploration of UX craft and process research. It has no leveling up plan."
      },
      {
        key: "cp_6",
        value: "Senior UX Designer",
        level_up: ["cp_7", "cp_8"],
        can_value: "Senior",
        cat_levels: {
          "c0_1": { value: "Expertise" },
          "c0_2": { value: "Team" },
          "c0_3": { value: "Proactive<br>Empathetic<br>Articulate" },
          "c0_4": { value: "Leads definition of done<br>Works/plans sustainably<br>Refines processes" },
          "c1_1": { level: "l4", display: "stars" },
          "c1_2": { level: "l4", display: "stars" },
          "c1_3": { level: "l4", display: "stars" },
          "c2_1": { level: "l3", display: "stars" },
          "c2_2": { level: "l3", display: "stars" },
          "c2_3": { level: "l2", display: "stars" },
          "c2_4": { level: "l1", display: "stars" },
          "c3_1": { level: "l2", display: "stars" },
          "c3_2": { level: "l2", display: "stars" },
          "c3_3": { level: "l1", display: "stars" }
        },
        intro: ""
      },
      {
        key: "cp_7",
        value: "UX Manager",
        level_up: ["cp_10"],
        can_value: "Manager",
        cat_levels: {
          "c0_1": { value: "Expertise" },
          "c0_2": { value: "Team" },
          "c0_3": { value: "Data driven<br>Analytical" },
          "c0_4": { value: "Plans work/activities" },
          "c1_1": { level: "l4", display: "stars" },
          "c1_2": { level: "l4", display: "stars" },
          "c1_3": { level: "l4", display: "stars" },
          "c2_1": { level: "l3", display: "stars" },
          "c2_2": { level: "l3", display: "stars" },
          "c2_3": { level: "l2", display: "stars" },
          "c2_4": { level: "l3", display: "stars" },
          "c3_1": { level: "l2", display: "stars" },
          "c3_2": { level: "l3", display: "stars" },
          "c3_3": { level: "l2", display: "stars" }
        },
        intro: ""
      },
      {
        key: "cp_8",
        value: "Lead UX Designer",
        level_up: ["cp_9"],
        can_value: "Staff",
        cat_levels: {
          "c0_1": { value: "Authority" },
          "c0_2": { value: "Department" },
          "c0_3": { value: "Driving<br>Acting on feedback" },
          "c0_4": { value: "Owns backlogs<br>Plans roadmaps" },
          "c1_1": { level: "l5", display: "stars" },
          "c1_2": { level: "l5", display: "stars" },
          "c1_3": { level: "l5", display: "stars" },
          "c2_1": { level: "l4", display: "stars" },
          "c2_2": { level: "l3", display: "stars" },
          "c2_3": { level: "l3", display: "stars" },
          "c2_4": { level: "l1", display: "stars" },
          "c3_1": { level: "l2", display: "stars" },
          "c3_2": { level: "l3", display: "stars" },
          "c3_3": { level: "l2", display: "stars" }
        },
        intro: ""
      },
      {
        key: "cp_9",
        value: "Principal UX Designer",
        level_up: ["cp_11"],
        can_value: "Senior Staff",
        cat_levels: {
          "c0_1": { value: "Authority" },
          "c0_2": { value: "Department" },
          "c0_3": { value: "" },
          "c0_4": { value: "Develops processes" },
          "c1_1": { level: "l5", display: "stars" },
          "c1_2": { level: "l5", display: "stars" },
          "c1_3": { level: "l5", display: "stars" },
          "c2_1": { level: "l4", display: "stars" },
          "c2_2": { level: "l4", display: "stars" },
          "c2_3": { level: "l4", display: "stars" },
          "c2_4": { level: "l2", display: "stars" },
          "c3_1": { level: "l3", display: "stars" },
          "c3_2": { level: "l4", display: "stars" },
          "c3_3": { level: "l3", display: "stars" }
        },
        intro: ""
      },
      {
        key: "cp_10",
        value: "Senior UX Manager",
        level_up: ["cp_11"],
        can_value: "Senior Manager",
        cat_levels: {
          "c0_1": { value: "Authority" },
          "c0_2": { value: "Department" },
          "c0_3": { value: "" },
          "c0_4": { value: "" },
          "c1_1": { level: "l5", display: "stars" },
          "c1_2": { level: "l5", display: "stars" },
          "c1_3": { level: "l5", display: "stars" },
          "c2_1": { level: "l5", display: "stars" },
          "c2_2": { level: "l4", display: "stars" },
          "c2_3": { level: "l5", display: "stars" },
          "c2_4": { level: "l4", display: "stars" },
          "c3_1": { level: "l4", display: "stars" },
          "c3_2": { level: "l4", display: "stars" },
          "c3_3": { level: "l4", display: "stars" }
        },
        intro: ""
      },
      {
        key: "cp_11",
        value: "Design Director, [Domain]",
        level_up: ["cp_12"],
        can_value: "Director/Head of",
        cat_levels: {
          "c0_1": { value: "Vision" },
          "c0_2": { value: "Canonical and Industry" },
          "c0_3": { value: "Inspirational<br>Humble" },
          "c0_4": { value: "Defines processes<br>Leads company initiatives" },
          "c1_1": { level: "l6", display: "stars" },
          "c1_2": { level: "l6", display: "stars" },
          "c1_3": { level: "l6", display: "stars" },
          "c2_1": { level: "l6", display: "stars" },
          "c2_2": { level: "l5", display: "stars" },
          "c2_3": { level: "l6", display: "stars" },
          "c2_4": { level: "l5", display: "stars" },
          "c3_1": { level: "l5", display: "stars" },
          "c3_2": { level: "l5", display: "stars" },
          "c3_3": { level: "l5", display: "stars" }
        },
        intro: "Design directors are expected to augment and execute the teams creative and strategic vision. They report directly to the Global Head of Design and have autonomy over and responsibility for their respective Domain. Example: Infrastructure UX, Enterprise UX, User Research, Brand."
      },
      {
        key: "cp_12",
        value: "Global Head of Design",
        can_value: "VP",
        cat_levels: {
          "c0_1": { value: "Vision" },
          "c0_2": { value: "Canonical and Industry" },
          "c0_3": { value: "" },
          "c0_4": { value: "" },
          "c1_1": { level: "l6", display: "stars" },
          "c1_2": { level: "l6", display: "stars" },
          "c1_3": { level: "l6", display: "stars" },
          "c2_1": { level: "l6", display: "stars" },
          "c2_2": { level: "l6", display: "stars" },
          "c2_3": { level: "l6", display: "stars" },
          "c2_4": { level: "l6", display: "stars" },
          "c3_1": { level: "l6", display: "stars" },
          "c3_2": { level: "l6", display: "stars" },
          "c3_3": { level: "l6", display: "stars" }
        },
        intro: "Hans Gerwitz"
      }
    ]
  },
  {
    team: "design",
    trade: "ur",
    stages: [
      {
        key: "cp_1",
        value: "Graduate User Researcher",
        level_up: ["cp_2"],
        can_value: "Graduate",
        cat_levels: {
          "c0_1": { value: "Potential" },
          "c0_2": { value: "Self" },
          "c0_3": { value: "Motivated<br>Curious<br>Collaborative" },
          "c0_4": { value: "Learns continuously<br>Reports progress<br>Manages own time" },
          "c1_1": { level: "l1", display: "stars" },
          "c1_2": { level: "l1", display: "stars" },
          "c1_3": { level: "l2", display: "stars" },
          "c2_1": { level: "l1", display: "stars" },
          "c2_2": { level: "l0", display: "stars" },
          "c2_3": { level: "l0", display: "stars" },
          "c2_4": { level: "l0", display: "stars" },
          "c3_1": { level: "l0", display: "stars" },
          "c3_2": { level: "l0", display: "stars" },
          "c3_3": { level: "l0", display: "stars" }
        },
        intro: "Graduate User Researcher is the entry-level position in the User Research team and we seek people who are highly motivated and curious. You might just be beginning your User Research practice and your main focus should be improving that craft and beginning to engage with a complex mix of engineers, designers, executives and the community of open source. There is an expectation for you to level up."
      },
      {
        key: "cp_2",
        value: "Associate User Researcher",
        level_up: ["cp_3"],
        can_value: "Associate",
        cat_levels: {
          "c0_1": { value: "Potential" },
          "c0_2": { value: "Self" },
          "c0_3": { value: "Engaged<br>Focused" },
          "c0_4": { value: "Communicates effectively" },
          "c1_1": { level: "l2", display: "stars" },
          "c1_2": { level: "l2", display: "stars" },
          "c1_3": { level: "l2", display: "stars" },
          "c2_1": { level: "l1", display: "stars" },
          "c2_2": { level: "l1", display: "stars" },
          "c2_3": { level: "l0", display: "stars" },
          "c2_4": { level: "l0", display: "stars" },
          "c3_1": { level: "l0", display: "stars" },
          "c3_2": { level: "l1", display: "stars" },
          "c3_3": { level: "l0", display: "stars" }
        },
        intro: "Associate User Researcher is the opportunity for you to hone your craft, learning from more senior team members. You're beginning to establish a rigor of process, enjoying the full cycle that working on complex products affords. There is an expectation for you to level up."
      },
      {
        key: "cp_3",
        value: "User Researcher 1",
        level_up: ["cp_4"],
        can_value: "Prof I",
        cat_levels: {
          "c0_1": { value: "Competence" },
          "c0_2": { value: "Work" },
          "c0_3": { value: "Dependable<br>Independent" },
          "c0_4": { value: "Breaks down tasks<br>Understands definition of done" },
          "c1_1": { level: "l3", display: "stars" },
          "c1_2": { level: "l3", display: "stars" },
          "c1_3": { level: "l3", display: "stars" },
          "c2_1": { level: "l2", display: "stars" },
          "c2_2": { level: "l1", display: "stars" },
          "c2_3": { level: "l0", display: "stars" },
          "c2_4": { level: "l0", display: "stars" },
          "c3_1": { level: "l1", display: "stars" },
          "c3_2": { level: "l1", display: "stars" },
          "c3_3": { level: "l0", display: "stars" }
        },
        intro: "UXers at this level are highly competent and independent. Aside from delivering great UX, you'll be expected to work on communication and ownership as well as forming an awareness of systemic and organisational needs, not just user-centric ones."
      },
      {
        key: "cp_4",
        value: "User Researcher 2",
        level_up: ["cp_5", "cp_6"],
        can_value: "Prof II",
        cat_levels: {
          "c0_1": { value: "Competence" },
          "c0_2": { value: "Work" },
          "c0_3": { value: "Approachable<br>Supportive" },
          "c0_4": { value: "Estimates<br>Reports accurately" },
          "c1_1": { level: "l3", display: "stars" },
          "c1_2": { level: "l3", display: "stars" },
          "c1_3": { level: "l3", display: "stars" },
          "c2_1": { level: "l2", display: "stars" },
          "c2_2": { level: "l2", display: "stars" },
          "c2_3": { level: "l1", display: "stars" },
          "c2_4": { level: "l0", display: "stars" },
          "c3_1": { level: "l1", display: "stars" },
          "c3_2": { level: "l2", display: "stars" },
          "c3_3": { level: "l1", display: "stars" }
        },
        intro: ""
      },
      {
        key: "cp_5",
        value: "User Research Expert",
        level_up: [],
        can_value: "Prof III",
        cat_levels: {
          "c0_1": { value: "Expertise" },
          "c0_2": { value: "Work" },
          "c0_3": { value: "Accountable<br>Rigorous" },
          "c0_4": { value: "Prioritises" },
          "c1_1": { level: "l4", display: "stars" },
          "c1_2": { level: "l4", display: "stars" },
          "c1_3": { level: "l4", display: "stars" },
          "c2_1": { level: "l3", display: "stars" },
          "c2_2": { level: "l2", display: "stars" },
          "c2_3": { level: "l1", display: "stars" },
          "c2_4": { level: "l0", display: "stars" },
          "c3_1": { level: "l2", display: "stars" },
          "c3_2": { level: "l2", display: "stars" },
          "c3_3": { level: "l1", display: "stars" }
        },
        intro: "UX Expert (Prof 3 for Canonical) is a career path for those that don't wish to take on responisibilities of leadership and management. It is the avenue for deep exploration of UX craft and process research. It has no leveling up plan."
      },
      {
        key: "cp_6",
        value: "Senior User Researcher",
        level_up: ["cp_7", "cp_8"],
        can_value: "Senior",
        cat_levels: {
          "c0_1": { value: "Expertise" },
          "c0_2": { value: "Team" },
          "c0_3": { value: "Proactive<br>Empathetic<br>Articulate" },
          "c0_4": { value: "Leads definition of done<br>Works/plans sustainably<br>Refines processes" },
          "c1_1": { level: "l4", display: "stars" },
          "c1_2": { level: "l4", display: "stars" },
          "c1_3": { level: "l4", display: "stars" },
          "c2_1": { level: "l3", display: "stars" },
          "c2_2": { level: "l3", display: "stars" },
          "c2_3": { level: "l2", display: "stars" },
          "c2_4": { level: "l1", display: "stars" },
          "c3_1": { level: "l2", display: "stars" },
          "c3_2": { level: "l2", display: "stars" },
          "c3_3": { level: "l1", display: "stars" }
        },
        intro: ""
      },
      {
        key: "cp_7",
        value: "User Research Manager",
        level_up: ["cp_10"],
        can_value: "Manager",
        cat_levels: {
          "c0_1": { value: "Expertise" },
          "c0_2": { value: "Team" },
          "c0_3": { value: "Data driven<br>Analytical" },
          "c0_4": { value: "Plans work/activities" },
          "c1_1": { level: "l4", display: "stars" },
          "c1_2": { level: "l4", display: "stars" },
          "c1_3": { level: "l4", display: "stars" },
          "c2_1": { level: "l3", display: "stars" },
          "c2_2": { level: "l3", display: "stars" },
          "c2_3": { level: "l2", display: "stars" },
          "c2_4": { level: "l3", display: "stars" },
          "c3_1": { level: "l2", display: "stars" },
          "c3_2": { level: "l3", display: "stars" },
          "c3_3": { level: "l2", display: "stars" }
        },
        intro: ""
      },
      {
        key: "cp_8",
        value: "Lead User Researcher",
        level_up: ["cp_9"],
        can_value: "Staff",
        cat_levels: {
          "c0_1": { value: "Authority" },
          "c0_2": { value: "Department" },
          "c0_3": { value: "Driving<br>Acting on feedback" },
          "c0_4": { value: "Owns backlogs<br>Plans roadmaps" },
          "c1_1": { level: "l5", display: "stars" },
          "c1_2": { level: "l5", display: "stars" },
          "c1_3": { level: "l5", display: "stars" },
          "c2_1": { level: "l4", display: "stars" },
          "c2_2": { level: "l3", display: "stars" },
          "c2_3": { level: "l3", display: "stars" },
          "c2_4": { level: "l1", display: "stars" },
          "c3_1": { level: "l2", display: "stars" },
          "c3_2": { level: "l3", display: "stars" },
          "c3_3": { level: "l2", display: "stars" }
        },
        intro: ""
      },
      {
        key: "cp_9",
        value: "Principal User Researcher",
        level_up: ["cp_11"],
        can_value: "Senior Staff",
        cat_levels: {
          "c0_1": { value: "Authority" },
          "c0_2": { value: "Department" },
          "c0_3": { value: "" },
          "c0_4": { value: "Develops processes" },
          "c1_1": { level: "l5", display: "stars" },
          "c1_2": { level: "l5", display: "stars" },
          "c1_3": { level: "l5", display: "stars" },
          "c2_1": { level: "l4", display: "stars" },
          "c2_2": { level: "l4", display: "stars" },
          "c2_3": { level: "l4", display: "stars" },
          "c2_4": { level: "l2", display: "stars" },
          "c3_1": { level: "l3", display: "stars" },
          "c3_2": { level: "l4", display: "stars" },
          "c3_3": { level: "l3", display: "stars" }
        },
        intro: ""
      },
      {
        key: "cp_10",
        value: "Senior User Research Manager",
        level_up: ["cp_11"],
        can_value: "Senior Manager",
        cat_levels: {
          "c0_1": { value: "Authority" },
          "c0_2": { value: "Department" },
          "c0_3": { value: "" },
          "c0_4": { value: "" },
          "c1_1": { level: "l5", display: "stars" },
          "c1_2": { level: "l5", display: "stars" },
          "c1_3": { level: "l5", display: "stars" },
          "c2_1": { level: "l5", display: "stars" },
          "c2_2": { level: "l4", display: "stars" },
          "c2_3": { level: "l5", display: "stars" },
          "c2_4": { level: "l4", display: "stars" },
          "c3_1": { level: "l4", display: "stars" },
          "c3_2": { level: "l4", display: "stars" },
          "c3_3": { level: "l4", display: "stars" }
        },
        intro: ""
      },
      {
        key: "cp_11",
        value: "Design Director, User Researcher",
        level_up: ["cp_12"],
        can_value: "Director/Head of",
        cat_levels: {
          "c0_1": { value: "Vision" },
          "c0_2": { value: "Canonical and Industry" },
          "c0_3": { value: "Inspirational<br>Humble" },
          "c0_4": { value: "Defines processes<br>Leads company initiatives" },
          "c1_1": { level: "l6", display: "stars" },
          "c1_2": { level: "l6", display: "stars" },
          "c1_3": { level: "l6", display: "stars" },
          "c2_1": { level: "l6", display: "stars" },
          "c2_2": { level: "l5", display: "stars" },
          "c2_3": { level: "l6", display: "stars" },
          "c2_4": { level: "l5", display: "stars" },
          "c3_1": { level: "l5", display: "stars" },
          "c3_2": { level: "l5", display: "stars" },
          "c3_3": { level: "l5", display: "stars" }
        },
        intro: "Design directors are expected to augment and execute the teams creative and strategic vision. They report directly to the Global Head of Design and have autonomy over and responsibility for their respective Domain. Example: Infrastructure UX, Enterprise UX, User Research, Brand."
      },
      {
        key: "cp_12",
        value: "Global Head of Design",
        can_value: "VP",
        cat_levels: {
          "c0_1": { value: "Vision" },
          "c0_2": { value: "Canonical and Industry" },
          "c0_3": { value: "" },
          "c0_4": { value: "" },
          "c1_1": { level: "l6", display: "stars" },
          "c1_2": { level: "l6", display: "stars" },
          "c1_3": { level: "l6", display: "stars" },
          "c2_1": { level: "l6", display: "stars" },
          "c2_2": { level: "l6", display: "stars" },
          "c2_3": { level: "l6", display: "stars" },
          "c2_4": { level: "l6", display: "stars" },
          "c3_1": { level: "l6", display: "stars" },
          "c3_2": { level: "l6", display: "stars" },
          "c3_3": { level: "l6", display: "stars" }
        },
        intro: "Hans Gerwitz"
      }
    ]
  }
]);
const levels = writable({
  "l0": { stars: 0, short: "Unrequired", long: "Does not need this yet or has no knowledge." },
  "l1": { stars: 1, short: "Potential", long: "Can read up and work with support. Is not self sufficent in this area yet." },
  "l2": { stars: 2, short: "Competency", long: "Has some expertise. Can work alone and is self sufficient in this area." },
  "l3": { stars: 3, short: "Proficiency", long: "Has expertise. Self sufficient and capable of sharing with others." },
  "l4": { stars: 4, short: "Excellence", long: "Deep accomplished expertise. Has theory of area. Can lead and educate in this area and/or act as subject matter expert." },
  "l5": { stars: 5, short: "Mastery", long: "Deep practical and theoretical expertise. Leads and educates in this area and is subject matter expert. Can recommend/strategise." },
  "l6": { stars: 6, short: "Responsible", long: "Deep expertise. Publicly leads and educates and is SME. Responsible for vision, strategy and evolution of this area." }
});
const categories = writable([
  { key: "c0", value: "Universal", children: [
    { key: "c0_1", value: "Has" },
    { key: "c0_2", value: "Impacts" },
    { key: "c0_3", value: "Behaviours" },
    { key: "c0_4", value: "Delivery" }
  ] },
  { key: "c1", value: "Competency", children: [
    { key: "c1_1", value: "Tools", encompasses: ["Giving and seeking feedback", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""] },
    { key: "c1_2", value: "Process", encompasses: ["Accountability", "Problem Solving", "Collaboration", "Cross team relationships", "Giving and seeking feedback", "", "", "", "", "", "", "", "", "", "", "", "", "", ""] },
    { key: "c1_3", value: "Outcomes", encompasses: ["Accountability", "Giving and seeking feedback", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""] }
  ] },
  { key: "c2", value: "People", children: [
    { key: "c2_1", value: "Communication", encompasses: ["Collaboration", "Collaboration", "Conflict Management", "Relationship Management", "Cross team relationships", "Giving and seeking feedback", "", "", "", "", "", "", "", "", "", "", "", "", "", ""] },
    { key: "c2_2", value: "Stakeholder Management", encompasses: ["Accountability", "Problem Solving", "Collaboration", "Conflict Management", "Relationship Management", "Giving and seeking feedback", "", "", "", "", "", "", "", "", "", "", "", "", ""] },
    { key: "c2_3", value: "Leadership", encompasses: ["Accountability", "Collaboration", "Facilitation", "Conflict Management", "Relationship Management", "", "", "", "", "", "", "", "", "", "", "", "", "", ""] },
    { key: "c2_4", value: "Team Management", encompasses: ["Accountability", "Collaboration", "Facilitation", "Conflict Management", "Relationship Management", "", "", "", "", "", "", "", "", "", "", "", "", "", ""] }
  ] },
  { key: "c3", value: "Strategy", children: [
    { key: "c3_1", value: "Business OKRs", encompasses: ["Facilitation", "Cross team relationships", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""] },
    { key: "c3_2", value: "Systems Thinking", encompasses: ["Collaboration", "Facilitation", "Conflict Management", "Cross team relationships", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""] },
    { key: "c3_3", value: "Long-term Vision", encompasses: ["Accountability", "Facilitation", "Cross team relationships", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""] }
  ] }
]);
const trade_cat_levels = writable({
  "ux": {
    "c1_1": {
      "l1": "The basic ability to use your tools to express ideas and gather feedback on user journeys and flows.",
      "l2": "The ability to use a tool and its extensions (library, plugins, or widgets) to their full potential. Reduce unnecessary work and express the nuances of user journeys and flows.",
      "l3": "The proficient ability to use a tool and contribute to a library with well structured components or write and use relevant plugins. Reduce unnecessary work and express the nuances of user journeys and flows.",
      "l4": "Excellence of tool use. The ability to provide robust artifacts. Have strong opinions about best practice in that tooling. Mentor and educate others in the use of the tool.",
      "l5": "Has mastered the tools required. Forms principles which guide the wider team in their tooling and has a coherent strategy for continued team development.",
      "l6": "Is ultimately responsible for the successful use and development of the team's tooling and the long term strategy and stability within the department."
    },
    "c1_2": {
      "l1": "A basic understanding of UX processes and how they fit into the wider patterns of 'design thinking'. Is aware of UX heuristics. Understands the basics of accessibility. Can follow documentation processes and attempt to estimate timecost of work.",
      "l2": "Process is competent without any holes. Applies UX heuristics. Uses process to effectively affect outcome.",
      "l3": "Process encompasses solid principles and heuristics and enables an exploration of different avenues and solutions.",
      "l4": "Process embodies solid principles and heuristics and enables multiple iterations and improvement. Deep exploration of possible solutions and provokes a broader product vision.",
      "l5": "Process drives the product forward with recommendations for future vision and strategy. Heavily influences and mentors others in their process.",
      "l6": "Determines the process, strategy and evolution for UX at Canonical."
    },
    "c1_3": {
      "l1": "Basic servicable work. Will require support for it to be used in production.",
      "l2": "Work is suitable for Canonical products and frequently shows a great user experience. Consistency of quality is somewhat resilient to resource constraints",
      "l3": "Work shows consistently great user experience and appropriateness regardless of resource constraints. Has impact on the work of other team members.",
      "l4": "Work shows rigor, longevity and is seen as a reference by the team across all aspects of the UX practise",
      "l5": "Work is first-class and representative of Canonical's aspirations in UX. It deeply influences how our team views quality.",
      "l6": "Overseas work by which Canonical design and Canonical as a whole is viewed. Primarily concerned with the team development in this area."
    },
    "c2_1": {
      "l1": "Communicates solidly in one medium and is learning to branch into other communication skills like visual, written, verbal, presentation, active listening, feedback, nonverbal or documentation.",
      "l2": "Communicates effectively, clearly, concisely and in an audience-oriented way, in multiple forms. Actively listens to others and ensures they are understood. Pays attention to nonverbal communication.",
      "l3": "Usually communicates effectively, clearly, concisely and in an audience-oriented way in multiple forms both domain-specific and non domain-specific subjects, to their teammates. Actively listens to others and ensures they are understood. Pays attention to nonverbal communication.",
      "l4": "Is able to communicate effectively with a diverse set of teams across a full range of communication mediums. Fosters a culture of clear, concise, effective, audience-oriented communication across several teams, ensuring teammates actively listen to others and are understood.",
      "l5": "Sets the bar for clear and concise communication in a manner appropriate to diverse audiences. Understands the nuances of cross cultural and cross discipline communication. Is able to strategize on both internal and external communication.",
      "l6": "Responsible for the teams ability to communicate clearly and concisely, with diverse audiences, across all forms of communication."
    },
    "c2_2": {
      "l1": "Aware of differing product stakeholder needs, caters to their expectations.",
      "l2": "Able to adapt to multiple, often contradictory, product stakeholder needs. Caters to their expectations and communicates basic UX needs and benefits.",
      "l3": "Skillfully manages stakeholder requirements and forms strong simbiotic relationships. Is able to promote UX needs and benefits and respond with agility to risk, change and uncertainty.",
      "l4": "Skillfully manages product and upper management stakeholder requirements and forms strong cross-team simbiotic relationships. Takes opportunities to promote UX with key stakeholders. Is a point of reference for UX and pre-empts risk, change and uncertainty.",
      "l5": "Controls product and upper management stakeholder requirements and forms strong cross-team simbiotic relationships. Consistently promotes UX with key stakeholders. Is a point of reference for UX and manages risk, change and uncertainty.",
      "l6": "Responsible for upper management stakeholder requirements and buy in. Builds strong cross-team simbiotic relationships. Responsible for the position of UX with key stakeholders. Is the point of reference for UX and manages risk, change and uncertainty for the team."
    },
    "c2_3": {
      "l1": "Understands the importance of weighing cost and value in decision making. Understands that their role is larger than individual contribution. Is beginning to mentor in any of their competencies. Is visible in forums outside BAU such as lightening talks.",
      "l2": "Can be tasked with leadership requirements. Spends a notable amount of time on leadership activities not part of individual contribution. Mentors with frequency in all of their competencies.",
      "l3": "Anticipates leadership requirements. Can make trade-offs, focusing on mission-critical activities and communicates those effectively. ",
      "l4": "Owns leadership in their respective area. Is excellent making trade-offs and managing the repercussions and risk.",
      "l5": "Owns the outcome of effective leadership in their area. Has mastered making trade-offs and managing the repercussions and risk.",
      "l6": "Responsible for the outcome of effective leadership across the team."
    },
    "c2_4": {
      "l1": "Aware of the importance of a team where people can express opinions and contribute to discussion in a respectful manner. Is conscious that disagreement and contradictory behaviour is part of a strong, more diverse company.",
      "l2": "Participates in the development of team skill, motivation and aware of the need for a low churn, productive environment. Understands the distribution of team effort and ability.",
      "l3": "Embraces the development of team skill, motivation, and participates in creating a low churn, productive environment. Fosters a culture across the team where people are encouraged to share their opinions and contribute to discussions in a respectful manner, approach disagreement non-defensively with inquisitiveness, and use contradictory opinion as a basis for constructive, productive conversations. Integrates disagreeing opinions from the whole company into their perspective and plans. Is proficient at conflict resolution, relationship management and facilitation.",
      "l4": "Empowers team skill, motivation, and develops a low churn, productive environment. Fosters inclusiveness and promotes it as a strength of the team. Attains excellence in conflict resolution, relationship management and facilitation.",
      "l5": "Drives team skill, motivation and mentors others on their journey in this area. Can support other managers within department or in other departments and can contribute to strategies for improving management across Canonical.",
      "l6": "Responsible for the management of all staff in this department and for the quality of management. Shapes the inclusivity and development of the team."
    },
    "c3_1": {
      "l1": "Aware of short and long-term product and business objectives.",
      "l2": "Includes Canonical's Business Objectives into team practice. Their own work supports and highlights OKR acheivement.",
      "l3": "Is proficient at ensuring Canonical's business objective are including into team practice. Understands how UX work can influence Objectives and Key Results",
      "l4": "Relates to Canonicals Key Results in a two-way relationship with UX and mentors others in incorporating Business Objectives in their practice.",
      "l5": "Informs Canonicals Objectives and Key Results and can strategise in how those objectives can improve UX",
      "l6": "Plays an important role in determing Canonical OKRs and hence the future of Canonical."
    },
    "c3_2": {
      "l1": "Aware that an hollistic approach to problem solving is different to design thinking and looks to root causes across the whole practice.",
      "l2": "Is competent looking at the complex system of UX and treating it as a single problem. Works towards solving root causes, whether that be in tooling, processes, outcomes, leadership, management, OKRs or long-term vision.",
      "l3": "Is proficient dealing with the complex system of UX and treating it as a single problem. Can solve root cause problems, whether that be in tooling, processes, outcomes, leadership, management, OKRs or long-term vision.",
      "l4": "Can mentor and lead in the developement of systems thinking. Regularly solves problems from a system level perspective and measures their own impact on a domain level.",
      "l5": "Mentors and leads in the development of systems thinking. Continually solves problems from a system level perspective and measures their own impact on a department level.",
      "l6": "Responsible for the system of all the elements that make up the design process and the development of this perspective amongst all team members."
    },
    "c3_3": {
      "l1": "Is able to distinguish business as usual mission actions from activities that support the long term vision and strength of Canonical UX design",
      "l2": "Is able to accurately reflect the long-term vision and inform their own work where appropriate.",
      "l3": "Is able to consistently and accurately reflect the long-term vision and inform their own work where appropriate. Advocates for this vision with peers and stakeholders.",
      "l4": "Contributes to and advocates for the long-term vision. Balances vision and mission. Outcomes are measured across a few cycles.",
      "l5": "Supports the person responsible for long-term vision. Outcomes are measured across multiple cycles. Communicates the aspirational future-state for what UX design means within their domain or department.",
      "l6": "Responsible for the long-term design vision at Canonical. Outcomes are measured across multiple cycles. Sets and communicates the aspirational future-state for what UX design means at Canonical."
    }
  },
  "ur": {
    "c1_1": {
      "l1": "The basic ability to use your tools to gather feedback and uncover issues with user journeys and flows.",
      "l2": "The ability to use your tools to their full potential. Reduce unnecessary work and research the nuances of user journeys and flows.",
      "l3": "The proficient ability to use your tools and contribute to a library of well structured research. Reduce unnecessary work and research the nuances of user journeys and flows.",
      "l4": "Excellence of tool use. The ability to provide robust research material. Have strong opinions about best practice in that tooling. Mentor and educate others in the use of the tool.",
      "l5": "Has mastered the tools required. Forms principles which guide the wider team in their tooling and has a coherent strategy for continued team development.",
      "l6": "Is ultimately responsible for the successful use and development of the team's tooling and the long term strategy and stability within the department."
    },
    "c1_2": {
      "l1": "A basic understanding of User Research processes & methodologies and how they fit into the wider patterns of 'design thinking'. Can follow documentation processes and attempt to estimate timecost of work.",
      "l2": "Process is competent without any holes. Applies contemporary User Research methodology. Uses process to effectively affect outcome.",
      "l3": "Process encompasses solid principles and methodologies and enables an exploration of different avenues and solutions.",
      "l4": "Process embodies solid principles and methodologies and enables multiple iterations and improvement. Deep exploration of possible solutions and provokes a broader product vision.",
      "l5": "Process drives User Research forward with recommendations for future vision and strategy. Heavily influences and mentors others in their process.",
      "l6": "Determines the process, strategy and evolution for User Research at Canonical."
    },
    "c1_3": {
      "l1": "Basic servicable work. Will require support for it to be used effectively by the relevant teams at Canonical.",
      "l2": "Work is suitable for Canonical teams and frequently reveals great insights. Consistency of quality is somewhat resilient to resource constraints",
      "l3": "Work shows consistently great insights and appropriateness regardless of resource constraints. Has impact on the work of other team members.",
      "l4": "Work shows rigor, longevity and is seen as a reference by the team across all aspects of the User Research practise",
      "l5": "Work is first-class and representative of Canonical's aspirations in User Research. It deeply influences how our team views quality.",
      "l6": "Overseas work by which Canonical User Research Canonical design and Canonical as a whole is viewed. Primarily concerned with the team development in this area."
    },
    "c2_1": {
      "l1": "Communicates solidly in one medium and is learning to branch into other communication skills like visual, written, verbal, presentation, active listening, feedback, nonverbal or documentation.",
      "l2": "Communicates effectively, clearly, concisely and in an audience-oriented way, in multiple forms. Actively listens to others and ensures they are understood. Pays attention to nonverbal communication.",
      "l3": "Usually communicates effectively, clearly, concisely and in an audience-oriented way in multiple forms both domain-specific and non domain-specific subjects, to their teammates. Actively listens to others and ensures they are understood. Pays attention to nonverbal communication.",
      "l4": "Is able to communicate effectively with a diverse set of teams across a full range of communication mediums. Fosters a culture of clear, concise, effective, audience-oriented communication across several teams, ensuring teammates actively listen to others and are understood.",
      "l5": "Sets the bar for clear and concise communication in a manner appropriate to diverse audiences. Understands the nuances of cross cultural and cross discipline communication. Is able to strategize on both internal and external communication.",
      "l6": "Responsible for the teams ability to communicate clearly and concisely, with diverse audiences, across all forms of communication."
    },
    "c2_2": {
      "l1": "Aware of differing product stakeholder needs, caters to their expectations.",
      "l2": "Able to adapt to multiple, often contradictory, product stakeholder needs. Caters to their expectations and communicates basic User Research needs and benefits.",
      "l3": "Skillfully manages stakeholder requirements and forms strong simbiotic relationships. Is able to promote User Research needs and benefits and respond with agility to risk, change and uncertainty.",
      "l4": "Skillfully manages product and upper management stakeholder requirements and forms strong cross-team simbiotic relationships. Takes opportunities to promote User Research with key stakeholders. Is a point of reference for User Research and pre-empts risk, change and uncertainty.",
      "l5": "Controls product and upper management stakeholder requirements and forms strong cross-team simbiotic relationships. Consistently promotes User Research with key stakeholders. Is a point of reference for User Research and manages risk, change and uncertainty.",
      "l6": "Responsible for upper management stakeholder requirements and buy in. Builds strong cross-team simbiotic relationships. Responsible for the position of User Research with key stakeholders. Is the point of reference for User Research and manages risk, change and uncertainty for the team."
    },
    "c2_3": {
      "l1": "Understands the importance of weighing cost and value in decision making. Understands that their role is larger than individual contribution. Is beginning to mentor in any of their competencies (Because the team is small this can be with non User Research members). Is visible in forums outside BAU such as lightening talks.",
      "l2": "Can be tasked with leadership requirements. Spends a notable amount of time on leadership activities not part of individual contribution. Mentors with frequency in all of their competencies (Because the team is small this can be with non User Research members).",
      "l3": "Anticipates leadership requirements. Can make trade-offs, focusing on mission-critical activities and communicates those effectively. ",
      "l4": "Owns leadership in their respective area. Is excellent making trade-offs and managing the repercussions and risk.",
      "l5": "Owns the outcome of effective leadership in their area. Has mastered making trade-offs and managing the repercussions and risk.",
      "l6": "Responsible for the outcome of effective leadership across the team."
    },
    "c2_4": {
      "l1": "Aware of the importance of a team where people can express opinions and contribute to discussion in a respectful manner. Is conscious that disagreement and contradictory behaviour is part of a strong, more diverse company.",
      "l2": "Participates in the development of team skill, motivation and aware of the need for a low churn, productive environment. Understands the distribution of team effort and ability.",
      "l3": "Embraces the development of team skill, motivation, and participates in creating a low churn, productive environment. Fosters a culture across the team where people are encouraged to share their opinions and contribute to discussions in a respectful manner, approach disagreement non-defensively with inquisitiveness, and use contradictory opinion as a basis for constructive, productive conversations. Integrates disagreeing opinions from the whole company into their perspective and plans. Is proficient at conflict resolution, relationship management and facilitation.",
      "l4": "Empowers team skill, motivation, and develops a low churn, productive environment. Fosters inclusiveness and promotes it as a strength of the team. Attains excellence in conflict resolution, relationship management and facilitation.",
      "l5": "Drives team skill, motivation and mentors others on their journey in this area. Can support other managers within department or in other departments and can contribute to strategies for improving management across Canonical.",
      "l6": "Responsible for the management of all staff in this department and for the quality of management. Shapes the inclusivity and development of the team."
    },
    "c3_1": {
      "l1": "Aware of short and long-term product and business objectives.",
      "l2": "Includes Canonical's Business Objectives into team practice. Their own work supports and highlights OKR acheivement.",
      "l3": "Is proficient at ensuring Canonical's business objective are including into team practice. Understands how User Research work can influence Objectives and Key Results",
      "l4": "Relates to Canonicals Key Results in a two-way relationship with User Research and mentors others in incorporating Business Objectives in their practice.",
      "l5": "Informs Canonicals Objectives and Key Results and can strategise in how those objectives can improve User Research",
      "l6": "Plays an important role in determing Canonical OKRs and hence the future of Canonical."
    },
    "c3_2": {
      "l1": "Aware that an hollistic approach to problem solving is different to design thinking and looks to root causes across the whole practice.",
      "l2": "Is competent looking at the complex system of User Research and treating it as a single problem. Works towards solving root causes, whether that be in tooling, processes, outcomes, leadership, management, OKRs or long-term vision.",
      "l3": "Is proficient dealing with the complex system of User Research and treating it as a single problem. Can solve root cause problems, whether that be in tooling, processes, outcomes, leadership, management, OKRs or long-term vision.",
      "l4": "Can mentor and lead in the developement of systems thinking. Regularly solves problems from a system level perspective and measures their own impact on a domain level.",
      "l5": "Mentors and leads in the development of systems thinking. Continually solves problems from a system level perspective and measures their own impact on a department level.",
      "l6": "Responsible for the system of all the elements that make up the design process and the development of this perspective amongst all team members."
    },
    "c3_3": {
      "l1": "Is able to distinguish business as usual mission actions from activities that support the long term vision and strength of Canonical User Research",
      "l2": "Is able to accurately reflect the long-term vision and inform their own work where appropriate.",
      "l3": "Is able to consistently and accurately reflect the long-term vision and inform their own work where appropriate. Advocates for this vision with peers and stakeholders.",
      "l4": "Contributes to and advocates for the long-term vision. Balances vision and mission. Outcomes are measured across a few cycles.",
      "l5": "Supports the person responsible for long-term vision. Outcomes are measured across multiple cycles. Communicates the aspirational future-state for what User Research means within their domain or department.",
      "l6": "Responsible for the long-term design vision at Canonical. Outcomes are measured across multiple cycles. Sets and communicates the aspirational future-state for what User Research means at Canonical."
    }
  }
});
const label_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "span.svelte-18g7lki{display:block;font-weight:300}b.svelte-18g7lki{font-weight:300;color:rgb(255, 72, 0)}",
  map: null
};
const Label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "" } = $$props;
  let { mandatory = false } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.mandatory === void 0 && $$bindings.mandatory && mandatory !== void 0)
    $$bindings.mandatory(mandatory);
  $$result.css.add(css$3);
  return `<span class="svelte-18g7lki">${escape(label)}${mandatory ? `<b class="svelte-18g7lki">*</b>` : ``}</span>`;
});
const select_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "select.svelte-js52ov{border:1px solid var(--fg-2);padding:8px 12px;border-radius:0;outline:none;background-color:#fff;font-family:var(--font);font-size:14px;font-weight:300}",
  map: null
};
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options = [] } = $$props;
  let { value = "" } = $$props;
  let { label = label } = $$props;
  let { mandatory = false } = $$props;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.mandatory === void 0 && $$bindings.mandatory && mandatory !== void 0)
    $$bindings.mandatory(mandatory);
  $$result.css.add(css$2);
  return `${validate_component(Label, "Label").$$render($$result, { label, mandatory }, {}, {})}
<select class="svelte-js52ov">${each(options, (option) => {
    return `<option${add_attribute("value", option, 0)}>${escape(typeof option.text == "undefined" ? option.value : option.text)}</option>`;
  })}</select>`;
});
const stars_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".stars.svelte-8pzxpv.svelte-8pzxpv{color:#ccc;text-align:center}.stars.svelte-8pzxpv svg.svelte-8pzxpv{margin:0 2px}.stars.align_left.svelte-8pzxpv.svelte-8pzxpv{text-align:left}.stars-1.svelte-8pzxpv path.svelte-8pzxpv{fill:#D3481D }.stars-2.svelte-8pzxpv path.svelte-8pzxpv{fill:#AF3B29}.stars-3.svelte-8pzxpv path.svelte-8pzxpv{fill:#8D2F35}.stars-4.svelte-8pzxpv path.svelte-8pzxpv{fill:#6A2240}.stars-5.svelte-8pzxpv path.svelte-8pzxpv{fill:#4B1233}.stars-6.svelte-8pzxpv path.svelte-8pzxpv{fill:#2C011E}",
  map: null
};
const Stars = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { levels: levels2 = {} } = $$props;
  let { level = {} } = $$props;
  let { align_left = false } = $$props;
  let stars = 0;
  if (levels2[level.level]) {
    stars = levels2[level.level].stars;
  } else {
    console.error("levels", levels2);
    console.error("level", level);
  }
  if ($$props.levels === void 0 && $$bindings.levels && levels2 !== void 0)
    $$bindings.levels(levels2);
  if ($$props.level === void 0 && $$bindings.level && level !== void 0)
    $$bindings.level(level);
  if ($$props.align_left === void 0 && $$bindings.align_left && align_left !== void 0)
    $$bindings.align_left(align_left);
  $$result.css.add(css$1);
  return `${levels2[level.level] ? `<div class="${[
    "stars stars-" + escape(stars, true) + " svelte-8pzxpv",
    align_left ? "align_left" : ""
  ].join(" ").trim()}" title="${escape(levels2[level.level].short, true) + " : " + escape(levels2[level.level].long, true)}">${!stars ? `—` : `${each({ length: stars }, (_, i) => {
    return `<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-8pzxpv"><path d="M14.2702 13.9378C15.8394 13.9378 17.1116 15.21 17.1116 16.7793C17.1116 18.3485 15.8394 19.6207 14.2702 19.6207C12.7009 19.6207 11.4287 18.3485 11.4287 16.7793C11.4287 15.21 12.7009 13.9378 14.2702 13.9378ZM4.76617 13.1645C5.71879 15.0121 7.45148 16.3336 9.48522 16.7636C9.71444 16.8126 9.94818 16.8506 10.1822 16.8766C10.2012 17.7366 10.4925 18.5683 11.0142 19.2523C10.3361 19.2563 9.65954 19.1867 8.99648 19.0446C5.98647 18.4075 3.49027 16.3154 2.33672 13.4631C3.15803 13.6139 4.00582 13.5097 4.76617 13.1645ZM18.69 4.82823C20.9108 8.18192 20.7228 12.5835 18.2242 15.7356C18.0056 14.9042 17.5297 14.1632 16.8645 13.6187C18.1621 11.5159 18.2488 8.88307 17.0922 6.69955C17.804 6.25431 18.3618 5.60104 18.69 4.82823ZM3.07679 6.60943C4.64607 6.60943 5.91823 7.88158 5.91823 9.45087C5.91823 11.0201 4.64607 12.2923 3.07679 12.2923C1.50751 12.2923 0.235352 11.0201 0.235352 9.45087C0.235352 7.88158 1.50751 6.60943 3.07679 6.60943ZM14.9103 0.378906C16.4796 0.378906 17.7518 1.65106 17.7518 3.22035C17.7518 4.78963 16.4796 6.06179 14.9103 6.06179C13.341 6.06179 12.0689 4.78963 12.0689 3.22035C12.0689 1.65106 13.341 0.378906 14.9103 0.378906ZM11.6709 0.695022C11.1556 1.35743 10.8548 2.16141 10.8089 2.99941C8.57678 3.03733 6.49961 4.14824 5.22886 5.98373C4.58147 5.58312 3.83533 5.37064 3.07401 5.37009C3.00182 5.37005 2.92967 5.37201 2.85756 5.37597C4.62579 2.2559 8.09778 0.412051 11.6709 0.695022Z" class="svelte-8pzxpv"></path></svg>`;
  })}`}</div>` : ``}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".btn.svelte-xhu84y.svelte-xhu84y{border:1px solid var(--fg-2);padding:8px 12px;border-radius:0;outline:none;background-color:#fff;font-family:var(--font);font-size:14px;font-weight:300;text-decoration:none;color:#000;cursor:pointer;white-space:nowrap}.btn.svelte-xhu84y.svelte-xhu84y:hover{background-color:#fff}svg.svelte-xhu84y text.svelte-xhu84y{font-weight:bold;fill:black;font-size:19px;text-anchor:middle;letter-spacing:-1px}svg.svelte-xhu84y tspan.svelte-xhu84y{font-weight:300}svg.svelte-xhu84y line.svelte-xhu84y{stroke:#333;stroke-width:1}svg.svelte-xhu84y rect.svelte-xhu84y{fill:#FFFFFF;stroke:#CCCCCC;width:239px;height:47px}svg.svelte-xhu84y rect.bg.svelte-xhu84y{fill:#F7F7F7;width:900px;height:900px}svg.svelte-xhu84y rect.expert.svelte-xhu84y{height:207px}.mask.svelte-xhu84y.svelte-xhu84y{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:1999;text-align:center;padding-top:10vh}.modal.svelte-xhu84y.svelte-xhu84y{width:90%;max-width:640px;max-height:80vh;overflow:auto;background-color:#fff;position:relative;margin-left:auto;margin-right:auto;padding:16px 32px 32px 32px;text-align:left;box-shadow:0 4px 16px rgba(0,0,0,0.6)}.modal.svelte-xhu84y h1.svelte-xhu84y{position:relative}.modal.svelte-xhu84y h1 span.svelte-xhu84y{position:absolute;top:-40px;right:0;cursor:pointer}hr.svelte-xhu84y.svelte-xhu84y{border:none;background:none;border-top:1px solid #eee;height:0}.settings.svelte-xhu84y.svelte-xhu84y{display:flex;flex-direction:row;margin-bottom:40px}.settings.svelte-xhu84y>.svelte-xhu84y{margin:20px 40px 20px 0}.label.svelte-xhu84y.svelte-xhu84y{display:block;font-weight:300}.settings.svelte-xhu84y label.svelte-xhu84y{padding-top:6px;padding-right:6px;display:inline-block}.table-wrapper.svelte-xhu84y.svelte-xhu84y{width:100%;overflow:auto;max-height:90vh;margin-bottom:60px;padding-bottom:40px;scrollbar-width:thin;scrollbar-color:#fff #999}.table-wrapper.svelte-xhu84y.svelte-xhu84y::-webkit-scrollbar{width:12px}.table-wrapper.svelte-xhu84y.svelte-xhu84y::-webkit-scrollbar-track{background:#fff}.table-wrapper.svelte-xhu84y.svelte-xhu84y::-webkit-scrollbar-thumb{background-color:#999;border-radius:20px;border:3px solid #fff}thead.svelte-xhu84y.svelte-xhu84y{position:sticky;top:0;background:#fff;z-index:100}th.svelte-xhu84y.svelte-xhu84y{min-width:200px;font-weight:300}.th-0.svelte-xhu84y.svelte-xhu84y{background-color:rgba(0,0,0, 3%)}.th-1.svelte-xhu84y.svelte-xhu84y{background-color:rgba(0,0,0, 6%)}.th-2.svelte-xhu84y.svelte-xhu84y{background-color:rgba(0,0,0, 9%)}.th-3.svelte-xhu84y.svelte-xhu84y{background-color:rgba(0,0,0, 12%)}td.svelte-xhu84y.svelte-xhu84y{text-align:center;border-top:1px solid #eee;padding:8px 0}th.svelte-xhu84y.svelte-xhu84y:first-child,td.svelte-xhu84y.svelte-xhu84y:first-child{position:sticky;left:0;background:#fff;z-index:99;text-align:left}th.svelte-xhu84y.svelte-xhu84y:first-child:after,td.svelte-xhu84y.svelte-xhu84y:first-child:after{content:'';background:linear-gradient(0.25turn, rgba(0,0,0,10%), rgba(0,0,0,0%));position:absolute;top:0;right:-10px;width:10px;height:100%}td.svelte-xhu84y.svelte-xhu84y:first-child{color:#007eff;text-decoration:underline;white-space:nowrap;padding-right:8px}td.stage.svelte-xhu84y.svelte-xhu84y{cursor:pointer}.selected-stage.svelte-xhu84y.svelte-xhu84y{margin:0 64px 120px 64px}.selected-stage.svelte-xhu84y p.svelte-xhu84y{max-width:640px}.tabs.svelte-xhu84y.svelte-xhu84y{list-style:none;display:block;padding:0;border-bottom:1px solid #eee}.tabs.svelte-xhu84y li.svelte-xhu84y{display:inline-block;padding:12px 16px;border-bottom:3px solid transparent;cursor:pointer}.tabs.svelte-xhu84y li.selected.svelte-xhu84y{background-color:rgba(0,0,0,8%);border-bottom-color:#000}h2.svelte-xhu84y.svelte-xhu84y{font-weight:100;font-size:32px}h3.svelte-xhu84y.svelte-xhu84y{font-weight:100;font-size:28px}.comparison.svelte-xhu84y.svelte-xhu84y{display:flex;flex-direction:row;text-align:center}.comparison.svelte-xhu84y>.svelte-xhu84y:nth-child(1),.comparison.svelte-xhu84y>.svelte-xhu84y:nth-child(3){flex:1;text-align:left;vertical-align:top}.comparison.svelte-xhu84y>.svelte-xhu84y:nth-child(2){font-size:2em;line-height:0em;margin-bottom:1em;vertical-align:top;width:80px;color:#007eff}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $career_paths, $$unsubscribe_career_paths;
  let $teams, $$unsubscribe_teams;
  let $all_trades, $$unsubscribe_all_trades;
  let $categories, $$unsubscribe_categories;
  let $levels, $$unsubscribe_levels;
  let $trade_cat_levels, $$unsubscribe_trade_cat_levels;
  $$unsubscribe_career_paths = subscribe(career_paths, (value) => $career_paths = value);
  $$unsubscribe_teams = subscribe(teams, (value) => $teams = value);
  $$unsubscribe_all_trades = subscribe(all_trades, (value) => $all_trades = value);
  $$unsubscribe_categories = subscribe(categories, (value) => $categories = value);
  $$unsubscribe_levels = subscribe(levels, (value) => $levels = value);
  $$unsubscribe_trade_cat_levels = subscribe(trade_cat_levels, (value) => $trade_cat_levels = value);
  let selected_stage = false;
  let visible_categories = ["c0"];
  let team = $teams[0];
  let trades = $all_trades.filter((el) => {
    return el.team == team.key;
  });
  let trade = trades[0];
  let career_path = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        trades = $all_trades.filter((el) => {
          return el.team == team.key;
        });
        if (trades.indexOf(trade) < 0) {
          selected_stage = false;
          trade = trades[0];
        }
      }
    }
    {
      {
        let t = trade;
        if (t) {
          trade.key;
          career_path = $career_paths.find((el) => el.team == team.key && el.trade == trade.key);
        }
      }
    }
    $$rendered = `

<h1>Design Levelling Framework </h1>

<div class="settings svelte-xhu84y">
    <div class="svelte-xhu84y">${validate_component(Select, "Select").$$render(
      $$result,
      {
        options: trades,
        label: "Trade",
        value: trade
      },
      {
        value: ($$value) => {
          trade = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
    <div class="svelte-xhu84y"><span class="label svelte-xhu84y">Visible Columns</span>
        ${each($categories, (cat) => {
      return `<label class="svelte-xhu84y"><input type="checkbox"${add_attribute("value", cat.key, 0)}${~visible_categories.indexOf(cat.key) ? add_attribute("checked", true, 1) : ""}> ${escape(cat.value)} </label>`;
    })}</div>
    <div class="svelte-xhu84y"><span class="label svelte-xhu84y"> </span><a href="/" class="btn svelte-xhu84y">View Flow</a></div>
    <div class="svelte-xhu84y"><span class="label svelte-xhu84y"> </span><a href="/" class="btn svelte-xhu84y">View Levels</a></div></div>

<div class="table-wrapper svelte-xhu84y"><table><thead class="svelte-xhu84y"><tr><th class="svelte-xhu84y"></th>
                ${each($categories, (cat, i) => {
      return `${visible_categories.indexOf(cat.key) >= 0 ? `<th class="${"th-" + escape(i, true) + " svelte-xhu84y"}"${add_attribute("colspan", cat.children.length, 0)}><b class="svelte-xhu84y">${escape(cat.value)}</b></th>` : ``}`;
    })}</tr>
            <tr><th class="svelte-xhu84y"><b>Path Stages</b></th>
                ${each($categories, (cat, i) => {
      return `${visible_categories.indexOf(cat.key) >= 0 ? `${each(cat.children, (ch) => {
        return `<th class="${"th-" + escape(i, true) + " svelte-xhu84y"}">${escape(ch.value)}</th>`;
      })}` : ``}`;
    })}</tr></thead>
        <tbody>${career_path && career_path.stages ? `${each(career_path.stages, (stage) => {
      return `${!selected_stage || selected_stage == stage ? `<tr><td class="stage svelte-xhu84y"${add_attribute("title", stage.can_value, 0)}>${escape(stage.value)}</td>
                            ${each($categories, (cat) => {
        return `${visible_categories.indexOf(cat.key) >= 0 ? `${each(cat.children, (ch) => {
          return `<td class="svelte-xhu84y">${stage.cat_levels[ch.key] && stage.cat_levels[ch.key].level && stage.cat_levels[ch.key].display == "stars" ? `${validate_component(Stars, "Stars").$$render(
            $$result,
            {
              levels: $levels,
              level: stage.cat_levels[ch.key]
            },
            {},
            {}
          )}` : `${stage.cat_levels[ch.key] && stage.cat_levels[ch.key].level && stage.cat_levels[ch.key].display == "short" ? `${escape($levels[stage.cat_levels[ch.key].level].short)}` : `<!-- HTML_TAG_START -->${stage.cat_levels[ch.key].value}<!-- HTML_TAG_END -->`}`}
                                        </td>`;
        })}` : ``}`;
      })}
                        </tr>` : ``}`;
    })}` : ``}</tbody></table></div>

${selected_stage ? `<div class="selected-stage svelte-xhu84y"><h2 class="svelte-xhu84y">${escape(selected_stage.value)}</h2>
        <ul class="tabs svelte-xhu84y"><li class="${["svelte-xhu84y", "selected"].join(" ").trim()}">Role expectations</li>
            ${selected_stage.key !== "cp_12" ? `<li class="${["svelte-xhu84y", ""].join(" ").trim()}">Levelling Up</li>
                <li class="${["svelte-xhu84y", ""].join(" ").trim()}">Job Description</li>
                <li class="${["svelte-xhu84y", ""].join(" ").trim()}">Interviewing</li>` : ``}</ul>
        ${`${selected_stage.intro ? `<h3 class="svelte-xhu84y">Introduction</h3>
                <p class="svelte-xhu84y">${escape(selected_stage.intro)}</p>` : ``}
            ${each($categories, (cat) => {
      return `${visible_categories.indexOf(cat.key) >= 0 ? `<hr class="svelte-xhu84y">
                    <h3 class="svelte-xhu84y">${escape(cat.value)}</h3>
                    ${each(cat.children, (ch) => {
        return `<h4>${escape(ch.value)}</h4>
                        ${selected_stage.cat_levels[ch.key].level && selected_stage.cat_levels[ch.key].display == "stars" ? `<div style="width:180px">${validate_component(Stars, "Stars").$$render(
          $$result,
          {
            levels: $levels,
            level: selected_stage.cat_levels[ch.key]
          },
          {},
          {}
        )}</div>

                            ${$trade_cat_levels[trade.key] && $trade_cat_levels[trade.key][ch.key] && $trade_cat_levels[trade.key][ch.key][selected_stage.cat_levels[ch.key].level] ? `<p class="svelte-xhu84y">${escape($trade_cat_levels[trade.key][ch.key][selected_stage.cat_levels[ch.key].level])}</p>` : ``}` : `${selected_stage.cat_levels[ch.key].level && selected_stage.cat_levels[ch.key].display == "short" ? `${escape($levels[selected_stage.cat_levels[ch.key].level].short)}` : `<!-- HTML_TAG_START -->${selected_stage.cat_levels[ch.key].value}<!-- HTML_TAG_END -->`}`}`;
      })}` : ``}`;
    })}`}
        ${``}
        ${``}
        ${``}</div>` : ``}
<hr class="svelte-xhu84y">


${``}
${``}`;
  } while (!$$settled);
  $$unsubscribe_career_paths();
  $$unsubscribe_teams();
  $$unsubscribe_all_trades();
  $$unsubscribe_categories();
  $$unsubscribe_levels();
  $$unsubscribe_trade_cat_levels();
  return $$rendered;
});
export {
  Page as default
};
