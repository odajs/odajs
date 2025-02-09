ODA({is: 'oda-matrix',
    template:`
        <style>
            :host {
                width: 100vw;
                height: 100vh;
                background-color: black;
                /*background: radial-gradient(black, #3300aa);*/
                animation: fadeIn 1 1s ease-out;
                overflow: hidden;
            }
            .light {
                position: absolute;
                width: 0px;
                opacity: 1;
                background-color: white;
                top: 100vh;
                bottom: 0px;
                left: 0px;
                right: 0px;
                margin: auto;
                
            }
            @keyframes floatUp{
                0%{top: -100vh; opacity: 0;}
                25%{opacity: .5;}
                50%{top: 0vh; opacity: .8;}
                75%{opacity: 1;}
                100%{top: 100vh; opacity: 0;}
            }
            /*@keyframes floatUp{*/
            /*    0%{top: -100vh; opacity: 0; transform: rotate(0deg)}*/
            /*    25%{opacity: .5;transform: rotate(180deg)}*/
            /*    50%{top: 0vh; opacity: .8; transform: rotate(360deg)}*/
            /*    75%{opacity: 1;transform: rotate(180deg)}*/
            /*    100%{top: 100vh; opacity: 0; transform: rotate(0deg)}*/
            /*}*/
        </style>
        <div ~for="count" class='light' ~style="st($for.i)"></div>
    `,
    count: 50,
    speed: 5,
    st(i){
        return {
            animation: 'floatUp ' + (Math.random() * this.speed + 1) + 's infinite linear',
            transform: 'scale(' + (Math.random()-.5) * 4 + ')',
            left: Math.round((Math.random() - .5) * 200) + '%',
            "box-shadow": getColor() + ' 0px 0px 20px 4px'
        }
    },
    attached(){
        document.body.style.overflow = 'hidden'
        // setInterval(()=>{
        //     this.count ++;
        // }, 5000)
    }
})
const getColor = ()=>{
    return `hsl(${Math.round(Math.random() * 1000)}, 100%, 70%)`;
}