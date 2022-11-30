import { formatDate } from "./formatDate.js";

const root = document.getElementById("schedule");
const max_activities = 8;
const upDatePage = 1000;

const apiEndPoint =
  "https://iws.itcn.dk/techcollege/Schedules?departmentCode=smed";

const GroupDates = () => {
  const ApiData = [];

  let dagsDato = new Date();

  let cur_time_stamp = Math.round(dagsDato.getTime() / 1000);

  let tomorrow_stamp = Math.round(dagsDato.setHours(0, 0, 0, 0) / 1000) + 86400;

  const fetchApiData = () => {
    fetch(apiEndPoint)
      .then((response) => response.json())
      .then((data) => {
        ApiData.push(...data.value);
      })
      .catch((e) => {
        console.error(e);
      })

      .finally(() => {
        getActivities();
      });
  };

  const getActivities = () => {
    const inCludedEducations = [
      "h0mg100122",
      "gwe080122",
      "biw100522",
      "Grafisk Tekniker",
      "Grafisk teknik.",
    ];

    renderActivityTable(
      ApiData.filter((activity) =>
        inCludedEducations.includes(activity.Team)
      ).sort((a, b) => {
        if (a.StartDate === b.StartDate) {
          return a.Education < b.Education ? -1 : 1;
        } else {
          return a.StartDate < b.StartDate ? -1 : 1;
        }
      })
    );
  };

  const renderActivityTable = (data) => {
    let html = `
        ${cellWrapper("Tid", "", "h2")}
        ${cellWrapper("Uddannelse", "", "h2")}
        ${cellWrapper("Fag", "", "h2")}
        ${cellWrapper("Lokale", "", "h2")}
        ${cellWrapper("Hold", "", "h2")}
`;

    let arr_subjects = [];

    arr_subjects.push(
      ...data.filter(
        (obj) =>
          convertTimeToSeconds(obj.StartDate) + 3600 >= cur_time_stamp &&
          convertTimeToSeconds(obj.StartDate) < tomorrow_stamp
      )
    );

    let arr_nextday_subjects = [];
    arr_nextday_subjects.push(
      ...data.filter(
        (obj) => convertTimeToSeconds(obj.StartDate) >= tomorrow_stamp
      )
    );

    if (arr_nextday_subjects.length) {
      let next_day_friendly = new Date(
        arr_nextday_subjects[0].StartDate
      ).toLocaleDateString("da-DK", {
        weekday: "long",
        day: "numeric",
        month: "long",
      });
      arr_subjects.push({ day: next_day_friendly });
      arr_subjects.push(...arr_nextday_subjects);
    }

    arr_subjects.slice(0, max_activities).map((obj) => {
      if (obj.Team) {
        html += createRow(obj);
      } else {
        html += createDayRow(obj);
      }
    });

    html += `</tbody></table>`;
    root.innerHTML = html;
  };

  fetchApiData();
};

const createRow = (obj) => {
  return `
      ${cellWrapper(formatDate(obj.StartDate, "time", "h6"))}
      ${cellWrapper(obj.Education, "" , "h6")}
      ${cellWrapper(obj.Subject, "" , "h6")}
      ${cellWrapper(obj.Room, "" , "h6")}
      ${cellWrapper(obj.Team, "" , "h6")}
      `;
};

function createDayRow(item) {
  return`
          ${cellWrapper(item.day, "tomorrow")}`
}


const convertTimeToSeconds = (time) => {
  return Math.round(new Date(time).getTime() / 1000);
};

setInterval(() => {
  GroupDates();
}, upDatePage);

const cellWrapper = (str, strClass, headingSize) => {
  return `<div ${strClass ? 'class= '+strClass+'': ''}><${headingSize}>${str}</${headingSize}></div>`
} 
