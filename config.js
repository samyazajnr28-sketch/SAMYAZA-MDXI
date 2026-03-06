const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VU25KiSBD9l3rVGEFuYkRHLKICoogiarOxDyUUWHK1qqTBCf99A3t6ph92Z3t5KuqSeTLPOfkdFCWmyEYtGH8HFcE1ZKhbsrZCYAwmtzhGBPRBBBkEY2DM0SAw62SQvvr2yNTmMVTZwLgcosnU9SILKlki8/qp8V9fwKMPqtspw+FvAlbT+1KfIIjszF1x9imlt02vXJlD3pgGKdMc4m3t7XC/Mv0X8OgiQkxwkcyqM8oRgZmNWhdi8jX4WOPV8iqb7b7dmjz0JxHdhrpfepl0HSFjuVanRcJGh93Q+hr8ZOPn2r1dkkTshaO35O3iKvlmgPnAbbL6jptFwJ12J1n2Nu/wKU4KFFkRKhhm7Zf7Hi7kVTNcL4jXE8jJ2F574nUlvAqnkXyY0WOrodA3eVeO0vBrwEfndQ+LQTNJrm15sFqb8TodRs61mVTRXh8wE4arbKBSb/QZuEs+tJL+n76LmnJncl1firW/bdNsNVxq3PbsemfjGl+hSJM73C0acbfXvgYfpezCxMYomTPj9SI9QEtor1sqz4av6ylXlNZglk9ZWZ0/wYfsRn6Hkt7m9g43TRF6vO4l+5od60FtaY7KHINGvm8tSDhNDo7J92JHkKQdP5/P9/OjeNzvlYm1WDreqd5lhuwzCXMzemErffPyrChFrRWBMf/oA4ISTBmBDJfFc09W+wBGtYdCgtizvSBdHuE9OGjlXl3b0eh1W/GxEwTIitQQvUq0EKDWU++9nhq+gD6oSBkiSlFkYspK0q4QpTBBFIz//KsPCtSwd+K6dALfBzEmlPnFrcpKGH2w+nEIw7C8Fcxri1DvFoiAMfdrGzGGi4R2fbwVkIRnXCP9DBkF4xhmFP2sEBEUgTEjN/TTtXoZdY0XJtrUNRcm6IP8SQiOwBgMJVHhJX405CVhLAp/0G9vXVhYVd8KxEAfFLC7DbSiLNq8vFHQB9nzpcxLisLxwnCkcu9vu/3HT8xdiggxiDMKxkBfm7UQaMbMEtYl5QxDmyWanmjgV40fYnknI4Nr91g503Qu9Vh+uFsN21/rhVuLnqckTFO29mJ2ZBuE6cs/BOkitCVfc7N8vrcrmW/bg0CdfHkIInEuDkJC/QtznPDkZfEy6LXXXB44U/OQimneHN3eW5BOYFMO451kL+daby2l65U2fXvpskWoxiH6nGy9OPJecAqVooAmy40Nmcde60aaPfNU/T4S4zKhpq0Vo3ojrbz05KuWawwxz4+aHXKJcakKe0MCO6Q7hT/quyKz9bd3GT9tlP0YX/gpsI697jfG6DkNfrD0n2y+A+9Exz36n2L8mC//4tFJcLhceHm3kSYoJkFG29VpD0m7U3qz9CYuN2vOw9u54pslAY/HX31QZZDFJck7g+cnCPqAlLdOwlYRl7/JpGuJNd0keld2BinTftlih3NEGcwrMOYVZSjLnMQJ77dcUlYmpOdO5Vs1ENRO461WVR6D7MNlQOu+FTcFj78B9PgKxIEHAAA=', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
