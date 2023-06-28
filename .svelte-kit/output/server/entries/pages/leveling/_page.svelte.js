import { c as create_ssr_component, e as escape, v as validate_component, b as each, d as add_attribute } from "../../../chunks/index2.js";
const label_svelte_svelte_type_style_lang = "";
const css$2 = {
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
  $$result.css.add(css$2);
  return `<span class="svelte-18g7lki">${escape(label)}${mandatory ? `<b class="svelte-18g7lki">*</b>` : ``}</span>`;
});
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
  return `${validate_component(Label, "Label").$$render($$result, { label, mandatory }, {}, {})}
<select>${each(options, (option) => {
    return `<option${add_attribute("value", option, 0)}>${escape(typeof option.text == "undefined" ? option.value : option.text)}</option>`;
  })}</select>`;
});
const stars_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".stars.svelte-yfr64w.svelte-yfr64w{color:#ccc;text-align:center}.stars.svelte-yfr64w svg.svelte-yfr64w{margin:0 2px}.stars-1.svelte-yfr64w path.svelte-yfr64w{fill:#D3481D }.stars-2.svelte-yfr64w path.svelte-yfr64w{fill:#AF3B29}.stars-3.svelte-yfr64w path.svelte-yfr64w{fill:#8D2F35}.stars-4.svelte-yfr64w path.svelte-yfr64w{fill:#6A2240}.stars-5.svelte-yfr64w path.svelte-yfr64w{fill:#4B1233}.stars-6.svelte-yfr64w path.svelte-yfr64w{fill:#2C011E}",
  map: null
};
const Stars = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { levels = {} } = $$props;
  let { level = {} } = $$props;
  let stars = levels[level.level].stars;
  if ($$props.levels === void 0 && $$bindings.levels && levels !== void 0)
    $$bindings.levels(levels);
  if ($$props.level === void 0 && $$bindings.level && level !== void 0)
    $$bindings.level(level);
  $$result.css.add(css$1);
  return `<div class="${"stars stars-" + escape(stars, true) + " svelte-yfr64w"}" title="${escape(levels[level.level].short, true) + " : " + escape(levels[level.level].long, true)}">${levels[level.level].stars < 1 ? `—` : `${each({ length: stars }, (_, i) => {
    return `<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-yfr64w"><path d="M14.2702 13.9378C15.8394 13.9378 17.1116 15.21 17.1116 16.7793C17.1116 18.3485 15.8394 19.6207 14.2702 19.6207C12.7009 19.6207 11.4287 18.3485 11.4287 16.7793C11.4287 15.21 12.7009 13.9378 14.2702 13.9378ZM4.76617 13.1645C5.71879 15.0121 7.45148 16.3336 9.48522 16.7636C9.71444 16.8126 9.94818 16.8506 10.1822 16.8766C10.2012 17.7366 10.4925 18.5683 11.0142 19.2523C10.3361 19.2563 9.65954 19.1867 8.99648 19.0446C5.98647 18.4075 3.49027 16.3154 2.33672 13.4631C3.15803 13.6139 4.00582 13.5097 4.76617 13.1645ZM18.69 4.82823C20.9108 8.18192 20.7228 12.5835 18.2242 15.7356C18.0056 14.9042 17.5297 14.1632 16.8645 13.6187C18.1621 11.5159 18.2488 8.88307 17.0922 6.69955C17.804 6.25431 18.3618 5.60104 18.69 4.82823ZM3.07679 6.60943C4.64607 6.60943 5.91823 7.88158 5.91823 9.45087C5.91823 11.0201 4.64607 12.2923 3.07679 12.2923C1.50751 12.2923 0.235352 11.0201 0.235352 9.45087C0.235352 7.88158 1.50751 6.60943 3.07679 6.60943ZM14.9103 0.378906C16.4796 0.378906 17.7518 1.65106 17.7518 3.22035C17.7518 4.78963 16.4796 6.06179 14.9103 6.06179C13.341 6.06179 12.0689 4.78963 12.0689 3.22035C12.0689 1.65106 13.341 0.378906 14.9103 0.378906ZM11.6709 0.695022C11.1556 1.35743 10.8548 2.16141 10.8089 2.99941C8.57678 3.03733 6.49961 4.14824 5.22886 5.98373C4.58147 5.58312 3.83533 5.37064 3.07401 5.37009C3.00182 5.37005 2.92967 5.37201 2.85756 5.37597C4.62579 2.2559 8.09778 0.412051 11.6709 0.695022Z" class="svelte-yfr64w"></path></svg>`;
  })}`}
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".table-wrapper.svelte-19kv5fn{width:100%;overflow:auto}table.svelte-19kv5fn{min-width:100%}th.svelte-19kv5fn{min-width:200px}td.svelte-19kv5fn{text-align:center}.th-0.svelte-19kv5fn{background-color:rgba(210,72, 29, 10%)}.th-1.svelte-19kv5fn{background-color:rgba(210,72, 29, 20%)}.th-2.svelte-19kv5fn{background-color:rgba(210,72, 29, 30%)}.th-3.svelte-19kv5fn{background-color:rgba(210,72, 29, 40%)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let teams = [{ key: "design", value: "Design" }, { key: "web", value: "Web Engineering" }];
  let team = teams[0];
  let all_trades = [
    { team: "design", key: "ux", value: "UX" },
    {
      team: "design",
      key: "vd",
      value: "Visual Design"
    },
    {
      team: "design",
      key: "ur",
      value: "User Research"
    },
    { team: "web", key: "all", value: "All" }
  ];
  let trades = all_trades.filter((el) => {
    return el.team == team.key;
  });
  let trade = trades[0];
  let levels = {
    "l0": {
      stars: 0,
      short: "Unrequired",
      long: "Does not need this yet or has no knowledge."
    },
    "l1": {
      stars: 1,
      short: "Potential",
      long: "Can read up and work with support. Is not self sufficent in this area yet."
    },
    "l2": {
      stars: 2,
      short: "Competency",
      long: "Has some expertise. Can work alone and is self sufficient in this area."
    },
    "l3": {
      stars: 3,
      short: "Proficiency",
      long: "Has expertise. Self sufficient and capable of sharing with others."
    },
    "l4": {
      stars: 4,
      short: "Excellence",
      long: "Deep accomplished expertise. Has theory of area. Can lead and educate in this area and/or act as subject matter expert."
    },
    "l5": {
      stars: 5,
      short: "Mastery",
      long: "Deep practical and theoretical expertise. Leads and educates in this area and is subject matter expert. Can recommend/strategise."
    },
    "l6": {
      stars: 6,
      short: "Responsible",
      long: "Deep expertise. Publicly leads and educates and is SME. Responsible for vision, strategy and evolution of this area."
    }
  };
  let categories = [
    {
      key: "c0",
      value: "Canonical",
      children: [
        { key: "c0_1", value: "Has" },
        { key: "c0_2", value: "Impacts" },
        { key: "c0_3", value: "Behaviours" }
      ]
    },
    {
      key: "c1",
      value: "Competency",
      children: [
        { key: "c1_1", value: "Tools" },
        { key: "c1_2", value: "Process" },
        { key: "c1_3", value: "Outcomes" }
      ]
    },
    {
      key: "c2",
      value: "People",
      children: [
        { key: "c2_1", value: "Communication" },
        {
          key: "c2_2",
          value: "Stakeholder Management"
        },
        { key: "c2_3", value: "Leadership" },
        { key: "c2_4", value: "Team Management" }
      ]
    },
    {
      key: "c3",
      value: "Strategy",
      children: [
        { key: "c3_1", value: "Business OKRs" },
        { key: "c3_2", value: "Systems Thinking" },
        { key: "c3_3", value: "Long-term Vision" }
      ]
    }
  ];
  let career_paths = [
    {
      team: "design",
      trade: "ux",
      stages: [
        {
          key: "cp_1",
          value: "Graduate UX designer",
          can_value: "Graduate",
          cat_levels: {
            "c0_1": { value: "Potential" },
            "c0_2": { value: "Self" },
            "c0_3": { value: "Foo<br>bar<br>bash" },
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
          }
        },
        {
          key: "cp_2",
          value: "Associate UX designer",
          can_value: "Associate",
          cat_levels: {
            "c0_1": { value: "Potential" },
            "c0_2": { value: "Self" },
            "c0_3": { value: "Foo<br>bar<br>baz" },
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
          }
        },
        {
          key: "cp_3",
          value: "UX designer 1",
          can_value: "Prof I",
          cat_levels: {
            "c0_1": { value: "Competence" },
            "c0_2": { value: "Work" },
            "c0_3": { value: "Foo<br>bar<br>baz" },
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
          }
        },
        {
          key: "cp_4",
          value: "UX designer 2",
          can_value: "Prof II",
          cat_levels: {
            "c0_1": { value: "Competence" },
            "c0_2": { value: "Work" },
            "c0_3": { value: "Foo<br>bar<br>baz" },
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
          }
        },
        {
          key: "cp_5",
          value: "UX expert",
          can_value: "Prof III",
          cat_levels: {
            "c0_1": { value: "Expertise" },
            "c0_2": { value: "Work" },
            "c0_3": { value: "Foo<br>bar<br>baz" },
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
          }
        },
        {
          key: "cp_6",
          value: "Senior UX designer",
          can_value: "Senior",
          cat_levels: {
            "c0_1": { value: "Expertise" },
            "c0_2": { value: "Team" },
            "c0_3": { value: "Foo<br>bar<br>baz" },
            "c1_1": { level: "l4", display: "stars" },
            "c1_2": { level: "l4", display: "stars" },
            "c1_3": { level: "l4", display: "stars" },
            "c2_1": { level: "l3", display: "stars" },
            "c2_2": { level: "l3", display: "stars" },
            "c2_3": { level: "l2", display: "stars" },
            "c2_4": { level: "l1", display: "stars" },
            "c3_1": { level: "l2", display: "stars" },
            "c3_2": { level: "l3", display: "stars" },
            "c3_3": { level: "l2", display: "stars" }
          }
        }
      ]
    }
  ];
  let career_path = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        trades = all_trades.filter((el) => el.team == team.key);
        if (trades.indexOf(trade) < 0) {
          trade = trades[0];
        }
      }
    }
    {
      {
        career_path = career_paths.find((el) => el.team == team.key && el.trade == trade.key);
      }
    }
    $$rendered = `<h1>Leveling Framework </h1>

