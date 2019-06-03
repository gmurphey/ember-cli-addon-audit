# Ember CLI Addon Audit

Generates a report showing [Ember Observer](https://emberobserver.com) scores for your [Ember.js](https://emberjs.com) project's top-level addons.

## Installation

As a global executable:

```
npm install -g ember-cli-addon-audit
```

As an Ember CLI command:

```
ember install ember-cli-addon-audit
```

## Usage

**Warning:** These commands send your top-level dependencies (and dev dependencies) to Ember Observer to determine the score.

Inside your project directory, if you installed globally run:

```
ember-cli-addon-audit
```

or if you installed as an Ember CLI command run

```
ember addon-audit
```

### Available Options

| Name        | Default Value | Type     | Description                                             |
|-------------|---------------|----------|---------------------------------------------------------|
| `threshold` | `10`          | `Number` | Only report addons that score at or below a given value |