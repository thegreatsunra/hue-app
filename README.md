# hue-app

> Philips Hue Node.js app for controlling lights

## Getting Started

```shell
git clone https://github.com/thegreatsunra/hue-app.git
cd hue-app
npm install
```

Then, create a `.env` file in the root of the project with the following content:

```shell
USERNAME=your_philips_hue_unique_user_id_provided_by_your_hub
LIGHT_ID=the_id_of_the_light_you_wish_to_control
```

Save the `.env` file.

## Usage

Run the Typescript script directly using ts-node:

```shell
./node_modules/.bin/ts-node ./index.ts
```

Assuming the light was off, it should turn the light on.

Assuming the light was already on, it should do nothing.

## Other Commands

Lint the Typescript code:

```shell
./node_modules/.bin/eslint ./index.ts
```
