export default template = (data) => {
  return `
  <div class='common-confirm'>
  <div class='confirm-box'>
    <div class='confirm-title'>${data.title}</div>
    <div class='confirm-button-box'>
      <span class='confirm-btn confirm-btn-ok'>${data.btn.ok}</span>
      <span class='confirm-btn confirm-btn-cancel'>${data.btn.cancel}</span>
    </div>
  </div>
</div>
  `
}