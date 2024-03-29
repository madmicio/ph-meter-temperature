# pH-meter-Temperature
[![hacs_badge](https://img.shields.io/badge/HACS-Default-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/integration)

## Description
ph meter & temperature for aquarium & swimming pool


[![buymeacoffee_badge](https://img.shields.io/badge/Donate-buymeacoffe-ff813f?style=flat)](https://www.buymeacoffee.com/madmicio)


![all](example/card3.jpg)


  ```
### lovelace full config (ph meter & temperature):
```yaml
type: 'custom:ph-meter'
entity: sensor.ph_sensor
temperature: sensor.temperatura_acquario
```

### lovelace no temperature config (ph meter):
```yaml
type: 'custom:ph-meter'
entity: sensor.ph_sensor
```

### lovelace compact config ph meter compact):
```yaml
type: 'custom:ph-meter'
entity: sensor.ph_sensor
compact: true
```
### lovelace compact config ph meter compact & temperature):
```yaml
type: 'custom:ph-meter'
entity: sensor.ph_sensor
temperature: sensor.temperatura_acquario
compact: true
```

### Main Options
| Name | Type | Default | Supported options | Description |
| -------------- | ----------- | ------------ | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type` | string | **Required** | type: 'custom:ph-meter' | Type of the card |
| `entity` | string | **Required** |  | ph sensor entity |
| `name` | string | **Option** |  | aquarium name |
| `temperature` | string | **Option** |  | temperature sensor entity |
| `tds` | string |  | sensor.yourtdssensor | tds sensor |
| `ec` | string |  | sensor.yourecsensor | ec sensor |
| `salinity` | string | **Option** | sensor.yoursalinitysensor | salinity sensor |
| `chlorine` | string | **Option** | sensor.yourchlorinesensor | chlorine sensor |
| `temp_high` | string | **Option** | input_number.yourinput_number_high_temp | to allow this option you need to define a input number for high value temperature alert |
| `temp_low` | string | **Option** | input_number.yourinput_number_low_temp | to allow this option you need to define a input number for low value temperature alert |
| `ph_high` | string | **Option** | input_number.yourinput_number_ph_temp | to allow this option you need to define a input number for high value pH alert |
| `ph_low` | string | **Option** | input_number.yourinput_number_ph_temp | to allow this option you need to define a input number for low value pH alert |
| `temp_min` | number | "18" |  | minimum temperature of the thermometer range |
| `temp_max` | number | "30" |  | maximun temperature of the thermometer range |
| `temp_min_range_ok` | number | "22" |  | minimum temperature of the comfort zone range. (green area of the gradient) |
| `temp_max_range_ok` | number | "24" |  | maximum temperature of the comfort zone range. (green area of the gradient) |
| `badge_color` | number | "rgba(21, 168, 224, 0.2)" |  | badge color backgroud; plese use olny rgba format. adjust opacity in rgba code |
| `color_desaturation` | number | "100" |  | use this option to make the colors less saturated |
| `show_alert` |boolean| false |  | alert popup |

### custom config + acquarium name:

![all](example/card-custom.jpg)

```yaml
type: 'custom:ph-meter'
entity: sensor.ph_sensor
temperature: sensor.temperatura_acquario
name: acquarium n°1
ph_state: sensor.ph_state
temp_min: "10"
temp_max: "26"
temp_min_range_ok: "18"
temp_max_range_ok: "20"
```

### full config:

![all](example/full.jpg)

```yaml
type: 'custom:ph-meter'
entity: sensor.ph_sensor
temperature: sensor.temperatura_acquario
name: acquarium n°1
tds: sensor.tds
salinity: sensor.salinity
ec: sensor.ec
temp_high: input_number.acquario_temp_high
temp_low: input_number.acquario_temp_low
ph_high: input_number.acquario_ph_high
ph_low: input_number.acquario_ph_low
```

### full config with desature color:

![all](example/desature.jpg)

```yaml
type: 'custom:ph-meter'
entity: sensor.ph_sensor
temperature: sensor.temperatura_acquario
name: acquarium n°1
tds: sensor.tds
salinity: sensor.salinity
ec: sensor.ec
temp_high: input_number.acquario_temp_high
temp_low: input_number.acquario_temp_low
ph_high: input_number.acquario_ph_high
ph_low: input_number.acquario_ph_low
color_saturation: "50%"
```

### alert popup:

![all](example/popup.jpg)


note: this popup stop the render of the page. it is designed to warn of critical conditions in the aquarium which threaten the life of the fish. it is meant to be invasive in order to be surely read by the user.

useless to enable it to monitor the water of a swimming pool

```yaml
type: 'custom:ph-meter'
entity: sensor.ph_sensor
temperature: sensor.temperatura_acquario
name: acquarium n°1
tds: sensor.tds
salinity: sensor.salinity
ec: sensor.ec
temp_high: input_number.acquario_temp_high
temp_low: input_number.acquario_temp_low
ph_high: input_number.acquario_ph_high
ph_low: input_number.acquario_ph_low
show_alert: true
```


## to use badges for alerts you need to configure input numbers in home assistant
```yaml
acquario_temp_high:
  name: high temperature alert
  initial: 27
  min: 24
  max: 32
  step: 0.1
acquario_temp_low:
  name: low temperature alert
  initial: 23
  min: 18
  max: 26
  step: 0.1
acquario_ph_high:
  name: high ph alert
  initial: 7.9
  min: 7
  max: 8
  step: 0.01
acquario_ph_low:
  name: low ph alert
  initial: 6.8
  min: 6
  max: 7
  step: 0.01
```
