const mineflayer = require('mineflayer')

function startBot() {

  const bot = mineflayer.createBot({
    host: 'OpenArms-Forever.aternos.me',
    port: 11881,
    username: 'Open Arms Forever',
    version: 1.21
  })

  bot.on('login', () => {
    console.log('Joined server')
  })

  bot.on('spawn', () => {
    console.log('Spawned successfully')
  })

  bot.on('end', (reason) => {
    console.log('Disconnected:', reason)
    setTimeout(startBot, 5000)
  })

  bot.on('error', (err) => {
    console.log('Error:', err.message)
  })
}

startBot()
