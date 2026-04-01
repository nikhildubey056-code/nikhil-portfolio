<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Articles — Nikhil Dubey</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=JetBrains+Mono:wght@300;400;500&display=swap" rel="stylesheet">
<style>
  :root {
    --ink: #1a1410; --parchment: #f5f0e8; --gold: #c9a84c;
    --gold-light: #e8d5a3; --rust: #8b3a2a; --cream: #faf7f2;
    --muted: #6b5c4e; --border: rgba(201,168,76,0.3);
    --success: #4a6741; --danger: #8b3a2a;
  }
  * { margin:0; padding:0; box-sizing:border-box; }
  html { scroll-behavior:smooth; }
  body { background:var(--cream); color:var(--ink); font-family:'Cormorant Garamond',serif; overflow-x:hidden; min-height:100vh; }
  body::before { content:''; position:fixed; inset:0; background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E"); pointer-events:none; z-index:1000; opacity:0.4; }
 
  /* NAV */
  nav { position:fixed; top:0; left:0; right:0; z-index:100; display:flex; justify-content:space-between; align-items:center; padding:1.2rem 4rem; background:rgba(250,247,242,0.9); backdrop-filter:blur(12px); border-bottom:1px solid var(--border); }
  .nav-logo { font-family:'Playfair Display',serif; font-size:1.1rem; font-weight:700; color:var(--ink); text-decoration:none; }
  .nav-logo span { color:var(--gold); }
  .nav-links { display:flex; gap:2rem; list-style:none; align-items:center; }
  .nav-links a { font-family:'JetBrains Mono',monospace; font-size:0.7rem; letter-spacing:0.15em; text-transform:uppercase; color:var(--muted); text-decoration:none; transition:color 0.3s; }
  .nav-links a:hover, .nav-links a.active { color:var(--gold); }
  .btn-sm { font-family:'JetBrains Mono',monospace; font-size:0.65rem; letter-spacing:0.12em; text-transform:uppercase; padding:0.5rem 1.2rem; background:var(--gold); color:var(--ink); border:none; cursor:pointer; text-decoration:none; transition:all 0.3s; }
  .btn-sm:hover { background:var(--ink); color:var(--gold); }
 
  /* PAGE HEADER */
  .page-header { padding:8rem 6rem 4rem; background:var(--ink); position:relative; overflow:hidden; }
  .page-header::before { content:'Articles'; position:absolute; right:-2rem; top:50%; transform:translateY(-50%); font-family:'Playfair Display',serif; font-size:15rem; font-weight:900; font-style:italic; color:rgba(201,168,76,0.04); line-height:1; pointer-events:none; white-space:nowrap; }
  .page-label { font-family:'JetBrains Mono',monospace; font-size:0.65rem; letter-spacing:0.3em; text-transform:uppercase; color:var(--gold); margin-bottom:1rem; }
  .page-title { font-family:'Playfair Display',serif; font-size:clamp(2.5rem,5vw,4.5rem); font-weight:900; color:var(--cream); line-height:1.05; }
  .page-title em { font-style:italic; color:var(--gold); }
  .page-sub { font-size:1.15rem; color:rgba(250,247,242,0.55); font-style:italic; margin-top:1rem; font-weight:300; }
 
  /* MAIN LAYOUT */
  .main { display:grid; grid-template-columns:1fr 380px; gap:0; min-height:calc(100vh - 200px); }
 
  /* EDITOR PANEL */
  .editor-panel { padding:4rem; border-right:1px solid var(--border); background:var(--cream); }
  .panel-label { font-family:'JetBrains Mono',monospace; font-size:0.65rem; letter-spacing:0.25em; text-transform:uppercase; color:var(--gold); margin-bottom:2rem; padding-bottom:1rem; border-bottom:1px solid var(--border); }
 
  /* PHOTO UPLOAD */
  .photo-section { margin-bottom:2.5rem; }
  .photo-label { font-family:'JetBrains Mono',monospace; font-size:0.6rem; letter-spacing:0.2em; text-transform:uppercase; color:var(--muted); margin-bottom:0.8rem; display:block; }
  .photo-upload-zone { border:2px dashed var(--border); padding:2rem; text-align:center; cursor:pointer; transition:all 0.3s; position:relative; background:rgba(201,168,76,0.02); }
  .photo-upload-zone:hover { border-color:var(--gold); background:rgba(201,168,76,0.05); }
  .photo-upload-zone input { position:absolute; inset:0; opacity:0; cursor:pointer; width:100%; height:100%; }
  .photo-preview-container { position:relative; display:inline-block; }
  .photo-preview { width:100px; height:100px; border-radius:50%; object-fit:cover; border:3px solid var(--gold); display:none; }
  .photo-upload-content { display:flex; flex-direction:column; align-items:center; gap:0.5rem; }
  .photo-upload-content span { font-size:2rem; }
  .photo-upload-content p { font-family:'Cormorant Garamond',serif; font-size:0.95rem; color:var(--muted); font-style:italic; }
  .photo-upload-content small { font-family:'JetBrains Mono',monospace; font-size:0.55rem; color:var(--gold); letter-spacing:0.1em; text-transform:uppercase; }
  .photo-change-btn { position:absolute; bottom:-5px; right:-5px; background:var(--gold); border:none; border-radius:50%; width:26px; height:26px; cursor:pointer; font-size:0.7rem; display:none; align-items:center; justify-content:center; }
 
  /* FORM FIELDS */
  .field { margin-bottom:1.8rem; }
  .field-label { font-family:'JetBrains Mono',monospace; font-size:0.6rem; letter-spacing:0.2em; text-transform:uppercase; color:var(--muted); margin-bottom:0.6rem; display:block; }
  .field input, .field select, .field textarea {
    width:100%; padding:0.9rem 1rem;
    background:var(--parchment); border:1px solid var(--border);
    color:var(--ink); font-family:'Cormorant Garamond',serif; font-size:1.05rem;
    outline:none; transition:border-color 0.3s; resize:vertical;
  }
  .field input:focus, .field select:focus, .field textarea:focus { border-color:var(--gold); background:white; }
  .field textarea { min-height:260px; line-height:1.8; }
  .field select { appearance:none; cursor:pointer; }
 
  /* CHAR COUNT */
  .char-count { font-family:'JetBrains Mono',monospace; font-size:0.55rem; color:var(--muted); text-align:right; margin-top:0.3rem; letter-spacing:0.1em; }
 
  /* EDITOR ACTIONS */
  .editor-actions { display:flex; gap:1rem; margin-top:2rem; }
  .btn-publish { font-family:'JetBrains Mono',monospace; font-size:0.7rem; letter-spacing:0.15em; text-transform:uppercase; padding:1rem 2rem; background:var(--ink); color:var(--cream); border:none; cursor:pointer; transition:all 0.3s; flex:1; }
  .btn-publish:hover { background:var(--gold); color:var(--ink); }
  .btn-draft { font-family:'JetBrains Mono',monospace; font-size:0.7rem; letter-spacing:0.15em; text-transform:uppercase; padding:1rem 1.5rem; background:transparent; color:var(--muted); border:1px solid var(--border); cursor:pointer; transition:all 0.3s; }
  .btn-draft:hover { border-color:var(--gold); color:var(--gold); }
  .btn-clear { font-family:'JetBrains Mono',monospace; font-size:0.7rem; letter-spacing:0.15em; text-transform:uppercase; padding:1rem 1.5rem; background:transparent; color:var(--muted); border:1px solid var(--border); cursor:pointer; transition:all 0.3s; }
  .btn-clear:hover { border-color:var(--rust); color:var(--rust); }
 
  /* TOAST */
  .toast { position:fixed; bottom:2rem; right:2rem; background:var(--ink); color:var(--cream); padding:1rem 2rem; font-family:'JetBrains Mono',monospace; font-size:0.7rem; letter-spacing:0.1em; z-index:999; transform:translateY(100px); opacity:0; transition:all 0.4s; border-left:3px solid var(--gold); }
  .toast.show { transform:translateY(0); opacity:1; }
  .toast.success { border-left-color: #4a6741; }
  .toast.error { border-left-color: var(--rust); }
 
  /* ARTICLES LIST PANEL */
  .list-panel { padding:4rem 2.5rem; background:var(--parchment); overflow-y:auto; max-height:calc(100vh - 80px); position:sticky; top:80px; }
  .list-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem; padding-bottom:1rem; border-bottom:1px solid var(--border); }
  .list-title { font-family:'Playfair Display',serif; font-size:1.3rem; font-weight:700; color:var(--ink); }
  .list-count { font-family:'JetBrains Mono',monospace; font-size:0.6rem; color:var(--gold); letter-spacing:0.1em; background:rgba(201,168,76,0.1); padding:0.3rem 0.7rem; }
 
  /* FILTER */
  .filter-bar { display:flex; gap:0.5rem; margin-bottom:1.5rem; flex-wrap:wrap; }
  .filter-btn { font-family:'JetBrains Mono',monospace; font-size:0.55rem; letter-spacing:0.1em; text-transform:uppercase; padding:0.35rem 0.8rem; border:1px solid var(--border); background:transparent; color:var(--muted); cursor:pointer; transition:all 0.2s; }
  .filter-btn.active, .filter-btn:hover { background:var(--gold); color:var(--ink); border-color:var(--gold); }
 
  /* ARTICLE ITEMS */
  .article-item { background:var(--cream); border:1px solid var(--border); padding:1.5rem; margin-bottom:1rem; position:relative; transition:all 0.3s; cursor:pointer; }
  .article-item:hover { border-color:var(--gold); transform:translateX(4px); }
  .article-item-tag { font-family:'JetBrains Mono',monospace; font-size:0.55rem; letter-spacing:0.15em; text-transform:uppercase; color:var(--gold); margin-bottom:0.5rem; }
  .article-item-title { font-family:'Playfair Display',serif; font-size:1.05rem; font-weight:700; color:var(--ink); line-height:1.3; margin-bottom:0.4rem; }
  .article-item-excerpt { font-size:0.85rem; color:var(--muted); font-style:italic; line-height:1.5; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
  .article-item-footer { display:flex; justify-content:space-between; align-items:center; margin-top:1rem; padding-top:0.8rem; border-top:1px solid rgba(201,168,76,0.15); }
  .article-item-date { font-family:'JetBrains Mono',monospace; font-size:0.55rem; color:var(--muted); letter-spacing:0.08em; }
  .article-item-actions { display:flex; gap:0.5rem; }
  .action-btn { font-family:'JetBrains Mono',monospace; font-size:0.55rem; padding:0.25rem 0.6rem; border:1px solid var(--border); background:transparent; cursor:pointer; transition:all 0.2s; letter-spacing:0.05em; }
  .action-btn.edit:hover { border-color:var(--gold); color:var(--gold); }
  .action-btn.delete:hover { border-color:var(--rust); color:var(--rust); }
  .status-badge { font-family:'JetBrains Mono',monospace; font-size:0.5rem; letter-spacing:0.1em; text-transform:uppercase; padding:0.2rem 0.5rem; }
  .status-badge.published { background:rgba(74,103,65,0.1); color:var(--success); border:1px solid rgba(74,103,65,0.3); }
  .status-badge.draft { background:rgba(107,92,78,0.1); color:var(--muted); border:1px solid var(--border); }
 
  /* EMPTY STATE */
  .empty-state { text-align:center; padding:3rem 1rem; }
  .empty-state span { font-size:3rem; display:block; margin-bottom:1rem; opacity:0.4; }
  .empty-state p { font-style:italic; color:var(--muted); font-size:0.95rem; }
 
  /* READ MODAL */
  .read-modal-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.85); z-index:500; display:flex; align-items:center; justify-content:center; opacity:0; pointer-events:none; transition:opacity 0.3s; backdrop-filter:blur(8px); padding:2rem; }
  .read-modal-overlay.active { opacity:1; pointer-events:all; }
  .read-modal { background:var(--cream); max-width:700px; width:100%; max-height:85vh; overflow-y:auto; position:relative; animation:modalIn 0.3s ease; }
  .read-modal-header { background:var(--ink); padding:3rem; position:relative; }
  .read-modal-close { position:absolute; top:1.5rem; right:2rem; font-size:1.3rem; cursor:pointer; color:rgba(250,247,242,0.5); background:none; border:none; transition:color 0.2s; }
  .read-modal-close:hover { color:var(--cream); }
  .read-modal-tag { font-family:'JetBrains Mono',monospace; font-size:0.6rem; letter-spacing:0.2em; color:var(--gold); text-transform:uppercase; margin-bottom:1rem; }
  .read-modal-title { font-family:'Playfair Display',serif; font-size:2rem; font-weight:700; color:var(--cream); line-height:1.2; margin-bottom:0.8rem; }
  .read-modal-date { font-family:'JetBrains Mono',monospace; font-size:0.6rem; color:rgba(250,247,242,0.4); letter-spacing:0.15em; }
  .read-modal-photo { width:60px; height:60px; border-radius:50%; object-fit:cover; border:2px solid var(--gold); margin-bottom:1rem; display:none; }
  .read-modal-body { padding:3rem; }
  .read-modal-content { font-size:1.1rem; line-height:2; color:var(--ink); white-space:pre-wrap; }
 
  /* ANIMATIONS */
  @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
  @keyframes modalIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
 
  /* RESPONSIVE */
  @media(max-width:1000px){
    .main { grid-template-columns:1fr; }
    .list-panel { position:static; max-height:none; border-top:1px solid var(--border); }
    nav { padding:1rem 1.5rem; }
    .nav-links li:not(:last-child) { display:none; }
    .page-header { padding:6rem 2rem 3rem; }
    .editor-panel { padding:3rem 2rem; }
  }
