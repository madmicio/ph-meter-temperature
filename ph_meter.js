import {
  LitElement,
  html,
  css
} from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";

class PhMeterCard extends LitElement {
  static get properties() {
    return {
      hass: {},
      config: {}
    };
  }

  render() {
    const stateObj = this.hass.states[this.config.entity];
    const temp_tostring = stateObj.state;
    const temp_array = temp_tostring.split(".");
    const temp_split_int = temp_array[0];
    const temp_split_dec = temp_array[1];
    const stateObj_2 = this.config.temperature ? this.hass.states[this.config.temperature].state : "0";
    const compact = this.config.compact ? this.compact : false;
    const temp_min = this.config.temp_min ? this.config.temp_min : "18";
    const temp_max = this.config.temp_max ? this.config.temp_max : "30";
    const temp_min_range_ok = this.config.temp_min_range_ok ? this.config.temp_min_range_ok : "22";
    const temp_max_range_ok = this.config.temp_max_range_ok ? this.config.temp_max_range_ok : "24";
    const val_max_rel = temp_max - temp_min;
    const temp_rel = (temp_min - stateObj_2 ) * -1;
    const width = Math.round((temp_rel  / val_max_rel) * 100);
    const temp_min_range_ok_rel = (temp_min - temp_min_range_ok ) * -1;
    const temp_max_range_ok_rel = (temp_min - temp_max_range_ok ) * -1;
    const temp_min_range_percent = Math.round((temp_min_range_ok_rel  / val_max_rel) * 100);
    const temp_max_range_percent = Math.round((temp_max_range_ok_rel  / val_max_rel) * 100);
    const temp_min_range_percent_max = temp_min_range_percent + 10;
    const temp_max_range_percent_max = temp_max_range_percent + 10;
    return html`
      ${this.config.temperature ? html`
      
      <div class="temperature-container" @click=${() => this._moreinfo(this.config.temperature)}>

          <div style="grid-column: 1 / 2;" class="grid-item-text-box " >COLD</div>
          <div style="grid-column: 2 / 3; border-top: 1px solid var(--primary-text-color); margin-top: 10px" class="grid-item-text-box "></div>
          <div style="grid-column: 3 / 4;" class="grid-item-text-box ">TEMPERATURE</div>
          <div style="grid-column: 4 / 5; border-top: 1px solid var(--primary-text-color); margin-top: 10px" class="grid-item-text-box "></div>
          <div style="grid-column: 5 / 6;" class="grid-item-text-box" ">HOT</div>
              
      <div class="temp-box-gradient" style="background: linear-gradient(90deg, rgba(0,9,255,1) 0%, rgba(4,219,190,1) ${temp_min_range_percent}%, rgba(7,224,147,1) ${temp_min_range_percent_max}%, rgba(11,230,91,1) ${temp_max_range_percent}%, rgba(255,179,0,1) ${temp_max_range_percent_max}%, rgba(255,3,3,1) 100%);" >
      
        <li  class="temp-vale-box" style="margin-left: calc(${width}% - 20px)">${stateObj_2 != "unavailable" ? stateObj_2 : ' '}</li>
        
      </div>
      <div class="grid-min-temp" ">${temp_min}</div>
      <div class="grid-max-temp" ">${temp_max}</div>
      </div>      
        ` : html``}

    ${compact === false ? html` 
    <svg class="logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" auto size viewBox="0 0 648 512">
  <defs>
    <style>
      .cls-1 {
        font-size: 160px;
      }

      .cls-2 {
        font-size: 100px;
      }

      .cls-1, .cls-2, .cls-3 {
        fill: #15a8e0;
        font-family: Raleway;
      }

      .cls-1 {
        text-anchor: middle;
      }

      .cls-3 {
        font-size: 32px;
        font-weight: 300;
      }
    </style>
  </defs>
  <image id="h" x="25" y="23" width="379" height="467" xlink:href="data:img/png;base64,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"/>
  <text id="_1" data-name="1" class="cls-1" x="358.5" y="333"><tspan x="351.5">${stateObj.state != "unavailable" ? temp_split_int : ' '}</tspan></text>
  <text id="_.23" data-name=".23" class="cls-2" x="395.5" y="333">.${stateObj.state != "unavailable" ? temp_split_dec : ' '}</text>
  <text id="Very_Alkaline" data-name="Very Alkaline" class="cls-3" x="414.5" y="391">${this.hass.states[this.config.ph_state].state != "unavailable" ? this.hass.states[this.config.ph_state].state : 'no pH data '}</text>
</svg>

  

       

        ` : html`
      <div class="ph_compact" >
        <div>${this.config.name ? html`${this.config.name}` : html``} - pH: ${stateObj.state != "unavailable" ? stateObj.state : 'no data '} - ${this.config.ph_state ? html`
          ${this.hass.states[this.config.ph_state].state != "unavailable" ? this.hass.states[this.config.ph_state].state : ' '}
        ` : html``}
        
      </div>
      
      </div>
      
      `}
      
    <div class="phmeter-container" @click=${() => this._moreinfo(this.config.entity)}>
  
          <div style="background-color: #a50d00; grid-column: 1 / 2; border-radius: 5px 0px 0px 5px;" class="grid-item item-row">1</div>
          <div style="background-color: #f65922; grid-column: 2 / 3;" class="grid-item item-row">2</div>
          <div style="background-color: #fbb90d; grid-column: 3 / 4;" class="grid-item item-row">3</div>  
          <div style="background-color: #fff301; grid-column: 4 / 5;" class="grid-item item-row">4</div>
          <div style="background-color: #cfe901; grid-column: 5 / 6;" class="grid-item item-row">5</div>
          <div style="background-color: #87d800; grid-column: 6 / 7;" class="grid-item item-row">6</div>  
          <div style="background-color: #00ab01; grid-column: 7 / 8;" class="grid-item item-row">7</div>
          <div style="background-color: #00bb64; grid-column: 8 / 9;" class="grid-item item-row">8</div>
          <div style="background-color: #01ced1; grid-column: 9 / 10;" class="grid-item item-row">9</div>  
          <div style="background-color: #0094da; grid-column: 10 / 11;" class="grid-item item-row">10</div> 
          <div style="background-color: #0157e8; grid-column: 11 / 12;" class="grid-item item-row">11</div> 
          <div style="background-color: #2344df; grid-column: 12 / 13;" class="grid-item item-row">12</div> 
          <div style="background-color: #5834dc; grid-column: 13 / 14;" class="grid-item item-row">13</div> 
          <div style="background-color: #4224aa; grid-column: 14 / 15; border-radius: 0px 5px 5px 0px;" class="grid-item item-row">14</div>
          <div class="ph-cursor" style="width: ${(stateObj.state * 6.66) - 2}%;">|</div>
          <div class="ph-cursor-space"></div>
        </div>
    <div class="ph-state-text">
      
          <div style="grid-column: 1 / 2;" class="grid-item-text-box ">ACIDIC</div>
          <div style="grid-column: 2 / 3; border-top: 1px solid var(--primary-text-color); margin-top: 10px" class="grid-item-text-box "></div>
          <div style="grid-column: 3 / 4;" class="grid-item-text-box ">NEUTRAL</div>
          <div style="grid-column: 4 / 5; border-top: 1px solid var(--primary-text-color); margin-top: 10px" class="grid-item-text-box "></div>
          <div style="grid-column: 5 / 6;" class="grid-item-text-box" ">ALKALINE</div>
        </div>


        
    `;
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error("You need to define entities");
    }
    this.config = config;
  }


  // The height of your card. Home Assistant uses this to automatically
  // distribute all cards over the available columns.
  getCardSize() {
    return this.config.entities.length + 1;
  }

  _moreinfo(entityinfo) {
    const popupEvent = new Event("hass-more-info", {bubbles: true, cancelable: false, composed: true});
    popupEvent.detail ={"entityId": entityinfo };
    this.ownerDocument.querySelector("home-assistant").dispatchEvent(popupEvent);
}


    
  _toggle(state) {
    this.hass.callService("homeassistant", "toggle", {
      entity_id: state.entity_id
    });
  }

  static get styles() {
    return css`
:host {
    background: var(--ha-card-background, var(--card-background-color, white) );
    border-radius: var(--ha-card-border-radius, 4px);
    box-shadow: var(--ha-card-box-shadow, 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12) );
    color: var(--primary-text-color);
    display: block;
    transition: all .3s ease-out 0s;
    position: relative;
    padding-top: 10px
}

.phmeter-container {
    display: grid;
    grid-template-columns: repeat(14,1fr);
    rid-template-rows: auto auto;
    padding: 10px
}

.temperature-container {
    display: grid;
    grid-template-columns: 50px auto 100px auto 50px;
    grid-template-rows: 30px auto
}

.ph-state-text {
    display: grid;
    grid-template-columns: 70px auto 80px auto 70px;
    grid-template-rows: 30px;
    padding: 0 10px
}

.grid-max-temp,.grid-min-temp {
    //background-color: rgba(255,255,255,.8);
    //border: 1px solid rgba(255,255,255,.8);
    grid-row: 2/3;
    font-size: .9em;
    text-align: center;
    align-self: center;
    color: rgba(255,255,255,.7);
    font-weight: 700
}

.grid-min-temp {
    grid-column: 1/2
}

.grid-max-temp {
    grid-column: 5/6
}

.grid-item,.grid-item-temp {
    background-color: rgba(255,255,255,.8);
    border: 1px solid rgba(255,255,255,.8);
    font-size: 1.2em;
    text-align: center;
    color: #fff;
    font-weight: 700
}

.grid-item-temp {
    grid-column: 1/15;
    grid-row: 1/2;
    padding: 20px 0
}

.grid-item {
    padding-top: 150%;
    padding-bottom: 20%
}

.grid-item-text-box,.ph_compact {
    color: var(--primary-text-color)
}

.grid-item-text-box {
    //background-color: rgba(255,255,255,.8);
    //border: 1px solid rgba(255,255,255,.8);
    font-size: .8em;
    text-align: center;
    font-weight: 700
}

.ph_compact {
    border-right: 1px solid #15a8e0;
    border-top: 1px solid #15a8e0;
    border-radius: 0 10px 0;
    margin: 20px 10px 0;
    padding: 10px 0 5px;
    font-size: 1.5em;
    text-align: left
}

.item-temp,.ph-cursor {
    grid-row: 1/2;
    text-align: right;
    padding-top: 8px;
    color: #fff;
    text-shadow: -1px 2px 4px rgba(0,0,0,.5),1px 1px 3px rgba(0,0,0,.5)
}

.ph-cursor {
    grid-column: 1/15;
    background-color: transparent;
    font-size: 2.9em
}

.item-temp {
    font-size: 2.5em
}

.item-c-1,.item-temp,.ph-cursor-space {
    grid-column: 1/15;
    background-color: transparent
}

.ph-cursor-space {
    grid-row: 1/2;
    border-radius: 5px;
    box-shadow: 5px 5px 7px inset rgba(0,0,0,.5),-5px -5px 7px inset rgba(0,0,0,.5)
}

.item-row {
    grid-row: 1/2
}

.temp-box-gradient {
    grid-column: 1/6;
    grid-row: 2/3;
    display: flex;
    flex-flow: row wrap;
    border-radius: 5px;
    padding: 0;
    margin: 0 10px;
    list-style: none;
    box-shadow: 5px 5px 7px inset rgba(0,0,0,.5),-5px -5px 7px inset rgba(0,0,0,.5)
}

.temp-vale-box {
    background: 0 0;
    border: solid 3px #fff;
    border-radius: 10px;
    padding: 3px;
    width: 30px;
    height: 20px;
    line-height: 20px;
    color: #fff;
    font-weight: 700;
    font-size: .9em;
    text-align: center;
    margin: 7px 0;
    box-shadow: -1px 2px 4px rgba(0,0,0,.5),1px 1px 3px rgba(0,0,0,.5),-1px 2px 4px inset rgba(0,0,0,.5),1px 1px 3px inset rgba(0,0,0,.5);
    text-shadow: -1px 2px 4px rgba(0,0,0,.5),1px 1px 3px rgba(0,0,0,.5)
}

.logo {
    border-left: 1px solid #15a8e0;
    border-bottom: 1px solid #15a8e0;
    border-radius: 30px;
    margin: 20px 10px 5px
}

.svg {
    grid-column: 1/5;
    grid-row: 1/5;
    padding: 10% 40% 10% 10%
}

.ph_state {
    grid-column: 3/4;
    grid-row: 3/4;
    font-size: 150%;
    color: #15a8e0;
    text-align: left
}

.svg-ph-state {
    grid-column: 2/4;
    grid-row: 2/3;
    width: 100%;
    height: auto
}

.ph-value-text {
    transform: translate(8px,123px);
    font-size: 162px;
    fill: #15a8e0
}

.name {
    grid-column: 1/5;
    grid-row: 4/5;
    color: #15a8e0;
    font-size: 1.5em;
    align-self: flex-end;
    text-align: right;
    margin-right: 7%
}
    `;
  }
}
customElements.define("ph-meter", PhMeterCard);
