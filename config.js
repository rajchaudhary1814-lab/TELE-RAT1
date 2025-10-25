const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '8403663973:AAHDf8e6jxpxpJg4TKUwpzNxe6aOuJ0_tvw',
  id: isNaN(parsedId) ? 6259214638 : parsedId // replace 12345.. with your telegram chat id
};
