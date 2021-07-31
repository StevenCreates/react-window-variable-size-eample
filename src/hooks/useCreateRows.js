const sortByDate = (arr) => {
    arr.sort((a, b) => new Date(b.date) - new Date(a.date))
    return arr;
  }


export const useCreateRows = (rows) => {
  const createdRows = rows.map((row) => ({
    component: "rowComponent",
    name: `${row.firstName} ${row.lastName}`,
    date: row.date,
    search: row.search,
  }));

  const dates = rows.map((data) => data.date);
  const duplicateDatesArr = new Set(dates);
  const removedDuplicatesArr = [...duplicateDatesArr];
  const createdDateRows = removedDuplicatesArr.map((date) => ({
    component: "dateComponent",
    date: date
  }));
  const combinedRows = [...createdDateRows, ...createdRows]
  return sortByDate(combinedRows)
};
