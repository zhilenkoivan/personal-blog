const textArea = document.querySelectorAll('[data-textarea]');

textArea.forEach(item => {
    let textAreaH = item.offsetHeight;
    item.addEventListener('input', event =>{
        let $this = event.target;

        $this.style.height = textAreaH + 'px';
        $this.style.height = $this.scrollHeight + 'px';
    })
});