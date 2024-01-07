'use client';

import Image from 'next/image'
import Link from 'next/link'
import imgTree from '../public/tree.png';
import imgKid from '../public/kid.png';
import imgCity from '../public/city.png';
import imgCountry from '../public/country.png';
import imgPlanet from '../public/planet.png';
import imgCircle from '../public/circle.png';

import { tree } from 'next/dist/build/templates/app-page';
import { useState } from 'react';

//Afficher un +1 à chaque clic et message d'erreur pour les upgrade
//Créer une map 
//Updrage sur les clic



export default function Home() {

  let x = 0

  return (
    <main>
      <div className='principal'>
        <div className='leftPrincipal'>
          <h1>My forest :</h1> <br /> 
          Max size: <br /> 
          <span className="maxSize">0</span> trees<br /> 
          <span className="hectareSize">0</span> hectares <br /> <br /> 
          CO2 captured per year: <br />
          <span className="nbCO2">0</span> kg/year<br />
        </div>

        <div className='midPrincipal'>
          <div className='titre'>
            <h1>Trees replanted: <span className="nbCounter">0</span></h1>
            <h1>per second: <span className="nbPerSecond">0</span></h1>
          </div>
          <div className="img">
            <Image 
              src={imgTree}
              width={300}
              alt="" 
              onClick={() => incrementCounter()}
              draggable="false"
            />
          </div>
          <div className="lvlSection">
            LEVEL {x}
          </div>
          <div className="xpSection">
            XP to reach the next level: 50
          </div>
        </div>
        <div className='rightPrincipal'>
{/*         <Image 
          src={imgCircle}
          width={circleSize}
          alt="" 
          draggable="false"
        /> */}
        </div>
      </div>

      <div className='upgrade'>
        <div className='upgradeLeft'>
          <div className="upgradeKid" onClick={() => selfReforestation()}>
            <div className="leftSection">
              <Image 
                src={imgKid}
                width={65}
                alt="" 
                draggable="false"
                className='imgKid'
              />
            </div>
            <div className="midSection">
              <h4>Self reforestation</h4>
              <div className='cost'>
                <p>Cost: <span className="costKid">100</span></p>
                <Image 
                src={imgTree}
                width={35}
                height={10}alt="" 
                draggable="false"
                />
              </div>
            </div>
            <div className="rightSection">
              <p><span className="nbPerSecondKid">1</span> Tree per second</p>
              Quantity: <span className="nbKidUpgrade">0</span>
            </div>
          </div>      
          <div className="upgradeCountry" onClick={() => countryReforestation()}>
            <div className="leftSection">
              <Image 
                src={imgCountry}
                width={85}
                alt="" 
                draggable="false"
              />
            </div>
            <div className="CountryMidSection">
              <h4>Country reforestation</h4>
              <div className='cost'>
                <p>Cost: <span className="costCountry">10 000</span></p>
                <Image 
                  src={imgTree}
                  width={35}
                  height={10}alt="" 
                  draggable="false"
                />
              </div>
            </div>
            <div className="rightSection">
              <p><span className="nbPerSecondCountry">150</span> Tree per second</p>
              Quantity: <span className="nbCountryUpgrade">0</span>
            </div>
          </div>
        </div>
        <div className='upgradeRight'>
          <div className="upgradeCity" onClick={() => cityReforestation()}>
            <div className="leftSection">
              <Image 
                src={imgCity}
                width={85}
                alt="" 
                draggable="false"
              />
            </div>
            <div className="midSection">
              <h4>City reforestation</h4>
              <div className='cost'>
                <p>Cost: <span className="costCity">1 000</span></p>
                <Image 
                src={imgTree}
                width={35}
                height={10}alt="" 
                draggable="false"
                />
              </div>
            </div>
            <div className="rightSection">
              <p><span className="nbPerSecondCity">15</span> Tree per second</p>
              Quantity: <span className="nbCityUpgrade">0</span>
            </div>
          </div>
          <div className="upgradePlanet" onClick={() => planetReforestation()}>
            <div className="leftSection">
            <Image 
              src={imgPlanet}
              width={85}
              alt="" 
              draggable="false"
            />
            </div>
            <div className="planetMidSection">
              <h4>Planet reforestation</h4>
              <div className='cost'>
                <p>Cost: <span className="costPlanet">100 000</span></p>
                <Image 
                  src={imgTree}
                  width={35}
                  height={10}alt="" 
                  draggable="false"
                />
              </div>
            </div>
            <div className="rightSection">
              <p><span className="nbPerSecondPlanet">2000</span> Tree per second</p>
              Quantity: <span className="nbPlanetUpgrade">0</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


let nbCounter : number = 0;
let xpLevel:number=50;
let lvl:number=1;

let nbPerSecond=0;
let nbPerSecondKid=1;
let costKid=100;
let nbPerSecondCity=15;
let costCity=1_000;
let nbPerSecondCountry:number=150;
let costCountry:number=10_000;
let nbPerSecondPlanet=2_000;
let costPlanet=100_000;

let nbKidUpgrade=0;
let nbCityUpgrade=0;
let nbCountryUpgrade=0;
let nbPlanetUpgrade=0;
let maxSize=0;
let hectareSize=0;
let nbCO2=0;
//let circleSize=1;


function incrementCounter() {
  let nbCounterSection = document.querySelector('.nbCounter');
  nbCounter=nbCounter+1;  
  nbCounterSection.innerHTML = Math.round(nbCounter).toString();
  
  incrementLvl();
  incrementXp();
  forestMaxSize();
  //numberOnClick();
}

function incrementLvl(){
  let lvlSection = document.querySelector('.lvlSection');
  if (nbCounter >= xpLevel){
    lvlSection.innerHTML = "LEVEL " + lvl.toString();
    lvl++;  
  }
}

function incrementXp(){
  let xpSection = document.querySelector('.xpSection');
  if (nbCounter >= xpLevel){
    xpLevel=xpLevel*2;
    xpSection.innerHTML = "Tree to reach the next level: " + xpLevel.toString();
  }
}

function selfReforestation(){
  if(nbCounter>=costKid){
    nbPerSecond+=Math.round(nbPerSecondKid);
    nbPerSecondKid=nbPerSecondKid*1.2;
    nbKidUpgrade++;
    nbCounter-=costKid;
    costKid=costKid*1.2;

    let SectionbKidUpgrade = document.querySelector('.nbKidUpgrade');
    SectionbKidUpgrade.innerHTML = nbKidUpgrade.toString();

    let nbCounterSection = document.querySelector('.nbCounter');
    nbCounterSection.innerHTML = Math.round(nbCounter).toString();

    let nbPerSecondSection = document.querySelector('.nbPerSecond');
    nbPerSecondSection.innerHTML = Math.round(nbPerSecond).toString();

    let costCitySection = document.querySelector('.costKid');
    costCitySection.innerHTML = Math.round(costKid).toString();

    let nbPerSecondKidSection = document.querySelector('.nbPerSecondKid');
    nbPerSecondKidSection.innerHTML = Math.round(nbPerSecondKid).toString();
  }
  else {

  }
}

function cityReforestation(){
  if(nbCounter>=costCity){
    nbPerSecond+=Math.round(nbPerSecondCity);
    nbPerSecondCity=nbPerSecondCity*1.2;
    nbCityUpgrade++;
    nbCounter-=costCity;
    costCity=costCity*1.2;

    let SectionbCityUpgrade = document.querySelector('.nbCityUpgrade');
    SectionbCityUpgrade.innerHTML = nbCityUpgrade.toString();

    let nbCounterSection = document.querySelector('.nbCounter');
    nbCounterSection.innerHTML = Math.round(nbCounter).toString();

    let nbPerSecondSection = document.querySelector('.nbPerSecond');
    nbPerSecondSection.innerHTML = Math.round(nbPerSecond).toString();

    let costCitySection = document.querySelector('.costCity');
    costCitySection.innerHTML = Math.round(costCity).toString();

    let nbPerSecondCitySection = document.querySelector('.nbPerSecondCity');
    nbPerSecondCitySection.innerHTML = Math.round(nbPerSecondCity).toString();
  }
  else {

  }
}

function countryReforestation(){
  const canAffordCountryReforestation = nbCounter>=costCountry;
  if(canAffordCountryReforestation){
    nbPerSecond+=Math.round(nbPerSecondCountry);
    nbPerSecondCountry=nbPerSecondCountry*1.2;
    nbCountryUpgrade++;
    nbCounter-=costCountry;
    costCountry=costCountry*1.2;

    let SectionbCountryUpgrade = document.querySelector('.nbCountryUpgrade');
    SectionbCountryUpgrade.innerHTML = nbCountryUpgrade.toString();

    let nbCounterSection = document.querySelector('.nbCounter');
    nbCounterSection.innerHTML = Math.round(nbCounter).toString();

    let nbPerSecondSection = document.querySelector('.nbPerSecond');
    nbPerSecondSection.innerHTML = Math.round(nbPerSecond).toString();

    let costCountrySection = document.querySelector('.costCountry');
    costCountrySection.innerHTML = Math.round(costCountry).toString();

    let nbPerSecondCountrySection = document.querySelector('.nbPerSecondCountry');
    nbPerSecondCountrySection.innerHTML = Math.round(nbPerSecondCountry).toString();
  }
  else {

  }
}

function planetReforestation(){
  if(nbCounter>=costPlanet){
    nbPerSecond+=Math.round(nbPerSecondPlanet);
    nbPerSecondPlanet=nbPerSecondPlanet*1.2;
    nbPlanetUpgrade++;
    nbCounter-=costPlanet;
    costPlanet=costPlanet*1.2;

    let SectionbPlanetUpgrade = document.querySelector('.nbPlanetUpgrade');
    SectionbPlanetUpgrade.innerHTML = nbPlanetUpgrade.toString();

    let nbCounterSection = document.querySelector('.nbCounter');
    nbCounterSection.innerHTML = Math.round(nbCounter).toString();

    let nbPerSecondSection = document.querySelector('.nbPerSecond');
    nbPerSecondSection.innerHTML = Math.round(nbPerSecond).toString();

    let costPlanetSection = document.querySelector('.costPlanet');
    costPlanetSection.innerHTML = Math.round(costPlanet).toString();

    let nbPerSecondPlanetSection = document.querySelector('.nbPerSecondPlanet');
    nbPerSecondPlanetSection.innerHTML = Math.round(nbPerSecondPlanet).toString();
  }
  else {

  }
}

function incrementCounterSecond(){
  let nbCounterBefore = nbCounter;
  nbCounter=nbCounter+nbPerSecond;
  if(nbCounter>nbCounterBefore){
    let nbCounterSection = document.querySelector('.nbCounter');
    nbCounterSection.innerHTML = Math.round(nbCounter).toString();
    forestMaxSize();
  }
}
setInterval(incrementCounterSecond,1000)

function forestMaxSize(){
  if(nbCounter>maxSize) {
    maxSize=nbCounter;
    let maxSizeSection = document.querySelector('.maxSize');
    maxSizeSection.innerHTML = Math.round(maxSize).toString();
    hectareSize=maxSize/500;
    let hectareSizeSection = document.querySelector('.hectareSize');
    hectareSizeSection.innerHTML = Math.round(hectareSize).toString();
  }
  CO2calcul();
}

function CO2calcul(){
  nbCO2=maxSize*25;
  let CO2Section = document.querySelector('.nbCO2');
  CO2Section.innerHTML = Math.round(nbCO2).toString();
}

/* function numberOnClick(){
  let img = document.querySelector('.img');

  let clickerOffset = img.getBoundingClientRect();

  let position = (event: MouseEvent) => {
    let { clientX, clientY } = event;    
    x: event.pageX - clickerOffset.left,
    y: event.pageY - clickerOffset.top
  }; 


  let event: MouseEvent;
  let clickPosition = { 
    x: event.pageX - clickerOffset.left, 
    y: event.pageY - clickerOffset.top 
  };

  let element = document.createElement("div");
  element.textContent = "+1";
  element.classList.add("number", "unselectable") 
  element.style.left = clickPosition.x + "px";
  element.style.top = clickPosition.y + "px";

  img.appendChild(element);
}   */