</style>
</head>
<body>
 
<!-- NAV -->
<nav>
  <a href="index.html" class="nav-logo">N<span>.</span>Dubey</a>
  <ul class="nav-links">
    <li><a href="index.html">← Home</a></li>
    <li><a href="#" class="active">Articles</a></li>
    <li><a href="index.html#contact">Contact</a></li>
    <li><a href="index.html#" class="btn-sm">View Profile</a></li>
  </ul>
</nav>
 
<!-- PAGE HEADER -->
<div class="page-header">
  <p class="page-label">✦ Your Writing Space</p>
  <h1 class="page-title">Articles &<br><em>Reflections</em></h1>
  <p class="page-sub">Write. Reflect. Publish. Share your journey.</p>
</div>
 
<!-- MAIN -->
<div class="main">
 
  <!-- EDITOR -->
  <div class="editor-panel">
    <div class="panel-label" id="editorLabel">✦ Write New Article</div>
    <input type="hidden" id="editingId">
 
    <!-- PHOTO UPLOAD FOR ARTICLE -->
    <div class="photo-section">
      <label class="photo-label">Article Cover Photo (Optional)</label>
      <div class="photo-upload-zone" id="coverUploadZone">
        <input type="file" accept="image/*" id="coverInput" onchange="handleCoverUpload(event)">
        <div class="photo-upload-content" id="coverContent">
          <span>🖼️</span>
          <p>Upload a cover image for your article</p>
          <small>JPG · PNG · WEBP · Max 5MB</small>
        </div>
        <img id="coverPreview" src="" alt="Cover" style="display:none;width:100%;height:160px;object-fit:cover;border-radius:2px;">
      </div>
    </div>
 
    <!-- PROFILE PHOTO UPLOAD -->
    <div class="photo-section">
      <label class="photo-label">Your Profile Photo</label>
      <div class="photo-upload-zone" style="padding:1.5rem;" id="profileUploadZone">
        <input type="file" accept="image/*" id="profileInput" onchange="handleProfileUpload(event)">
        <div style="display:flex;align-items:center;gap:1.5rem;">
          <div class="photo-preview-container">
            <img id="profilePreview" class="photo-preview" src="" alt="Profile">
            <div class="photo-upload-content" id="profileContent" style="flex-direction:row;gap:1rem;">
              <span style="font-size:1.5rem;">👤</span>
              <div style="text-align:left;">
                <p style="font-size:0.9rem;">Upload profile photo</p>
                <small>Shown on your articles</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 
    <div class="field">
      <label class="field-label">Article Title *</label>
      <input type="text" id="titleInput" placeholder="e.g. Why Sociology is the Heart of UPSC…" maxlength="120">
      <div class="char-count"><span id="titleCount">0</span>/120</div>
    </div>
 
    <div class="field">
      <label class="field-label">Category</label>
      <select id="categoryInput">
        <option value="UPSC & Civil Services">UPSC & Civil Services</option>
        <option value="Sociology">Sociology</option>
        <option value="Technology & ML">Technology & ML</option>
        <option value="Book Review">Book Review</option>
        <option value="Personal Reflection">Personal Reflection</option>
        <option value="Governance & Policy">Governance & Policy</option>
        <option value="Menace to Monk">Menace to Monk</option>
        <option value="General Studies">General Studies</option>
      </select>
    </div>
 
    <div class="field">
      <label class="field-label">Article Content *</label>
      <textarea id="contentInput" placeholder="Start writing your thoughts here...&#10;&#10;Share your perspective on UPSC preparation, technology, society, or your personal journey from Menace to Monk.&#10;&#10;Every great civil servant was once just a student with a notebook and a dream."></textarea>
      <div class="char-count"><span id="contentCount">0</span> words</div>
    </div>
 
    <div class="editor-actions">
      <button class="btn-publish" onclick="publishArticle()">✦ Publish Article</button>
      <button class="btn-draft" onclick="saveDraft()">Save Draft</button>
      <button class="btn-clear" onclick="clearEditor()">Clear</button>
    </div>
  </div>
 
  <!-- ARTICLES LIST -->
  <div class="list-panel">
    <div class="list-header">
      <div class="list-title">Your Articles</div>
      <div class="list-count" id="articleCount">0 Articles</div>
    </div>
 
    <div class="filter-bar">
      <button class="filter-btn active" onclick="filterArticles('all', this)">All</button>
      <button class="filter-btn" onclick="filterArticles('published', this)">Published</button>
      <button class="filter-btn" onclick="filterArticles('draft', this)">Drafts</button>
    </div>
 
    <div id="articlesList">
      <div class="empty-state">
        <span>✍️</span>
        <p>No articles yet.<br>Write your first one!</p>
      </div>
    </div>
  </div>
