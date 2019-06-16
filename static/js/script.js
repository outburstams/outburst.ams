console.log('%c Computer says no', 'background: black; color: white; display: block; font-size: 5em;');

// een initieel lege array - met de 18 morphs
var deMorphs = [];


// een array met 'morphShape' objecten
// shape: tussen 1 en 6 (dat zijn de beschikbare shapes)
// shapeIndex: 0/13 is default (geen verdraaiing)
//             1 t/m 4 laat de morph verder tegen de klok in draaien (4 is meeste draaiing)
//             9 t/m 12 met de klok mee (9 is meeste draaiing)
// altijd eindigen met shape:1 (om de morph 'rond' te maken)
var deShapes = [
    {
        shape:2,
        shapeIndex:3
    },
    {
        shape:5,
        shapeIndex:10
    },
    {
        shape:4,
        shapeIndex:11
    },
    {
        shape:3,
        shapeIndex:3
    },
    {
        shape:7,
        shapeIndex:2
    },
    {
        shape:6,
        shapeIndex:10
    },
    {
        shape:9,
        shapeIndex:2
    },
    {
        shape:8,
        shapeIndex:10
    },
    {
        shape:1,
        shapeIndex:9
    }
];


// initieer de morphs
function startMorph(morphShapes){
    const aantalIteraties = -1; // -1 is infinite
    const morphDuration = 1;
    const morphDelay = 2; // delay tussen elke shape
    const repeatDelay = 0; // delay tussen iteraties
    const morphTYpe = "linear"; // linear or rotational
    // https://greensock.com/docs/Easing
    const morphEase = Power1.easeInOut;

    for(let i=1; i<=18; i++) {
        var tlName = "tl"+i;
        tlName = new TimelineMax({repeat:aantalIteraties, repeatDelay:repeatDelay});
        deMorphs.push(tlName);
        for(let m=0; m<morphShapes.length; m++) {
            tlName.to("#shape1 path:nth-of-type("+i+")", morphDuration, { morphSVG:{shape:"#shape"+morphShapes[m].shape+" path:nth-of-type("+i+")", type:morphTYpe, map:"complexity", shapeIndex:morphShapes[m].shapeIndex}, delay:morphDelay, ease:morphEase});
        }
    }
}

// pauseer de morphs
function pauseMorph(){
    for(let i=0; i<deMorphs.length; i++){
        if(deMorphs[i].paused()){
            deMorphs[i].resume();
        } else {
            deMorphs[i].pause();
        }
    }
}

// start pauseren
document.querySelector(".dynamic-logo").addEventListener("click", pauseMorph);

// start de morphs
startMorph( deShapes );
