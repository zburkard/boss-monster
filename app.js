const heroes = [
  {
    name: 'slate',
    type: 'dwarf',
    damage: 5,
    health: 100,
    maxHealth: 100
  },
  {
    name: 'flint',
    type: 'elf',
    damage: 10,
    health: 100,
    maxHealth: 100
  }
]


const boss = {
  health: 100,
  maxHealth: 100,
  damage: 5,
  level: 1
}


function heroesAtt() {
  let totalAtt = 0
  heroes.forEach(h => {
    if (h.health > 0) {
      totalAtt += h.damage
    }
  })
  boss.health -= totalAtt
  if (boss.health <= 0) {
    boss.health = 0
    bossOneUp()
  }
  console.log(boss.health)
  drawBossHP()
}

function bossAtt() {
  heroes.forEach(h => {
    if (h.health > 0) {
      h.health = h.health - boss.damage
      console.log(h.health)
    }
  })
}

function timerAtt() {
  console.log('boss damage started')
  let dmgInterval = setInterval(() => {
    if (boss.health > 0)
      bossAtt()
    drawHP()
  }, 5000)

  setTimeout(() => {
    console.log('boss damage ended')
    clearInterval(dmgInterval)
  }, 600000)
}

function drawHP() {
  heroes.forEach(h => {
    let heroElm = document.getElementById(h.name)
    let heroBar = heroElm.querySelector('.progress-bar')
    heroBar.style.width = h.health + '%'
  })
}

function drawBossHP() {
  let barElm = document.getElementById('bossBar')
  barElm.style.width = boss.health + '%'
}

function bossOneUp() {
  boss.level++
  boss.health = 100
  boss.damage * 5
  console.log('boss level :', boss.level, boss.damage, 'damage')
}


drawHP()
timerAtt()
drawBossHP()