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
        <h2>Tid</h2>
        <h2>Uddannelse</h2>
        <h2>Fag</h2>
        <h2>Lokale</h2>
        <h2>Hold</h2>
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
      <h6>${formatDate(obj.StartDate, "time")}</h6>
      <h6>${obj.Education}</h6>
      <h6>${obj.Subject}</h6>
      <h6 >${obj.Room}</h6>
      <h6>${obj.Team}</h6>
      `;
};

function createDayRow(item) {
  return `<tr id="nextDay">
            <td colspan="5">${item.day}</td>
          </tr>`;
}


const convertTimeToSeconds = (time) => {
  return Math.round(new Date(time).getTime() / 1000);
};

setInterval(() => {
  GroupDates();
}, upDatePage);
