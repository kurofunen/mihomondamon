//ばきFV
console.log(performance.navigation.type);
$(function(){
    if(performance.navigation.type==1){
        console.log("リロード")
        gsap.set('.pegeokuri',0,{background:unset});
    }else{
        $('.pegeokuri').addClass("firstaccess")
        var baki = gsap.timeline();
        baki.to('.pegeokuri',0.7,{
            left:0,
            duration:1,
            ease: Sine.easeInOut
        }).to('.pegeokuri',{
            duration:3,
            left:-3000,
            ease: Sine.easeInOut
        },"+=0.5");
    }
});

//ウェイトエリア拡張
gsap .to(".kakuchow", {
    duration: 2,
    x: 1000,
    rotate: 360,
    repeat: -1,
    width: "50%"
  })
  .timeScale(2.0);
  
const weighttl = gsap.timeline({ repeat: -1 });
weighttl.add(gsap.to(".kakuchow", 2.0, {x: 1000, rotate: 360, width: "5%" }));
// 本来のタイムラインの0.25秒の地点まで到達したら
weighttl.call(
  () => {
    // 0.1倍速再生にする(スローモーションとなる)
    weighttl.timeScale(0.1);
  },
  null,
  0.25
);
// 本来のタイムラインの0.50秒の地点まで到達したら
weighttl.call(
  () => {
    // 1.0倍速再生にする(通常再生速度となる)
    weighttl.timeScale(1.0);
  },
  null,
  0.5
);


/* 文字列を分割しspanで囲む */
const jsText = document.querySelectorAll('.fv_slide_item_wap');
  jsText.forEach(target => {
    let newText = '';
    const text = target.textContent;
    const result = text.split('');
    for (let i = 0; i < result.length; i++) {
      newText += '<span>' + result[i] + '</span>';
    }
    target.innerHTML = newText;
});
/* ドット */

const jsDot = '.fv_slide_item_wap > span'; // ドット
gsap.set(jsDot, {
  opacity: 0,
  y: -50
});
var mihomons = gsap.timeline();
mihomons.to(".mihomon_fig",{
	scale: 0.5,
        //duration:1,
        ease: "back.out"
}).to(".mihomon_fig",{
    scale: 2,
    //autoAlpha: 0,
    y: -100,
    rotation: 30,
    duration: 2,
    // ease: "power4.out"
    // ease: "power4" = "power4.out"
    // ease: "power4.in"
    // ease: "power4.inOut"
    // ease: "elastic.out(1,0.3)"
    // ease: "back.out(1.8)"
    // ease: "back.out(4)" //数字が大きいほどより強くなる
    ease:"bounce",
    delay: 0.5, //最初のアニメーションのdelay
    repeat: 3,
    //repeat: -1, //infinity
    yoyo: true, //変化後と変化前が交互に起こる
    repeatDelay: 0.1, //2回目以降のrepeatのdelay 
}).to(jsDot, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.8,
    stagger: {
      amount: 0.5,//0.5秒おきに
      from: "start", // 左から
      ease: 'power4.inOut'
    }
});



//みほさまのかべ
const Mihosamanokabe = gsap.timeline({
        scrollTrigger: {
        trigger:'.mihosama',//アニメーションが始まるトリガーとなる要素
        start: "top center",
        end:"bottom center",
        markers: true // マーカー表示
                //boxShadow:"0px 0px 20px 20px gray"
        }
});
Mihosamanokabe.to('.mihosama_area', //アニメーションする要素
  { keyframes: [
        { 
                duration: 1,
                rotation: 5,
                x:"35%",
                ease: "back.out" 
        }, //このアニメーションが終わったら下のアニメーションが起こる
        { 
                duration: 1,
                rotation: 0,
                x:"25%",
                ease: "back.out" 
        }, 
        { 
                duration: 1,
                rotation: 20,
                x:"30%",
                ease: "back.out"
        }, 
  ]}
)
.to('.mihosama_pref',{
        opacity:1
})
.to('.mihosama_area',{
        onStart: showMessage,
        onStartParams: ["今日を無視した"]
})
.to('.output',{
        opacity:1,
})
.to('.mihosama_area',{
        //console.log('コールバック関数');
        onComplete: showMessage,
        onCompleteParams: ["明日はない"]
})
.to('.st4',{
        duration:1,
        "fill-opacity":"1"
},2.5)
.to(
    ".output",
    {
        delay: 1,
        onComplete: function(){
            //alert('アニメーション終わり！');
        }
    }
);

