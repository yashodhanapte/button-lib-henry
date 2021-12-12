import React from "react";
import "./App.css";
import { BaseButton } from "./Button/BaseButton";
import "material-icons/iconfont/material-icons.css";
import { ThemeEnum, NameEnum, SizeEnum } from "./Button/ButtonEnums";
function App() {
  return (
    <div className="App">
      <div className="catergory-container solid-high-contrast">
        <div>Solid High Contrast (Light Theme)</div>
        <div className="button-container">
          <div style={{textAlign:'center'}}>
            <BaseButton
              id={"solidButton"}
              label={"Button Label"}
              name={NameEnum.SolidHighContrastLarge}
              icon="add"
              iconPosition="right"
              theme={ThemeEnum.Light}
              size={SizeEnum.Large}
            />
            <p>size: large</p>
            <p>theme: light</p>
            <p>icon: add</p>
          </div>
          <div style={{textAlign:'center'}}>
           
          <BaseButton
            label="Button Label 2"
            icon="add"
            theme={ThemeEnum.Light}
            name={NameEnum.SolidHighContrastSmall}
            size={SizeEnum.Small}
            />
             <p>size: small</p>
            <p>theme: light</p>
            <p>icon: add</p>
          </div>
          <div style={{textAlign:'center'}}>
           
          <BaseButton
            label="Button Label 3"
            icon="remove"
            theme={ThemeEnum.Light}
            disabled={true}
            name={NameEnum.SolidHighContrastXsmall}
            size={SizeEnum.Xsmall}
            />
             <p>size: x Small</p>
            <p>theme: light</p>
            <p>icon: add</p>
            <p>disabled: true</p>
          </div>
          <div style={{textAlign:'center'}}>
            <BaseButton label="Button Label 4" theme={ThemeEnum.Light} />
            <p>size: default</p>
            <p>theme: light</p>
          </div>
          <div style={{textAlign:'center'}}>
          <BaseButton
            name={NameEnum.SolidHighContrastLarge}
            handleClick={() => {}}
            icon="add"
            theme={ThemeEnum.Light}
            size={SizeEnum.Large}
            />
            <p>size: Large</p>
            <p>theme: light</p>
            <p>icon: add</p>
            </div>

            <div style={{textAlign:'center'}}>
          <BaseButton
            name={NameEnum.SolidHighContrastLarge}
            handleClick={() => {}}
            icon="add"
            theme={ThemeEnum.Light}
            size={SizeEnum.Xsmall}
            />
            <p>size: X small</p>
            <p>theme: light</p>
            <p>icon: add</p>
            </div>
        </div>
      </div>
      <div className="catergory-container solid-low-contrast">
        <div>Solid Low Contrast (Light Theme)</div>
        <div className="button-container">
          <BaseButton
             id={"solidButton"}
             label={"Button Label"}
             name={NameEnum.SolidLowContrast}
             icon="add"
             iconPosition="right"
            theme={ThemeEnum.Light}
            size={SizeEnum.Large}
          />
          <BaseButton
            label="Button Label 2"
            icon="add"
            theme={ThemeEnum.Light}
            name={NameEnum.SolidLowContrastLarge}
          />

          <BaseButton
            label="Button Label 3"
            icon="remove"
            theme={ThemeEnum.Light}
            disabled={true}
            name={NameEnum.SolidLowContrastSmall}
          />

          <BaseButton label="Button Label 4" theme={ThemeEnum.Light} />

          <BaseButton
            name={NameEnum.SolidLowContrastXsmall}
            handleClick={() => {}}
            icon="add"
            theme={ThemeEnum.Light}
          />
          <BaseButton
            name={NameEnum.SolidLowContrastXsmall}
            handleClick={() => {}}
            icon="add"
            theme={ThemeEnum.Light}
            size={SizeEnum.Xsmall}
          />
        </div>
      </div>
      <div className="catergory-container outline">
        <div>Outline (Light Theme)</div>
        <div className="button-container">
          <BaseButton
             id={"solidButton"}
             label={"Button Label"}
             name={NameEnum.Outline}
             icon="add"
             iconPosition="right"
            theme={ThemeEnum.Light}
            size={SizeEnum.Large}
          />
          <BaseButton
            label="Button Label 2"
            icon="add"
            theme={ThemeEnum.Light}
            name={NameEnum.OutlineLarge}
          />

          <BaseButton
            label="Button Label 3"
            icon="remove"
            theme={ThemeEnum.Light}
            disabled={true}
            name={NameEnum.OutlineSmall}
          />

          <BaseButton label="Button Label 4" theme={ThemeEnum.Light} name={NameEnum.Outline}/>

          <BaseButton
            name={NameEnum.OutlineSmall}
            handleClick={() => {}}
            icon="add"
            theme={ThemeEnum.Light}
          />
          <BaseButton
            name={NameEnum.OutlineXsmall}
            handleClick={() => {}}
            icon="add"
            theme={ThemeEnum.Light}
            size={SizeEnum.Xsmall}
          />
        </div>
      </div>
      <div className="catergory-container solid-high-contrast dark-theme">
        <div style={{color:'#fff'}}>Solid High Contrast (Dark Theme)</div>
        <div className="button-container">
          <div style={{textAlign:'center'}}>
            <BaseButton
              id={"solidButton"}
              label={"Button Label"}
              name={NameEnum.SolidHighContrastLarge}
              icon="add"
              iconPosition="right"
              theme={ThemeEnum.Dark}
              size={SizeEnum.Large}
            />
            {/* <p>size: large</p>
            <p>theme: dark</p>
            <p>icon: add</p> */}
          </div>
          <div style={{textAlign:'center'}}>
           
          <BaseButton
            label="Button Label 2"
            icon="add"
            theme={ThemeEnum.Dark}
            name={NameEnum.SolidHighContrastSmall}
            size={SizeEnum.Small}
            />
             {/* <p>size: small</p>
            <p>theme: dark</p>
            <p>icon: add</p> */}
          </div>
          <div style={{textAlign:'center'}}>
           
          <BaseButton
            label="Button Label 3"
            icon="remove"
            theme={ThemeEnum.Dark}
            disabled={true}
            name={NameEnum.SolidHighContrastXsmall}
            size={SizeEnum.Xsmall}
            />
             {/* <p>size: x Small</p>
            <p>theme: dark</p>
            <p>icon: add</p>
            <p>disabled: true</p> */}
          </div>
          <div style={{textAlign:'center'}}>
            <BaseButton label="Button Label 4" theme={ThemeEnum.Dark} />
            {/* <p>size: default</p>
            <p>theme: dark</p> */}
          </div>
          <div style={{textAlign:'center'}}>
          <BaseButton
            name={NameEnum.SolidHighContrastLarge}
            handleClick={() => {}}
            icon="add"
            theme={ThemeEnum.Dark}
            size={SizeEnum.Large}
            />
            {/* <p>size: Large</p>
            <p>theme: Dark</p>
            <p>icon: add</p> */}
            </div>

            <div style={{textAlign:'center'}}>
          <BaseButton
            name={NameEnum.SolidHighContrastLarge}
            handleClick={() => {}}
            icon="add"
            theme={ThemeEnum.Dark}
            size={SizeEnum.Xsmall}
            />
            {/* <p>size: X small</p>
            <p>theme: dark</p>
            <p>icon: add</p> */}
            </div>
        </div>
      </div>
      <div className="catergory-container dark-theme outline">
        <div style={{color:'#fff'}}>Outline (Dark Theme)</div>
        <div className="button-container">
          <BaseButton
             id={"solidButton"}
             label={"Button Label"}
             name={NameEnum.Outline}
             icon="add"
             iconPosition="right"
            theme={ThemeEnum.Dark}
            size={SizeEnum.Large}
          />
          <BaseButton
            label="Button Label 2"
            icon="add"
            theme={ThemeEnum.Dark}
            name={NameEnum.OutlineLarge}
          />

          <BaseButton
            label="Button Label 3"
            icon="remove"
            theme={ThemeEnum.Dark}
            disabled={true}
            name={NameEnum.OutlineSmall}
          />

          <BaseButton label="Button Label 4" theme={ThemeEnum.Dark} name={NameEnum.Outline}/>

          <BaseButton
            name={NameEnum.OutlineSmall}
            handleClick={() => {}}
            icon="add"
            theme={ThemeEnum.Dark}
          />
          <BaseButton
            name={NameEnum.OutlineXsmall}
            handleClick={() => {}}
            icon="add"
            theme={ThemeEnum.Dark}
            size={SizeEnum.Xsmall}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
