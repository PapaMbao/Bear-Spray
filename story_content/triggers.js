function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5sgVetOljwQ":
        Script1();
        break;
      case "5xgUPub59kX":
        Script2();
        break;
      case "67436uQyMZQ":
        Script3();
        break;
      case "6iUqMdqiJIE":
        Script4();
        break;
      case "5zFzX4qIzYl":
        Script5();
        break;
      case "6hCUHjDwVqQ":
        Script6();
        break;
      case "644LFZp7v6n":
        Script7();
        break;
      case "5xr0aPlvveU":
        Script8();
        break;
      case "5r1ajlDCEn2":
        Script9();
        break;
      case "6o7up9NJcYW":
        Script10();
        break;
      case "6Lgvx5ojBw9":
        Script11();
        break;
      case "6KzueE2ZWmo":
        Script12();
        break;
      case "6P7wCC2Ic9L":
        Script13();
        break;
      case "61LRV9bal3A":
        Script14();
        break;
      case "6CariThIRi9":
        Script15();
        break;
      case "6KF353r0t1r":
        Script16();
        break;
      case "6iV9ShPDnlV":
        Script17();
        break;
      case "6dK9r0Vh8bC":
        Script18();
        break;
      case "60ZOox5Z55T":
        Script19();
        break;
      case "6qsBCf9hAlS":
        Script20();
        break;
      case "6Ua9s6KfptJ":
        Script21();
        break;
      case "6qrUBtUQfbr":
        Script22();
        break;
      case "6jALyIkm0La":
        Script23();
        break;
      case "6R4m4eT24El":
        Script24();
        break;
      case "5uKre9oLENK":
        Script25();
        break;
      case "6MeEcupFMq3":
        Script26();
        break;
      case "65JCdBOQYKL":
        Script27();
        break;
      case "6Z30hByqIHu":
        Script28();
        break;
      case "6Nk5l1ogcYI":
        Script29();
        break;
      case "6S943zaQRsi":
        Script30();
        break;
      case "5lxpEIu50h0":
        Script31();
        break;
      case "6ji85n0asZC":
        Script32();
        break;
      case "5yCeX17HjXE":
        Script33();
        break;
      case "5l3TYEwwUBF":
        Script34();
        break;
      case "6gMDKuEwqfU":
        Script35();
        break;
      case "5yh42yM84lM":
        Script36();
        break;
      case "6phRjU4yUJv":
        Script37();
        break;
      case "5vpGdLrbrX8":
        Script38();
        break;
      case "6Peh2d0csfY":
        Script39();
        break;
      case "5pT44JlKwVy":
        Script40();
        break;
      case "5b8kg4AxO8q":
        Script41();
        break;
      case "6W0xbzIrK7B":
        Script42();
        break;
      case "632R5L3j1W3":
        Script43();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  player.once(() => {
const target = object('6I9VwT9YlaC');
const duration = 1250;
const easing = 'ease-out';
const id = '5uXei1h1JuY';
const pulseAmount = 0.07;
const delay = 13250;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  const target = object('6I9VwT9YlaC');
const duration = 1250;
const easing = 'ease-out';
const id = '5uXei1h1JuY';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5ooAKwpkRpz');
const duration = 1250;
const easing = 'ease-out';
const id = '5YVILXq66zx';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  player.once(() => {
const target = object('5ooAKwpkRpz');
const duration = 1250;
const easing = 'ease-out';
const id = '5YVILXq66zx';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  const target = object('5ooAKwpkRpz');
const duration = 1250;
const easing = 'ease-out';
const id = '5fCeH7vCKYz';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  player.once(() => {
const target = object('6Gs59cWlFcY');
const duration = 1250;
const easing = 'ease-out';
const id = '5YSg1emAvKv';
const shakeAmount = 5;
const delay = 7500;
addToTimeline(
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script7 = function()
{
  const target = object('6Gs59cWlFcY');
const duration = 1250;
const easing = 'ease-out';
const id = '5YSg1emAvKv';
const shakeAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  player.once(() => {
const target = object('5uKhb4j3gYf');
const duration = 1250;
const easing = 'ease-out';
const id = '5zIbRzynyJD';
const pulseAmount = 0.07;
const delay = 9000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script9 = function()
{
  const target = object('5uKhb4j3gYf');
const duration = 1250;
const easing = 'ease-out';
const id = '5zIbRzynyJD';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  player.once(() => {
const target = object('6TjZKhjqk3S');
const duration = 1500;
const easing = 'ease-out';
const id = '6o3knLRIq08';
const shakeAmount = 5;
const delay = 0;
addToTimeline(
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script11 = function()
{
  const target = object('6TjZKhjqk3S');
const duration = 1500;
const easing = 'ease-out';
const id = '6o3knLRIq08';
const shakeAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  player.once(() => {
const target = object('6YmJGu5n4YO');
const duration = 1250;
const easing = 'ease-out';
const id = '5a4dlXNkAPU';
const pulseAmount = 0.07;
const delay = 9729;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script13 = function()
{
  const target = object('6YmJGu5n4YO');
const duration = 1250;
const easing = 'ease-out';
const id = '5a4dlXNkAPU';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script14 = function()
{
  player.once(() => {
const target = object('6lWE6COxe17');
const duration = 1250;
const easing = 'ease-out';
const id = '5X9jV5G53Zt';
const shakeAmount = 5;
const delay = 0;
addToTimeline(
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script15 = function()
{
  const target = object('6lWE6COxe17');
const duration = 1250;
const easing = 'ease-out';
const id = '5X9jV5G53Zt';
const shakeAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script16 = function()
{
  const target = object('6XLRQxfL3e8');
const duration = 1250;
const easing = 'ease-out';
const id = '6EAndCGJNUn';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script17 = function()
{
  player.once(() => {
const target = object('6XLRQxfL3e8');
const duration = 1250;
const easing = 'ease-out';
const id = '6EAndCGJNUn';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script18 = function()
{
  const target = object('6XLRQxfL3e8');
const duration = 1250;
const easing = 'ease-out';
const id = '5a9KdODBcK5';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script19 = function()
{
  const target = object('6SSTk61Nyf6');
const duration = 1250;
const easing = 'ease-out';
const id = '6iMfbTIplWf';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script20 = function()
{
  player.once(() => {
const target = object('6SSTk61Nyf6');
const duration = 1250;
const easing = 'ease-out';
const id = '6iMfbTIplWf';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script21 = function()
{
  const target = object('6SSTk61Nyf6');
const duration = 1250;
const easing = 'ease-out';
const id = '6ZoWi9oVlBC';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script22 = function()
{
  player.once(() => {
const target = object('6eodYzzzqdC');
const duration = 1250;
const easing = 'ease-out';
const id = '6j8jQa4bCGX';
const shakeAmount = 5;
const delay = 0;
addToTimeline(
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script23 = function()
{
  const target = object('6eodYzzzqdC');
const duration = 1250;
const easing = 'ease-out';
const id = '6j8jQa4bCGX';
const shakeAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script24 = function()
{
  const target = object('5sMtS6rRs3O');
const duration = 1250;
const easing = 'ease-out';
const id = '5n4M90H79RL';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script25 = function()
{
  player.once(() => {
const target = object('5sMtS6rRs3O');
const duration = 1250;
const easing = 'ease-out';
const id = '5n4M90H79RL';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script26 = function()
{
  const target = object('5sMtS6rRs3O');
const duration = 1250;
const easing = 'ease-out';
const id = '5iYupeVr8aI';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