${escape(team.value)}<br>
${escape(trade.value)}<br><br>

${validate_component(Select, "Select").$$render(
      $$result,
      {
        options: teams,
        label: "Team",
        value: team
      },
      {
        value: ($$value) => {
          team = $$value;
          $$settled = false;
        }
      },
      {}
    )}
${validate_component(Select, "Select").$$render(
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
    )}

<div class="table-wrapper svelte-19kv5fn"><table class="svelte-19kv5fn"><thead><tr><th class="svelte-19kv5fn"></th>
                ${each(categories, (cat, i) => {
      return `<th class="${"th-" + escape(i, true) + " svelte-19kv5fn"}"${add_attribute("colspan", cat.children.length, 0)}>${escape(cat.value)}</th>`;
    })}</tr>
            <tr><th class="svelte-19kv5fn">Path Stages</th>
                ${each(categories, (cat, i) => {
      return `${each(cat.children, (ch) => {
        return `<th class="${"th-" + escape(i, true) + " svelte-19kv5fn"}">${escape(ch.value)}</th>`;
      })}`;
    })}</tr></thead>
        <tbody>${career_path && career_path.stages ? `${each(career_path.stages, (stage) => {
      return `<tr><td${add_attribute("title", stage.can_value, 0)} class="svelte-19kv5fn">${escape(stage.value)}</td>
                        ${each(categories, (cat) => {
        return `${each(cat.children, (ch) => {
          return `<td class="svelte-19kv5fn">${stage.cat_levels[ch.key].level && stage.cat_levels[ch.key].display == "stars" ? `${validate_component(Stars, "Stars").$$render($$result, { levels, level: stage.cat_levels[ch.key] }, {}, {})}` : `${stage.cat_levels[ch.key].level && stage.cat_levels[ch.key].display == "short" ? `${escape(levels[stage.cat_levels[ch.key].level].short)}` : `<!-- HTML_TAG_START -->${stage.cat_levels[ch.key].value}<!-- HTML_TAG_END -->`}`}
                                </td>`;
        })}`;
      })}
                    </tr>`;
    })}` : ``}</tbody></table>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
