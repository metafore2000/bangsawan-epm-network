(function(){
  'use strict';

  const LINKS = {
    whatsapp: 'https://wa.me/601115788698?text=Assalamualaikum%2C%20saya%20berminat%20untuk%20menyertai%20Bangsawan%20EPM%20dan%20ingin%20mendapatkan%20maklumat%20lanjut%20mengenai%20peluang%20serta%20cara%20untuk%20bermula.',
    messenger: 'https://m.me/MeniagaTanpaModalHQ',
    telegram: 'https://t.me/BangsawanEPMNetwork?text=bangsawan'
  };

  const COPY = {
    bm: {
      fab:'Tanya Kami', kicker:'BANGSAWAN EPM NETWORK', title:'Pilih Cara Untuk Chat',
      subtitle:'Pilih platform yang anda paling selesa. Kami sedia membantu sebelum anda bermula.',
      wa:'WhatsApp', waSub:'Chat terus dengan kami', msg:'Messenger', msgSub:'Facebook Messenger',
      tg:'Telegram', tgSub:'Telegram Bangsawan EPM', note:'Tiga pilihan, satu pasukan bantuan.', close:'Tutup pilihan chat'
    },
    en: {
      fab:'Ask Us', kicker:'BANGSAWAN EPM NETWORK', title:'Choose How To Chat',
      subtitle:'Choose the platform you prefer. We are here to help before you get started.',
      wa:'WhatsApp', waSub:'Chat with us directly', msg:'Messenger', msgSub:'Facebook Messenger',
      tg:'Telegram', tgSub:'Bangsawan EPM Telegram', note:'Three choices, one support team.', close:'Close chat options'
    }
  };

  function currentLang(){
    try{return localStorage.getItem('siteLang') === 'en' ? 'en' : 'bm';}catch(e){return 'bm';}
  }

  function svgChat(){return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4.8A2.8 2.8 0 0 1 6.8 2h10.4A2.8 2.8 0 0 1 20 4.8v7.4a2.8 2.8 0 0 1-2.8 2.8H10l-4.8 4.2V15A2.8 2.8 0 0 1 4 12.2V4.8Zm4 3.1h8v1.8H8V7.9Zm0 3.5h5.7v1.8H8v-1.8Z"/></svg>'}
  function svgWA(){return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a9.8 9.8 0 0 0-8.35 14.94L2.3 21.7l4.88-1.28A9.87 9.87 0 1 0 12 2Zm0 17.92a8.02 8.02 0 0 1-4.09-1.12l-.29-.17-2.9.76.78-2.82-.19-.29A8.07 8.07 0 1 1 12 19.92Zm4.42-6.04c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.43-.59 1.63-1.15.2-.56.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28Z"/></svg>'}
  function svgMSG(){return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.15 2 11.27c0 2.92 1.46 5.53 3.74 7.23V22l3.42-1.88c.9.25 1.85.39 2.84.39 5.52 0 10-4.15 10-9.24S17.52 2 12 2Zm.99 12.48-2.55-2.72-4.98 2.72 5.48-5.82 2.62 2.72 4.91-2.72-5.48 5.82Z"/></svg>'}
  function svgTG(){return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.56 3.13 18.4 20.2c-.24 1.2-.87 1.5-1.77.94l-4.82-3.56-2.33 2.24c-.26.26-.47.47-.96.47l.35-4.9 8.91-8.05c.39-.35-.08-.54-.6-.19L6.16 14.1l-4.75-1.49c-1.03-.32-1.05-1.03.21-1.52L20.2 3.93c.86-.32 1.61.19 1.36 1.2Z"/></svg>'}

  let overlay, fab;

  function createUI(){
    if(document.getElementById('beChatOverlay')) return;

    fab=document.createElement('button');
    fab.type='button';
    fab.className='be-chat-fab';
    fab.id='beChatFab';
    fab.innerHTML='<span class="be-chat-fab-icon">'+svgChat()+'</span><span data-be-chat="fab"></span>';
    document.body.appendChild(fab);

    overlay=document.createElement('div');
    overlay.className='be-chat-overlay';
    overlay.id='beChatOverlay';
    overlay.setAttribute('aria-hidden','true');
    overlay.innerHTML='\
      <div class="be-chat-dialog" role="dialog" aria-modal="true" aria-labelledby="beChatTitle">\
        <button class="be-chat-close" id="beChatClose" type="button" aria-label="Close">×</button>\
        <p class="be-chat-kicker" data-be-chat="kicker"></p>\
        <h2 class="be-chat-title" id="beChatTitle" data-be-chat="title"></h2>\
        <p class="be-chat-subtitle" data-be-chat="subtitle"></p>\
        <div class="be-chat-list">\
          <a class="be-chat-channel" href="'+LINKS.whatsapp+'" target="_blank" rel="noopener noreferrer">\
            <span class="be-chat-icon wa">'+svgWA()+'</span><span class="be-chat-copy"><strong data-be-chat="wa"></strong><small data-be-chat="waSub"></small></span><span class="be-chat-arrow">›</span>\
          </a>\
          <a class="be-chat-channel" href="'+LINKS.messenger+'" target="_blank" rel="noopener noreferrer">\
            <span class="be-chat-icon msg">'+svgMSG()+'</span><span class="be-chat-copy"><strong data-be-chat="msg"></strong><small data-be-chat="msgSub"></small></span><span class="be-chat-arrow">›</span>\
          </a>\
          <a class="be-chat-channel" href="'+LINKS.telegram+'" target="_blank" rel="noopener noreferrer">\
            <span class="be-chat-icon tg">'+svgTG()+'</span><span class="be-chat-copy"><strong data-be-chat="tg"></strong><small data-be-chat="tgSub"></small></span><span class="be-chat-arrow">›</span>\
          </a>\
        </div>\
        <p class="be-chat-note" data-be-chat="note"></p>\
      </div>';
    document.body.appendChild(overlay);

    fab.addEventListener('click',open);
    document.getElementById('beChatClose').addEventListener('click',close);
    overlay.addEventListener('click',function(e){if(e.target===overlay)close();});
    document.addEventListener('keydown',function(e){if(e.key==='Escape' && overlay.classList.contains('is-open'))close();});

    document.querySelectorAll('#waBtn,[data-chat-trigger]').forEach(function(el){
      el.setAttribute('data-chat-trigger','');
      el.addEventListener('click',function(e){e.preventDefault();open();});
    });

    document.querySelectorAll('button[onclick*="setLang"]').forEach(function(btn){
      btn.addEventListener('click',function(){setTimeout(updateCopy,0);});
    });
    updateCopy();
  }

  function updateCopy(){
    const c=COPY[currentLang()];
    document.querySelectorAll('[data-be-chat]').forEach(function(el){
      const key=el.getAttribute('data-be-chat');
      if(c[key]) el.textContent=c[key];
    });
    const closeBtn=document.getElementById('beChatClose');
    if(closeBtn) closeBtn.setAttribute('aria-label',c.close);
  }

  function open(){
    updateCopy();
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden','false');
    document.body.classList.add('be-chat-lock');
    setTimeout(function(){const c=document.getElementById('beChatClose');if(c)c.focus();},0);
  }
  function close(){
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden','true');
    document.body.classList.remove('be-chat-lock');
    if(fab) fab.focus({preventScroll:true});
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',createUI);
  else createUI();
})();
