/* ════════════════════════════════════════
   GRUPO RANDAZZO — Auth compartida
════════════════════════════════════════ */

let _sb;
const _sbReady = fetch('/api/config')
  .then(r => r.json())
  .then(cfg => { _sb = window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseKey); })
  .catch(() => {});

async function authInit() {
  try {
    await _sbReady;
    const { data: { session } } = await _sb.auth.getSession();
    if (!session) { window.location.replace('/login.html'); return; }
    const el = document.getElementById('navUser');
    if (el) el.textContent = session.user.email;
    document.getElementById('auth-check').classList.add('off');
    startLoader();
    _sb.auth.onAuthStateChange(ev => {
      if (ev === 'SIGNED_OUT') window.location.replace('/login.html');
    });
  } catch (e) {
    window.location.replace('/login.html');
  }
}

async function signOut() {
  await _sbReady;
  await _sb.auth.signOut();
  window.location.replace('/login.html');
}

function startLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;
  loader.classList.add('on');
  const WORD = 'EMBAJADORES';
  const lw = document.getElementById('lWord');
  if (lw) {
    WORD.split('').forEach((c, i) => {
      const s = document.createElement('span');
      s.className = 'ld-ch' + (i === 0 ? ' hi' : '');
      s.textContent = c;
      s.style.animationDelay = (i * .05 + .4) + 's';
      lw.appendChild(s);
    });
  }
  setTimeout(() => {
    loader.classList.add('out');
    const page = document.getElementById('page');
    if (page) page.classList.add('vis');
    setTimeout(() => { loader.style.display = 'none'; }, 550);
  }, WORD.length * 50 + 400 + 700);
}

document.addEventListener('DOMContentLoaded', authInit);
