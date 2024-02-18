let startDate = new Date('2000-01-01');
let currDate = new Date();
let yearStart = startDate.getFullYear();

function caclFriday(year) {
    let yearEnd = currDate.getFullYear();
    let startMonth = startDate.getMonth();
    let currMonth = currDate.getMonth();
    let frayArr = [];
    let monthSum = (yearEnd - yearStart) * 12 - currMonth;
     for (let month = startMonth; month < monthSum; month++)  {
        let d = new Date(year, month, 13);
        if(d.getDay() === 5) {
          frayArr.push(d);
        }
        }
    return frayArr.length;
}

caclFriday(yearStart);
