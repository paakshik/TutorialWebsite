// Toggle sidebar visibility
const toggleBtn = document.getElementById('toggle-contents');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('show');
});

// Run HTML + CSS live preview
document.getElementById('run-code').addEventListener('click', () => {
  const html = document.getElementById('html-code').value;
  const css = document.getElementById('css-code').value;
  const previewFrame = document.getElementById('preview');
  const doc = previewFrame.contentDocument || previewFrame.contentWindow.document;
  doc.open();
  doc.write(`<!DOCTYPE html><html><head><style>${css}</style></head><body>${html}</body></html>`);
  doc.close();
});
