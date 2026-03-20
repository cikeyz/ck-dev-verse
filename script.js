/* --- 1. BOOT SEQUENCE DATA ---
   These are the lines that print one by one after axiom_start runs.
   I kept them in a plain array so it is easy to add or change lines later.
   The empty strings create natural pauses between the sections. */

var bootLines = [
  'CK_OS v1.0 \u2014 initializing...',
  new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
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
var commandLine = document.getElementById('command-line')
var commandInput = document.getElementById('command-input')

bootLog.textContent = 'CK_OS v1.0 \u2014 Terminal Ready\n' +
  new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) + '\n\n' +
  'Type "axiom_start" to initialize.\n\n'

document.querySelector('.hero-terminal').addEventListener('click', function () {
  commandInput.focus()
})

commandInput.addEventListener('keydown', function (e) {
  if (e.key !== 'Enter') return

  var cmd = commandInput.value.trim().toLowerCase()

  if (cmd === 'axiom_start') {
    // Valid - echo the command, hide the prompt, then run the boot sequence
    bootLog.textContent += '> ' + commandInput.value + '\n\n'
    commandLine.style.display = 'none'
    setTimeout(function () {
      bootLog.textContent = ''
      printBootLine(0)
    }, 400)
  } else if (cmd === '') {
    // Empty enter just adds a blank prompt line
    bootLog.textContent += '> \n'
  } else {
    // Unknown command - bash-style error so it feels authentic
    bootLog.textContent += '> ' + commandInput.value + '\n'
    bootLog.textContent += 'bash: ' + cmd + ': command not found\n\n'
  }

  commandInput.value = ''
})

function printBootLine(index) {
  if (index >= bootLines.length) {
    // All lines printed - reveal the hero, then fade in the rest of the page
    heroContent.classList.remove('hidden')
    heroContent.classList.add('visible')
    setTimeout(function () {
      document.body.classList.add('booted')
    }, 600)
    return
  }

  bootLog.textContent += bootLines[index] + '\n'

  // Blank lines get a shorter delay so they feel like natural pauses
  var delay = bootLines[index] === '' ? 200 : 300
  setTimeout(function () {
    printBootLine(index + 1)
  }, delay)
}

/* --- 3. SMOOTH SCROLL ---
   Simple click handler on every nav link so clicking a section
   name scrolls to it instead of jumping. I prefer this over anchor
   jumps because it keeps the page feeling more polished. */

var navLinks = document.querySelectorAll('#main-nav a')

navLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault()
    var targetId = this.getAttribute('href').substring(1)
    var targetEl = document.getElementById(targetId)
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' })
    }
  })
})

/* --- 4. ACTIVE NAV HIGHLIGHT ---
   IntersectionObserver watches each section and adds .active to the
   matching nav link while it is in view. The rootMargin offsets let
   me fine-tune exactly when the switch triggers - I pulled it a bit
   toward the top so the highlight changes early enough to feel right. */

var sections = document.querySelectorAll('section, #hero')

var observerOptions = {
  root: null,
  rootMargin: '-60px 0px -40% 0px',
  threshold: 0.1
}

var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      var id = entry.target.getAttribute('id')

      navLinks.forEach(function (link) {
        link.classList.remove('active')
      })

      var matchingLink = document.querySelector('#main-nav a[href="#' + id + '"]')
      if (matchingLink) {
        matchingLink.classList.add('active')
      }
    }
  })
}, observerOptions)

sections.forEach(function (section) {
  observer.observe(section)
})

/* --- 5. CONTACT FORM HANDLER ---
   On submit I clear the inputs and print a terminal-style confirmation
   line below the form. No backend needed for this - it just needs to
   look interactive enough for the activity. */

var contactForm = document.getElementById('contact-form')
var formOutput = document.getElementById('form-output')

contactForm.addEventListener('submit', function (e) {
  e.preventDefault()
  contactForm.reset()

  var line = document.createElement('p')
  line.textContent = '> MESSAGE SENT. AWAITING RESPONSE... \u2588'
  formOutput.appendChild(line)
})
