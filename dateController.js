const isValidDate = (date) => {
  if(new Date(date).getTime())return true
  else return false
}

const getCurrDate = (req, res) => {
  const unix = new Date().getTime();
  const currDate = new Date().toString().split(' ');
  const day = currDate[0] + ',';
  const month = currDate[1];
  const dayInNumber = currDate[2];
  const year = currDate[3];
  const time = currDate[4];
    
  const utc = [day, dayInNumber, month, year, time, "GMT"].join(' ');
  res.json({ unix, utc });
}

const getDateByFormat = (req, res) => {
  const { date } = req.params;
  if(Number(date) && Number(date) >= 0) return res.json(getDateByUnix(date));
  if(isValidDate(date)) {
    const unix = Number(new Date(date).getTime());
    const currDate = new Date(date).toString().split(' ');
    const day = currDate[0] + ',';
    const month = currDate[1];
    const dayInNumber = currDate[2];
    const year = currDate[3];
    const time = currDate[4];
    const utc = [day, dayInNumber, month, year, time, "GMT"].join(' ');
      res.json({ unix, utc });
  }else res.json({ error: "Invalid Date"})
}

const getDateByUnix = (date) => {
  const unix = Number(date);
  const dateInSecs = date/1000
  const currDate = new Date(dateInSecs * 1000).toString().split(' ');
  const day = currDate[0] + ',';
  const month = currDate[1];
  const dayInNumber = currDate[2];
  const year = currDate[3];
  const time = currDate[4];
  const utc = [day, dayInNumber, month, year, time, "GMT"].join(' ');
    return { unix, utc }
}

module.exports = {getDateByFormat, getCurrDate}