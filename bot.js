const mineflayer = require('mineflayer')

function startBot() {
  const bot = mineflayer.createBot({
    host: 'OpenArms-Forever.aternos.me',
    port: 11881,
    username: 'Open Arms Forever',
    version: '1.21.1'
  })

  bot.on('login', () => {
    console.log('Joined server')
  })

  bot.on('spawn', () => {
    console.log('Staying alive')

    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 500)
    }, 30000)
  })

  bot.on('end', () => {
    console.log('Restarting bot...')
    setTimeout(startBot, 5000)
  })
}

startBot()
