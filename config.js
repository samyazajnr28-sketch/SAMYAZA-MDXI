const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VV3a6qRhR+l7nVHEFkqyQ7KRtBURFQEbU5FyMMOMqfMwOIJyZN75o+Rx+gPxd9niY96WM06N5n74v2dJerYTFZ61vf963FJ5CkmKIJqoD0CWQEF5Ch+siqDAEJPOVBgAhoAh8yCCTQU7lNamHbUla0t20j19wsDEa34a5FmAcvspjpE9nTxmv1EVybIMt3Efa+kvCp5bqz5WGzseLw3CKpK+crkTenM3V8cYk1FUlRbjjR5C/GI7jWGSEmOAnVbI9iRGA0QZUFMXkffFnx/FV3JpgDxxpEPs+tlWk/LwfjzDEVNbEia9gdQI+N4uP74Gsjpz1XFK+VJnMSXVTuydKVDhK4/g5rnQehW7onH006Ak7v8CkOE+TrPkoYZtW7eZfVwmwVc2ERGup0gOF5ZtrMVM0L27Y4uzzx6YWNNn1TWDnvA160Nvn28KCQdea5dl+W+eEmtLWdEw48bXTaO8xqx8Ya53vnLXCLvHjl+H94V0y+xcf7sc3Hmurp/mU/4teyFWZysuUKrB8KD56XFLFYfx/8cM+thElC82jhu1ZkqfuKPxqWN+/TTVto+OczZ/OhoVmh/Aofspx8DaVLRFOJiH4kruldjo38vL2s1NOwm52w0rJaDcPU5Z1zZmJImd94gkHnYXER5F2bV+OW4JPAwA/T8amtpNQUXCtvq/befrx1dESV7gOJvzYBQSGmjECG0+QW6/BNAP1igTyC2I1ecHEKSJZl0J+aXcc4bIsDcxpKfqrkrR17g8xtq0vXWh11TX4ETZCR1EOUIn+EKUtJZSBKYYgokL792AQJOrO7cHU5od0EASaUOUmeRSn0X1R9+Qg9L80TtqgST6kPiACJew0jxnAS0prHPIHE2+MCKXvIKJACGFH0pUNEkA8kRnL0ZWqV1K+Jn/Tn2+GE34ImiG+CYB9IoC12urzI99q8KEjd/jf0Q1mnhVn2IUEMNEF0u/bAi90uxwvtXp+7X6zjTZDAOhf447sfP//+2+efv//zp1//+uGXmvtn5HUhHzGII1pbcmbpaaMzUI1Jwnud4VBWQ1kJZfDa6Ytl7pJwG00uGivt3DoWrnicBHlhiU7lzhdLBTqu3zsMMMu2mVaWj/+QBEhgrqFKp71JYJ9X9FRZcLyYNGZu1ciVYYRwF8KDsXM9yyH2OVvjtpkIw4Vfpkm2Gk3jVhTHwTDD0/KinmZzLg8qcRM/yY91NR8V2ENviyWjcjfmenCkEq4QHRHbcwYHO7NaLpRO1YiWXn9kujRPzenZ4Aer0u6t9Hm4L892pdlhJstda35BGQ3HjkbXp85mFGP5bubbMEXPSwzfbFZrWL8GGN12wrMa/6npHXhtPe7afJPjecv821/DHz7Z01Y09wJxyudbJemSS2NlREfnWMaRlgR62SHQhXPPANfrxybIIsiClMRAAjDxSXqzDEnz2st6EqRfW15yqA/sUKk7jyBl8ut8LHGMKINxBiS+2xXFXk/g2vdbFkmzEaR7IAEhjvjDojZ7JWfZgkH2Mm5Arh8t2YDr3/2yVu+KBwAA', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
