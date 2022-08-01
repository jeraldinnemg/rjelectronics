const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText='0';

    const updateCounter = () => {

        // Create const
        const target = +counter.getAttribute('data-target')

         
         const c = +counter.innerText 

         const increment = target / 200;

         if (c < target) {
             counter.innerText = `${Math.ceil(c+increment)}`
             setTimeout(updateCounter,100)
         } else {
             counter.innerText = target
         }
         // verify target function console.log(typeof target, target)
         //console.log(increment)
    }

    updateCounter()

    const showCounter= elements =>{
        elements.array.forEach(e => {
            if(e.isIntersecting){
                e.target.classList.add('animate')
                e.target.classList.remove('hide')
                setTimeout(updateCounter, 300)
            }
        });
    }

    const observer = new IntersectionObserver(showCounter, {
        threshold:0.75 // 0-1
    })
})