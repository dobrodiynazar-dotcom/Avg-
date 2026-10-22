import * as migration_20261021_141446 from './20261021_141446';
import * as migration_20261022_130756 from './20261022_130756';

export const migrations = [
  {
    up: migration_20261021_141446.up,
    down: migration_20261021_141446.down,
    name: '20261021_141446',
  },
  {
    up: migration_20261022_130756.up,
    down: migration_20261022_130756.down,
    name: '20261022_130756'
  },
];
