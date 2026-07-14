/* --- 1. BOOT SEQUENCE DATA ---
   These are the lines the fake boot prints after axiom_start runs.
   I kept them here so they are easy to tweak without digging through the logic. */
var todayText = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
var bootLines = [
  'CK_OS v1.0 \u2014 initializing...',
  todayText,
  '',
  'Loading about.sh........... OK',
  'Loading education.log...... OK',
  'Loading skills.db.......... OK',
  'Loading work.sh............ OK',
  'Loading projects.sh........ OK',
  'Loading research.sh........ OK',
  '',
  'All systems nominal. Welcome.'
]

var bootLog = document.getElementById('boot-log')
var heroContent = document.getElementById('hero-content')
var heroTerminal = document.querySelector('.hero-terminal')
var commandLine = document.getElementById('command-line')
var commandInput = document.getElementById('command-input')

bootLog.textContent = 'CK_OS v1.0 \u2014 Terminal Ready\n' + todayText + '\n\nType "axiom_start" to initialize.\n\n'

heroTerminal.addEventListener('click', function () {
  commandInput.focus()
})

commandInput.addEventListener('keydown', function (e) {
  if (e.key !== 'Enter') return

  var rawCommand = commandInput.value
  var command = rawCommand.trim().toLowerCase()

  if (command === 'axiom_start') {
    // Right command, so I echo it first and then start the fake boot.
    bootLog.textContent += '> ' + rawCommand + '\n\n'
    commandLine.style.display = 'none'
    setTimeout(function () {
      bootLog.textContent = ''
      printBootLine(0)
    }, 400)
  } else if (command === '') {
    // Hitting Enter on an empty line just prints another prompt.
    bootLog.textContent += '> \n'
  } else {
    // Wrong commands still get a bash-style error so the terminal bit feels consistent.
    bootLog.textContent += '> ' + rawCommand + '\n'
    bootLog.textContent += 'bash: ' + command + ': command not found\n\n'
  }

  commandInput.value = ''
})

function printBootLine(index) {
  if (index >= bootLines.length) {
    // When the last line is done, I fade in the hero text and then the rest of the page.
    heroContent.classList.remove('hidden')
    heroContent.classList.add('visible')
    setTimeout(function () {
      document.body.classList.add('booted')
    }, 600)
    return
  }

  bootLog.textContent += bootLines[index] + '\n'

  // Blank lines wait a little less so the boot does not drag.
  setTimeout(function () {
    printBootLine(index + 1)
  }, bootLines[index] === '' ? 200 : 300)
}

/* --- 3. SMOOTH SCROLL ---
   This keeps nav clicks from doing the abrupt anchor jump. */
var navLinks = document.querySelectorAll('#main-nav a')

navLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault()
    var targetId = this.getAttribute('href').substring(1)
    var targetEl = document.getElementById(targetId)
    if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' })
  })
})

/* --- 4. ACTIVE NAV HIGHLIGHT ---
   IntersectionObserver watches the sections and lights up
   whichever nav link matches the one on screen. */
var sections = document.querySelectorAll('section, #hero')
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) setActiveLink(entry.target.getAttribute('id'))
  })
}, { root: null, rootMargin: '-60px 0px -40% 0px', threshold: 0.1 })

sections.forEach(function (section) {
  observer.observe(section)
})

function setActiveLink(id) {
  navLinks.forEach(function (link) {
    link.classList.remove('active')
  })

  var matchingLink = document.querySelector('#main-nav a[href="#' + id + '"]')
  if (matchingLink) matchingLink.classList.add('active')
}

/* --- 5. CONTACT FORM HANDLER ---
   On submit I clear the form and print the same fake terminal reply below it. */
var contactForm = document.getElementById('contact-form')
var formOutput = document.getElementById('form-output')

contactForm.addEventListener('submit', function (e) {
  e.preventDefault()
  contactForm.reset()

  var line = document.createElement('p')
  line.textContent = '> MESSAGE SENT. AWAITING RESPONSE... \u2588'
  formOutput.appendChild(line)
})

document.addEventListener('DOMContentLoaded', function () {
  var skills = {
    Python: 90,
    JavaScript: 84,
    'HTML/CSS': 92,
    'C++': 75,
    'VHDL/Verilog': 68,
    SQL: 72,
    'KiCAD / PCB Design': 86,
    'UI/UX Design': 80
  }

  var skillRows = document.querySelectorAll('.skill-row[data-skill]')

  skillRows.forEach(function (row) {
    var skillName = row.getAttribute('data-skill')
    var skillValue = skills[skillName]

    if (typeof skillValue !== 'number') return

    var fill = row.querySelector('.bar-fill')
    var percent = row.querySelector('.skill-percent')

    fill.style.width = skillValue + '%'
    percent.textContent = skillValue + '%'
  })
})

document.addEventListener('DOMContentLoaded', function () {
  var spinner = document.getElementById('hero-spinner')
  var frames = ['⠋', '⠙', '⠹', '⠸']
  var frameIndex = 0

  if (!spinner) return

  setInterval(function () {
    spinner.textContent = frames[frameIndex]
    frameIndex = (frameIndex + 1) % frames.length
  }, 120)
})
