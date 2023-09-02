const scrollSmoothToBottom = () => {
    $(scrollingElement).animate({
       scrollTop: document.body.scrollHeight,
    }, 500);
 }
 