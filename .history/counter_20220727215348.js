const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText='0';

    const updateCounter = () => {

        // Create const
        const target = +counter.getAttribute('data-target')

         
         const c = +counter.innerText 

         const increment = target / 2000000;

         if (c < target) {
             counter.innerText = `${Math.ceil(c+increment)}`
             setTimeout(updateCounter,1)
         } else {
             counter.innerText = target
         }
         // verify target function console.log(typeof target, target)
         //console.log(increment)
    }

    updateCounter()
})