</div>
 
<!-- READ MODAL -->
<div class="read-modal-overlay" id="readModal">
  <div class="read-modal">
    <div class="read-modal-header">
      <button class="read-modal-close" onclick="closeReadModal()">✕</button>
      <img id="readModalProfile" class="read-modal-photo" src="" alt="">
      <div class="read-modal-tag" id="readModalTag"></div>
      <div class="read-modal-title" id="readModalTitle"></div>
      <div class="read-modal-date" id="readModalDate"></div>
    </div>
    <div class="read-modal-body">
      <img id="readModalCover" src="" alt="" style="display:none;width:100%;max-height:200px;object-fit:cover;margin-bottom:2rem;">
      <div class="read-modal-content" id="readModalContent"></div>
    </div>
  </div>
</div>
 
<!-- TOAST -->
<div class="toast" id="toast"></div>
 
<script>
  let currentFilter = 'all';
 
  // Load profile photo
  const savedProfile = localStorage.getItem('nikhil_photo');
  if(savedProfile) {
    document.getElementById('profilePreview').src = savedProfile;
    document.getElementById('profilePreview').style.display = 'block';
    document.getElementById('profileContent').style.display = 'none';
  }
 
  // Cover upload
  function handleCoverUpload(e) {
    const file = e.target.files[0]; if(!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      document.getElementById('coverPreview').src = ev.target.result;
      document.getElementById('coverPreview').style.display = 'block';
      document.getElementById('coverContent').style.display = 'none';
    };
    reader.readAsDataURL(file);
  }
 
  // Profile upload
  function handleProfileUpload(e) {
    const file = e.target.files[0]; if(!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      localStorage.setItem('nikhil_photo', ev.target.result);
      document.getElementById('profilePreview').src = ev.target.result;
      document.getElementById('profilePreview').style.display = 'block';
      document.getElementById('profileContent').style.display = 'none';
      showToast('✓ Profile photo saved!', 'success');
    };
    reader.readAsDataURL(file);
  }
 
  // Char count
  document.getElementById('titleInput').addEventListener('input', function() {
    document.getElementById('titleCount').textContent = this.value.length;
  });
  document.getElementById('contentInput').addEventListener('input', function() {
    const words = this.value.trim() ? this.value.trim().split(/\s+/).length : 0;
    document.getElementById('contentCount').textContent = words;
  });
 
  // Save article
  function getArticles() { return JSON.parse(localStorage.getItem('nikhil_articles') || '[]'); }
  function saveArticles(arr) { localStorage.setItem('nikhil_articles', JSON.stringify(arr)); }
 
  function publishArticle() {
    const title = document.getElementById('titleInput').value.trim();
    const content = document.getElementById('contentInput').value.trim();
    if(!title) { showToast('✕ Please add a title', 'error'); return; }
    if(!content) { showToast('✕ Please write some content', 'error'); return; }
    saveArticleWithStatus('published');
    showToast('✦ Article published!', 'success');
  }
 
  function saveDraft() {
    const title = document.getElementById('titleInput').value.trim();
    if(!title) { showToast('✕ Add a title to save draft', 'error'); return; }
    saveArticleWithStatus('draft');
    showToast('Draft saved', 'success');
  }
 
  function saveArticleWithStatus(status) {
    const articles = getArticles();
    const editingId = document.getElementById('editingId').value;
    const cover = document.getElementById('coverPreview').src || null;
    const profile = localStorage.getItem('nikhil_photo') || null;
 
    const article = {
      id: editingId || Date.now().toString(),
      title: document.getElementById('titleInput').value.trim(),
      content: document.getElementById('contentInput').value.trim(),
      category: document.getElementById('categoryInput').value,
      status,
      date: new Date().toISOString(),
      cover: cover && cover !== window.location.href ? cover : null,
      profile
    };
 
    if(editingId) {
      const idx = articles.findIndex(a => a.id === editingId);
      if(idx >= 0) articles[idx] = article;
    } else {
      articles.unshift(article);
    }
 
    saveArticles(articles);
    clearEditor();
    renderArticles();
  }
 
  function clearEditor() {
    document.getElementById('titleInput').value = '';
    document.getElementById('contentInput').value = '';
    document.getElementById('categoryInput').value = 'UPSC & Civil Services';
    document.getElementById('coverPreview').style.display = 'none';
    document.getElementById('coverContent').style.display = 'flex';
    document.getElementById('editingId').value = '';
    document.getElementById('editorLabel').textContent = '✦ Write New Article';
    document.getElementById('titleCount').textContent = '0';
    document.getElementById('contentCount').textContent = '0';
    // Reset cover input
    document.getElementById('coverInput').value = '';
  }
 
  function editArticle(id) {
    const articles = getArticles();
    const a = articles.find(x => x.id === id);
    if(!a) return;
    document.getElementById('titleInput').value = a.title;
    document.getElementById('contentInput').value = a.content;
    document.getElementById('categoryInput').value = a.category;
    document.getElementById('editingId').value = a.id;
    document.getElementById('editorLabel').textContent = '✦ Editing Article';
    document.getElementById('titleCount').textContent = a.title.length;
    const words = a.content.trim() ? a.content.trim().split(/\s+/).length : 0;
    document.getElementById('contentCount').textContent = words;
    if(a.cover) {
      document.getElementById('coverPreview').src = a.cover;
      document.getElementById('coverPreview').style.display = 'block';
      document.getElementById('coverContent').style.display = 'none';
    }
    window.scrollTo({top:0, behavior:'smooth'});
  }
 
  function deleteArticle(id) {
    if(!confirm('Delete this article?')) return;
    const articles = getArticles().filter(a => a.id !== id);
    saveArticles(articles);
    renderArticles();
    showToast('Article deleted', 'error');
  }
 
  function renderArticles() {
    const articles = getArticles();
    const filtered = currentFilter === 'all' ? articles : articles.filter(a => a.status === currentFilter);
    const list = document.getElementById('articlesList');
    const count = document.getElementById('articleCount');
    count.textContent = `${articles.length} Article${articles.length !== 1 ? 's' : ''}`;
 
    if(filtered.length === 0) {
      list.innerHTML = `<div class="empty-state"><span>✍️</span><p>${currentFilter === 'draft' ? 'No drafts yet.' : currentFilter === 'published' ? 'No published articles.' : 'No articles yet.<br>Write your first one!'}</p></div>`;
      return;
    }
 
    list.innerHTML = filtered.map(a => `
      <div class="article-item">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:0.4rem;">
          <div class="article-item-tag">${a.category}</div>
          <span class="status-badge ${a.status}">${a.status}</span>
        </div>
        <div class="article-item-title">${a.title}</div>
        <div class="article-item-excerpt">${a.content}</div>
        <div class="article-item-footer">
          <span class="article-item-date">${new Date(a.date).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})}</span>
          <div class="article-item-actions">
            <button class="action-btn" onclick="readArticle('${a.id}')">Read</button>
            <button class="action-btn edit" onclick="editArticle('${a.id}')">Edit</button>
            <button class="action-btn delete" onclick="deleteArticle('${a.id}')">Del</button>
          </div>
        </div>
      </div>
    `).join('');
  }
 
  function filterArticles(filter, btn) {
    currentFilter = filter;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderArticles();
  }
 
  function readArticle(id) {
    const a = getArticles().find(x => x.id === id);
    if(!a) return;
    document.getElementById('readModalTag').textContent = a.category;
    document.getElementById('readModalTitle').textContent = a.title;
    document.getElementById('readModalDate').textContent = new Date(a.date).toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
    document.getElementById('readModalContent').textContent = a.content;
    const cover = document.getElementById('readModalCover');
    if(a.cover) { cover.src = a.cover; cover.style.display = 'block'; } else { cover.style.display = 'none'; }
    const profileEl = document.getElementById('readModalProfile');
    if(a.profile) { profileEl.src = a.profile; profileEl.style.display = 'block'; } else { profileEl.style.display = 'none'; }
    document.getElementById('readModal').classList.add('active');
  }
 
  function closeReadModal() { document.getElementById('readModal').classList.remove('active'); }
  document.getElementById('readModal').addEventListener('click', function(e){ if(e.target===this) closeReadModal(); });
 
  function showToast(msg, type='success') {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.className = `toast ${type} show`;
    setTimeout(() => t.classList.remove('show'), 3000);
  }
 
  // Init
  renderArticles();
</script>
</body>
</html>
