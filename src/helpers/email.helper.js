const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'francesca.heathcote91@ethereal.email',
    pass: 'RuW5ncA11xasbc79zz',
  },
})

const send = (info) => {
  return new Promise(async (resolve, reject) => {
    try {
      // send mail with defined transport object
      let result = await transporter.sendMail(info)

      console.log('Message sent: %s', result.messageId)
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(result))
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

      resolve(result)
    } catch (error) {
      console.log(error)
    }
  })
}

const emailProcessor = (email, pin) => {
  const info = {
    from: '"CRM Limited" <francesca.heathcote91@ethereal.email>', // sender address
    to: email, // list of receivers
    subject: 'Password rest Pin', // Subject line
    text:
      'Here is your password rest pin' + pin + ' This pin will expires in 1day', // plain text body
    html: `<b>Hello </b>
    Here is your pin 
    <b>${pin} </b>
    This pin will expires in 1day
    <p></p>`, // html body
  }

  send(info)
}

module.exports = { emailProcessor }