function showMessage(message) {
    if(document.URL.match(/contact/)) {
    	console.log("こんたくと");
    }else{
    	output.innerHTML += message + "</br>";
    }
}


         

//さかなくるくる
document.addEventListener('mouseover', function(e) {
//console.log(e);
    gsap.to(".sakana_li", {
        rotation: 360,
        duration: 0.5,
        onStartParams: ["qqq"],
        delay: 1,
        "font-size":"200px",
        "z-index":999,
//        onEnter: () => console.log('enter'),
//        onLeave: () => console.log('leave'),
//        onEnterBack: () => console.log('enter back'),
//        onLeaveBack: () => console.log('leave back'),
      });
});
document.addEventListener('mouseout', function(e) {
//console.log(e);
    gsap.to(".sakana_li", {
        rotation: -360,
        duration: 0.5
      });
});

//爆発文字
let controller = new ScrollMagic.Controller();//全体を制御するコントローラー
let scene = new ScrollMagic.Scene({
        triggerElement: "#trigger",//ターゲットとなる要素
        triggerHook: 1,//発火位置
        offset: 500,//スタートの開始位置
      })
      .on("enter", function (event) {//enterでシーンの状態が、上記で指定した状態の時に発火するように
        gsap.fromTo(".copy__t",
          { //初期状態
            opacity: 0,
            scale: 5,
            rotation: 10,
            x: 150,
            y: -100,
          },
          {//完了状態
            duration: 0.1,//アニメーションの長さ
            opacity: 1,//透明度
            scale: 1,//大きさ,
            rotation: 0, //回転
            x: 0,
            y: 0,
            ease: "power4.out",
            stagger: { //それぞれの開始時間をずらせる
              from: "start",//左側から
              amount: 1//1.3秒おきに
            }
          },
        )
       })
.addIndicators()
.reverse(false)//スクロールを戻した（上にスクロール）した場合に再生させるかどうか指定
.addTo(controller);//シーンをcontrollerに追加

//グラデーション文字
$(window).on("load", function () {
    gsap.to("html", 1, {"--myColor":"orange", yoyo:true, repeat:20});
});
//TweenMax.to("html", 1, {"--myColor":"orange", yoyo:true, repeat:20});



$(function () {
     let headerheight = $('.FvNav').outerHeight(); 
     $('.blockh2').css({'height':headerheight});
});

const partyBtn = document.getElementById("tsparticlesButton");
let party = false;

partyBtn.addEventListener("click", () => {
	const container = tsParticles.domItem(0);
        console.log(container);
	if (!party) {
		party = true;
		partyBtn.innerText = "Sleep!";
		container.refresh().then(() => {
                    container.playEmitter("party");
                       console.log(this.baseColor);

		});

		partyBtn.innerText = partyBtn.innerText.replace("Start", "Stop");
	} else {
		party = false;
		partyBtn.innerText = "Party!";
		container.pauseEmitter("party");
		partyBtn.innerText = partyBtn.innerText.replace("Stop", "Start");
	}
});

tsParticles.load("tsparticles", {
	 preset: "fireworks",
        "fullScreen": {
             "enable": false,
             "zIndex": -1
          },
         size:{
             value :{
                 min:3,max:10
             }
         },
         color: {
           value: ["#fdcf58", "#757676", "#f27d0c", "#800909", "#f07f13"],
       },
         links:{
             enble:true,
             distance:500
         },
         position: {
           y: 50,
           x: 50
         },
         fpsLimit: 120,
         emitters: {
           autoPlay: false,
           name: "party",
           direction: "none",
           life: {
               count: 0,
               duration: 0.1
           }
       },
       background: {
           image: "radial-gradient(#000, #000)",
       },

       
});
//https://codepen.io/kurofunen/pen/bGvWwRr/414b8fc5353e10d96c369a027b19de12

